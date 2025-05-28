import { SiteConfig } from "@/types/siteConfig";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaWhatsapp, FaTiktok, FaTelegram, FaInstagram, FaDiscord } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";

const baseSiteConfig = {
  name: "Bisnovo",
  description:
    "A comprehensive digital solutions provider helping entrepreneurs and small businesses build their online presence with websites, chatbots, social media, automation, and a reseller program.",
  url: "https://bisnovo.com",
  ogImage: "https://bisnovo.com/og.png",
  metadataBase: '/',
  keywords: ["digital presence", "website creation", "chatbots", "social media management", "automation", "reseller program"],
  authors: [
    {
      name: "Bisnovo",
      url: "",
      twitter: "",
    }
  ],
  creator: '@bisnovo',
  openSourceURL: "",
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
    { name: 'whatsapp', href: "https://wa.me/6285156779923?text=Hi%2C%20I'm%20interested%20in%20your%20business%20setup%20services", icon: FaWhatsapp },
    { name: 'email', href: "mailto:bisnovohq@gmail.com", icon: MdEmail },
    { name: 'tiktok', href: "https://www.tiktok.com/@bisnovo", icon: FaTiktok },
    { name: 'instagram', href: "https://www.instagram.com/bisnovo/", icon: FaInstagram },
  ],
  footerLinks: [], // Kosongkan semua tautan di footer
  footerProducts: []
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
