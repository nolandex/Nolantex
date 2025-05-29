import { LucideIcon, MagnetIcon } from "lucide-react";
import { IconType } from "react-icons";
import { FaToolbox } from "react-icons/fa";
import { FaEarthAsia, FaMobileScreenButton } from "react-icons/fa6";
import { MdCloudUpload } from "react-icons/md";

// ENGLISH (Revised focus)
export const FEATURES_EN = [
  {
    title: "Gabung Reseller Gratis",
    content: "Gratis Website dan jadi reseller Bisnovo.",
    icon: FaToolbox,
  },
  {
    title: "Profit Minimal Rp20.000/Produk",
    content: "Dapatkan keuntungan minimal Rp20.000 untuk setiap produk yang terjual.",
    icon: FaMobileScreenButton,
  },
  {
    title: "Gratis Trik & Alat Promosi",
    content: "Dapatkan akses ke berbagai trik promosi dan alat pemasaran gratis untuk meningkatkan penjualan.",
    icon: MdCloudUpload,
  },
  {
    title: "Chatbot 24 Jam",
    content: "Capek balas chat? Chatbot kami layani pembeli otomatis, bahkan saat kamu offline.",
    icon: FaEarthAsia,
  },
  {
    title: "Konten Sosmed Siap Pakai",
    content: "Susah bikin konten? Dapatkan puluhan desain konten yang siap posting.",
    icon: MagnetIcon,
  },
];

// Interface for TypeScript (optional)
interface FeatureItem {
  title: string;
  content: string;
  icon: IconType | LucideIcon;
}
