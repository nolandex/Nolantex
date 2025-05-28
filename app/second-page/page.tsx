import React from 'react';

export default function SecondPage() {
  return (
    <html lang="en">
     <head>
      <meta charSet="utf-8"/>
      <meta content="width=device-width, initial-scale=1" name="viewport"/>
      <title>Paket Bisnis Online</title>
      {/* Tailwind CSS, Google Fonts, and Font Awesome links are included directly for simplicity
        if not already configured globally in your Next.js project's layout.tsx or global.css.
        For a more optimized Next.js setup, consider moving these to your root layout or global stylesheet.
      */}
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"/>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
      <style>
       {`
        body {
          font-family: 'Inter', sans-serif;
        }
       `}
      </style>
     </head>
     <body className="bg-[#0a0f1f] min-h-screen flex flex-col items-center justify-center p-4">

      {/* Main content area, centered and responsive */}
      <main className="w-full max-w-md mx-auto space-y-8">
       
       {/* Header for "Paket Bisnis Online" section */}
       <section className="text-white text-center py-4">
        <h2 className="text-xl font-semibold">Paket Bisnis Online</h2>
       </section>

       {/* Product Card for "Epic Account" under "Paket Bisnis Online" */}
       <section>
        <div className="bg-white rounded-xl overflow-hidden mx-auto">
         <div className="relative w-[90%] mx-auto mt-4 mb-2 rounded-xl overflow-hidden" style={{ height: '180px' }}>
          <img 
            alt="Epic Account website preview showing a dark themed gaming account selling platform with a character holding guns" 
            className="w-full h-full object-cover rounded-xl" 
            height={400} 
            src="/uploads/product-images/epic-account-placeholder.jpg" // Local image path
            width={600}
          />
         </div>
         <div className="flex items-center px-5 py-2 border-b border-gray-200">
          <h3 className="font-semibold text-gray-700 text-base">
           Epic Account
          </h3>
         </div>
         <div className="flex items-center justify-between px-5 py-3 font-semibold text-gray-700 text-base">
          <span className="block">
           Rp 1.500.000
          </span>
          <button className="border border-gray-300 rounded-md px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 transition-colors" type="button">
           Beli Sekarang
          </button>
         </div>
        </div>
       </section>
       
       {/* Header for "Website" section */}
       <section className="text-white text-center py-4">
        <h2 className="text-xl font-semibold">Website</h2>
       </section>

       {/* Product Card for "Epic Account" under "Website" (can be duplicated or varied) */}
       <section>
        <div className="bg-white rounded-xl overflow-hidden mx-auto">
         <div className="relative w-[90%] mx-auto mt-4 mb-2 rounded-xl overflow-hidden" style={{ height: '180px' }}>
          <img 
            alt="Website service preview" 
            className="w-full h-full object-cover rounded-xl" 
            height={400} 
            src="/uploads/product-images/website-service-placeholder.jpg" // Local image path
            width={600}
          />
         </div>
         <div className="flex items-center px-5 py-2 border-b border-gray-200">
          <h3 className="font-semibold text-gray-700 text-base">
           Desain Website & Toko Online
          </h3>
         </div>
         <div className="flex items-center justify-between px-5 py-3 font-semibold text-gray-700 text-base">
          <span className="block">
           Rp 2.500.000
          </span>
          <button className="border border-gray-300 rounded-md px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 transition-colors" type="button">
           Beli Sekarang
          </button>
         </div>
        </div>
       </section>
       
       {/* You can add more product cards here following the same structure */}
       {/* For example, if you want two "Epic Account" cards under "Paket Bisnis Online" */}
       {/* Just duplicate the <section> block for the product card */}

      </main>
     </body>
    </html>
  );
}
