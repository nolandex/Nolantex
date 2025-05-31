"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { X, CheckCircle, ExternalLink } from "lucide-react"

interface Product {
  name: string
  price: string
  category: string
  subcategory?: string
  features: string[]
  exampleUrl: string
}

export default function SecondPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState("website")
  const [activeSubcategory, setActiveSubcategory] = useState("business")
  const [showExample, setShowExample] = useState<Product | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const products: Product[] = [
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
  ]

  const filteredProducts = products.filter(
    (product) => product.category === "website" && product.subcategory === activeSubcategory
  )

  const openExample = (product: Product) => setShowExample(product)
  const closeExample = () => setShowExample(null)

  if (!mounted) return null

  return (
    <div className={`min-h-screen pt-20 pb-8 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        {/* Subcategory Buttons for Website Category */}
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

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {filteredProducts.map((product, index) => (
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
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Example Modal */}
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
              <div className="h-full">
                <iframe
                  src={showExample.exampleUrl}
                  title={`Example ${showExample.name}`}
                  className="w-full h-full border-none"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
