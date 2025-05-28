'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'

export default function SecondPage() {
  // Theme management with proper cross-page synchronization
  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const initialTheme = localStorage.getItem('theme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    document.documentElement.className = initialTheme

    // Listen for theme changes from other pages
    const handleStorageChange = (e) => {
      if (e.key === 'theme') {
        document.documentElement.className = e.newValue || 'light'
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const toggleTheme = () => {
    const newTheme = document.documentElement.className === 'dark' ? 'light' : 'dark'
    document.documentElement.className = newTheme
    localStorage.setItem('theme', newTheme)
    
    // Trigger storage event to sync across tabs/pages
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'theme',
      newValue: newTheme
    }))
  }

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
    <div className="min-h-screen pt-20 pb-8 bg-white dark:bg-gray-900">
      {/* Theme Toggle Button */}
      <div className="fixed top-4 right-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-yellow-300"
          aria-label="Toggle theme"
        >
          {typeof document !== 'undefined' && document.documentElement.className === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="w-full sm:w-[260px] rounded-lg overflow-hidden shadow-md transition-colors bg-gray-50 dark:bg-gray-800"
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
              <div className="border-t border-gray-200 dark:border-gray-700" />

              {/* Product Info */}
              <div className="p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {product.name}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {product.price}
                    </p>
                  </div>
                  <button
                    className="px-3 py-1.5 rounded-md text-xs font-medium bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-600 dark:hover:bg-blue-700"
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
