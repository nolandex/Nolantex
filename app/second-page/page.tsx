'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { X, CheckCircle } from 'lucide-react'

interface Product {
  name: string
  price: string
  videoId: string
  category: string
  features: string[]
  description: string
}

export default function SecondPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState('business')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const products: Product[] = [
    // Kategori Paket Bisnis Online
    {
      name: 'Paket Bisnis Starter',
      price: 'Rp 50.000',
      videoId: 'dQw4w9WgXcQ',
      category: 'business',
      features: ['Website Profesional', 'Chatbot Otomatis', 'Social Media Content'],
      description: 'Paket lengkap untuk memulai bisnis online Anda dengan website profesional dan tools marketing otomatis.'
    },
    // Kategori Website
    {
      name: 'Website Toko Online',
      price: 'Rp 25.000',
      videoId: 'dQw4w9WgXcQ',
      category: 'website',
      features: ['Domain gratis', 'Hosting unlimited', 'Responsif'],
      description: 'Website toko online lengkap dengan sistem pembayaran dan manajemen produk yang mudah digunakan.'
    },
    {
      name: 'Website Landing Page',
      price: 'Rp 25.000',
      videoId: 'dQw4w9WgXcQ',
      category: 'website',
      features: ['Domain gratis', 'Hosting unlimited', 'Responsif'],
      description: 'Landing page yang dioptimalkan untuk konversi tinggi dengan desain yang menarik dan responsif.'
    },
  ]

  // Filter produk berdasarkan kategori aktif
  const filteredProducts = products.filter(product => product.category === activeCategory)

  const openModal = (product: Product) => {
    setSelectedProduct(product)
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }

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
                  <h3 className={`text-xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {product.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    product.price === 'Rp 0' 
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-500 text-white'
                  }`}>
                    {product.price}
                  </span>
                </div>

                {/* YouTube Video */}
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
                    onClick={() => openModal(product)}
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

        {/* Modal Detail */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div
              className={`max-w-md w-full rounded-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } p-6 max-h-[80vh] overflow-y-auto`}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-4">
                <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {selectedProduct.name}
                </h2>
                <button
                  onClick={closeModal}
                  className={`p-1 rounded-md ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                >
                  <X className={`h-5 w-5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
                </button>
              </div>

              {/* Price */}
              <div
                className={`inline-block px-3 py-1 rounded-md text-lg font-bold mb-4 ${
                  theme === 'dark' ? 'bg-blue-600' : 'bg-blue-500'
                } text-white`}
              >
                {selectedProduct.price}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className={`text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                  Deskripsi
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {selectedProduct.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className={`text-sm font-semibold mb-3 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                  Fitur yang Didapat
                </h3>
                <ul className="space-y-2">
                  {selectedProduct.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className={`h-4 w-4 mr-2 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'}`} />
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Actions */}
              <div className="flex gap-3">
                <button
                  className={`flex-1 py-2.5 px-4 rounded-md font-medium text-sm transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  Bayar Sekarang
                </button>
                <button
                  onClick={closeModal}
                  className={`px-4 py-2.5 rounded-md font-medium text-sm transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
              }
