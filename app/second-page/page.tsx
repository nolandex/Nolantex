'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function SecondPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState('business')

  useEffect(() => {
    setMounted(true)
  }, [])

  const products = [
    // Kategori Paket Bisnis Online
    {
      name: 'Paket Bisnis Starter',
      price: 'Rp 50.000',
      image: '/1.jpg',
      category: 'business',
    },
    {
      name: 'Paket Bisnis Pro',
      price: 'Rp 150.000',
      image: '/2.jpg',
      category: 'business',
    },
    
    // Kategori Website
    {
      name: 'Website Toko Online',
      price: 'Rp 25.000',
      image: '/3.jpg',
      category: 'website',
    },
    {
      name: 'Website Landing Page',
      price: 'Rp 15.000',
      image: '/4.jpg',
      category: 'website',
    },
    {
      name: 'Website Portfolio',
      price: 'Rp 20.000',
      image: '/5.jpg',
      category: 'website',
    },
  ]

  // Filter produk berdasarkan kategori aktif
  const filteredProducts = products.filter(product => product.category === activeCategory)

  if (!mounted) return null

  return (
    <div className={`min-h-screen pt-20 pb-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Category Buttons */}
        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => setActiveCategory('business')}
            className={`px-5 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
              activeCategory === 'business'
                ? theme === 'dark'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-blue-500 text-white shadow-lg'
                : theme === 'dark'
                  ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
            }`}
          >
            Paket Bisnis Online
          </button>
          <button
            onClick={() => setActiveCategory('website')}
            className={`px-5 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
              activeCategory === 'website'
                ? theme === 'dark'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-blue-500 text-white shadow-lg'
                : theme === 'dark'
                  ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
            }`}
          >
            Website
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg ${
                theme === 'dark' 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              }`}
            >
              {/* Product Image */}
              <div className="h-32 relative overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  priority
                />
                {/* Price Badge */}
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    product.price === 'Rp 0' 
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-500 text-white'
                  }`}>
                    {product.price}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className={`text-base font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {product.name}
                </h3>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    className={`flex-1 py-2 px-3 rounded-md font-medium text-sm transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    Beli
                  </button>
                  <button
                    className={`px-3 py-2 rounded-md font-medium text-sm transition-all duration-300 border ${
                      theme === 'dark'
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Detail
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
