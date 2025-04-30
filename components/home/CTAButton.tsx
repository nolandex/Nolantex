'use client';

import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface CTAButtonProps {
  locale: {
    title: string;
  };
  pricingId?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  locale, 
  pricingId = "pricing" 
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (typeof window === 'undefined') return;

    const targetElement = document.getElementById(pricingId);
    
    if (pathname === '/') {
      if (targetElement) {
        // Smooth scroll with offset for fixed header
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    } else {
      // Navigate to home page with hash
      router.push(`/#${pricingId}`);
      // Scroll handled by Pricing component's useEffect
    }
  };

  return (
    <a 
      href={`#${pricingId}`} 
      onClick={handleClick}
      className="inline-flex" // Ensures proper button styling
    >
      <Button
        variant="default"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300"
        aria-label={`Scroll to ${pricingId} section`}
      >
        <RocketIcon className="h-4 w-4" />
        {locale.title}
      </Button>
    </a>
  );
};

export default CTAButton;
