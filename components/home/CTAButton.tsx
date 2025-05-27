"use client";

import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import Link from "next/link";

interface CTAButtonProps {
  locale: any;
  href?: string;
}

const CTAButton = ({ locale, href = "#" }: CTAButtonProps) => {
  const isAnchorLink = href.startsWith("#");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isAnchorLink) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Link href={href} onClick={handleClick} scroll={!isAnchorLink}>
      <Button
        variant="default"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
        aria-label="CTA Button"
      >
        <RocketIcon />
        {locale.title}
      </Button>
    </Link>
  );
};

export default CTAButton;
