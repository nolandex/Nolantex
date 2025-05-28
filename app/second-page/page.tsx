'use client'

import React, { useEffect, useState } from 'react'
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
      videoId: '-RLoM6px0iY', // YouTube video ID
      category: 'business',
    },
    {
      name: 'Paket Bisnis Pro',
      price: 'Rp 150.000',
      videoId: 'dQw4w9WgXcQ', // YouTube video ID
      category: 'business',
    },
    
    // Kategori Website
    {
      name: 'Website Toko Online',
      price: 'Rp 25.000',
      videoId: 'dQw4w9WgXcQ', // YouTube video ID
      category: 'website',
    },
    {
      name: 'Website Landing Page',
      price: 'Rp 15.000',
      videoId: 'dQw4w9WgXcQ', // YouTube video ID
      category: 'website',
    },
    {
      name: 'Website Portfolio',
      price: 'Rp 20.000',
      videoId: 'dQw4w9WgXcQ', // YouTube video ID
      category: 'website',
    },
  ]

  // Filter produk berdasarkan kategori aktif
  const filteredProducts = products.filter(product => product.category === activeCategory)

  if (!mounted) return null

  return (
    <div className={`min-h-screen pt-20 pb-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveCategory('business')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
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
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
                theme === 'dark' 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              }`}
            >
              {/* Product Info */}
              <div className="p-6">
                {/* Header dengan Nama Produk dan Harga */}
                <div className="flex justify-between items-start mb-4">
                  {/* Product Name - Kiri Atas */}
                  <h3 className={`text-xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {product.name}
                  </h3>
                  
                  {/* Price - Kanan Atas */}
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    product.price === 'Rp 0' 
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-500 text-white'
                  }`}>
                    {product.price}
                  </span>
                </div>

                {/* YouTube Video - Ditengah */}
                <div className="h-36 relative overflow-hidden rounded-lg mb-4">
                  <iframe
                    src={`https://www.youtube.com/embed/${product.videoId}`}
                    title={product.name}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    className={`flex-1 py-2 px-3 rounded-md font-medium text-sm transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    Bayar
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
