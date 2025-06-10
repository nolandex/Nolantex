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
    router.push("/second-page");
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        onClick={handleClick}
        variant="default"
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
      >
        <RocketIcon className="w-4 h-4" />
        {locale.title}
      </Button>
    </div>
  );
}
