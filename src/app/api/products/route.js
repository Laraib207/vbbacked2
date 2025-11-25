/**
 * WARNING:
 * - During static export (npm run export), this API will cause build errors
 *   because it tries to connect to MongoDB Atlas which may not be accessible at build time.
 * - Ensure your MongoDB Atlas cluster IP whitelist includes your current IP or 0.0.0.0/0 during dev.
 * - To avoid errors during static export, consider:
 *    a) Not using `npm run export` for this app and instead use `npm run build` and `npm run start`.
 *    b) Implementing conditional logic here to return dummy data during static export phase.
 * 
 * You must configure MongoDB URI properly via environment variables.
 */

// import { dbConnect } from "../../../../lib/mongoose";
// import Product from "../../../../models/Product";

import connect from '../../../../lib/mongoose'
import Product from '../../../../models/Product'

export async function GET() {
  // Optional: Detect static export phase to return dummy data
  if (process.env.NEXT_STATIC_EXPORT) {
    return new Response(
      JSON.stringify({
        ok: true,
        products: []
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }

  await dbConnect();
  const products = await Product.find({}).lean();
  return new Response(JSON.stringify({ ok: true, products }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
