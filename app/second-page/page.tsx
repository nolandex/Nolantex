"use client"

import { useEffect, useState, useCallback } from "react"
import { useTheme } from "next-themes"
import { CheckCircle, ExternalLink, X } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

interface Product {
  name: string
  price: string
  category: string
  subcategory?: string
  features?: string[]
  exampleUrl?: string
  modalType?: "example" | "details" | "contentImages" | "videoPromo" | "seoImages" | "adsImages" | null
}

const getInstagramBoosterFeatures = (option: string) => {
  switch (option) {
    case "3000": return ["5000 Likes", "100000 Views"]
    case "5000": return ["10000 Likes", "170000 Views"]
    case "10000": return ["15000 Likes", "300000 Views"]
    default: return []
  }
}

const getTikTokBoosterFeatures = (option: string) => {
  const baseViews = 70000
  const baseLikes = 5000
  const baseShares = 700
  const baseSaves = 700
  switch (option) {
    case "2000":
      return [
        `${baseViews.toLocaleString()} Views`,
        `${baseLikes.toLocaleString()} Likes`,
        `${baseShares.toLocaleString()} Shares`,
        `${baseSaves.toLocaleString()} Saves`,
      ]
    case "5000":
      return [
        `${(baseViews * 2.5).toLocaleString()} Views`,
        `${(baseLikes * 2.5).toLocaleString()} Likes`,
        `${(baseShares * 2.5).toLocaleString()} Shares`,
        `${(baseSaves * 2.5).toLocaleString()} Saves`,
      ]
    default: return []
  }
}

const getTelegramBoosterFeatures = (option: string) => {
  switch (option) {
    case "3000": return ["10000 Views", "1000 Reactions"]
    case "5000": return ["15000 Views", "1500 Reactions"]
    case "10000": return ["30000 Views", "3000 Reactions"]
    default: return []
  }
}

const getFacebookBoosterFeatures = (option: string) => {
  switch (option) {
    case "3000": return ["5000 Likes", "100000 Views"]
    case "5000": return ["10000 Likes", "170000 Views"]
    case "10000": return ["15000 Likes", "300000 Views"]
    default: return []
  }
}

