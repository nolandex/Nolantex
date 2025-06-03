"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"
import { CheckCircle, ExternalLink, X } from "lucide-react"
import { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

interface Product {
  name: string
  price: string
  category: string
  subcategory?: string
  features?: string[]
  exampleUrl?: string
}

export default function SecondPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState("kebut_b_bisnis")
  const [activeSubcategory, setActiveSubcategory] = useState("business")
  const [showExample, setShowEx] = useState<Product | null>(null)
  const [showDetails, setShowDetails] = useState("")
  const [showContentImages, setShowContentImages] = useState("")
  const [instagramBoosterOption, setInstagramBooster] = useState("3000")
  const [tiktokOption, setTiktokOption] = useState("")
  const [tiktokBoosterOption, setTikTokBooster] = useState("2000")
  const [telegramBoosterOption, setTelegramBooster] = useState("3000")
  const [instagramLink, setInstagramLink] = useState("")
  const [tiktokLink, setTikLink] = useState("")
  const [telegramLink, setTelegramLink] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  const getInstagramBooster = (option: string) => {
    switch (option) {
      case "3000":
        return ["5000 Likes", "100000 Views"]
      case "5000":
        return ["10000 Likes", "170000 Views"]
      case "10000":
        return ["15000 Likes", "300000 Views"]
      default:
        return []
    }
  }

  const getTikTokBooster = (option: string) => {
    const baseViews = 70000
    const baseLikes = 5000
    switch (option) {
      case "2000":
        return [`${baseViews} Views`, `${baseLikes} Likes`, `${baseShares} Shares`, `${baseSaves} Saves`]
      case "4000":
        return [`${baseViews * 2} Views`, `${baseLikes * 2} Likes`, `${baseShares * 2} Shares`, `${baseSaves * 2} Saves`]
      case "6000":
        return [`${baseViews * 3} Views`, `${baseLikes * 3} Likes`, `${baseShares * 3} Shares`, `${baseSaves * 3} Saves`]
      default:
        return []
    }
  }

  const getTelegramBooster = (option: string) => {
    switch (option) {
      case "3000":
        return ["10000 Views", "1000 Reactions"]
      case "6000":
        return ["20000 Views", "2000 Reactions"]
      case "9000":
        return ["30000 Views", "3000 Reactions"]
      default:
        return []
    }
  }

  const products: Product[] = [
    {
      name: "Kebutuhan Bisnis",
      price: "Rp 50,000",
      category: "kebut_b_bisnis",
      features: ["Landing Page Website", "Social Media Content", "Social Media Booster", "Alat Promosi"],
      exampleUrl: "https://example.com",
    },
    {
      name: "Instagram Booster",
      price: instagramBoosterOption === "3000" ? "Rp 50,000" : instagramBoosterOption === "5000" ? "Rp 80,000" : "Rp 150,000",
      category: "kebut_b_bisnis",
      features: getInstagramBoosterFeatures(instagramBoosterOption),
      exampleUrl: "https://example.com/instagram",
    },
    {
      name: "TikTok Booster",
      price: tiktokBoosterOption === "2000" ? "Rp 50,000" : tiktokBoosterOption === "4000" ? "Rp 80,000" : "Rp 120,000",
      category: "kebut_b_bisnis",
      features: getTikTokBoosterFeatures(tiktokBoosterOption),
      exampleUrl: "https://example.com/tiktok",
    },
    {
      name: "Telegram Booster",
      price: telegramBoosterOption === "3000" ? "Rp 50,000" : telegramBoosterOption === "6000" ? "Rp 100,000" : "Rp 150,000",
      category: "kebut_b_bisnis",
      features: getTelegramBoosterFeatures(telegramBoosterOption),
      exampleUrl: "https://example.com/telegram",
    },
    {
      name: "Desain Konten",
      price: "Rp 10,000",
      category: "kebut_b_bisnis",
    },
    {
      name: "Landing Page",
      price: "Rp 25,000",
      category: "website",
      subcategory: "business",
      features: ["Free Domain", "Free Hosting"],
      exampleUrl: "https://unbounce.com",
    },
    {
      name: "Profil Bisnis",
      price: "Rp 25,000",
      category: "website",
      subcategory: "business",
      features: ["Free Domain", "Free Hosting"],
      exampleUrl: "https://profil-bisnis-demo.vercel.app",
    },
    {
      name: "Simple Store",
      price: "Rp 25,000",
      category: "website",
      subcategory: "business",
      features: ["Free Domain", "Free Hosting"],
      exampleUrl: "https://shopify.com",
    },
    {
      name: "Portfolio",
      price: "Rp 25,000",
      category: "website",
      subcategory: "business",
      features: ["Free Domain", "Free Hosting"],
      exampleUrl: "https://portfolio-demo.vercel.app",
    },
    {
      name: "Online Course",
      price: "Rp 25,000",
      category: "website",
      subcategory: "business",
      features: ["Free Domain", "Free Hosting"],
      exampleUrl: "https://course-demo.vercel.app",
    },
    {
      name: "Membership",
      price: "Rp 25,000",
      category: "website",
      subcategory: "business",
      features: ["Free Domain", "Free Hosting"],
      exampleUrl: "https://membership-demo.vercel.app",
    },
    {
      name: "Booking",
      price: "Rp 25,000",
      category: "website",
      subcategory: "business",
      features: ["Free Domain", "Free Hosting"],
      exampleUrl: "https://booking-demo.vercel.app",
    },
    {
      name: "Affiliate",
      price: "Rp 25,000",
      category: "website",
      subcategory: "business",
      features: ["Free Domain", "Free Hosting"],
      exampleUrl: "https://affiliate-demo.vercel.app",
    },
    {
      name: "Link in Bio",
      price: "Rp 25,000",
      category: "website",
      subcategory: "business",
      features: ["Free Domain", "Free Hosting"],
      exampleUrl: "https://linkinbio-demo.vercel.app",
    },
    {
      name: "Digital Invitation",
      price: "Rp 25,000",
      category: "website",
      subcategory: "non-business",
      features: ["Free Domain", "Free Hosting"],
      exampleUrl: "https://invitation-demo.vercel.app",
    },
    {
      name: "Birthday",
      price: "Rp 25,000",
      category: "website",
      subcategory: "non-business",
      features: ["Free Domain", "Free Hosting"],
      exampleUrl: "https://birthday-demo.vercel.app",
    },
    {
      name: "Event",
      price: "Rp 25,000",
      category: "website",
      subcategory: "non-business",
      features: ["Free Domain", "Free Hosting"],
      exampleUrl: "https://event-demo.vercel.app",
    },
  ]

  const filteredProducts = products.filter((product) => {
    if (product.category !== activeCategory) return false
    if (activeCategory === "website") {
      return product.subcategory === activeSubcategory
    }
    return true
  })

  const groupedProducts: Product[][] = []
  for (let i = 0; i < filteredProducts.length; i += 2) {
    groupedProducts.push(filteredProducts.slice(i, i + 2))
  }

  const openExample = (product: Product) => {
    setShowEx(product)
  }

  const closeExample = () => {
    setShowEx(null)
  }

  const openDetails = (product: Product) => {
    setShowDetails(product)
  }

  const closeDetails = () => {
    setShowDetails(null)
  }

  const openContentImages = () => {
    setShowContentImages(true)
  }

  const closeContentImages = () => {
    setShowContentImages(false)
  }

  if (!mounted) return null

  return (
    <div className={`min-h-screen pt-20 pb-8 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto max-w-full px-2">
        <div className="grid grid-cols-2 gap-2 mb-6">
          <button
            onClick={() => {
              setActiveCategory("kebut_b_bisnis")
              setActiveSubcategory("business")
            }}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
              activeCategory === "kebut_b_bisnis"
                ? theme === "dark"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-blue-500 text-white shadow-lg"
                : theme === "dark"
                  ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
            }`}
          >
            Kebutuhan Bisnis
          </button>
          <button
            onClick={() => {
              setActiveCategory("website")
              setActiveSubcategory("business")
            }}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
              activeCategory === "website"
                ? theme === "dark"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-blue-500 text-white shadow-lg"
                : theme === "dark"
                  ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
            }`}
          >
            Website
          </button>
        </div>

        {activeCategory === "website" && (
          <div className="flex justify-center gap-2 mb-6">
            <button
              onClick={() => setActiveSubcategory("business")}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeSubcategory === "business"
                  ? theme === "dark"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-blue-500 text-white shadow-lg"
                  : theme === "dark"
                    ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
            >
              Business
            </button>
            <button
              onClick={() => setActiveSubcategory("non-business")}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeSubcategory === "non-business"
                  ? theme === "dark"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-blue-500 text-white shadow-lg"
                  : theme === "dark"
                    ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
            >
              Non-Business
            </button>
          </div>
        )}

        <div className="space-y-3">
          {groupedProducts.map((group, groupIndex) => (
            <div key={groupIndex} className="grid grid-cols-2 gap-3">
              {group.map((product, index) => (
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
                        {product.name}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded-md text-xs font-bold whitespace-nowrap ml-2 ${
                          product.price === "Rp 0"
                            ? theme === "dark"
                              ? "bg-green-600 text-white"
                              : "bg-green-500 text-white"
                            : theme === "dark"
                              ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                              : "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                        } shadow-sm`}
                      >
                        {product.price}
                      </span>
                    </div>

                    {product.name === "Kebutuhan Bisnis" && (
                      <div className="mb-3">
                        <ul className="space-y-1">
                          {product.features?.slice(0, 3).map((feature, i) => (
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
                      </div>
                    )}

                    {product.name === "Instagram Booster" && (
                      <div className="mb-3">
                        <select
                          value={instagramBoosterOption}
                          onChange={(e) => setInstagramBooster(e.target.value)}
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
                        <input
                          type="text"
                          value={instagramLink}
                          onChange={(e) => setInstagramLink(e.target.value)}
                          placeholder="Link Akun"
                          className={`w-full mt-2 px-2 py-1.5 rounded-md text-xs border ${
                            theme === "dark"
                              ? "bg-gray-700 border-gray-600 text-gray-200"
                              : "bg-white border-gray-300 text-gray-700"
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                      </div>
                    )}

                    {product.name === "TikTok Booster" && (
                      <div className="mb-3">
                        <select
                          value={tiktokBoosterOption}
                          onChange={(e) => setTikTokBooster(e.target.value)}
                          className={`w-full px-2 py-1.5 rounded-md text-xs border ${
                            theme === "dark"
                              ? "bg-gray-700 border-gray-600 text-gray-200"
                              : "bg-white border-gray-300 text-gray-700"
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        >
                          <option value="2000">2000 Followers</option>
                          <option value="4000">4000 Followers</option>
                          <option value="6000">6000 Followers</option>
                        </select>
                        <input
                          type="text"
                          value={tiktokLink}
                          onChange={(e) => setTikLink(e.target.value)}
                          placeholder="Link Akun"
                          className={`w-full mt-2 px-2 py-1.5 rounded-md text-xs border ${
                            theme === "dark"
                              ? "bg-gray-700 border-gray-600 text-gray-200"
                              : "bg-white border-gray-300 text-gray-700"
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                      </div>
                    )}

                    {product.name === "Telegram Booster" && (
                      <div className="mb-3">
                        <select
                          value={telegramBoosterOption}
                          onChange={(e) => setTelegramBooster(e.target.value)}
                          className={`w-full px-2 py-1.5 rounded-md text-xs border ${
                            theme === "dark"
                              ? "bg-gray-700 border-gray-600 text-gray-200"
                              : "bg-white border-gray-300 text-gray-700"
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        >
                          <option value="3000">3000 Followers</option>
                          <option value="6000">6000 Followers</option>
                          <option value="9000">9000 Followers</option>
                        </select>
                        <input
                          type="text"
                          value={telegramLink}
                          onChange={(e) => setTelegramLink(e.target.value)}
                          placeholder="Link Akun"
                          className={`w-full mt-2 px-2 py-1.5 rounded-md text-xs border ${
                            theme === "dark"
                              ? "bg-gray-700 border-gray-600 text-gray-200"
                              : "bg-white border-gray-300 text-gray-700"
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                      </div>
                    )}

                    {activeCategory === "website" && product.features && (
                      <div className="mb-3">
                        <ul className="space-y-1">
                          {product.features.map((feature, i) => (
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
                      </div>
                    )}

                    <div className="flex gap-2">
                      <button
                        className={`flex-1 py-1.5 px-3 rounded-md font-medium text-xs transition-all duration-300 shadow-sm hover:shadow-md ${
                          theme === "dark"
                            ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                            : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                        }`}
                      >
                        Pay
                      </button>
                      {product.exampleUrl && activeCategory === "kebut_b_bisnis" && (
                        <button
                          onClick={() => openDetails(product)}
                          className={`px-2 py-1.5 rounded-md font-medium text-xs transition-all duration-300 border ${
                            theme === "dark"
                              ? "border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500"
                              : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                          } flex items-center gap-1 shadow-sm hover:shadow-md`}
                        >
                          Rincian
                        </button>
                      )}
                      {product.exampleUrl && activeCategory === "website" && (
                        <button
                          onClick={() => openExample(product)}
                          className={`px-2 py-1.5 rounded-md font-medium text-xs transition-all duration-300 border ${
                            theme === "dark"
                              ? "border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500"
                              : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                          } flex items-center gap-1 shadow-sm hover:shadow-md`}
                        >
                          <ExternalLink className="h-3 w-3" />
                          Example
                        </button>
                      )}
                      {product.name === "Desain Konten" && (
                        <button
                          onClick={openContentImages}
                          className={`px-2 py-1.5 rounded-md font-medium text-xs transition-all duration-300 border ${
                            theme === "dark"
                              ? "border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500"
                              : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                          } flex items-center gap-1 shadow-sm hover:shadow-md`}
                        >
                          Contoh
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {showExample && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2">
            <div className={`max-w-full w-full h-[90vh] rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"} overflow-hidden shadow-2xl relative`}>
              <button
                onClick={closeExample}
                className={`absolute top-2 right-2 p-2 rounded-lg transition-all duration-200 ${
                  theme === "dark" ? "hover:bg-gray-700 text-gray-400 hover:text-white" : "hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                }`}
              >
                <X className="h-5 w-5" />
              </button>
              <iframe
                src={showExample.exampleUrl}
                title={`Example ${showExample.name}`}
                className="w-full h-full"
                frameBorder="0"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
          </div>
        )}

        {showDetails && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2">
            <div className={`max-w-md w-full rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"} overflow-hidden shadow-2xl p-4 relative`}>
              <button
                onClick={closeDetails}
                className={`absolute top-2 right-2 p-2 rounded-lg transition-all duration-200 ${
                  theme === "dark" ? "hover:bg-gray-700 text-gray-400 hover:text-white" : "hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                }`}
              >
                <X className="h-5 w-5" />
              </button>
              <ul className="space-y-2">
                {showDetails.name === "Kebutuhan Bisnis" ? (
                  showDetails.features?.slice(3).map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle
                        className={`h-4 w-4 mr-2 flex-shrink-0 ${theme === "dark" ? "text-green-400" : "text-green-500"}`}
                      />
                      <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{feature}</span>
                    </li>
                  ))
                ) : (
                  showDetails.features?.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle
                        className={`h-4 w-4 mr-2 flex-shrink-0 ${theme === "dark" ? "text-green-400" : "text-green-500"}`}
                      />
                      <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{feature}</span>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        )}

        {showContentImages && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2">
            <div className={`max-w-2xl w-full rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"} overflow-hidden shadow-2xl p-4 relative`}>
              <button
                onClick={closeContentImages}
                className={`absolute top-2 right-2 p-2 rounded-lg transition-all duration-200 ${
                  theme === "dark" ? "hover:bg-gray-700 text-gray-400 hover:text-white" : "hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                }`}
              >
                <X className="h-5 w-5" />
              </button>
              <Swiper spaceBetween={10} slidesPerView={1} className="w-full h-64">
                {[
                  "https://via.placeholder.com/300x200?text=Template+1",
                  "https://via.placeholder.com/300x200?text=Template+2",
                  "https://via.placeholder.com/300x200?text=Template+3",
                ].map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative w-full h-64">
                      <img src={img} alt={`Desain Konten ${i + 1}`} className="w-full h-full object-cover rounded-md" />
                      <span
                        className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold text-white bg-black bg-opacity-50 rounded`}
                      >
                        No {i + 1}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </div>
  )
                        }
