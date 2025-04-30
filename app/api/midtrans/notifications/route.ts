import { NextResponse } from 'next/server';
import Midtrans from 'midtrans-client';

const midtransClient = new Midtrans.Snap({
  isProduction: process.env.MIDTRANS_IS_PRODUCTION === 'true',
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Verifikasi tanda tangan notifikasi
    const { order_id, status_code, gross_amount, signature_key } = body;
    const serverKey = process.env.MIDTRANS_SERVER_KEY;
    const input = `${order_id}${status_code}${gross_amount}${serverKey}`;
    const crypto = require('crypto');
    const calculatedSignature = crypto
      .createHash('sha512')
      .update(input)
      .digest('hex');

    if (calculatedSignature !== signature_key) {
      return NextResponse.json({ error: 'Tanda tangan tidak valid' }, { status: 403 });
    }

    // Proses notifikasi
    console.log('Notifikasi pembayaran:', body);
    // TODO: Perbarui database dengan status pembayaran
    // Contoh: if (body.transaction_status === 'capture') { updateOrderStatus(order_id, 'paid'); }

    return NextResponse.json({ status: 'sukses' });
  } catch (error) {
    console.error('Error menangani notifikasi:', error);
    return NextResponse.json({ error: 'Gagal memproses notifikasi' }, { status: 500 });
  }
}
