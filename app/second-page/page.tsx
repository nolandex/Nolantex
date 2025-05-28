'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Star, Play, CheckCircle, TrendingUp } from 'lucide-react'

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
      videoId: 'dQw4w9WgXcQ',
      category: 'business',
      rating: 4.8,
      reviews: 124,
      features: ['Website Profesional', 'Chatbot Otomatis', 'Social Media Content'],
      bestseller: true
    },
    {
      name: 'Paket Bisnis Pro',
      price: 'Rp 150.000',
      videoId: 'dQw4w9WgXcQ',
      category: 'business',
      rating: 4.9,
      reviews: 89,
      features: ['Semua fitur Starter', 'Social Media Booster', 'Copywriting Tricks'],
      featured: true
    },
    
    // Kategori Website
    {
      name: 'Website Toko Online',
      price: 'Rp 25.000',
      videoId: 'dQw4w9WgXcQ',
      category: 'website',
      rating: 4.7,
      reviews: 156,
      features: ['E-commerce lengkap', 'Domain gratis', 'Hosting unlimited'],
      bestseller: true
    },
    {
      name: 'Website Landing Page',
      price: 'Rp 15.000',
      videoId: 'dQw4w9WgXcQ',
      category: 'website',
      rating: 4.6,
      reviews: 78,
      features: ['Landing page profesional', 'SEO optimized', 'Mobile responsive']
    },
    {
      name: 'Website Portfolio',
      price: 'Rp 20.000',
      videoId: 'dQw4w9WgXcQ',
      category: 'website',
      rating: 4.8,
      reviews: 92,
      features: ['Portfolio kreatif', 'Galeri foto', 'Contact form']
    },
  ]

  // Filter produk berdasarkan kategori aktif
  const filteredProducts = products.filter(product => product.category === activeCategory)

  if (!mounted) return null

  return (
    <div className={`min-h-screen pt-20 pb-12 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Category Tabs - Redesigned */}
        <div className="flex justify-center mb-10">
          <div className={`inline-flex rounded-lg p-1 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
            <button
              onClick={() => setActiveCategory('business')}
              className={`px-6 py-2.5 rounded-md font-medium text-sm transition-all duration-300 ${
                activeCategory === 'business'
                  ? theme === 'dark'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-blue-500 text-white shadow-sm'
                  : theme === 'dark'
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Paket Bisnis Online
            </button>
            <button
              onClick={() => setActiveCategory('website')}
              className={`px-6 py-2.5 rounded-md font-medium text-sm transition-all duration-300 ${
                activeCategory === 'website'
                  ? theme === 'dark'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-blue-500 text-white shadow-sm'
                  : theme === 'dark'
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Website
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] ${
                theme === 'dark' 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white'
              } shadow-lg hover:shadow-xl`}
            >
              {/* Product Header */}
              <div className="relative">
                {/* Video Thumbnail */}
                <div 
                  className="h-48 relative overflow-hidden bg-gray-900 cursor-pointer group"
                  style={{
                    backgroundImage: `url(https://img.youtube.com/vi/${product.videoId}/maxresdefault.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${product.videoId}`, '_blank')}
                >
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300">
                    <div className="w-14 h-14 rounded-full bg-blue-500 bg-opacity-90 flex items-center justify-center group-hover:bg-opacity-100 group-hover:scale-110 transition-all duration-300">
                      <Play className="h-6 w-6 text-white" fill="white" />
                    </div>
                  </div>
                  
                  {/* Badges */}
                  {product.bestseller && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" /> BESTSELLER
                    </div>
                  )}
                  {product.featured && (
                    <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center">
                      <Star className="h-3 w-3 mr-1" fill="white" /> FEATURED
                    </div>
                  )}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                {/* Header with Name and Price */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`text-lg font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {product.name}
                  </h3>
                  
                  <div className={`px-3 py-1.5 rounded-full text-sm font-bold ${
                    theme === 'dark' ? 'bg-blue-600' : 'bg-blue-500'
                  } text-white`}>
                    {product.price}
                  </div>
                </div>

                {/* Ratings */}
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  <span className={`ml-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Features */}
                <div className="mb-5">
                  <ul className="space-y-1">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className={`h-4 w-4 mr-2 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'}`} />
                        <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    className={`flex-1 py-2.5 px-4 rounded-lg font-medium text-sm transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    } shadow-sm hover:shadow`}
                  >
                    Bayar Sekarang
                  </button>
                  <button
                    className={`px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
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
