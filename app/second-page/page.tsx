'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function SecondPage() {
  const { theme } = useTheme();

  const products = [
    { name: 'Paket Bisnis Online', price: 'Rp 1.500.000', image: '/images/business-package.jpg' },
    { name: 'Website', price: 'Rp 2.000.000', image: '/images/website.jpg' },
  ];

  return (
    <div
      className={`min-h-screen p-4 flex flex-col items-center ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <h1 className="text-2xl font-bold mb-6">Produk Kami</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
        {products.map((product, index) => (
          <div
            key={index}
            className={`p-4 rounded-md shadow-md ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
            } flex flex-col items-center`}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={150}
              className="rounded-md mb-3 object-cover"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-md mb-3">{product.price}</p>
            <button
              className={`px-3 py-1 rounded-md text-sm ${
                theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              Beli
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
