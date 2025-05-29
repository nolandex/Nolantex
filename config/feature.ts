import { LucideIcon, MagnetIcon, DollarSignIcon } from "lucide-react";
import { IconType } from "react-icons";
import { FaToolbox, FaRobot } from "react-icons/fa";
import { FaImages } from "react-icons/fa6";
import { MdCampaign } from "react-icons/md";

// ENGLISH (Updated with matched icons)
export const FEATURES_EN = [
  {
    title: "Gabung Reseller Gratis",
    content: "Gratis Website dan jadi reseller Bisnovo.",
    icon: FaToolbox,
  },
  {
    title: "Profit Minimal Rp20.000/Produk",
    content: "Dapatkan keuntungan minimal Rp20.000 untuk setiap produk yang terjual.",
    icon: DollarSignIcon,
  },
  {
    title: "Gratis Trik & Alat Promosi",
    content: "Dapatkan akses ke berbagai trik promosi dan alat pemasaran gratis untuk meningkatkan penjualan.",
    icon: MdCampaign,
  },
  {
    title: "Chatbot 24 Jam",
    content: "Capek balas chat? Chatbot kami layani pembeli otomatis, bahkan saat kamu offline.",
    icon: FaRobot,
  },
  {
    title: "Konten Sosmed Siap Pakai",
    content: "Susah bikin konten? Dapatkan puluhan desain konten yang siap posting.",
    icon: FaImages,
  },
];

interface FeaturesCollection {
  [key: `FEATURES_${string}`]: {
    title: string;
    content: string;
    icon: IconType | LucideIcon | string;
  }[];
}

export const ALL_FEATURES: FeaturesCollection = {
  FEATURES_EN,
};
