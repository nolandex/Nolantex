'use client'

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function SecondPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  // Explicitly type the ref as HTMLDivElement
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

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
    {
      name: 'Chatbot AI',
      price: 'Rp 800.000',
      image: '/images/chatbot.jpg',
    },
  ]

  // Clone the second product (Website) 9 times
  const clonedProducts = Array(9).fill(products[1])

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

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
        {/* Product 1 (Unchanged) */}
        <div className="flex flex-wrap justify-center gap-6">
          <div
            className={`w-full rounded-lg overflow-hidden shadow-md transition-all ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            }`}
          >
            <div className="h-[140px] relative">
              <Image
                src={products[0].image}
                alt={products[0].name}
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
                    {products[0].name}
                  </h3>
                  <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                    {products[0].price}
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
        </div>

        {/* Cloned Products (Website) with Swipe Buttons */}
        <div className="relative mt-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={scrollLeft}
              className={`p-2 rounded-full ${
                theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'
              }`}
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={scrollRight}
              className={`p-2 rounded-full ${
                theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'
              }`}
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth gap-6 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {clonedProducts.map((product, index) => (
              <div
                key={index}
                className={`w-full sm:w-[calc(50%-12px)] flex-shrink-0 rounded-lg overflow-hidden shadow-md transition-all ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                } transform scale-50 origin-top-left`}
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
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>

        {/* Product 3 (Unchanged) */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div
            className={`w-full rounded-lg overflow-hidden shadow-md transition-all ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            }`}
          >
            <div className="h-[140px] relative">
              <Image
                src={products[2].image}
                alt={products[2].name}
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
                    {products[2].name}
                  </h3>
                  <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                    {products[2].price}
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
        </div>
      </div>
    </div>
  )
}
