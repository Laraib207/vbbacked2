import { dbConnect } from "../../../../lib/mongoose";
import Order from "../../../../models/Order";
import Product from "../../../../models/Product";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    await dbConnect();
    const { items, name, email, phone, address, paymentMethod } = await req.json();
    if (!items || !Array.isArray(items) || items.length === 0) {
      return Response.json({ error: "No items provided" }, { status: 400 });
    }

    let total = 0;
    const populated = [];

    for (const it of items) {
      if (!it.product) return Response.json({ error: "product id/slug missing" }, { status: 400 });

      // try as ObjectId first, then as slug
      let p = null;
      try {
        p = await Product.findById(it.product);
      } catch (err) {
        // invalid ObjectId, ignore and try slug
      }
      if (!p) {
        p = await Product.findOne({ slug: it.product });
      }
      if (!p) return Response.json({ error: `product missing: ${it.product}` }, { status: 400 });

      const qty = parseInt(it.qty || 1, 10);
      total += p.price * qty;
      populated.push({ product: p._id, title: p.title, price: p.price, qty });
    }

    const order = await Order.create({ items: populated, total, name, email, phone, address, paymentMethod: paymentMethod || "COD" });

    // optional email
    if (process.env.SMTP_HOST && email) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || "587"),
          auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        });
        await transporter.sendMail({
          from: process.env.FROM_EMAIL,
          to: email,
          subject: `Order Confirmation — ${order._id}`,
          text: `Thanks ${name}, your order ${order._id} total Rs.${order.total} received.`,
          html: `<p>Thanks ${name}, your order <b>${order._id}</b> total <b>Rs.${order.total}</b> received.</p>`,
        });
      } catch (e) {
        console.warn("Email failed", e);
      }
    }

    return Response.json({ ok: true, orderId: order._id, total });
  } catch (err) {
    console.error("order.create error", err);
    return Response.json({ error: "server_error", details: err.message }, { status: 500 });
  }
}
