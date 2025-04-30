"use client";

import { useState } from "react";

export default function WordForm() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi: minimal 20 kata
    if (message.trim().split(/\s+/).length < 20) {
      alert("Please write at least 20 words.");
      return;
    }

    // Kirim ke Formspree atau tujuan lain
    await fetch("https://formspree.io/f/your-id", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    setSubmitted(true);
    setMessage("");
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-4 text-center">Tell Us Your Story</h2>
      {submitted ? (
        <p className="text-green-600 text-center">Thanks! We received your message.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            className="w-full p-3 border rounded resize-none"
            rows={6}
            placeholder="Write at least 20 words..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
