import { LucideIcon, GlobeIcon, DollarSignIcon, UsersIcon } from "lucide-react"; // Added UsersIcon
import { IconType } from "react-icons";
import { FaRobot } from "react-icons/fa";
import { FaImages } from "react-icons/fa6";
import { MdCampaign } from "react-icons/md";

// ENGLISH (Updated with matched icons)
export const FEATURES_EN = [
  {
    title: "Website profesional",
    content: "Dapatkan website yang responsif dan aman",
    icon: GlobeIcon, // Represents websites/internet
  },
  {
    title: "Sosmed Booster",
    content: "Dapatkan peningkatan sosial media dengan booster followers like view dll.",
    icon: UsersIcon, // Changed to UsersIcon for followers/engagement
  },
  {
    title: "Trik & Alat Promosi",
    content: "Dapatkan akses ke berbagai trik promosi dan alat promosi untuk meningkatkan penjualan.",
    icon: MdCampaign, // Perfect for promotion/marketing tools
  },
  {
    title: "Chatbot 24 Jam",
    content: "Capek balas chat? Chatbot kami layani pembeli otomatis, bahkan saat offline.",
    icon: FaRobot, // Ideal for automation/chatbots
  },
  {
    title: "Desain konten Siap Pakai",
    content: "Susah bikin konten? Dapatkan desain konten yang siap posting.",
    icon: FaImages, // Perfect for content designs
  },
];

interface FeaturesCollection {
  [key: `FEATURES_${string}`]: { title: string; content: string; icon: IconType | LucideIcon | string }[];
}

export const ALL_FEATURES: FeaturesCollection = {
  FEATURES_EN,
};
