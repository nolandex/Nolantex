"use client";

import type React from "react";
import { useEffect, useState, useCallback, useMemo } from "react";
import { useTheme } from "next-themes";
import { CheckCircle, ExternalLink, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Komponen Modal
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "full";
}

function Modal({ isOpen, onClose, children, size = "full" }: ModalProps) {
  const { theme } = useTheme();
  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-2xl",
    full: "max-w-full w-full h-[90vh]",
  }[size];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
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
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  );
}

// Komponen FeatureList
interface FeatureListProps {
  features: string[];
  textColor?: string;
}

function FeatureList({ features, textColor }: FeatureListProps) {
  const { theme } = useTheme();
  return (
    <ul className="space-y-1">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center">
          <CheckCircle
            className={`h-3 w-3 mr-2 flex-shrink-0 ${theme === "dark" ? "text-green-400" : "text-green-500"}`}
          />
          <span className={`text-xs ${textColor || (theme === "dark" ? "text-gray-300" : "text-gray-600")}`}>
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
}

// Komponen untuk instruksi pemesanan
function OrderingInstructions() {
  const { theme } = useTheme();
  return (
    <div className="space-y-4">
      <h3 className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Cara Pemesanan</h3>
      <div className="space-y-3">
        {[
          { step: "Pilih Paket", desc: "Pilih paket yang sesuai dengan kebutuhan bisnis Anda" },
          { step: "Konsultasi", desc: "Diskusikan kebutuhan spesifik dan detail proyek dengan tim kami" },
          { step: "Pembayaran", desc: "Lakukan pembayaran sesuai paket yang dipilih" },
          { step: "Pengerjaan", desc: "Tim kami akan mulai mengerjakan proyek sesuai timeline yang disepakati" },
        ].map(({ step, desc }, index) => (
          <div key={index} className={`p-3 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}>
            <h4 className={`font-semibold text-sm mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              {index + 1}. {step}
            </h4>
            <p className={`text-xs ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

interface Product {
  name: string;
  price: string;
  category: string;
  subcategory?: string;
  features?: string[];
  exampleUrl?: string;
  modalType?: "example" | "details" | "contentImages" | "videoPromo" | "seoImages" | "adsImages" | null;
}

const getInstagramBoosterFeatures = (option: string) => {
  const features: { [key: string]: string[] } = {
    "3000": ["5000 Likes", "100000 Views"],
    "5000": ["10000 Likes", "170000 Views"],
    "10000": ["15000 Likes", "300000 Views"],
  };
  return features[option] || [];
};

const getTikTokBoosterFeatures = (option: string) => {
  const base = { views: 70000, likes: 5000, shares: 700, saves: 700 };
  const multipliers: { [key: string]: number } = { "2000": 1, "5000": 2.5 };
  const multiplier = multipliers[option] || 1;
  return [
    `${(base.views * multiplier).toLocaleString()} Views`,
    `${(base.likes * multiplier).toLocaleString()} Likes`,
    `${(base.shares * multiplier).toLocaleString()} Shares`,
    `${(base.saves * multiplier).toLocaleString()} Saves`,
  ];
};

const getTelegramBoosterFeatures = (option: string) => {
  const features: { [key: string]: string[] } = {
    "3000": ["10000 Views", "1000 Reactions"],
    "5000": ["15000 Views", "1500 Reactions"],
    "10000": ["30000 Views", "3000 Reactions"],
  };
  return features[option] || [];
};

const getFacebookBoosterFeatures = (option: string) => {
  const features: { [key: string]: string[] } = {
    "3000": ["5000 Likes", "100000 Views"],
    "5000": ["10000 Likes", "170000 Views"],
    "10000": ["15000 Likes", "300000 Views"],
  };
  return features[option] || [];
};

const productData: Product[] = [
  // Data produk sama seperti sebelumnya, tidak diubah untuk singkatnya
  // Pastikan semua URL contoh (exampleUrl) valid untuk menghindari error
];

const imageSources = {
  contentImages: ["/images/template1.jpg", "/images/template2.jpg", "/images/template3.jpg"],
  seoImages: ["/images/seo1.jpg"],
  adsImages: ["/images/ads1.jpg"],
};

export default function ServicesPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("paket_bisnis");
  const [activeSubcategory, setActiveSubcategory] = useState("business");
  const [activeModal, setActiveModal] = useState<Product["modalType"]>(null);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [boosterOptions, setBoosterOptions] = useState({
    instagram: "3000",
    tiktok: "2000",
    telegram: "3000",
    facebook: "3000",
  });
  const [boosterLink, setBoosterLink] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const getProductDisplayData = useCallback(
    (product: Product): Product => {
      const boosterPrices: { [key: string]: { [key: string]: string } } = {
        "Instagram Booster": { "3000": "Rp 50,000", "5000": "Rp 80,000", "10000": "Rp 150,000" },
        "TikTok Booster": { "2000": "Rp 50,000", "5000": "Rp 100,000" },
        "Telegram Booster": { "3000": "Rp 50,000", "5000": "Rp 70,000", "10000": "Rp 140,000" },
        "Facebook Booster": { "3000": "Rp 50,000", "5000": "Rp 80,000", "10000": "Rp 150,000" },
      };

      const boosterFeatures: { [key: string]: (option: string) => string[] } = {
        "Instagram Booster": getInstagramBoosterFeatures,
        "TikTok Booster": getTikTokBoosterFeatures,
        "Telegram Booster": getTelegramBoosterFeatures,
        "Facebook Booster": getFacebookBoosterFeatures,
      };

      const option = boosterOptions[product.name.toLowerCase().split(" ")[0] as keyof typeof boosterOptions];
      const price = boosterPrices[product.name]?.[option] || product.price;
      const features = boosterFeatures[product.name]?.(option) || product.features || [];

      return { ...product, price, features };
    },
    [boosterOptions],
  );

  const filteredProducts = useMemo(
    () =>
      productData.filter((product) =>
        activeCategory === "website"
          ? product.category === activeCategory && product.subcategory === activeSubcategory
          : product.category === activeCategory,
      ),
    [activeCategory, activeSubcategory],
  );

  const groupedProducts = useMemo(() => {
    const groups: Product[][] = [];
    for (let i = 0; i < filteredProducts.length; i += 2) {
      groups.push(filteredProducts.slice(i, i + 2));
    }
    return groups;
  }, [filteredProducts]);

  const openModal = useCallback(
    (type: Product["modalType"], product?: Product) => {
      setActiveModal(type);
      setModalProduct(product ? getProductDisplayData(product) : null);
    },
    [getProductDisplayData],
  );

  const closeModal = useCallback(() => {
    setActiveModal(null);
    setModalProduct(null);
  }, []);

  const getButtonClasses = (isActive: boolean) =>
    `px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
      isActive
        ? theme === "dark"
          ? "bg-blue-600 text-white shadow-lg"
          : "bg-blue-500 text-white shadow-lg"
        : theme === "dark"
          ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
          : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
    }`;

  if (!mounted) return null;

  return (
    <div className={`min-h-screen pt-20 pb-8 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:flex sm:flex-row sm:justify-center gap-2 sm:gap-4 mb-6">
          {[
            { label: "Paket Bisnis", category: "paket_bisnis" },
            { label: "Website", category: "website", subcategory: "business" },
            { label: "Sosmed Booster", category: "sosmed_booster" },
            { label: "Lainnya", category: "lainnya" },
          ].map(({ label, category, subcategory }) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                if (subcategory) setActiveSubcategory(subcategory);
              }}
              className={getButtonClasses(activeCategory === category)}
            >
              {label}
            </button>
          ))}
        </div>

        {activeCategory === "website" && (
          <div className="flex justify-center gap-2 mb-6">
            {[
              { label: "Bisnis", subcategory: "business" },
              { label: "Non-Bisnis", subcategory: "non-business" },
            ].map(({ label, subcategory }) => (
              <button
                key={subcategory}
                onClick={() => setActiveSubcategory(subcategory)}
                className={getButtonClasses(activeSubcategory === subcategory)}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        <div className="space-y-3 sm:space-y-4">
          {groupedProducts.map((group, groupIndex) => (
            <div key={groupIndex} className="grid grid-cols-2 gap-3 sm:gap-4">
              {group.map((product) => {
                const displayProduct = getProductDisplayData(product);
                const isBooster = ["Instagram Booster", "TikTok Booster", "Telegram Booster", "Facebook Booster"].includes(
                  displayProduct.name,
                );

                return (
                  <div
                    key={`${displayProduct.name}-${displayProduct.subcategory || ""}`}
                    className={`flex flex-col rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg ${
                      theme === "dark" ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"
                    } p-3`}
                  >
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
                      {isBooster && (
                        <div className="mb-3 space-y-2">
                          <select
                            value={boosterOptions[displayProduct.name.toLowerCase().split(" ")[0] as keyof typeof boosterOptions]}
                            onChange={(e) =>
                              setBoosterOptions({
                                ...boosterOptions,
                                [displayProduct.name.toLowerCase().split(" ")[0]]: e.target.value,
                              })
                            }
                            className={`w-full px-2 py-1.5 rounded-md text-xs border ${
                              theme === "dark"
                                ? "bg-gray-700 border-gray-600 text-gray-200"
                                : "bg-white border-gray-300 text-gray-700"
                            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                          >
                            {displayProduct.name === "TikTok Booster"
                              ? [
                                  { value: "2000", label: "2000 Followers" },
                                  { value: "5000", label: "5000 Followers" },
                                ].map(({ value, label }) => (
                                  <option key={value} value={value}>
                                    {label}
                                  </option>
                                ))
                              : [
                                  { value: "3000", label: "3000 Followers" },
                                  { value: "5000", label: "5000 Followers" },
                                  { value: "10000", label: "10000 Followers" },
                                ].map(({ value, label }) => (
                                  <option key={value} value={value}>
                                    {label}
                                  </option>
                                ))}
                          </select>
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
                          {displayProduct.features?.length > 0 && (
                            <div className="mt-1">
                              <FeatureList features={displayProduct.features} />
                            </div>
                          )}
                        </div>
                      )}

                      {!isBooster && displayProduct.features?.length > 0 && (
                        <div className="mb-3">
                          <FeatureList features={displayProduct.features} />
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2 mt-auto">
                      <button
                        className={`flex-1 py-1.5 px-3 rounded-md font-medium text-xs transition-all duration-300 shadow-sm hover:shadow-md ${
                          theme === "dark"
                            ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                            : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                        }`}
                      >
                        Bayar
                      </button>
                      {displayProduct.modalType &&
                        (displayProduct.exampleUrl ||
                          imageSources[displayProduct.modalType as keyof typeof imageSources]?.length > 0 ||
                          displayProduct.modalType === "details") && (
                          <button
                            onClick={() => openModal(displayProduct.modalType, displayProduct)}
                            className={`px-2 py-1.5 rounded-md font-medium text-xs transition-all duration-300 border flex items-center gap-1 shadow-sm hover:shadow-md ${
                              theme === "dark"
                                ? "border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500"
                                : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                            }`}
                          >
                            {displayProduct.modalType === "example" ? (
                              <>
                                <ExternalLink className="h-3 w-3" /> Contoh
                              </>
                            ) : (
                              "Rincian"
                            )}
                          </button>
                        )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <Modal isOpen={activeModal === "example" && !!modalProduct} onClose={closeModal} size="full">
          {modalProduct?.exampleUrl && (
            <iframe
              src={modalProduct.exampleUrl}
              title={`Contoh ${modalProduct.name}`}
              className="w-full h-full border-0"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          )}
        </Modal>

        <Modal isOpen={activeModal === "details" && !!modalProduct} onClose={closeModal} size="md">
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
                      loading="lazy"
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

        <Modal isOpen={activeModal === "videoPromo" && modalProduct?.name === "Video Promosi"} onClose={closeModal} size="lg">
          {modalProduct?.exampleUrl && (
            <div className="aspect-video w-full">
              <iframe
                src={modalProduct.exampleUrl}
                title={`Contoh ${modalProduct.name}`}
                className="w-full h-full rounded-md"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
                         }
