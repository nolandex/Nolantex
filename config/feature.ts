import { LucideIcon, GlobeIcon, DollarSignIcon } from "lucide-react";
import { IconType } from "react-icons";
import { FaRobot } from "react-icons/fa";
import { FaImages } from "react-icons/fa6";
import { MdCampaign } from "react-icons/md";

// ENGLISH (Updated with matched icons)
export const FEATURES_EN = [
  {
    title: "Website profesional",
    content: "Dapatkan website yang responsif",
    icon: GlobeIcon, // Changed to GlobeIcon for better relevance to websites
  },
  {
    title: "Sosmed Booster",
    content: "Dapatkan peningkatan sosial media dengan booster followers like view dll.",
    icon: DollarSignIcon, // Relevant for boosting/growth
  },
  {
    title: "Gratis Trik & Alat Promosi",
    content: "Dapatkan akses ke berbagai trik promosi dan alat promosi gratis untuk meningkatkan penjualan.",
    icon: MdCampaign, // Campaign icon fits promotion tools
  },
  {
    title: "Chatbot 24 Jam",
    content: "Capek balas chat? Chatbot kami layani pembeli otomatis, bahkan saat kamu offline.",
    icon: FaRobot, // Robot icon fits chatbot
  },
  {
    title: "Desain konten Siap Pakai",
    content: "Susah bikin konten? Dapatkan puluhan desain konten yang siap posting.",
    icon: FaImages, // Images icon fits content design
  },
];

interface FeaturesCollection {
  [key: `FEATURES_${string}`]: { title: string; content: string; icon: IconType | LucideIcon | string }[];
}

export const ALL_FEATURES: FeaturesCollection = {
  FEATURES_EN,
};
