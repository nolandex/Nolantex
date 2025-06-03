"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { CheckCircle, ExternalLink, X, Rocket, ChevronDown } from "lucide-react"
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
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState("paket_bisnis")
  const [activeSubcategory, setActiveSubcategory] = useState("business")
  const [showExample, setShowExample] = useState<Product | null>(null)
  const [showDetails, setShowDetails] = useState<Product | null>(null)
  const [showContentImages, setShowContentImages] = useState(false)
  const [showVideoPromo, setShowVideoPromo] = useState(false)
  const [showSEOImages, setShowSEOImages] = useState(false)
  const [showAdsImages, setShowAdsImages] = useState(false)
  const [boosterType, setBoosterType] = useState("Instagram Booster")
  const [instagramBoosterOption, setInstagramBoosterOption] = useState("3000")
  const [tiktokBoosterOption, setTiktokBoosterOption] = useState("2000")
  const [telegramBoosterOption, setTelegramBoosterOption] = useState("3000")
  const [boosterLink, setBoosterLink] = useState("")

  useEffect(() => {
    setMounted(true)
    setTheme("light")
  }, [setTheme])

  const getInstagramBoosterFeatures = (option: string) => {
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

  const getTikTokBoosterFeatures = (option: string) => {
    const baseViews = 70000
    const baseLikes = 5000
    const baseShares = 700
    const baseSaves = 700

    switch (option) {
      case "2000":
        return [`${baseViews} Views`, `${baseLikes} Likes`, `${baseShares} Shares`, `${baseSaves} Saves`]
      case "5000":
        return [`${baseViews * 2.5} Views`, `${baseLikes * 2.5} Likes`, `${baseShares * 2.5} Shares`, `${baseSaves * 2.5} Saves`]
      default:
        return []
    }
  }

  const getTelegramBoosterFeatures = (option: string) => {
    switch (option) {
      case "3000":
        return ["10000 Views", "1000 Reactions"]
      case "5000":
        return ["15000 Views", "1500 Reactions"]
      case "10000":
        return ["30000 Views", "3000 Reactions"]
      default:
        return []
    }
  }

  const products: Product[] = [
    {
      name: "Paket Bisnis",
      price: "Rp 50,000",
      category: "paket_bisnis",
      features: ["Website", "Content Design", "Social Media Booster", "SEO Website", "Copywriting"],
      exampleUrl: "https://example.com",
    },
    {
      name: "Instagram Booster",
      price: instagramBoosterOption === "3000" ? "Rp 50,000" : instagramBoosterOption === "5000" ? "Rp 80,000" : "Rp 150,000",
      category: "paket_bisnis",
      features: getInstagramBoosterFeatures(instagramBoosterOption),
      exampleUrl: "https://example.com/instagram",
    },
    {
      name: "TikTok Booster",
      price: tiktokBoosterOption === "2000" ? "Rp 50,000" : "Rp 100,000",
      category: "paket_bisnis",
      features: getTikTokBoosterFeatures(tiktokBoosterOption),
      exampleUrl: "https://example.com/tiktok",
    },
    {
      name: "Telegram Booster",
      price:
        telegramBoosterOption === "3000"
          ? "Rp 50,000"
          : telegramBoosterOption === "5000"
          ? "Rp 70,000"
          : "Rp 140,000",
      category: "paket_bisnis",
      features: getTelegramBoosterFeatures(telegramBoosterOption),
      exampleUrl: "https://example.com/telegram",
    },
    {
      name: "Desain Konten",
      price: "Rp 10,000",
      category: "paket_bisnis",
    },
    {
      name: "Video Promosi",
      price: "Rp 10,000",
      category: "paket_bisnis",
      exampleUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: "SEO Website",
      price: "Rp 25,000",
      category: "paket_bisnis",
      features: ["Keyword Research", "On-Page Optimization", "Link Building"],
    },
    {
      name: "Jasa Iklan Online",
      price: "Rp 100,000",
      category: "paket_bisnis",
      features: ["Meta Ads", "TikTok Ads"],
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
    if (["Instagram Booster", "TikTok Booster", "Telegram Booster"].includes(product.name)) {
      return product.name === boosterType
    }
    return true
  })

  const groupedProducts: Product[][] = []
  for (let i = 0; i < filteredProducts.length; i += 2) {
    groupedProducts.push(filteredProducts.slice(i, i + 2))
  }

  const openExample = (product: Product) => {
    setShowExample(product)
  }

  const closeExample = () => {
    setShowExample(null)
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

  const openVideoPromo = () => {
    setShowVideoPromo(true)
  }

  const closeVideoPromo = () => {
    setShowVideoPromo(false)
  }

  const openSEOImages = () => {
    setShowSEOImages(true)
  }

  const closeSEOImages = () => {
    setShowSEOImages(false)
  }

  const openAdsImages = () => {
    setShowAdsImages(true)
  }

  const closeAdsImages = () => {
    setShowAdsImages(false)
  }

  if (!mounted) return null

  return (
    <div className={`min-h-screen pt-20 pb-8 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto max-w-full px-2">
        <div className="grid grid-cols-2 gap-2 mb-6">
          <button
            onClick={() => {
              setActiveCategory("paket_bisnis")
              setActiveSubcategory("business")
            }}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
              activeCategory === "paket_bisnis"
                ? theme === "dark"
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-blue-500 text-white shadow-lg"
                : theme === "dark"
                  ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
            }`}
          >
            Paket Bisnis
          </button>
          <button
            onClick={() => {
              setActiveCategory("website")
              setActiveSubcategory("business")
            }}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
              activeCategory === "website"
                ? theme === "dark"
                  ? "bg-green-600 text-white shadow-lg"
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
                    ? "bg-green-600 text-white shadow-lg"
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
                    ? "bg-green-600 text-white shadow-lg"
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
                    <div className="flex justify-between items-center mb-2">
                      {["Instagram Booster", "TikTok Booster", "Telegram Booster"].includes(product.name) ? (
                        <div className="inline-flex items-center gap-1">
                          <select
                            value={boosterType}
                            onChange={(e) => setBoosterType(e.target.value)}
                            className={`text-sm font-bold leading-tight bg-transparent border-none appearance-none focus:outline-none cursor-pointer ${
                              theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            <option value="Instagram Booster">Instagram</option>
                            <option value="TikTok Booster">TikTok</option>
                            <option value="Telegram Booster">Telegram</option>
                          </select>
                          <ChevronDown
                            className={`h-4 w-4 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
                          />
                          <Rocket className={`h-4 w-4 ${theme === "dark" ? "text-blue-400" : "text-blue-500"}`} />
                        </div>
                      ) : (
                        <h3
                          className={`text-sm font-bold leading-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                        >
                          {product.name}
                        </h3>
                      )}
                      <span
                        className={`px-2 py-1 rounded-md text-xs font-bold whitespace-nowrap ${
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

                    {product.name === "Paket Bisnis" && (
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

                    {["Instagram Booster", "TikTok Booster", "Telegram Booster"].includes(product.name) && (
                      <div className="mb-3">
                        {product.name === "Instagram Booster" && (
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

                        {product.name === "TikTok Booster" && (
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

                        {product.name === "Telegram Booster" && (
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

                        <input
                          type="text"
                          value={boosterLink}
                          onChange={(e) => setBoosterLink(e.target.value)}
                          placeholder="Link Akun"
                          className={`w-full mt-2 px-2 py-1.5 rounded-md text-xs border ${
                            theme === "dark"
                              ? "bg-gray-700 border-gray-600 text-gray-200"
                              : "bg-white border-gray-300 text-gray-700"
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                      </div>
                    )}

                    {product.name === "SEO Website" && (
                      <div className="mb-3">
                        <ul className="space-y-1">
                          {product.features?.map((feature, i) => (
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

                    {product.name === "Jasa Iklan Online" && (
                      <div className="mb-3">
                        <ul className="space-y-1">
                          {product.features?.map((feature, i) => (
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
                      {product.exampleUrl && activeCategory === "paket_bisnis" && product.name !== "Video Promosi" && (
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
                      {product.name === "Video Promosi" && (
                        <button
                          onClick={openVideoPromo}
                          className={`px-2 py-1.5 rounded-md font-medium text-xs transition-all duration-300 border ${
                            theme === "dark"
                              ? "border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500"
                              : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                          } flex items-center gap-1 shadow-sm hover:shadow-md`}
                        >
                          Contoh
                        </button>
                      )}
                      {product.name === "SEO Website" && (
                        <button
                          onClick={openSEOImages}
                          className={`px-2 py-1.5 rounded-md font-medium text-xs transition-all duration-300 border ${
                            theme === "dark"
                              ? "border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500"
                              : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                          } flex items-center gap-1 shadow-sm hover:shadow-md`}
                        >
                          Contoh
                        </button>
                      )}
                      {product.name === "Jasa Iklan Online" && (
                        <button
                          onClick={openAdsImages}
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
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div
              className={`max-w-full w-full h-[90vh] rounded-xl ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } overflow-hidden shadow-2xl relative`}
            >
              <button
                onClick={closeExample}
                className={`absolute top-4 right-4 p-3 rounded-md transition-all duration-200 z-10 pointer-events-auto ${
                  theme === "dark"
                    ? "hover:bg-gray-700 text-gray-400 hover:text-white"
                    : "hover:bg-gray-200 text-gray-600 hover:text-gray-900"
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
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div
              className={`max-w-md w-full rounded-xl ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } overflow-hidden shadow-2xl p-4 relative`}
            >
              <button
                onClick={closeDetails}
                className={`absolute top-4 right-4 p-3 rounded-md transition-all duration-200 z-10 pointer-events-auto ${
                  theme === "dark"
                    ? "hover:bg-gray-700 text-gray-400 hover:text-white"
                    : "hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                }`}
              >
                <X className="h-5 w-5" />
              </button>
              <ul className="space-y-2">
                {showDetails.name === "Paket Bisnis" ? (
                  showDetails.features?.slice(3).map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle
                        className={`h-4 w-4 mr-2 flex-shrink-0 ${
                          theme === "dark" ? "text-green-400" : "text-green-500"
                        }`}
                      />
                      <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                        {feature}
                      </span>
                    </li>
                  ))
                ) : (
                  showDetails.features?.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle
                        className={`h-4 w-4 mr-2 flex-shrink-0 ${
                          theme === "dark" ? "text-green-400" : "text-green-500"
                        }`}
                      />
                      <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                        {feature}
                      </span>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        )}

        {showContentImages && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div
              className={`max-w-2xl w-full rounded-xl ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } overflow-hidden shadow-2xl p-4 relative`}
            >
              <button
                onClick={closeContentImages}
                className={`absolute top-4 right-4 p-3 rounded-lg transition-all duration-200 z-50 pointer-events-auto ${
                  theme === "dark"
                    ? "hover:bg-gray-700 text-gray-400 hover:text-white"
                    : "hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                }`}
              >
                <X className="h-5 w-5" />
              </button>
              <Swiper spaceBetween={10} slidesPerView={1} className="w-full h-64">
                {["/images/template1.jpg", "/images/template2.jpg", "/images/template3.jpg"].map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative w-full h-64">
                      <img
                        src={img}
                        alt={`Desain Konten ${i + 1}`}
                        className="w-full h-full object-cover rounded-md"
                      />
                      <span
                        className={`absolute top-2 left-2 px-2 py-1 text-sm font-medium text-white bg-black bg-opacity-50 rounded`}
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

        {showVideoPromo && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div
              className={`max-w-2xl w-full rounded-xl ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } overflow-hidden shadow-2xl p-4 relative`}
            >
              <button
                onClick={closeVideoPromo}
                className={`absolute top-4 right-4 p-3 rounded-lg transition-all duration-200 z-50 pointer-events-auto ${
                  theme === "dark"
                    ? "hover:bg-gray-700 text-gray-400 hover:text-white"
                    : "hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                }`}
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative w-full h-64">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Video Promosi Example"
                  className="w-full h-full rounded-md"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        {showSEOImages && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div
              className={`max-w-2xl w-full rounded-xl ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } overflow-hidden shadow-2xl p-4 relative`}
            >
              <button
                onClick={closeSEOImages}
                className={`absolute top-4 right-4 p-3 rounded-lg transition-all duration-200 z-50 pointer-events-auto ${
                  theme === "dark"
                    ? "hover:bg-gray-700 text-gray-400 hover:text-white"
                    : "hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                }`}
              >
                <X className="h-5 w-5" />
              </button>
              <Swiper spaceBetween={10} slidesPerView={1} className="w-full h-64">
                {["/images/seo1.jpg", "/images/seo2.jpg", "/images/seo3.jpg"].map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative w-full h-64">
                      <img
                        src={img}
                        alt={`SEO Example ${i + 1}`}
                        className="w-full h-full object-cover rounded-md"
                      />
                      <span
                        className={`absolute top-2 left-2 px-2 py-1 text-sm font-medium text-white bg-black bg-opacity-50 rounded`}
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

        {showAdsImages && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div
              className={`max-w-2xl w-full rounded-xl ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } overflow-hidden shadow-2xl p-4 relative`}
            >
              <button
                onClick={closeAdsImages}
                className={`absolute top-4 right-4 p-3 rounded-lg transition-all duration-200 z-50 pointer-events-auto ${
                  theme === "dark"
                    ? "hover:bg-gray-700 text-gray-400 hover:text-white"
                    : "hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                }`}
              >
                <X className="h-5 w-5" />
              </button>
              <Swiper spaceBetween={10} slidesPerView={1} className="w-full h-64">
                {["/images/ads1.jpg", "/images/ads2.jpg", "/images/ads3.jpg"].map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative w-full h-64">
                      <img
                        src={img}
                        alt={`Jasa Iklan Online Example ${i + 1}`}
                        className="w-full h-full object-cover rounded-md"
                      />
                      <span
                        className={`absolute top-2 left-2 px-2 py-1 text-sm font-medium text-white bg-black bg-opacity-50 rounded`}
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
