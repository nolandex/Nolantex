import { NextResponse } from 'next/server';
import Midtrans from 'midtrans-client';

const midtransClient = new Midtrans.Snap({
  isProduction: process.env.MIDTRANS_IS_PRODUCTION === 'true',
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

export async function POST(request: Request) {
  try {
    const { orderId, grossAmount, customerDetails, itemDetails } = await request.json();

    const transactionDetails = {
      order_id: orderId,
      gross_amount: grossAmount,
    };

    const payload = {
      transaction_details: transactionDetails,
      customer_details: customerDetails,
      item_details: itemDetails,
    };

    const snapToken = await midtransClient.createTransactionToken(payload);

    return NextResponse.json({ snapToken });
  } catch (error) {
    console.error('Error generating SNAP token:', error);
    return NextResponse.json({ error: 'Gagal menghasilkan SNAP token' }, { status: 500 });
  }
}
