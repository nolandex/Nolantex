'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function SecondPage() {
  const [theme, setTheme] = useState('light'); // Default to light theme

  // Set theme from localStorage on initial render to prevent flash
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

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
    <div className={`min-h-screen pt-20 pb-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`w-full sm:w-[280px] rounded-lg overflow-hidden shadow-md transition-all ${
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
                  priority
                />
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <div className="space-y-1">
                  <h3 className={`text-lg font-medium ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    {product.name}
                  </h3>
                  <p className={`text-lg font-semibold ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {product.price}
                  </p>
                </div>
                
                <div className="mt-4 flex justify-end">
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
