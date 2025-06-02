"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { X, CheckCircle, ExternalLink } from "lucide-react"

interface Product {
  name: string
  price: string
  category: string
  subcategory?: string
  features?: string[]
  exampleUrl?: string
  imageUrl?: string
}

export default function SecondPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState("kebutuhan_bisnis")
  const [activeSubcategory, setActiveSubcategory] = useState("business")
  const [showExample, setShowExample] = useState<Product | null>(null)
  const [instagramBoosterOption, setInstagramBoosterOption] = useState("3000")
  const [tiktokBoosterOption, setTiktokBoosterOption] = useState("2000")
  const [telegramBoosterOption, setTelegramBoosterOption] = useState("3000")

  useEffect(() => {
    setMounted(true)
  }, [])

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
      case "4000":
        return [`${baseViews * 2} Views`, `${baseLikes * 2} Likes`, `${baseShares * 2} Shares`, `${baseSaves * 2} Saves`]
      case "6000":
        return [`${baseViews * 3} Views`, `${baseLikes * 3} Likes`, `${baseShares * 3} Shares`, `${baseSaves * 3} Saves`]
      default:
        return []
    }
  }

  const getTelegramBoosterFeatures = (option: string) => {
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
      category: "kebutuhan_bisnis",
      features: ["Landing Page Website", "Automatic Chatbot", "Social Media Content", "Social Media Booster", "Promotion Tricks"],
      exampleUrl: "https://example.com",
    },
    {
      name: "Instagram Booster",
      price: instagramBoosterOption === "3000" ? "Rp 50,000" : instagramBoosterOption === "5000" ? "Rp 80,000" : "Rp 150,000",
      category: "kebutuhan_bisnis",
      features: getInstagramBoosterFeatures(instagramBoosterOption),
      exampleUrl: "https://example.com/instagram",
    },
    {
      name: "TikTok Booster",
      price: tiktokBoosterOption === "2000" ? "Rp 50,000" : tiktokBoosterOption === "4000" ? "Rp 80,000" : "Rp 120,000",
      category: "kebutuhan_bisnis",
      features: getTikTokBoosterFeatures(tiktokBoosterOption),
      exampleUrl: "https://example.com/tiktok",
    },
    {
      name: "Telegram Booster",
      price: telegramBoosterOption === "3000" ? "Rp 50,000" : telegramBoosterOption === "6000" ? "Rp 100,000" : "Rp 150,000",
      category: "kebutuhan_bisnis",
      features: getTelegramBoosterFeatures(telegramBoosterOption),
      exampleUrl: "https://example.com/telegram",
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
      name: "Landing Page",
      price: "Rp 25,000",
      category: "website",
      subcategory: "business",
      features: ["Free Domain", "Free Hosting"],
      exampleUrl: "https://unbounce.com",
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
    {
      name: "Social Media Template 1",
      price: "Rp 10,000",
      category: "kebutuhan_bisnis",
      imageUrl: "/templates/template1.jpg",
    },
  ]

  const filteredProducts = products.filter((product) => {
    if (product.category !== activeCategory) return false
    if (activeCategory === "website") {
      return product.subcategory === activeSubcategory
    }
    return true
  })

  const openExample = (product: Product) => {
    setShowExample(product)
  }

  const closeExample = () => {
    setShowExample(null)
  }

  if (!mounted) return null

  return (
    <div className={`min-h-screen pt-20 pb-8 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-6">
          <button
            onClick={() => {
              setActiveCategory("kebutuhan_bisnis")
              setActiveSubcategory("business")
            }}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
              activeCategory === "kebutuhan_bisnis"
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
          <div className="flex justify-center gap-2 sm:gap-4 mb-6">
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

        <div className="grid grid-cols-1 gap-3 sm:gap-4">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg ${
                theme === "dark" ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"
              } ${product.name === "Kebutuhan Bisnis" ? "col-span-1" : ""}`}
            >
              <div className="p-3">
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-md mb-3"
                  />
                ) : null}
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

                {product.name === "Instagram Booster" && (
                  <div className="mb-3">
                    <label className={`block text-xs font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Select Option:
                    </label>
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
                  </div>
                )}

                {product.name === "TikTok Booster" && (
                  <div className="mb-3">
                    <label className={`block text-xs font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Select Follower Count:
                    </label>
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
                      <option value="4000">4000 Followers</option>
                      <option value="6000">6000 Followers</option>
                    </select>
                  </div>
                )}

                {product.name === "Telegram Booster" && (
                  <div className="mb-3">
                    <label className={`block text-xs font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Select Follower Count:
                    </label>
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
                      <option value="6000">6000 Followers</option>
                      <option value="9000">9000 Followers</option>
                    </select>
                  </div>
                )}

                {product.features && (
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
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hovered:to-blue-800 text-white"
                        : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                    }`}
                  >
                    Pay
                  </button>
                  {product.exampleUrl && (
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
                </div>
              </div>
            </div>
          ))}
        </div>

        {showExample && (
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
                  Example: {showExample.name}
                </h2>
                <button
                  onClick={closeExample}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    theme === "dark"
                      ? "hover:bg-gray-700 text-gray-400 hover:text-white"
                      : "hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="h-full pb-12 sm:pb-10">
                <iframe
                  src={showExample.exampleUrl}
                  title={`Example ${showExample.name}`}
                  className="w-full h-full"
                  frameBorder="0"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
                      }
