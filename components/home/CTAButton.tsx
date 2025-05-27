// components/home/CTAButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface CTAButtonProps {
  locale: {
    title: string;
  };
}

export default function CTAButton({ locale }: CTAButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/second");
  };

  return (
    <Button
      onClick={handleClick}
      variant="default"
      className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
    >
      <RocketIcon className="w-4 h-4" />
      {locale.title}
    </Button>
  );
}
