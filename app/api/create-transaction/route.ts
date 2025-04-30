import { NextRequest, NextResponse } from 'next/server';
import midtransClient from 'midtrans-client';

export async function POST(req: NextRequest) {
  const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY || '', // gunakan ENV
  });

  const body = await req.json();

  const parameter = {
    transaction_details: {
      order_id: 'ORDER-' + Math.floor(Math.random() * 100000),
      gross_amount: body.amount || 10000,
    },
    credit_card: {
      secure: true,
    },
    customer_details: {
      first_name: body.name || 'Customer',
      email: body.email || 'customer@example.com',
    },
  };

  try {
    const transaction = await snap.createTransaction(parameter);
    return NextResponse.json({ token: transaction.token });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
