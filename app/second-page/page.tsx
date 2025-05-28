'use client'; // Enable client-side rendering for interactivity

import React from 'react';
import Image from 'next/image'; // Next.js Image component for optimized images
import { useTheme } from 'next-themes'; // For dark/light mode support

export default function SecondPage() {
  const { theme } = useTheme(); // Access current theme (light or dark)

  // Product data
  const products = [
    {
      name: 'Paket Bisnis Online',
      price: 'Rp 1.500.000',
      image: '/images/business-package.jpg', // Replace with actual image path
      description: 'Solusi lengkap untuk memulai bisnis online Anda.',
    },
    {
      name: 'Website',
      price: 'Rp 2.000.000',
      image: '/images/website.jpg', // Replace with actual image path
      description: 'Website profesional untuk meningkatkan kehadiran digital Anda.',
    },
  ];

  return (
    <div
      className={`min-h-screen p-6 flex flex-col items-center justify-center ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {products.map((product, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
            } flex flex-col items-center`}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="rounded-md mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-lg mb-2">{product.price}</p>
            <p className="text-center mb-4">{product.description}</p>
            <button
              className={`px-4 py-2 rounded-md font-medium ${
                theme === 'dark'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              Beli Sekarang
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
