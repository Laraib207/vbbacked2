import { NextResponse } from 'next/server'
import connect from '../../../../lib/mongoose'   // <-- make sure this file exists
import Product from '../../../../models/Product'

export async function GET() {
  await connect()
  const products = await Product.find().lean()
  return NextResponse.json(products)
}
