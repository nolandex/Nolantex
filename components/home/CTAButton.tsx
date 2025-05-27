"use client";

import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CTAButton = ({ locale }: { locale: any }) => {
  const router = useRouter();

  // Fungsi untuk handle navigasi
  const handleNavigate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/second"); // Navigasi ke halaman kedua
  };

  return (
    <Button
      onClick={handleNavigate}
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
