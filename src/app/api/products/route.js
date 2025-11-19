import { dbConnect } from "../../../../lib/mongoose";
import Product from "../../../../models/Product";

export async function GET() {
  await dbConnect();
  const products = await Product.find({}).lean();
  return Response.json({ ok: true, products });
}