const productData: Product[] = [
  {
    name: "Paket Bisnis",
    price: "Rp 50,000",
    category: "business",
    features: ["Website", "Desain Konten Sosmed", "Booster Sosmed", "Video Promosi", "Copywriting", "SEO On-page"],
    exampleUrl: "https://example.com",
    modalType: "details",
  },
  {
    name: "Paket Bisnis Reseller",
    price: "Rp 25,000",
    category: "business",
    features: ["Website", "Desain Konten Sosmed", "Booster Sosmed", "Video Promosi", "Copywriting", "Alat promosi"],
    exampleUrl: "https://example.com",
    modalType: "details",
  },
  {
    name: "Instagram Booster",
    price: "",
    category: "sosmed_booster",
    features: [],
    exampleUrl: "https://example.com/instagram",
    modalType: "details",
  },
  {
    name: "TikTok Booster",
    price: "",
    category: "sosmed_booster",
    features: [],
    exampleUrl: "https://example.com/tiktok",
    modalType: "details",
  },
  {
    name: "Telegram Booster",
    price: "",
    category: "sosmed_booster",
    features: [],
    exampleUrl: "https://example.com/telegram",
    modalType: "details",
  },
  {
    name: "Facebook Booster",
    price: "",
    category: "sosmed_booster",
    features: [],
    exampleUrl: "https://example.com/facebook",
    modalType: "details",
  },
  {
    name: "Desain Konten",
    price: "Rp 10,000",
    category: "lainnya",
    modalType: "contentImages",
  },
  {
    name: "Video Promosi",
    price: "Rp 10,000",
    category: "lainnya",
    exampleUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    modalType: "videoPromo",
  },
  {
    name: "SEO & Domain Website",
    price: "Rp 25,000",
    category: "lainnya",
    features: ["Riset Kata Kunci", "Optimasi Halaman", "setting dll"],
    modalType: "seoImages",
  },
  {
    name: "Jasa Iklan Online",
    price: "Rp 50,000",
    category: "lainnya",
    features: ["Meta ads", "Tiktok ads"],
    modalType: "adsImages",
  },
  {
    name: "Landing Page",
    price: "Rp 20,000",
    category: "website",
    subcategory: "business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://unbounce.com",
    modalType: "example",
  },
  {
    name: "Profil Bisnis",
    price: "Rp 20,000",
    category: "website",
    subcategory: "business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://profil-bisnis-demo.vercel.app",
    modalType: "example",
  },
  {
    name: "Simple Store",
    price: "Rp 20,000",
    category: "website",
    subcategory: "business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://shopify.com",
    modalType: "example",
  },
  {
    name: "Portfolio",
    price: "Rp 20,000",
    category: "website",
    subcategory: "business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://portfolio-demo.vercel.app",
    modalType: "example",
  },
  {
    name: "Online Course",
    price: "Rp 20,000",
    category: "website",
    subcategory: "business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://course-demo.vercel.app",
    modalType: "example",
  },
  {
    name: "Membership",
    price: "Rp 20,000",
    category: "website",
    subcategory: "business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://membership-demo.vercel.app",
    modalType: "example",
  },
  {
    name: "Link in Bio",
    price: "Rp 20,000",
    category: "website",
    subcategory: "business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://linkinbio-demo.vercel.app",
    modalType: "example",
  },
  {
    name: "Digital Invitation",
    price: "Rp 20,000",
    category: "website",
    subcategory: "non-business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://invitation-demo.vercel.app",
    modalType: "example",
  },
  {
    name: "Birthday",
    price: "Rp 20,000",
    category: "website",
    subcategory: "non-business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://birthday-demo.vercel.app",
    modalType: "example",
  },
  {
    name: "Event",
    price: "Rp 20,000",
    category: "website",
    subcategory: "non-business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://event-demo.vercel.app",
    modalType: "example",
  },
]

const imageSources = {
  contentImages: ["/images/template1.jpg", "/images/template2.jpg", "/images/template3.jpg"],
  seoImages: ["/images/seo1.jpg"],
  adsImages: ["/images/ads1.jpg"],
}

