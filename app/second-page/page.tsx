'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function SecondPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const fullWidthProduct = {
    name: 'Paket Bisnis Online',
    price: 'Rp 50.000',
    image: '/images/business-package.jpg',
  }

  const scrollableProducts = [
    {
      name: 'Website Landing Page',
      price: 'Rp 25.000',
      image: '/images/website.jpg',
    },
    {
      name: 'Website E-Commerce',
      price: 'Rp 25.000',
      image: '/images/ecommerce.jpg',
    },
  ]

  return (
    <div
      className={`min-h-screen pt-20 pb-8 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="fixed top-4 right-4">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={`p-2 rounded-full ${
            theme === 'dark'
              ? 'bg-gray-700 text-yellow-300'
              : 'bg-gray-200 text-gray-700'
          }`}
          aria-label="Toggle dark mode"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="container mx-auto px-4 space-y-6">
        {/* Full Width Product */}
        <div
          className={`w-full rounded-lg overflow-hidden shadow-md transition-all ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
          }`}
        >
          <div className="h-[140px] relative">
            <Image
              src={fullWidthProduct.image}
              alt={fullWidthProduct.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div
            className={`border-t ${
              theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
            }`}
          ></div>
          <div className="p-3">
            <div className="flex justify-between items-center">
              <div>
                <h3
                  className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                  }`}
                >
                  {fullWidthProduct.name}
                </h3>
                <p
                  className={`text-sm font-semibold ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  {fullWidthProduct.price}
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

        {/* Scrollable Product Row */}
        <div className="overflow-x-auto">
          <div className="flex gap-4 w-max">
            {scrollableProducts.map((product, index) => (
              <div
                key={index}
                className={`w-[270px] min-w-[270px] rounded-lg overflow-hidden shadow-md transition-all ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                }`}
              >
                <div className="h-[140px] relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div
                  className={`border-t ${
                    theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                  }`}
                ></div>
                <div className="p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3
                        className={`text-sm font-medium ${
                          theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                        }`}
                      >
                        {product.name}
                      </h3>
                      <p
                        className={`text-sm font-semibold ${
                          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                        }`}
                      >
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
                      Beli
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
