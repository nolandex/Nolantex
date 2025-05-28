'use client'

import React from 'react'
import Image from 'next/image'
import { useTheme } from '../../lib/ThemeContext'

export default function SecondPage() {
  const { theme, toggleTheme } = useTheme()

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
  ]

  return (
    <div className={`min-h-screen pt-20 pb-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Theme Toggle Button */}
      <div className="fixed top-4 right-4">
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`w-full sm:w-[260px] rounded-lg overflow-hidden shadow-md transition-colors ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              {/* Product Image */}
              <div className="h-[140px] relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Divider */}
              <div className={`border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`} />

              {/* Product Info */}
              <div className="p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                      {product.name}
                    </h3>
                    <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                      {product.price}
                    </p>
                  </div>
                  <button
                    className={`px-3 py-1.5 rounded-md text-xs font-medium ${
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
  )
}
