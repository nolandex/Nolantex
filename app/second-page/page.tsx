'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function SecondPage() {
  const { theme } = useTheme();

  // Product data
  const products = [
    {
      name: 'Paket Bisnis Online',
      price: 'Rp 1.500.000',
      image: '/images/business-package.jpg',
    },
    {
      name: 'Website',
      price: 'Rp 2.000.000',
      image: '/images/website.jpg',
    },
  ];

  return (
    <div
      className={`min-h-screen p-6 flex flex-col items-center justify-center ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {products.map((product, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
            } flex flex-col items-center justify-between h-[350px] w-[300px]`}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={250}
              height={150}
              className="rounded-md object-cover"
            />
            <div className="flex flex-col items-center w-full">
              <div className="flex justify-between w-full items-end">
                <span className="text-lg">{product.name}</span>
                <span className="text-lg font-medium">{product.price}</span>
              </div>
              <button
                className={`px-4 py-2 rounded-md font-medium w-full mt-4 ${
                  theme === 'dark'
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                Beli Sekarang
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
