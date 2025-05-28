'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function SecondPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all') // State untuk kategori aktif

  useEffect(() => {
    setMounted(true)
  }, [])

  const products = [
    {
      name: 'Paket Bisnis Online',
      price: 'Rp 1.500.000',
      image: '/images/business-package.jpg',
      category: 'business',
    },
    {
      name: 'Website',
      price: 'Rp 2.000.000',
      image: '/images/website.jpg',
      category: 'website',
    },
    {
      name: 'SEO Optimization',
      price: 'Rp 1.200.000',
      image: '/images/seo-optimization.jpg',
      category: 'website',
    },
    {
      name: 'Digital Marketing',
      price: 'Rp 1.800.000',
      image: '/images/digital-marketing.jpg',
      category: 'website',
    },
    {
      name: 'Graphic Design',
      price: 'Rp 900.000',
      image: '/images/graphic-design.jpg',
      category: 'website',
    },
    {
      name: 'Mobile App Development',
      price: 'Rp 3.500.000',
      image: '/images/mobile-app.jpg',
      category: 'website',
    },
    {
      name: 'Email Marketing',
      price: 'Rp 700.000',
      image: '/images/email-marketing.jpg',
      category: 'website',
    },
    {
      name: 'Chatbot AI',
      price: 'Rp 800.000',
      image: '/images/chatbot.jpg',
      category: 'website',
    },
  ]

  // Filter produk berdasarkan kategori aktif
  const filteredProducts = activeCategory === 'business'
    ? products.filter(product => product.category === 'business')
    : activeCategory === 'website'
      ? products.filter(product => product.category === 'website')
      : products

  if (!mounted) return null

  return (
    <div className={`min-h-screen pt-20 pb-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="fixed top-4 right-4">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
          aria-label="Toggle dark mode"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="container mx-auto px-4">
        {/* Tombol Kategori */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setActiveCategory('business')}
            className={`px-4 py-2 rounded-md font-medium ${
              activeCategory === 'business'
                ? theme === 'dark'
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-500 text-white'
                : theme === 'dark'
                  ? 'bg-gray-700 text-gray-200'
                  : 'bg-gray-200 text-gray-700'
            }`}
          >
            Paket Bisnis Online
          </button>
          <button
            onClick={() => setActiveCategory('website')}
            className={`px-4 py-2 rounded-md font-medium ${
              activeCategory === 'website'
                ? theme === 'dark'
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-500 text-white'
                : theme === 'dark'
                  ? 'bg-gray-700 text-gray-200'
                  : 'bg-gray-200 text-gray-700'
            }`}
          >
            Website
          </button>
        </div>

        {/* Daftar Produk */}
        <div className="flex flex-wrap justify-center gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className={`
                w-full sm:w-[calc(50%-12px)]
                rounded-lg overflow-hidden shadow-md transition-all
                ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}
              `}
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
              <div className={`border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}></div>
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
