import { SiteConfig } from "@/types/siteConfig";
import { BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaWhatsapp, FaTiktok, FaTelegram } from "react-icons/fa";

const OPEN_SOURCE_URL = 'https://github.com/weijunext/landing-page-boilerplate';

const baseSiteConfig = {
  name: "NolanDex",
  description:
    "A comprehensive digital solutions provider helping entrepreneurs and small businesses build their online presence with websites, chatbots, social media, automation, and a reseller program.",
  url: "https://landingpage.weijunext.com",
  ogImage: "https://landingpage.weijunext.com/og.png",
  metadataBase: '/',
  keywords: ["digital presence", "website creation", "chatbots", "social media management", "automation", "reseller program"],
  authors: [
    {
      name: "weijunext",
      url: "https://weijunext.com",
      twitter: 'https://twitter.com/weijunext',
    }
  ],
  creator: '@weijunext',
  openSourceURL: 'https://github.com/weijunext/landing-page-boilerplate',
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
    { name: 'email', href: "mailto:nolandexco@gmail.com", icon: MdEmail },
    { name: 'tiktok', href: "https://www.tiktok.com/@nolandexco?_t=ZS-8vwewu0P3sm&_r=1", icon: FaTiktok }
  ],
  footerLinks: [
    { name: 'email', href: "mailto:nolandexco@gmail.com", icon: MdEmail },
    { name: 'instagram', href: "https://www.instagram.com/nolandexco?igsh=MWV3cXRuejBqcGwyZg==", icon: FaInstagram },
    { name: 'github', href: "https://discord.gg/cW4DKGpk", icon: FaTwitter }, // Ikon tetap FaInstagram sesuai input
    { name: 'tiktok', href: "https://www.tiktok.com/@nolandexco?_t=ZS-8vwewu0P3sm&_r=1", icon: FaTiktok },
    { name: 'facebook', href: "https://www.facebook.com/nolandexco", icon: FaFacebook },
    { name: 'telegram', href: "https://t.me/nolandex", icon: FaTelegram }
  ],
  footerProducts: [
    { url: 'https://phcopilot.ai/', name: 'Product Hunt Copilot' },
    { url: 'https://smartexcel.cc/', name: 'Smart Excel' },
    { url: 'https://landingpage.weijunext.com/', name: 'Landing Page Boilerplate' },
    { url: 'https://weijunext.com/', name: 'J实验室' },
    { url: 'https://nextjscn.org/', name: 'Next.js 中文文档' },
    { url: 'https://nextjs.weijunext.com/', name: 'Next.js Practice' },
    { url: 'https://github.com/weijunext/indie-hacker-tools', name: 'Indie Hacker Tools' },
  ]
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
