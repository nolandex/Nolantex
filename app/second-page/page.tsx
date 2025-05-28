"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Play, CheckCircle, X } from "lucide-react"

export default function SecondPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState("business")
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const products = [
    // Kategori Paket Bisnis Online
    {
      name: "Paket Bisnis Starter",
      price: "Rp 50.000",
      videoId: "dQw4w9WgXcQ",
      category: "business",
      features: ["Website Profesional", "Chatbot Otomatis", "Social Media Content"],
      description:
        "Paket lengkap untuk memulai bisnis online Anda dengan website profesional dan tools marketing otomatis.",
    },
    {
      name: "Paket Bisnis Pro",
      price: "Rp 150.000",
      videoId: "dQw4w9WgXcQ",
      category: "business",
      features: ["Semua fitur Starter", "Social Media Booster", "Copywriting Tricks"],
      description: "Paket premium dengan fitur lengkap untuk mengembangkan bisnis online Anda ke level profesional.",
    },

    // Kategori Website
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
      description:
        "Website portfolio profesional untuk menampilkan karya dan layanan Anda dengan tampilan yang elegan.",
    },
  ]

  // Filter produk berdasarkan kategori aktif
  const filteredProducts = products.filter((product) => product.category === activeCategory)

  const openModal = (product) => {
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
              className={`px-6 py-2.5 rounded-md font-medium text-sm transition-all duration-300 ${
                activeCategory === "business"
                  ? theme === "dark"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-blue-500 text-white shadow-sm"
                  : theme === "dark"
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Paket Bisnis Online
            </button>
            <button
              onClick={() => setActiveCategory("website")}
              className={`px-6 py-2.5 rounded-md font-medium text-sm transition-all duration-300 ${
                activeCategory === "website"
                  ? theme === "dark"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-blue-500 text-white shadow-sm"
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
            <div key={index} className={`rounded-lg overflow-hidden ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
              {/* Video Thumbnail */}
              <div
                className="h-40 relative overflow-hidden bg-gray-900 cursor-pointer group"
                style={{
                  backgroundImage: `url(https://img.youtube.com/vi/${product.videoId}/maxresdefault.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onClick={() => window.open(`https://www.youtube.com/watch?v=${product.videoId}`, "_blank")}
              >
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-500 bg-opacity-90 flex items-center justify-center group-hover:bg-opacity-100 group-hover:scale-110 transition-all duration-300">
                    <Play className="h-5 w-5 text-white" fill="white" />
                  </div>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-5">
                {/* Header with Name and Price */}
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    {product.name}
                  </h3>

                  <div
                    className={`px-3 py-1 rounded-md text-base font-bold ${
                      theme === "dark" ? "bg-blue-600" : "bg-blue-500"
                    } text-white`}
                  >
                    {product.price}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    className={`flex-1 py-2.5 px-4 rounded-md font-medium text-sm transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}
                  >
                    Bayar Sekarang
                  </button>
                  <button
                    onClick={() => openModal(product)}
                    className={`px-4 py-2.5 rounded-md font-medium text-sm transition-all duration-300 ${
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
              className={`max-w-md w-full rounded-lg ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } p-6 max-h-[80vh] overflow-y-auto`}
            >
              {/* Modal Header */}
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

              {/* Price */}
              <div
                className={`inline-block px-3 py-1 rounded-md text-lg font-bold mb-4 ${
                  theme === "dark" ? "bg-blue-600" : "bg-blue-500"
                } text-white`}
              >
                {selectedProduct.price}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className={`text-sm font-semibold mb-2 ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>
                  Deskripsi
                </h3>
                <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  {selectedProduct.description}
                </p>
              </div>

              {/* Features */}
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

              {/* Modal Actions */}
              <div className="flex gap-3">
                <button
                  className={`flex-1 py-2.5 px-4 rounded-md font-medium text-sm transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                >
                  Bayar Sekarang
                </button>
                <button
                  onClick={closeModal}
                  className={`px-4 py-2.5 rounded-md font-medium text-sm transition-all duration-300 ${
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
