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
    <div className={`min-h-screen p-4 flex items-center justify-center ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="flex flex-wrap justify-center gap-5">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col w-[240px]">
            {/* Product Image */}
            <div className="h-[140px] relative rounded-t-md overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div className={`p-3 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} rounded-b-md`}>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {product.name}
                </span>
                <span className="text-sm font-semibold">
                  {product.price}
                </span>
              </div>
              
              <div className="flex justify-end mt-2">
                <button
                  className={`px-3 py-1 text-xs rounded-md ${
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
