// src/app/SecondPage.tsx
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { CheckCircle, ExternalLink, X, ChevronDown } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Product {
  name: string;
  price: string;
  category: string;
  subcategory?: string;
  features?: string[];
  exampleUrl?: string;
}

const CATEGORIES = {
  PAKET_BISNIS: "paket_bisnis",
  WEBSITE: "website",
} as const;

const SUBCATEGORIES = {
  BUSINESS: "business",
  NON_BUSINESS: "non-business",
} as const;

const BOOSTER_TYPES = {
  INSTAGRAM: "Instagram Booster",
  TIKTOK: "TikTok Booster",
  TELEGRAM: "Telegram Booster",
} as const;

export default function SecondPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState(CATEGORIES.PAKET_BISNIS);
  const [activeSubcategory, setActiveSubcategory] = useState(SUBCATEGORIES.BUSINESS);
  const [boosterType, setBoosterType] = useState(BOOSTER_TYPES.INSTAGRAM);
  const [boosterOptions, setBoosterOptions] = useState({
    instagram: "3000",
    tiktok: "2000",
    telegram: "3000",
    link: "",
  });
  const [modal, setModal] = useState<{
    example?: Product | null;
    details?: Product | null;
    contentImages?: boolean;
    videoPromo?: boolean;
    seoImages?: boolean;
    adsImages?: boolean;
  }>({});

  useEffect(() => {
    setMounted(true);
    setTheme("light");
  }, [setTheme]);

  const getBoosterFeatures = (type: string, option: string) => {
    if (type === BOOSTER_TYPES.INSTAGRAM) {
      return option === "3000"
        ? ["5000 Likes", "100000 Views"]
        : option === "5000"
        ? ["10000 Likes", "170000 Views"]
        : ["15000 Likes", "300000 Views"];
    }
    if (type === BOOSTER_TYPES.TIKTOK) {
      const base = { views: 70000, likes: 5000, shares: 700, saves: 700 };
      return option === "2000"
        ? [`${base.views} Views`, `${base.likes} Likes`, `${base.shares} Shares`, `${base.saves} Saves`]
        : [`${base.views * 2.5} Views`, `${base.likes * 2.5} Likes`, `${base.shares * 2.5} Shares`, `${base.saves * 2.5} Saves`];
    }
    if (type === BOOSTER_TYPES.TELEGRAM) {
      return option === "3000"
        ? ["10000 Views", "1000 Reactions"]
        : option === "5000"
        ? ["15000 Views", "1500 Reactions"]
        : ["30000 Views", "3000 Reactions"];
    }
    return [];
  };

  const products: Product[] = [
    { name: "Paket Bisnis", price: "Rp 50,000", category: CATEGORIES.PAKET_BISNIS, features: ["Website", "Content Design", "Social Media Booster", "SEO Website", "Copywriting"], exampleUrl: "https://example.com" },
    { name: BOOSTER_TYPES.INSTAGRAM, price: boosterOptions.instagram === "3000" ? "Rp 50,000" : boosterOptions.instagram === "5000" ? "Rp 80,000" : "Rp 150,000", category: CATEGORIES.PAKET_BISNIS, features: getBoosterFeatures(BOOSTER_TYPES.INSTAGRAM, boosterOptions.instagram), exampleUrl: "https://example.com/instagram" },
    { name: BOOSTER_TYPES.TIKTOK, price: boosterOptions.tiktok === "2000" ? "Rp 50,000" : "Rp 100,000", category: CATEGORIES.PAKET_BISNIS, features: getBoosterFeatures(BOOSTER_TYPES.TIKTOK, boosterOptions.tiktok), exampleUrl: "https://example.com/tiktok" },
    { name: BOOSTER_TYPES.TELEGRAM, price: boosterOptions.telegram === "3000" ? "Rp 50,000" : boosterOptions.telegram === "5000" ? "Rp 70,000" : "Rp 140,000", category: CATEGORIES.PAKET_BISNIS, features: getBoosterFeatures(BOOSTER_TYPES.TELEGRAM, boosterOptions.telegram), exampleUrl: "https://example.com/telegram" },
    { name: "Desain Konten", price: "Rp 10,000", category: CATEGORIES.PAKET_BISNIS },
    { name: "Video Promosi", price: "Rp 10,000", category: CATEGORIES.PAKET_BISNIS, exampleUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { name: "SEO Website", price: "Rp 25,000", category: CATEGORIES.PAKET_BISNIS, features: ["Keyword Research", "On-Page Optimization", "Link Building"] },
    { name: "Jasa Iklan Online", price: "Rp 100,000", category: CATEGORIES.PAKET_BISNIS, features: ["Meta Ads", "TikTok Ads"] },
    { name: "Landing Page", price: "Rp 25,000", category: CATEGORIES.WEBSITE, subcategory: SUBCATEGORIES.BUSINESS, features: ["Free Domain", "Free Hosting"], exampleUrl: "https://unbounce.com" },
    { name: "Profil Bisnis", price: "Rp 25,000", category: CATEGORIES.WEBSITE, subcategory: SUBCATEGORIES.BUSINESS, features: ["Free Domain", "Free Hosting"], exampleUrl: "https://profil-bisnis-demo.vercel.app" },
    { name: "Simple Store", price: "Rp 25,000", category: CATEGORIES.WEBSITE, subcategory: SUBCATEGORIES.BUSINESS, features: ["Free Domain", "Free Hosting"], exampleUrl: "https://shopify.com" },
    { name: "Portfolio", price: "Rp 25,000", category: CATEGORIES.WEBSITE, subcategory: SUBCATEGORIES.BUSINESS, features: ["Free Domain", "Free Hosting"], exampleUrl: "https://portfolio-demo.vercel.app" },
    { name: "Online Course", price: "Rp 25,000", category: CATEGORIES.WEBSITE, subcategory: SUBCATEGORIES.BUSINESS, features: ["Free Domain", "Free Hosting"], exampleUrl: "https://course-demo.vercel.app" },
    { name: "Membership", price: "Rp 25,000", category: CATEGORIES.WEBSITE, subcategory: SUBCATEGORIES.BUSINESS, features: ["Free Domain", "Free Hosting"], exampleUrl: "https://membership-demo.vercel.app" },
    { name: "Link in Bio", price: "Rp 25,000", category: CATEGORIES.WEBSITE, subcategory: SUBCATEGORIES.BUSINESS, features: ["Free Domain", "Free Hosting"], exampleUrl: "https://linkinbio-demo.vercel.app" },
    { name: "Digital Invitation", price: "Rp 25,000", category: CATEGORIES.WEBSITE, subcategory: SUBCATEGORIES.NON_BUSINESS, features: ["Free Domain", "Free Hosting"], exampleUrl: "https://invitation-demo.vercel.app" },
    { name: "Birthday", price: "Rp 25,000", category: CATEGORIES.WEBSITE, subcategory: SUBCATEGORIES.NON_BUSINESS, features: ["Free Domain", "Free Hosting"], exampleUrl: "https://birthday-demo.vercel.app" },
    { name: "Event", price: "Rp 25,000", category: CATEGORIES.WEBSITE, subcategory: SUBCATEGORIES.NON_BUSINESS, features: ["Free Domain", "Free Hosting"], exampleUrl: "https://event-demo.vercel.app" },
  ];

  const filteredProducts = products.filter((product) => {
    if (product.category !== activeCategory) return false;
    if (activeCategory === CATEGORIES.WEBSITE) return product.subcategory === activeSubcategory;
    if (Object.values(BOOSTER_TYPES).includes(product.name)) return product.name === boosterType;
    return true;
  });

  const groupedProducts: Product[][] = [];
  for (let i = 0; i < filteredProducts.length; i += 2) {
    groupedProducts.push(filteredProducts.slice(i, i + 2));
  }

  const getButtonStyles = (isActive: boolean) =>
    `px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
      isActive
        ? theme === "dark"
          ? "bg-green-600 text-white shadow-lg"
          : "bg-blue-500 text-white shadow-lg"
        : theme === "dark"
        ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
        : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
    }`;

  const getCardStyles = () =>
    `rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg ${
      theme === "dark" ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"
    }`;

  const getPriceStyles = (price: string) =>
    `px-2 py-1 rounded-md text-xs font-bold whitespace-nowrap ${
      price === "Rp 0"
        ? theme === "dark"
          ? "bg-green-600 text-white"
          : "bg-green-500 text-white"
        : theme === "dark"
        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
        : "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
    } shadow-sm`;

  const getModalStyles = (size: "full" | "md" | "2xl") =>
    `max-w-${size} w-full rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"} overflow-hidden shadow-2xl ${
      size !== "full" ? "p-4" : ""
    } relative`;

  const getCloseButtonStyles = () =>
    `absolute top-4 right-4 p-3 rounded-md transition-all duration-200 z-10 pointer-events-auto ${
      theme === "dark" ? "hover:bg-gray-700 text-gray-400 hover:text-white" : "hover:bg-gray-200 text-gray-600 hover:text-gray-900"
    }`;

  if (!mounted) return null;

  return (
    <div className={`min-h-screen pt-20 pb-8 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto max-w-full px-2">
        <div className="grid grid-cols-2 gap-2 mb-6">
          <button
            onClick={() => {
              setActiveCategory(CATEGORIES.PAKET_BISNIS);
              setActiveSubcategory(SUBCATEGORIES.BUSINESS);
            }}
            className={getButtonStyles(activeCategory === CATEGORIES.PAKET_BISNIS)}
          >
            Paket Bisnis
          </button>
          <button
            onClick={() => {
              setActiveCategory(CATEGORIES.WEBSITE);
              setActiveSubcategory(SUBCATEGORIES.BUSINESS);
            }}
            className={getButtonStyles(activeCategory === CATEGORIES.WEBSITE)}
          >
            Website
          </button>
        </div>

        {activeCategory === CATEGORIES.WEBSITE && (
          <div className="flex justify-center gap-2 mb-6">
            <button
              onClick={() => setActiveSubcategory(SUBCATEGORIES.BUSINESS)}
              className={getButtonStyles(activeSubcategory === SUBCATEGORIES.BUSINESS)}
            >
              Business
            </button>
            <button
              onClick={() => setActiveSubcategory(SUBCATEGORIES.NON_BUSINESS)}
              className={getButtonStyles(activeSubcategory === SUBCATEGORIES.NON_BUSINESS)}
            >
              Non-Business
            </button>
          </div>
        )}

        <div className="space-y-3">
          {groupedProducts.map((group, groupIndex) => (
            <div key={groupIndex} className="grid grid-cols-2 gap-3">
              {group.map((product, index) => (
                <div key={index} className={getCardStyles()}>
                  <div className="p-3">
                    <div className="flex justify-between items-center mb-2">
                      {Object.values(BOOSTER_TYPES).includes(product.name) ? (
                        <div className="inline-flex items-center gap-1">
                          <select
                            value={boosterType}
                            onChange={(e) => setBoosterType(e.target.value)}
                            className={`text-sm font-bold leading-tight bg-transparent border-none appearance-none focus:outline-none cursor-pointer ${
                              theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {Object.values(BOOSTER_TYPES).map((type) => (
                              <option key={type} value={type}>
                                {type.split(" ")[0]}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className={`h-4 w-4 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`} />
                        </div>
                      ) : (
                        <h3 className={`text-sm font-bold leading-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                          {product.name}
                        </h3>
                      )}
                      <span className={getPriceStyles(product.price)}>{product.price}</span>
                    </div>

                    {(product.name === "Paket Bisnis" || product.name === "SEO Website" || product.name === "Jasa Iklan Online" || activeCategory === CATEGORIES.WEBSITE) && product.features && (
                      <div className="mb-3">
                        <ul className="space-y-1">
                          {product.features.slice(0, product.name === "Paket Bisnis" ? 3 : undefined).map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <CheckCircle className={`h-3 w-3 mr-2 flex-shrink-0 ${theme === "dark" ? "text-green-400" : "text-green-500"}`} />
                              <span className={`text-xs ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {Object.values(BOOSTER_TYPES).includes(product.name) && (
                      <div className="mb-3">
                        <select
                          value={boosterOptions[product.name === BOOSTER_TYPES.INSTAGRAM ? "instagram" : product.name === BOOSTER_TYPES.TIKTOK ? "tiktok" : "telegram"]}
                          onChange={(e) =>
                            setBoosterOptions({
                              ...boosterOptions,
                              [product.name === BOOSTER_TYPES.INSTAGRAM ? "instagram" : product.name === BOOSTER_TYPES.TIKTOK ? "tiktok" : "telegram"]: e.target.value,
                            })
                          }
                          className={`w-full px-2 py-1.5 rounded-md text-xs border ${
                            theme === "dark" ? "bg-gray-700 border-gray-600 text-gray-200" : "bg-white border-gray-300 text-gray-700"
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        >
                          {product.name === BOOSTER_TYPES.TIKTOK
                            ? ["2000", "5000"].map((opt) => (
                                <option key={opt} value={opt}>
                                  {opt} Followers
                                </option>
                              ))
                            : ["3000", "5000", "10000"].map((opt) => (
                                <option key={opt} value={opt}>
                                  {opt} Followers
                                </option>
                              ))}
                        </select>
                        <input
                          type="text"
                          value={boosterOptions.link}
                          onChange={(e) => setBoosterOptions({ ...boosterOptions, link: e.target.value })}
                          placeholder="Link Akun"
                          className={`w-full mt-2 px-2 py-1.5 rounded-md text-xs border ${
                            theme === "dark" ? "bg-gray-700 border-gray-600 text-gray-200" : "bg-white border-gray-300 text-gray-700"
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
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
                      {product.exampleUrl && activeCategory === CATEGORIES.PAKET_BISNIS && product.name !== "Video Promosi" && (
                        <button
                          onClick={() => setModal({ ...modal, details: product })}
                          className={`px-2 py-1.5 rounded-md font-medium text-xs transition-all duration-300 border ${
                            theme === "dark" ? "border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500" : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                          } flex items-center gap-1 shadow-sm hover:shadow-md`}
                        >
                          Rincian
                        </button>
                      )}
                      {product.exampleUrl && activeCategory === CATEGORIES.WEBSITE && (
                        <button
                          onClick={() => setModal({ ...modal, example: product })}
                          className={`px-2 py-1.5 rounded-md font-medium text-xs transition-all duration-300 border ${
                            theme === "dark" ? "border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500" : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                          } flex items-center gap-1 shadow-sm hover:shadow-md`}
                        >
                          <ExternalLink className="h-3 w-3" />
                          Example
                        </button>
                      )}
                      {product.name === "Desain Konten" && (
                        <button
                          onClick={() => setModal({ ...modal, contentImages: true })}
                          className={`px-2 py-1.5 rounded-md font-medium text-xs transition-all duration-300 border ${
                            theme === "dark" ? "border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500" : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                          } flex items-center gap-1 shadow-sm hover:shadow-md`}
                        >
                          Contoh
                        </button>
                      )}
                      {product.name === "Video Promosi" && (
                        <button
                          onClick={() => setModal({ ...modal, videoPromo: true })}
                          className={`px-2 py-1.5 rounded-md font-medium text-xs transition-all duration-300 border ${
                            theme === "dark" ? "border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500" : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                          } flex items-center gap-1 shadow-sm hover:shadow-md`}
                        >
                          Contoh
                        </button>
                      )}
                      {product.name === "SEO Website" && (
                        <button
                          onClick={() => setModal({ ...modal, seoImages: true })}
                          className={`px-2 py-1.5 rounded-md font-medium text-xs transition-all duration-300 border ${
                            theme === "dark" ? "border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500" : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                          } flex items-center gap-1 shadow-sm hover:shadow-md`}
                        >
                          Contoh
                        </button>
                      )}
                      {product.name === "Jasa Iklan Online" && (
                        <button
                          onClick={() => setModal({ ...modal, adsImages: true })}
                          className={`px-2 py-1.5 rounded-md font-medium text-xs transition-all duration-300 border ${
                            theme === "dark" ? "border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500" : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
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

        {modal.example && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={getModalStyles("full")}>
              <button onClick={() => setModal({ ...modal, example: null })} className={getCloseButtonStyles()}>
                <X className="h-5 w-5" />
              </button>
              <iframe
                src={modal.example.exampleUrl}
                title={`Example ${modal.example.name}`}
                className="w-full h-full"
                frameBorder="0"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
          </div>
        )}

        {modal.details && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={getModalStyles("md")}>
              <button onClick={() => setModal({ ...modal, details: null })} className={getCloseButtonStyles()}>
                <X className="h-5 w-5" />
              </button>
              <ul className="space-y-2">
                {(modal.details.name === "Paket Bisnis" ? modal.details.features?.slice(3) : modal.details.features)?.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className={`h-4 w-4 mr-2 flex-shrink-0 ${theme === "dark" ? "text-green-400" : "text-green-500"}`} />
                    <span className={`text-smස

System: It looks like the code you provided was cut off. Would you like me to continue simplifying the remaining part of the code or address any specific section? Additionally, could you clarify if you want me to focus on a particular functionality or just complete the simplified version of the modal section?
