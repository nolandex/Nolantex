import React from 'react';

// You might not need these imports if you're using Tailwind CSS directly,
// but they are good practice for external CSS or fonts if not globally linked.
// import 'https://cdn.tailwindcss.com'; // Tailwind CSS is typically set up in tailwind.config.js or globals.css
// import 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';

// Define the component for your second page
export default function SecondPage() {
  return (
    // The main content of your page, structured as a React component's JSX
    <html lang="en">
     <head>
      <meta charset="utf-8"/>
      <meta content="width=device-width, initial-scale=1" name="viewport"/>
      <title>Paket Bisnis Online</title>
      {/*
        If Tailwind CSS is already configured globally in your Next.js project (which is common),
        you don't need these <script> and <link> tags here.
        They are typically included in _app.tsx or a global CSS file.
        If your project is *not* using Tailwind CSS globally, you might need to reconsider
        how you're importing it or if these links are actually working as expected in a component.
        For a proper Next.js setup with Tailwind, you'd usually import the generated CSS.
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
     <body className="bg-[#0a0f1f] min-h-screen flex flex-col justify-center">
      {/* Main content */}
      <main className="px-3 py-10 max-w-[98vw] mx-auto w-full space-y-8">
       <section className="text-white text-center py-4">
        <h2 className="text-xl font-semibold">Paket Bisnis Online</h2>
       </section>
       <section>
        <div className="bg-white rounded-xl overflow-hidden shadow-lg mx-auto" style={{ boxShadow: '0 0 0 0', maxWidth: '98vw' }}>
         <div className="relative w-[90%] mx-auto mt-4 mb-2 rounded-xl overflow-hidden" style={{ height: '140px' }}>
          <img alt="Epic Account website preview showing a dark themed gaming account selling platform with a character holding guns" className="w-full h-full object-cover rounded-xl" height={400} src="/uploads/8fd00e27-f52f-4999-4c28-ee158835b55d.jpg" width={600}/>
         </div>
         <div className="flex items-center px-5 py-2 border-b border-gray-200">
          <h3 className="font-semibold text-gray-700 text-sm">
           Epic Account
          </h3>
         </div>
         <div className="flex items-center justify-between px-5 py-3 font-semibold text-gray-700 text-sm">
          <span className="block">
           Rp 1.500.000
          </span>
          <button className="border border-gray-300 rounded-md px-3 py-1 text-sm font-normal text-gray-700 hover:bg-gray-100" type="button">
           Beli Sekarang
          </button>
         </div>
        </div>
       </section>
       <section className="text-white text-center py-4">
        <h2 className="text-xl font-semibold">Website</h2>
       </section>
       <section>
        <div className="bg-white rounded-xl overflow-hidden shadow-lg mx-auto" style={{ boxShadow: '0 0 0 0', maxWidth: '98vw' }}>
         <div className="relative w-[90%] mx-auto mt-4 mb-2 rounded-xl overflow-hidden" style={{ height: '140px' }}>
          <img alt="Epic Account website preview showing a dark themed gaming account selling platform with a character holding guns" className="w-full h-full object-cover rounded-xl" height={400} src="/uploads/8fd00e27-f52f-4999-4c28-ee158835b55d.jpg" width={600}/>
         </div>
         <div className="flex items-center px-5 py-2 border-b border-gray-200">
          <h3 className="font-semibold text-gray-700 text-sm">
           Epic Account
          </h3>
         </div>
         <div className="flex items-center justify-between px-5 py-3 font-semibold text-gray-700 text-sm">
          <span className="block">
           Rp 1.500.000
          </span>
          <button className="border border-gray-300 rounded-md px-3 py-1 text-sm font-normal text-gray-700 hover:bg-gray-100" type="button">
           Beli Sekarang
          </button>
         </div>
        </div>
       </section>
       <section>
        <div className="bg-white rounded-xl overflow-hidden shadow-lg mx-auto" style={{ boxShadow: '0 0 0 0', maxWidth: '98vw' }}>
         <div className="relative w-[90%] mx-auto mt-4 mb-2 rounded-xl overflow-hidden" style={{ height: '140px' }}>
          <img alt="Epic Account website preview showing a dark themed gaming account selling platform with a character holding guns" className="w-full h-full object-cover rounded-xl" height={400} src="/uploads/8fd00e27-f52f-4999-4c28-ee158835b55d.jpg" width={600}/>
         </div>
         <div className="flex items-center px-5 py-2 border-b border-gray-200">
          <h3 className="font-semibold text-gray-700 text-sm">
           Epic Account
          </h3>
         </div>
         <div className="flex items-center justify-between px-5 py-3 font-semibold text-gray-700 text-sm">
          <span className="block">
           Rp 1.500.000
          </span>
          <button className="border border-gray-300 rounded-md px-3 py-1 text-sm font-normal text-gray-700 hover:bg-gray-100" type="button">
           Beli Sekarang
          </button>
         </div>
        </div>
       </section>
       <section>
        <div className="bg-white rounded-xl overflow-hidden shadow-lg mx-auto" style={{ boxShadow: '0 0 0 0', maxWidth: '98vw' }}>
         <div className="relative w-[90%] mx-auto mt-4 mb-2 rounded-xl overflow-hidden" style={{ height: '140px' }}>
          <img alt="Epic Account website preview showing a dark themed gaming account selling platform with a character holding guns" className="w-full h-full object-cover rounded-xl" height={400} src="/uploads/8fd00e27-f52f-4999-4c28-ee158835b55d.jpg" width={600}/>
         </div>
         <div className="flex items-center px-5 py-2 border-b border-gray-200">
          <h3 className="font-semibold text-gray-700 text-sm">
           Epic Account
          </h3>
         </div>
         <div className="flex items-center justify-between px-5 py-3 font-semibold text-gray-700 text-sm">
          <span className="block">
           Rp 1.500.000
          </span>
          <button className="border border-gray-300 rounded-md px-3 py-1 text-sm font-normal text-gray-700 hover:bg-gray-100" type="button">
           Beli Sekarang
          </button>
         </div>
        </div>
       </section>
       <section>
        <div className="bg-white rounded-xl overflow-hidden shadow-lg mx-auto" style={{ boxShadow: '0 0 0 0', maxWidth: '98vw' }}>
         <div className="relative w-[90%] mx-auto mt-4 mb-2 rounded-xl overflow-hidden" style={{ height: '140px' }}>
          <img alt="Epic Account website preview showing a dark themed gaming account selling platform with a character holding guns" className="w-full h-full object-cover rounded-xl" height={400} src="/uploads/8fd00e27-f52f-4999-4c28-ee158835b55d.jpg" width={600}/>
         </div>
         <div className="flex items-center px-5 py-2 border-b border-gray-200">
          <h3 className="font-semibold text-gray-700 text-sm">
           Epic Account
          </h3>
         </div>
         <div class="flex items-center justify-between px-5 py-3 font-semibold text-gray-700 text-sm">
          <span class="block">
           Rp 1.500.000
          </span>
          <button class="border border-gray-300 rounded-md px-3 py-1 text-sm font-normal text-gray-700 hover:bg-gray-100" type="button">
           Beli Sekarang
          </button>
         </div>
        </div>
       </section>
      </main>
     </body>
    </html>
  );
}
