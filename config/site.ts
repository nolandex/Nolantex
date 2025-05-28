import { SiteConfig } from "@/types/siteConfig";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaWhatsapp, FaTiktok, FaTelegram, FaInstagram, FaDiscord } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6"; // Tambahkan ikon untuk X dan Threads

const baseSiteConfig = {
  name: "Bisnovo",
  description:
    "A comprehensive digital solutions provider helping entrepreneurs and small businesses build their online presence with websites, chatbots, social media, automation, and a reseller program.",
  url: "https://bisnovo.com", // Ganti dari nolandex.com ke bisnovo.com
  ogImage: "https://bisnovo.com/og.png", // Ganti dari nolandex.com ke bisnovo.com
  metadataBase: '/',
  keywords: ["digital presence", "website creation", "chatbots", "social media management", "automation", "reseller program"],
  authors: [
    {
      name: "Bisnovo", // Ganti dari NolanDex ke Bisnovo
      url: "", // Dikosongkan untuk menghapus link eksternal
      twitter: "", // Dikosongkan untuk menghapus link eksternal
    }
  ],
  creator: '@bisnovo', // Ganti dari @NolanDex ke @bisnovo
  openSourceURL: "", // Dikosongkan untuk menghapus link eksternal
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'dark',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: 'whatsapp', href: "https://wa.me/6285156779923?text=Hi%2C%20I'm%20interested%20in%20your%20business%20setup%20services", icon: FaWhatsapp }, // Tetap gunakan WhatsApp dari konfigurasi sebelumnya
    { name: 'email', href: "mailto:bisnovohq@gmail.com", icon: MdEmail }, // Ganti ke bisnovohq@gmail.com
    { name: 'tiktok', href: "https://www.tiktok.com/@bisnovo", icon: FaTiktok }, // Ganti ke https://www.tiktok.com/@bisnovo
    { name: 'instagram', href: "https://www.instagram.com/bisnovo/", icon: FaInstagram }, // Tambahkan Instagram ke header
  ],
  footerLinks: [
    { name: 'email', href: "mailto:bisnovohq@gmail.com", icon: MdEmail }, // Ganti ke bisnovohq@gmail.com
    { name: 'instagram', href: "https://www.instagram.com/bisnovo/", icon: FaInstagram }, // Ganti ke https://www.instagram.com/bisnovo/
    { name: 'discord', href: "https://discord.gg/g7AP56Ub", icon: FaDiscord }, // Ganti ke https://discord.gg/g7AP56Ub
    { name: 'tiktok', href: "https://www.tiktok.com/@bisnovo", icon: FaTiktok }, // Ganti ke https://www.tiktok.com/@bisnovo
    { name: 'facebook', href: "https://www.facebook.com/bisnovo", icon: FaFacebook }, // Ganti ke https://www.facebook.com/bisnovo
    { name: 'telegram', href: "https://t.me/bisnovo", icon: FaTelegram }, // Ganti ke https://t.me/bisnovo
    { name: 'twitter', href: "https://x.com/bisnovo?s=09", icon: FaXTwitter }, // Tambahkan X/Twitter
    { name: 'threads', href: "https://www.threads.net/@bisnovo", icon: FaThreads }, // Tambahkan Threads
  ],
  footerProducts: [] // Tetap kosong sesuai perubahan sebelumnya
};

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    site: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
};
