"use client"

import type React from "react"
import { useEffect, useState, useCallback } from "react"
import { useTheme } from "next-themes"
import { CheckCircle, ExternalLink, X } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

// Komponen Modal
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  size?: "sm" | "md" | "lg" | "full"
}

function Modal({ isOpen, onClose, children, size = "full" }: ModalProps) {
  const { theme } = useTheme()
  if (!isOpen) return null

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-2xl",
    full: "max-w-full w-full h-[90vh]",
  }[size]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div
        className={`${sizeClasses} ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        } rounded-xl overflow-hidden shadow-2xl relative p-4`}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-3 rounded-md transition-all duration-200 z-10 ${
            theme === "dark"
              ? "hover:bg-gray-700 text-gray-400 hover:text-white"
              : "hover:bg-gray-200 text-gray-600 hover:text-gray-900"
          }`}
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  )
}

// Komponen FeatureList
interface FeatureListProps {
  features: string[]
  textColor?: string
}

function FeatureList({ features, textColor }: FeatureListProps) {
  const { theme } = useTheme()
  return (
    <ul className="space-y-1">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start">
          <CheckCircle
            className={`h-3 w-3 mt-0.5 mr-2 flex-shrink-0 ${
              theme === "dark" ? "text-green-400" : "text-green-500"
            }`}
          />
          <span
            className={`text-xs ${
              textColor ||
              (theme === "dark" ? "text-gray-300" : "text-gray-600")
            }`}
          >
            {feature}
          </span>
        </li>
      ))}
    </ul>
  )
}

// Komponen untuk instruksi pemesanan
function OrderingInstructions() {
  const { theme } = useTheme()
  return (
    <div className="space-y-3">
      <h3
        className={`text-lg font-bold ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        Cara Pemesanan
      </h3>
      <div
        className={`p-3 rounded-lg ${
          theme === "dark" ? "bg-gray-700" : "bg-gray-100"
        }`}
      >
        <h4
          className={`font-semibold text-sm mb-2 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          1. Pilih Paket
        </h4>
        <p
          className={`text-xs ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Pilih paket yang sesuai dengan kebutuhan bisnis Anda
        </p>
      </div>
      <div
        className={`p-3 rounded-lg ${
          theme === "dark" ? "bg-gray-700" : "bg-gray-100"
        }`}
      >
        <h4
          className={`font-semibold text-sm mb-2 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          2. Konsultasi
        </h4>
        <p
          className={`text-xs ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Diskusikan kebutuhan spesifik dan detail proyek dengan tim kami
        </p>
      </div>
      <div
        className={`p-3 rounded-lg ${
          theme === "dark" ? "bg-gray-700" : "bg-gray-100"
        }`}
      >
        <h4
          className={`font-semibold text-sm mb-2 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          3. Pembayaran
        </h4>
        <p
          className={`text-xs ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Lakukan pembayaran sesuai paket yang dipilih
        </p>
      </div>
      <div
        className={`p-3 rounded-lg ${
          theme === "dark" ? "bg-gray-700" : "bg-gray-100"
        }`}
      >
        <h4
          className={`font-semibold text-sm mb-2 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          4. Pengerjaan
        </h4>
        <p
          className={`text-xs ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Tim kami akan mulai mengerjakan proyek sesuai timeline yang disepakati
        </p>
      </div>
    </div>
  )
}

interface Product {
  name: string
  price: string
  category: string
  subcategory?: string
  features?: string[]
  exampleUrl?: string
  modalType?: "example" | "details" | "contentImages" | "seoImages" | "adsImages" | null
  image?: string
}

const getInstagramFeatures = (paket: string) => {
  switch (paket) {
    case "1":
      return ["3000 Followers", "5000 Likes", "100000 Views"]
    case "2":
      return ["5000 Followers", "10000 Likes", "170000 Views"]
    case "3":
      return ["10000 Followers", "15000 Likes", "300000 Views"]
    default:
      return []
  }
}

const getTikTokFeatures = (paket: string) => {
  switch (paket) {
    case "1":
      return ["2000 Followers", "70000 Views", "5000 Likes", "700 Shares", "700 Saves"]
    case "2":
      return ["5000 Followers", "175000 Views", "12500 Likes", "1750 Shares", "1750 Saves"]
    default:
      return []
  }
}

const getTelegramFeatures = (paket: string) => {
  switch (paket) {
    case "1":
      return ["3000 Followers", "10000 Views", "1000 Reactions"]
    case "2":
      return ["5000 Followers", "15000 Views", "1500 Reactions"]
    case "3":
      return ["10000 Followers", "30000 Views", "3000 Reactions"]
    default:
      return []
  }
}

const getFacebookFeatures = (paket: string) => {
  switch (paket) {
    case "1":
      return ["3000 Followers", "5000 Likes", "100000 Views"]
    case "2":
      return ["5000 Followers", "10000 Likes", "170000 Views"]
    case "3":
      return ["10000 Followers", "15000 Likes", "300000 Views"]
    default:
      return []
  }
}

const productData: Product[] = [
  {
    name: "Paket Bisnis",
    price: "Rp 50,000",
    category: "paket_bisnis",
    features: [
      "Website",
      "Desain Konten Sosmed",
      "Sosmed",
      "Video Promosi",
      "Copywriting",
      "SEO On-page",
    ],
    exampleUrl: "https://example.com",
    modalType: "details",
  },
  {
    name: "Paket Bisnis Reseller",
    price: "Rp 25,000",
    category: "paket_bisnis",
    features: [
      "Website",
      "Desain Konten Sosmed",
      "Sosmed",
      "Video Promosi",
      "Copywriting",
      "Alat promosi",
    ],
    exampleUrl: "https://example.com",
    modalType: "details",
  },
  {
    name: "Instagram",
    price: "",
    category: "sosmed",
    features: [],
    exampleUrl: "https://example.com/instagram",
    modalType: "details",
  },
  {
    name: "TikTok",
    price: "",
    category: "sosmed",
    features: [],
    exampleUrl: "https://example.com/tiktok",
    modalType: "details",
  },
  {
    name: "Telegram",
    price: "",
    category: "sosmed",
    features: [],
    exampleUrl: "https://example.com/telegram",
    modalType: "details",
  },
  {
    name: "Facebook",
    price: "",
    category: "sosmed",
    features: [],
    exampleUrl: "https://example.com/facebook",
    modalType: "details",
  },
  {
    name: "Desain Konten",
    price: "Rp 10,000",
    category: "lainnya",
    modalType: "contentImages",
    image: "/images/desain_konten.jpg",
  },
  {
    name: "Video Promosi",
    price: "Rp 10,000",
    category: "lainnya",
    exampleUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // URL embed YouTube
    modalType: null, // Hapus modal type
    // Hapus image agar tidak render
  },
  {
    name: "SEO & Domain Website",
    price: "Rp 25,000",
    category: "lainnya",
    features: ["Riset Kata Kunci", "Optimasi Halaman", "setting dll"],
    modalType: "seoImages",
    image: "/images/seo.jpg",
  },
  {
    name: "Jasa Iklan Online",
    price: "Rp 50,000",
    category: "lainnya",
    features: ["Meta ads", "Tiktok ads"],
    modalType: "adsImages",
    image: "/images/iklan.jpg",
  },
  {
    name: "Landing Page",
    price: "Rp 20,000",
    category: "website",
    subcategory: "business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://unbounce.com",
    image: "/images/landing_page.jpg",
  },
  {
    name: "Profil Bisnis",
    price: "Rp 20,000",
    category: "website",
    subcategory: "business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://profil-bisnis-demo.vercel.app",
    image: "/images/profil_bisnis.jpg",
  },
  {
    name: "Simple Store",
    price: "Rp 20,000",
    category: "website",
    subcategory: "business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://shopify.com",
    image: "/images/simple_store.jpg",
  },
  {
    name: "Portfolio",
    price: "Rp 20,000",
    category: "website",
    subcategory: "business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://portfolio-demo.vercel.app",
    image: "/images/portfolio.jpg",
  },
  {
    name: "Online Course",
    price: "Rp 20,000",
    category: "website",
    subcategory: "business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://course-demo.vercel.app",
    image: "/images/online_course.jpg",
  },
  {
    name: "Membership",
    price: "Rp 20,000",
    category: "website",
    subcategory: "business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://membership-demo.vercel.app",
    image: "/images/membership.jpg",
  },
  {
    name: "Link in Bio",
    price: "Rp 20,000",
    category: "website",
    subcategory: "business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://linkinbio-demo.vercel.app",
    image: "/images/link_in_bio.jpg",
  },
  {
    name: "Digital Invitation",
    price: "Rp 20,000",
    category: "website",
    subcategory: "non-business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://invitation-demo.vercel.app",
    image: "/images/digital_invitation.jpg",
  },
  {
    name: "Birthday",
    price: "Rp 20,000",
    category: "website",
    subcategory: "non-business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://birthday-demo.vercel.app",
    image: "/images/birthday.jpg",
  },
  {
    name: "Event",
    price: "Rp 20,000",
    category: "website",
    subcategory: "non-business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://event-demo.vercel.app",
    image: "/images/event.jpg",
  },
]

const imageSources = {
  contentImages: ["/images/template1.jpg", "/images/template2.jpg", "/images/template3.jpg"],
  seoImages: ["/images/seo1.jpg"],
  adsImages: ["/images/ads1.jpg"],
}

export default function ServicesPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState("paket_bisnis")
  const [activeSubcategory, setActiveSubcategory] = useState("business")
  const [activeModal, setActiveModal] = useState<Product["modalType"]>(null)
  const [modalProduct, setModalProduct] = useState<Product | null>(null)

  const [instagramPackage, setInstagramPackage] = useState("1")
  const [tiktokPackage, setTiktokPackage] = useState("1")
  const [telegramPackage, setTelegramPackage] = useState("1")
  const [facebookPackage, setFacebookPackage] = useState("1")
  const [boosterLink, setBoosterLink] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  const getProductDisplayData = useCallback(
    (product: Product): Product => {
      let currentPrice = product.price
      let currentFeatures = product.features || []

      if (product.name === "Instagram") {
        currentPrice =
          instagramPackage === "1"
            ? "Rp 50,000"
            : instagramPackage === "2"
            ? "Rp 80,000"
            : "Rp 150,000"
        currentFeatures = getInstagramFeatures(instagramPackage)
      } else if (product.name === "TikTok") {
        currentPrice = tiktokPackage === "1" ? "Rp 50,000" : "Rp 100,000"
        currentFeatures = getTikTokFeatures(tiktokPackage)
      } else if (product.name === "Telegram") {
        currentPrice =
          telegramPackage === "1"
            ? "Rp 50,000"
            : telegramPackage === "2"
            ? "Rp 70,000"
            : "Rp 140,000"
        currentFeatures = getTelegramFeatures(telegramPackage)
      } else if (product.name === "Facebook") {
        currentPrice =
          facebookPackage === "1"
            ? "Rp 50,000"
            : facebookPackage === "2"
            ? "Rp 80,000"
            : "Rp 150,000"
        currentFeatures = getFacebookFeatures(facebookPackage)
      }
      return { ...product, price: currentPrice, features: currentFeatures }
    },
    [instagramPackage, tiktokPackage, telegramPackage, facebookPackage]
  )

  const filteredProducts = productData.filter((product) => {
    if (product.category !== activeCategory) return false
    if (activeCategory === "website") {
      return product.subcategory === activeSubcategory
    }
    return true
  })

  const openModal = useCallback(
    (type: Product["modalType"], product?: Product) => {
      setActiveModal(type)
      if (product) {
        setModalProduct(getProductDisplayData(product))
      } else {
        setModalProduct(null)
      }
    },
    [getProductDisplayData]
  )

  const closeModal = useCallback(() => {
    setActiveModal(null)
    setModalProduct(null)
  }, [])

  const getButtonClasses = (isActive: boolean) => {
    const baseClasses = "px-4 py-1 rounded-lg font-medium text-sm transition-all duration-300"
    const activeClasses =
      theme === "dark" ? "bg-blue-600 text-white shadow-lg" : "bg-blue-500 text-white shadow-lg"
    const inactiveClasses =
      theme === "dark"
        ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
        : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
  }

  if (!mounted) return null

  return (
    <div
      className={`min-h-screen pt-20 pb-8 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      } px-4 sm:px-6 max-w-screen-xl mx-auto overflow-x-hidden`}
    >
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button
          onClick={() => {
            setActiveCategory("paket_bisnis")
          }}
          className={getButtonClasses(activeCategory === "paket_bisnis")}
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
          onClick={() => {
            setActiveCategory("sosmed")
          }}
          className={getButtonClasses(activeCategory === "sosmed")}
        >
          Sosmed
        </button>
        <button
          onClick={() => {
            setActiveCategory("lainnya")
          }}
          className={getButtonClasses(activeCategory === "lainnya")}
        >
          Lainnya
        </button>
      </div>

      {activeCategory === "website" && (
        <div className="flex justify-center gap-2 mb-6 px-2 sm:px-4">
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

      <div
        className={`grid ${
          activeCategory === "website" || activeCategory === "sosmed"
            ? "grid-cols-1 sm:grid-cols-2"
            : "grid-cols-1"
        } gap-3 sm:gap-4 w-full`}
      >
        {filteredProducts.map((product) => {
          const displayProduct = getProductDisplayData(product)
          return (
            <div
              key={displayProduct.name + (displayProduct.subcategory || "")}
              className={`flex flex-col rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg w-full ${
                theme === "dark"
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              } p-3`}
            >
              {displayProduct.name === "Video Promosi" ? (
                <div className="aspect-video w-full mb-2 rounded-md overflow-hidden">
                  <iframe
                    src={displayProduct.exampleUrl}
                    title={displayProduct.name}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                displayProduct.image && (
                  <div className="mb-2">
                    <img
                      src={displayProduct.image}
                      alt={displayProduct.name}
                      className="w-full h-32 object-cover rounded-md"
                    />
                  </div>
                )
              )}

              <div className="flex justify-between items-start mb-2">
                <h3
                  className={`font-bold leading-tight text-sm ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {displayProduct.name}
                </h3>
                <span
                  className={`px-2 py-1 rounded-md font-bold whitespace-nowrap ml-2 text-xs shadow-sm ${
                    displayProduct.price === "Rp 0"
                      ? theme === "dark"
                        ? "bg-green-600 text-white"
                        : "bg-green-500 text-white"
                      : theme === "dark"
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                      : "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                  }`}
                >
                  {displayProduct.price}
                </span>
              </div>
              <div className="flex-grow">
                {["Instagram", "TikTok", "Telegram", "Facebook"].includes(displayProduct.name) && (
                  <div className="mb-3 space-y-2">
                    {displayProduct.name === "Instagram" && (
                      <select
                        value={instagramPackage}
                        onChange={(e) => setInstagramPackage(e.target.value)}
                        className={`w-full px-2 py-1.5 rounded-md text-xs border ${
                          theme === "dark"
                            ? "bg-gray-700 border-gray-600 text-gray-200"
                            : "bg-white border-gray-300 text-gray-700"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      >
                        <option value="1">Paket 1</option>
                        <option value="2">Paket 2</option>
                        <option value="3">Paket 3</option>
                      </select>
                    )}
                    {displayProduct.name === "TikTok" && (
                      <select
                        value={tiktokPackage}
                        onChange={(e) => setTiktokPackage(e.target.value)}
                        className={`w-full px-2 py-1.5 rounded-md text-xs border ${
                          theme === "dark"
                            ? "bg-gray-700 border-gray-600 text-gray-200"
                            : "bg-white border-gray-300 text-gray-700"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      >
                        <option value="1">Paket 1</option>
                        <option value="2">Paket 2</option>
                      </select>
                    )}
                    {displayProduct.name === "Telegram" && (
                      <select
                        value={telegramPackage}
                        onChange={(e) => setTelegramPackage(e.target.value)}
                        className={`w-full px-2 py-1.5 rounded-md text-xs border ${
                          theme === "dark"
                            ? "bg-gray-700 border-gray-600 text-gray-200"
                            : "bg-white border-gray-300 text-gray-700"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      >
                        <option value="1">Paket 1</option>
                        <option value="2">Paket 2</option>
                        <option value="3">Paket 3</option>
                      </select>
                    )}
                    {displayProduct.name === "Facebook" && (
                      <select
                        value={facebookPackage}
                        onChange={(e) => setFacebookPackage(e.target.value)}
                        className={`w-full px-2 py-1.5 rounded-md text-xs border ${
                          theme === "dark"
                            ? "bg-gray-700 border-gray-600 text-gray-200"
                            : "bg-white border-gray-300 text-gray-700"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      >
                        <option value="1">Paket 1</option>
                        <option value="2">Paket 2</option>
                        <option value="3">Paket 3</option>
                      </select>
                    )}
                    {displayProduct.features && displayProduct.features.length > 0 && (
                      <div className="mt-2">
                        <FeatureList features={displayProduct.features} />
                      </div>
                    )}
                    <input
                      type="text"
                      value={boosterLink}
                      onChange={(e) => setBoosterLink(e.target.value)}
                      placeholder="Masukkan Link Akun"
                      className={`w-full mt-1 px-2 py-1.5 rounded-md text-xs border ${
                        theme === "dark"
                          ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-700 placeholder-gray-500"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                )}
                {displayProduct.name !== "Instagram" &&
                  displayProduct.name !== "TikTok" &&
                  displayProduct.name !== "Telegram" &&
                  displayProduct.name !== "Facebook" &&
                  displayProduct.features &&
                  displayProduct.features.length > 0 && (
                    <div className="mb-3">
                      <FeatureList features={displayProduct.features} />
                    </div>
                  )}
              </div>
              <div className="flex gap-2 mt-auto pt-2">
                <button
                  className={`flex-1 py-1.5 px-3 rounded-md font-medium text-xs transition-all duration-300 shadow-sm hover:shadow-md ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                      : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                  }`}
                >
                  Bayar
                </button>
                {displayProduct.exampleUrl && displayProduct.category === "website" && (
                  <a
                    href={displayProduct.exampleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-2 py-1.5 rounded-md font-medium text-xs transition-all duration-300 border flex items-center gap-1 shadow-sm hover:shadow-md ${
                      theme === "dark"
                        ? "border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                    }`}
                  >
                    <ExternalLink className="h-3 w-3" />
                    Contoh
                  </a>
                )}
                {displayProduct.modalType &&
                  displayProduct.category !== "website" &&
                  (displayProduct.exampleUrl ||
                    (displayProduct.modalType && imageSources[displayProduct.modalType as keyof typeof imageSources]?.length > 0) ||
                    displayProduct.modalType === "details") && (
                    <button
                      onClick={() => openModal(displayProduct.modalType, displayProduct)}
                      className={`px-2 py-1.5 rounded-md font-medium text-xs transition-all duration-300 border flex items-center gap-1 shadow-sm hover:shadow-md ${
                        theme === "dark"
                          ? "border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500"
                          : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                      }`}
                    >
                      Rincian
                    </button>
                  )}
              </div>
            </div>
          )
        })}
      </div>

      <Modal isOpen={activeModal === "details" && modalProduct !== null} onClose={closeModal} size="md">
        <OrderingInstructions />
      </Modal>

      <Modal
        isOpen={
          (activeModal === "contentImages" && modalProduct?.name === "Desain Konten") ||
          (activeModal === "seoImages" && modalProduct?.name === "SEO & Domain Website") ||
          (activeModal === "adsImages" && modalProduct?.name === "Jasa Iklan Online")
        }
        onClose={closeModal}
        size="lg"
      >
        <Swiper spaceBetween={10} slidesPerView={1} className="w-full h-64 md:h-96">
          {modalProduct &&
            imageSources[modalProduct.modalType as keyof typeof imageSources]?.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-full">
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`${modalProduct.name} Contoh ${i + 1}`}
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
      </Modal>
    </div>
  )
}
