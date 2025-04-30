'use client';

import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const CTAButton = ({ locale, pricingId = "pricing" }: { locale: any; pricingId?: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // For client-side navigation
    if (typeof window !== 'undefined') {
      if (pathname === '/') {
        const element = document.getElementById(pricingId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        router.push(`/#${pricingId}`);
      }
    }
  };

  return (
    <a href={`#${pricingId}`} onClick={handleClick}>
      <Button
        variant="default"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
        aria-label="View Pricing"
      >
        <RocketIcon />
        {locale.title}
      </Button>
    </a>
  );
};

export default CTAButton;
