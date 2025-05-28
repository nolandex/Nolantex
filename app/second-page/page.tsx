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
            className={`p-4 rounded-lg shadow-lg ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
            } flex flex-col w-[280px] h-[280px]`}
          >
            <div className="flex-1 flex items-center justify-center mb-2">
              <Image
                src={product.image}
                alt={product.name}
                width={220}
                height={120}
                className="rounded-md object-cover max-h-[120px]"
              />
            </div>
            
            <div className={`border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'} pt-3`}></div>
            
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm font-medium">{product.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">{product.price}</span>
                <button
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    theme === 'dark'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  Beli
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
