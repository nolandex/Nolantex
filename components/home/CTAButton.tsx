"use client";

import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const CTAButton = ({ locale }: { locale: any }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/second"); // Pastikan path ini sesuai
  };

  return (
    <Button
      onClick={handleClick}
      variant="default"
      className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
      aria-label="Get Boilerplate"
    >
      <RocketIcon />
      {locale.title}
    </Button>
  );
};

export default CTAButton;
