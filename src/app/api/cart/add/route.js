import { dbConnect } from "../../../../../lib/mongoose";
import Product from "../../../../../models/Product";
import Cart from "../../../../../models/Cart";

export async function POST(req) {
  await dbConnect();
  const { productId, qty = 1, sessionId } = await req.json();
  // get product
  const product = await Product.findById(productId).lean();
  if (!product) return Response.json({ error: "Product not found" }, { status: 404 });
  // If using server cart
  if (sessionId) {
    let cart = await Cart.findOne({ sessionId });
    if (!cart) cart = await Cart.create({ sessionId, items: [] });
    const idx = cart.items.findIndex((i) => i.productId.equals(product._id));
    if (idx > -1) cart.items[idx].qty += qty;
    else cart.items.push({ productId: product._id, qty, price: product.price });
    cart.updatedAt = new Date();
    await cart.save();
    return Response.json({ ok: true, cart });
  }
  // if not using server cart just return product details for client to save
  return Response.json({ ok: true, product });
}
