import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import Link from "next/link";

const CTAButton = ({ locale }: { locale: any }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Mencegah perilaku default link
    const pricingSection = document.getElementById("pricings");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" }); // Scroll halus ke section
    }
  };

  return (
    <Link href="#Pricing" onClick={handleScroll}>
      <Button
        variant="default"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
        aria-label="Get Boilerplate"
      >
        <RocketIcon />
        {locale.title}
      </Button>
    </Link>
  );
};

export default CTAButton;
