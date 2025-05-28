'use client'

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function SecondPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const mainProduct = {
    name: 'Paket Bisnis Online',
    price: 'Rp 1.500.000',
    image: '/images/business-package.jpg',
  }

  const secondProduct = {
    name: 'Website',
    price: 'Rp 2.000.000',
    image: '/images/website.jpg',
  }

  const clonedProducts = Array.from({ length: 9 }, () => ({
    name: 'Website',
    price: 'Rp 2.000.000',
    image: '/images/website.jpg',
  }))

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const scrollAmount = scrollRef.current.offsetWidth * 0.6
    scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
  }

  if (!mounted) return null

  return (
    <div className={`min-h-screen pt-20 pb-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Toggle Dark Mode */}
      <div className="fixed top-4 right-4 z-10">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
          aria-label="Toggle dark mode"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="container mx-auto px-4">
        {/* Product 1 */}
        <div
          className={`w-full rounded-lg overflow-hidden shadow-md mb-6 transition-all ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
          }`}
        >
          <div className="h-[180px] relative">
            <Image src={mainProduct.image} alt={mainProduct.name} fill className="object-cover" priority />
          </div>
          <div className={`border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}></div>
          <div className="p-4 flex justify-between items-center">
            <div>
              <h3 className={`text-base font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                {mainProduct.name}
              </h3>
              <p className={`text-base font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                {mainProduct.price}
              </p>
            </div>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              Beli Sekarang
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div
          className={`w-full sm:w-[calc(50%-12px)] mx-auto rounded-lg overflow-hidden shadow-md mb-6 transition-all ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
          }`}
        >
          <div className="h-[140px] relative">
            <Image src={secondProduct.image} alt={secondProduct.name} fill className="object-cover" priority />
          </div>
          <div className={`border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}></div>
          <div className="p-3 flex justify-between items-center">
            <div>
              <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                {secondProduct.name}
              </h3>
              <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                {secondProduct.price}
              </p>
            </div>
            <button
              className={`px-3 py-1.5 rounded-md text-xs font-medium ${
                theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              Beli Sekarang
            </button>
          </div>
        </div>

        {/* Slider Section */}
        <div className="relative">
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 dark:bg-gray-800/70 p-2 rounded-full shadow hover:scale-110"
          >
            ◀
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 dark:bg-gray-800/70 p-2 rounded-full shadow hover:scale-110"
          >
            ▶
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 scrollbar-hide py-4 px-2"
          >
            {clonedProducts.map((product, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[calc(50%-12px)] rounded-lg overflow-hidden shadow-md transition-all ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                }`}
              >
                <div className="h-[120px] relative">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                <div className={`border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}></div>
                <div className="p-3 flex justify-between items-center">
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
                      theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    Beli
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