export default function SecondPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState("business")
  const [activeSubcategory, setActiveSubcategory] = useState("business")
  const [showModal, setShowModal] = useState<Product | null>(null)
  const [instagramBoosterOption, setInstagramBoosterOption] = useState("3000")
  const [tiktokBoosterOption, setTiktokBoosterOption] = useState("2000")
  const [telegramBoosterOption, setTelegramBoosterOption] = useState("3000")
  const [facebookBoosterOption, setFacebookBoosterOption] = useState("3000")
  const [boosterLink, setBoosterLink] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  const getProductDisplayData = useCallback(
    (product: Product): Product => {
      let currentPrice = product.price
      let currentFeatures = product.features || []

      if (product.name === "Instagram Booster") {
        currentPrice = instagramBoosterOption === "3000" ? "Rp 50,000" : instagramBoosterOption === "5000" ? "Rp 80,000" : "Rp 150,000"
        currentFeatures = getInstagramBoosterFeatures(instagramBoosterOption)
      } else if (product.name === "TikTok Booster") {
        currentPrice = tiktokBoosterOption === "2000" ? "Rp 50,000" : "Rp 100,000"
        currentFeatures = getTikTokBoosterFeatures(tiktokBoosterOption)
      } else if (product.name === "Telegram Booster") {
        currentPrice = telegramBoosterOption === "3000" ? "Rp 50,000" : telegramBoosterOption === "5000" ? "Rp 70,000" : "Rp 140,000"
        currentFeatures = getTelegramBoosterFeatures(telegramBoosterOption)
      } else if (product.name === "Facebook Booster") {
        currentPrice = facebookBoosterOption === "3000" ? "Rp 50,000" : facebookBoosterOption === "5000" ? "Rp 80,000" : "Rp 150,000"
        currentFeatures = getFacebookBoosterFeatures(facebookBoosterOption)
      }
      return { ...product, price: currentPrice, features: currentFeatures }
    },
    [instagramBoosterOption, tiktokBoosterOption, telegramBoosterOption, facebookBoosterOption],
  )

  const filteredProducts = productData.filter((product) => {
    if (product.category !== activeCategory) return false
    if (activeCategory === "website") {
      return product.subcategory === activeSubcategory
    }
    return true
  })

  const openModal = (product: Product) => {
    setShowModal(getProductDisplayData(product))
  }

  const closeModal = () => {
    setShowModal(null)
  }

  const getButtonClasses = (isActive: boolean) => {
    return `px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
      isActive
        ? theme === "dark"
          ? "bg-blue-600 text-white shadow-lg"
          : "bg-blue-500 text-white shadow-lg"
        : theme === "dark"
          ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
          : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
    }`
  }

  if (!mounted) return null

  return (
    <div className={`min-h-screen pt-20 pb-8 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        {/* Category Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-6">
          <button
            onClick={() => setActiveCategory("business")}
            className={getButtonClasses(activeCategory === "business")}
          >
            Paket Bisnis
          </button>
          <button
            onClick={() => {
              setActiveCategory("website")
              setActiveSubcategory("business")
            }}
            className={getButtonClasses(activeCategory === "website")}
          >
            Website
          </button>
          <button
            onClick={() => setActiveCategory("sosmed_booster")}
            className={getButtonClasses(activeCategory === "sosmed_booster")}
          >
            Sosmed Booster
          </button>
          <button
            onClick={() => setActiveCategory("lainnya")}
            className={getButtonClasses(activeCategory === "lainnya")}
          >
            Lainnya
          </button>
        </div>

        {/* Subcategory Buttons for Website */}
        {activeCategory === "website" && (
          <div className="flex justify-center gap-2 sm:gap-4 mb-6">
            <button
              onClick={() => setActiveSubcategory("business")}
              className={getButtonClasses(activeSubcategory === "business")}
            >
              Bisnis
            </button>
            <button
              onClick={() => setActiveSubcategory("non-business")}
              className={getButtonClasses(activeSubcategory === "non-business")}
            >
              Non-Bisnis
            </button>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {filteredProducts.map((product, index) => {
            const displayProduct = getProductDisplayData(product)
            return (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg ${
                  theme === "dark" ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"
                }`}
              >
                <div className="p-3">
                  <div className="flex justify-between items-start mb-2">
                    <h3
                      className={`text-sm font-bold leading-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                    >
                      {displayProduct.name}
                    </h3>
                    <span
                      className={`px-2 py-1 rounded-md text-xs font-bold whitespace-nowrap ml-2 ${
                        displayProduct.price === "Rp 0"
                          ? theme === "dark"
                            ? "bg-green-600 text-white"
                            : "bg-green-500 text-white"
                          : theme === "dark"
                            ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                            : "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                      } shadow-sm`}
                    >
                      {displayProduct.price}
                    </span>
                  </div>

                  <div className="mb-3">
                    {["Instagram Booster", "TikTok Booster", "Telegram Booster", "Facebook Booster"].includes(displayProduct.name) && (
                      <div className="space-y-2">
                        {displayProduct.name === "Instagram Booster" && (
                          <select
                            value={instagramBoosterOption}
                            onChange={(e) => setInstagramBoosterOption(e.target.value)}
                            className={`w-full px-2 py-1.5 rounded-md text-xs border ${
                              theme === "dark"
                                ? "bg-gray-700 border-gray-600 text-gray-200"
                                : "bg-white border-gray-300 text-gray-700"
                            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                          >
                            <option value="3000">3000 Followers</option>
                            <option value="5000">5000 Followers</option>
                            <option value="10000">10000 Followers</option>
                          </select>
                        )}
                        {displayProduct.name === "TikTok Booster" && (
                          <select
                            value={tiktokBoosterOption}
                            onChange={(e) => setTiktokBoosterOption(e.target.value)}
                            className={`w-full px-2 py-1.5 rounded-md text-xs border ${
                              theme === "dark"
                                ? "bg-gray-700 border-gray-600 text-gray-200"
                                : "bg-white border-gray-300 text-gray-700"
                            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                          >
                            <option value="2000">2000 Followers</option>
                            <option value="5000">5000 Followers</option>
                          </select>
                        )}
                        {displayProduct.name === "Telegram Booster" && (
                          <select
                            value={telegramBoosterOption}
                            onChange={(e) => setTelegramBoosterOption(e.target.value)}
                            className={`w-full px-2 py-1.5 rounded-md text-xs border ${
                              theme === "dark"
                                ? "bg-gray-700 border-gray-600 text-gray-200"
                                : "bg-white border-gray-300 text-gray-700"
                            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                          >
                            <option value="3000">3000 Followers</option>
                            <option value="5000">5000 Followers</option>
                            <option value="10000">10000 Followers</option>
                          </select>
                        )}
                        {displayProduct.name === "Facebook Booster" && (
                          <select
                            value={facebookBoosterOption}
                            onChange={(e) => setFacebookBoosterOption(e.target.value)}
                            className={`w-full px-2 py-1.5 rounded-md text-xs border ${
                              theme === "dark"
                                ? "bg-gray-700 border-gray-600 text-gray-200"
                                : "bg-white border-gray-300 text-gray-700"
                            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                          >
                            <option value="3000">3000 Followers</option>
                            <option value="5000">5000 Followers</option>
                            <option value="10000">10000 Followers</option>
                          </select>
                        )}
                        <input
                          type="text"
                          value={boosterLink}
                          onChange={(e) => setBoosterLink(e.target.value)}
                          placeholder="Masukkan Link Akun"
                          className={`w-full mt-2 px-2 py-1.5 rounded-md text-xs border ${
                            theme === "dark"
                              ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
                              : "bg-white border-gray-300 text-gray-700 placeholder-gray-500"
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                      </div>
                    )}
                    {displayProduct.features && displayProduct.features.length > 0 && (
                      <ul className="space-y-1 mt-2">
                        {displayProduct.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle
                              className={`h-3 w-3 mr-2 flex-shrink-0 ${
                                theme === "dark" ? "text-green-400" : "text-green-500"
                              }`}
                            />
                            <span className={`text-xs ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button
                      className={`flex-1 py-1.5 px-3 rounded-md font-medium text-xs transition-all duration-300 shadow-sm hover:shadow-md ${
                        theme === "dark"
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                          : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                      }`}
                    >
                      Bayar
                    </button>
                    {displayProduct.modalType && (
                      <button
                        onClick={() => openModal(displayProduct)}
                        className={`px-2 py-1.5 rounded-md font-medium text-xs transition-all duration-300 border ${
                          theme === "dark"
                            ? "border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500"
                            : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                        } flex items-center gap-1 shadow-sm hover:shadow-md`}
                      >
                        <ExternalLink className="h-3 w-3" />
                        {displayProduct.modalType === "example" ? "Contoh" : "Rincian"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Modal for Example */}
        {showModal && showModal.modalType === "example" && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
            <div
              className={`max-w-5xl w-full h-[90vh] sm:h-[85vh] rounded-xl ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } overflow-hidden shadow-2xl`}
            >
              <div
                className={`flex justify-between items-center p-4 border-b ${
                  theme === "dark" ? "border-gray-700 bg-gray-750" : "border-gray-200 bg-gray-50"
                }`}
              >
                <h2 className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  Contoh: {showModal.name}
                </h2>
                <button
                  onClick={closeModal}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    theme === "dark"
                      ? "hover:bg-gray-700 text-gray-400 hover:text-white"
                      : "hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="h-full">
                <iframe
                  src={showModal.exampleUrl}
                  title={`Contoh ${showModal.name}`}
                  className="w-full h-full"
                  frameBorder="0"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>
            </div>
          </div>
        )}

        {/* Modal for Details */}
        {showModal && showModal.modalType === "details" && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
            <div
              className={`max-w-md w-full rounded-xl ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } overflow-hidden shadow-2xl p-4`}
            >
              <div
                className={`flex justify-between items-center mb-4 border-b ${
                  theme === "dark" ? "border-gray-700 bg-gray-750" : "border-gray-200 bg-gray-50"
                } p-2`}
              >
                <h2 className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  Rincian: {showModal.name}
                </h2>
                <button
                  onClick={closeModal}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    theme === "dark"
                      ? "hover:bg-gray-700 text-gray-400 hover:text-white"
                      : "hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-4">
                <h3 className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Cara Pemesanan</h3>
                <div className="space-y-3">
                  <div className={`p-3 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}>
                    <h4 className={`font-semibold text-sm mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                      1. Pilih Paket
                    </h4>
                    <p className={`text-xs ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                      Pilih paket yang sesuai dengan kebutuhan bisnis Anda
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}>
                    <h4 className={`font-semibold text-sm mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                      2. Konsultasi
                    </h4>
                    <p className={`text-xs ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                      Diskusikan kebutuhan spesifik dan detail proyek dengan tim kami
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}>
                    <h4 className={`font-semibold text-sm mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                      3. Pembayaran
                    </h4>
                    <p className=`text-xs ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                      Lakukan pembayaran sesuai paket yang dipilih
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}>
                    <h4 className={`font-semibold text-sm mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                      4. Pengerjaan
                    </h4>
                    <p className={`text-xs ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                      Tim kami akan mulai mengerjakan proyek sesuai timeline yang disepakati
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal for Content Images, SEO Images, Ads Images */}
        {showModal && ["contentImages", "seoImages", "adsImages"].includes(showModal.modalType || "") && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
            <div
              className={`max-w-2xl w-full rounded-xl ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } overflow-hidden shadow-2xl`}
            >
              <div
                className={`flex justify-between items-center p-4 border-b ${
                  theme === "dark" ? "border-gray-700 bg-gray-750" : "border-gray-200 bg-gray-50"
                }`}
              >
                <h2 className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  Contoh: {showModal.name}
                </h2>
                <button
                  onClick={closeModal}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    theme === "dark"
                      ? "hover:bg-gray-700 text-gray-400 hover:text-white"
                      : "hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <Swiper spaceBetween={10} slidesPerView={1} className="w-full h-64 md:h-96">
                {imageSources[showModal.modalType as keyof typeof imageSources]?.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative w-full h-full">
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`${showModal.name} Contoh ${i + 1}`}
                        className="w-full h-full object-contain rounded-md"
                      />
                      <span
                        className={`absolute top-2 left-2 px-2 py-1 text-xs md:text-sm font-medium text-white bg-black bg-opacity-60 rounded`}
                      >
                        Gambar {i + 1}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}

        {/* Modal for Video Promo */}
        {showModal && showModal.modalType === "videoPromo" && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
            <div
              className={`max-w-2xl w-full rounded-xl ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } overflow-hidden shadow-2xl`}
            >
              <div
                className={`flex justify-between items-center p-4 border-b ${
                  theme === "dark" ? "border-gray-700 bg-gray-750" : "border-gray-200 bg-gray-50"
                }`}
              >
                <h2 className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  Contoh: {showModal.name}
                </h2>
                <button
                  onClick={closeModal}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    theme === "dark"
                      ? "hover:bg-gray-700 text-gray-400 hover:text-white"
                      : "hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="aspect-video w-full">
                <iframe
                  src={showModal.exampleUrl}
                  title={`Contoh ${showModal.name}`}
                  className="w-full h-full rounded-md"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
    }
