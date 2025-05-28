'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function SecondPage() {
  const { theme, setTheme } = useTheme()
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
      image: '/placeholder.svg?height=140&width=300',
      category: 'business',
      description: 'Website + Chatbot + Social Media Content'
    },
    {
      name: 'Paket Bisnis Pro',
      price: 'Rp 150.000',
      image: '/placeholder.svg?height=140&width=300',
      category: 'business',
      description: 'Semua fitur Starter + Social Media Booster + Copywriting'
    },
    {
      name: 'Paket Bisnis Premium',
      price: 'Rp 300.000',
      image: '/placeholder.svg?height=140&width=300',
      category: 'business',
      description: 'Semua fitur Pro + Strategi Promosi + Support 24/7'
    },
    {
      name: 'Paket Reseller',
      price: 'Rp 0',
      image: '/placeholder.svg?height=140&width=300',
      category: 'business',
      description: 'Program reseller tanpa modal + Training lengkap'
    },
    
    // Kategori Website
    {
      name: 'Website Toko Online',
      price: 'Rp 25.000',
      image: '/placeholder.svg?height=140&width=300',
      category: 'website',
      description: 'E-commerce lengkap + Domain gratis + Hosting unlimited'
    },
    {
      name: 'Website Landing Page',
      price: 'Rp 15.000',
      image: '/placeholder.svg?height=140&width=300',
      category: 'website',
      description: 'Landing page profesional + SEO optimized'
    },
    {
      name: 'Website Portfolio',
      price: 'Rp 20.000',
      image: '/placeholder.svg?height=140&width=300',
      category: 'website',
      description: 'Portfolio kreatif + Galeri foto + Contact form'
    },
    {
      name: 'Website Profil Bisnis',
      price: 'Rp 30.000',
      image: '/placeholder.svg?height=140&width=300',
      category: 'website',
      description: 'Website company profile + Blog + Maps integration'
    },
  ]

  // Filter produk berdasarkan kategori aktif
  const filteredProducts = products.filter(product => product.category === activeCategory)

  if (!mounted) return null

  return (
    <div className={`min-h-screen pt-20 pb-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Toggle Theme Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={`p-3 rounded-full shadow-lg transition-all duration-300 ${
            theme === 'dark' 
              ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' 
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          aria-label="Toggle dark mode"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Produk & Layanan
          </h1>
          <p className={`text-lg ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>

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
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              }`}
            >
              {/* Product Image */}
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  priority
                />
                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    product.price === 'Rp 0' 
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-500 text-white'
                  }`}>
                    {product.price}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {product.name}
                </h3>
                
                <p className={`text-sm mb-4 leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {product.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    Beli Sekarang
                  </button>
                  <button
                    className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 border ${
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

        {/* Contact Section */}
        <div className={`mt-12 text-center p-8 rounded-xl ${
          theme === 'dark' 
            ? 'bg-gray-800 border border-gray-700' 
            : 'bg-white border border-gray-200'
        }`}>
          <h3 className={`text-2xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Butuh Konsultasi?
          </h3>
          <p className={`mb-6 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Hubungi kami untuk mendapatkan paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6285156779923?text=Hi%2C%20I'm%20interested%20in%20your%20business%20setup%20services"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              WhatsApp
            </a>
            <a
              href="mailto:nolandexco@gmail.com"
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 border ${
                theme === 'dark'
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
