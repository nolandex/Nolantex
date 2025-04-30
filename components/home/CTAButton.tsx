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

  const scrollToSection = (id: string) => {
    if (typeof window === 'undefined') return;

    const element = document.getElementById(id);
    if (!element) return;

    const headerHeight = 100; // Sesuaikan dengan tinggi header Anda
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (pathname === '/') {
      scrollToSection(pricingId);
    } else {
      router.push(`/#${pricingId}`);
      // Handle scroll setelah navigasi
      setTimeout(() => scrollToSection(pricingId), 500);
    }
  };

  return (
    <Button
      onClick={handleClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        backgroundColor: '#3b82f6',
        color: 'white',
        transition: 'background-color 0.3s ease'
      }}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
      aria-label={`Scroll to ${pricingId} section`}
    >
      <RocketIcon style={{ height: '1rem', width: '1rem' }} />
      {locale.title}
    </Button>
  );
};

export default CTAButton;
