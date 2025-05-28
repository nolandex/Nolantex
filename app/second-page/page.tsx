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
    <div className={`min-h-screen py-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`w-full sm:w-[300px] rounded-lg overflow-hidden shadow-md ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              {/* Product Image */}
              <div className="h-[160px] relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <h3 className={`text-md font-medium mb-3 ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  {product.name}
                </h3>
                
                <div className="flex justify-between items-center">
                  <span className={`text-md font-semibold ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {product.price}
                  </span>
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      theme === 'dark'
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    Beli Sekarang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
