'use client';

import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import React from "react";

interface CTAButtonProps {
  locale: {
    title: string;
  };
}

const CTAButton: React.FC<CTAButtonProps> = ({ locale }) => {
  const whatsappLink = "https://wa.me/6285156779923?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20NolanDex.";

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(whatsappLink, '_blank');
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
      aria-label="Chat via WhatsApp"
    >
      <RocketIcon style={{ height: '1rem', width: '1rem' }} />
      {locale.title}
    </Button>
  );
};

export default CTAButton;
