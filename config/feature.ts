import { LucideIcon, GlobeIcon, DollarSignIcon, UsersIcon } from "lucide-react";
import { IconType } from "react-icons";
import { FaRobot } from "react-icons/fa";
import { FaImages } from "react-icons/fa6";
import { MdCampaign } from "react-icons/md";

// FINAL - Deskripsi lebih menarik untuk pembeli
export const FEATURES_EN = [
  {
    title: "Website Profesional",
    content: "Dapatkan website modern & responsif yang bikin pembeli langsung percaya dan siap beli!",
    icon: GlobeIcon,
  },
  {
    title: "Chatbot Otomatis 24 Jam",
    content: "Jualan nonstop! Chatbot cerdas kami layani pembeli 24/7, meski kamu lagi santai atau tidur.",
    icon: FaRobot,
  },
  {
    title: "Desain Konten Siap Posting",
    content: "Konten kece siap pakai! Desain keren + caption menarik bikin pembeli langsung klik order.",
    icon: FaImages,
  },
  {
    title: "Sosmed Booster",
    content: "Akun medsos profesional dengan Tambah followers, like, & view untuk tarik lebih banyak pembeli.",
    icon: UsersIcon,
  },
  {
    title: "Program Reseller Profit 200%",
    content: "Cuan Max! Jual produk Bisnovo, raup untung Rp20.000/produk",
    icon: DollarSignIcon,
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
