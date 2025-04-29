import { siteConfig } from "@/config/site";
import { Tier, TiersEnum } from "@/types/pricing";

export const TIERS_EN: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Online Business Setup",
    price: "$20",
    href: "#",
    description:
      "Ideal for individuals or small businesses looking to set up their online presence",
    features: [
      "Website",
      "Social media booster",
      "Basic chatbot integration",
      "Social media content",
      "Copywriting tricks",
    ],
    buttonText: "Get started",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Website",
    price: "$10",
    href: "#",
    description:
      "Perfect for businesses ready to establish a professional website and digital presence",
    features: [
      "E-commerce websites",
      "Portfolio websites",
      "Landing pages",
      "Membership/community websites",
      "Free domain + unlimited hosting",
    ],
    buttonText: "Get started",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];
