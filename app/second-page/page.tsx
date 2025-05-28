"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { CheckCircle, X } from "lucide-react"

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
  const [activeCategory, setActiveCategory] = useState("business")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const products: Product[] = [
    {
      name: "Paket Bisnis Starter",
      price: "Rp 50.000",
      videoId: "dQw4w9WgXcQ",
      category: "business",
      features: ["Website Profesional", "Chatbot Otomatis", "Social Media Content"],
      description: "Paket lengkap untuk memulai bisnis online Anda dengan website profesional dan tools marketing otomatis.",
    },
    {
      name: "Paket Bisnis Pro",
      price: "Rp 150.000",
      videoId: "dQw4w9WgXcQ",
      category: "business",
      features: ["Semua fitur Starter", "Social Media Booster", "Copywriting Tricks"],
      description: "Paket premium dengan fitur lengkap untuk mengembangkan bisnis online Anda ke level profesional.",
    },
    {
      name: "Website Toko Online",
      price: "Rp 25.000",
      videoId: "dQw4w9WgXcQ",
      category: "website",
      features: ["E-commerce lengkap", "Domain gratis", "Hosting unlimited"],
      description: "Website toko online lengkap dengan sistem pembayaran dan manajemen produk yang mudah digunakan.",
    },
    {
      name: "Website Landing Page",
      price: "Rp 15.000",
      videoId: "dQw4w9WgXcQ",
      category: "website",
      features: ["Landing page profesional", "SEO optimized", "Mobile responsive"],
      description: "Landing page yang dioptimalkan untuk konversi tinggi dengan desain yang menarik dan responsif.",
    },
    {
      name: "Website Portfolio",
      price: "Rp 20.000",
      videoId: "dQw4w9WgXcQ",
      category: "website",
      features: ["Portfolio kreatif", "Galeri foto", "Contact form"],
      description: "Website portfolio profesional untuk menampilkan karya dan layanan Anda dengan tampilan yang elegan.",
    },
  ]

  const filteredProducts = products.filter((product) => product.category === activeCategory)

  const openModal = (product: Product) => {
    setSelectedProduct(product)
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }

  if (!mounted) return null

  return (
    <div className={`min-h-screen pt-20 pb-12 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className={`inline-flex rounded-lg p-1 ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-md`}>
            <button
              onClick={() => setActiveCategory("business")}
              className={`px-6 py-2.5 rounded-md font-medium text-sm transition-colors duration-300 ${
                activeCategory === "business"
                  ? theme === "dark"
                    ? "bg-blue-600 text-white"
                    : "bg-blue-500 text-white"
                  : theme === "dark"
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Paket Bisnis Online
            </button>
            <button
              onClick={() => setActiveCategory("website")}
              className={`px-6 py-2.5 rounded-md font-medium text-sm transition-colors duration-300 ${
                activeCategory === "website"
                  ? theme === "dark"
                    ? "bg-blue-600 text-white"
                    : "bg-blue-500 text-white"
                  : theme === "dark"
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Website
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              {/* Embedded YouTube Video */}
              <div className="relative aspect-video bg-gray-900">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${product.videoId}?rel=0`}
                  title={product.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Product Content */}
              <div className={`p-5 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    {product.name}
                  </h3>
                  <div className="px-3 py-1 rounded-md text-base font-bold text-gray-900">
                    {product.price}
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    className={`flex-1 py-2.5 px-4 rounded-md font-medium text-sm transition-colors duration-300 ${
                      theme === "dark"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}
                  >
                    Bayar Sekarang
                  </button>
                  <button
                    onClick={() => openModal(product)}
                    className={`px-4 py-2.5 rounded-md font-medium text-sm transition-colors duration-300 ${
                      theme === "dark"
                        ? "bg-gray-700 hover:bg-gray-600 text-gray-200"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
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
              className={`max-w-md w-full rounded-lg shadow-lg ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } p-6 max-h-[80vh] overflow-y-auto`}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  {selectedProduct.name}
                </h2>
                <button
                  onClick={closeModal}
                  className={`p-1 rounded-md ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
                >
                  <X className={`h-5 w-5 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`} />
                </button>
              </div>
              <div className="px-3 py-1 rounded-md text-lg font-bold text-gray-900 mb-4">
                {selectedProduct.price}
              </div>
              <div className="mb-6">
                <h3 className={`text-sm font-semibold mb-2 ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>
                  Deskripsi
                </h3>
                <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  {selectedProduct.description}
                </p>
              </div>
              <div className="mb-6">
                <h3 className={`text-sm font-semibold mb-3 ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>
                  Fitur yang Didapat
                </h3>
                <ul className="space-y-2">
                  {selectedProduct.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className={`h-4 w-4 mr-2 ${theme === "dark" ? "text-blue-400" : "text-blue-500"}`} />
                      <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-3">
                <button
                  className={`flex-1 py-2.5 px-4 rounded-md font-medium text-sm transition-colors duration-300 ${
                    theme === "dark"
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                >
                  Bayar Sekarang
                </button>
                <button
                  onClick={closeModal}
                  className={`px-4 py-2.5 rounded-md font-medium text-sm transition-colors duration-300 ${
                    theme === "dark"
                      ? "bg-gray-700 hover:bg-gray-600 text-gray-200"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
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
