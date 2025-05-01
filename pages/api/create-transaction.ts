import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { amount, name, email } = req.body;

  // Validasi input
  if (!amount || !name || !email) {
    return res.status(400).json({ message: "Amount, name, and email are required" });
  }

  try {
    // Data transaksi untuk Midtrans
    const transactionDetails = {
      transaction_details: {
        order_id: `ORDER-${Date.now()}`, // ID unik untuk setiap transaksi
        gross_amount: amount, // Jumlah dalam satuan terkecil (misalnya, Rupiah)
      },
      customer_details: {
        first_name: name.split(" ")[0],
        last_name: name.split(" ")[1] || "",
        email: email,
      },
    };

    // Ambil server key dari environment variable
    const serverKey = process.env.MIDTRANS_SERVER_KEY;
    if (!serverKey) {
      throw new Error("MIDTRANS_SERVER_KEY not set in environment variables");
    }

    // Autentikasi untuk API Midtrans
    const auth = Buffer.from(serverKey + ":").toString("base64");

    // Kirim permintaan ke Midtrans untuk mendapatkan token
    const response = await fetch("https://app.sandbox.midtrans.com/snap/v1/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify(transactionDetails),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Midtrans API error: ${data.error_messages?.join(", ") || response.statusText}`);
    }

    // Kembalikan token ke frontend
    res.status(200).json({ token: data.token });
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({ message: "Failed to create transaction", error: error instanceof Error ? error.message : "Unknown error" });
  }
}
