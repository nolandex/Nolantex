import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const CTAButton = ({ locale, pricingId = "pricing" }: { locale: any; pricingId?: string }) => {
  const router = useRouter();

  const handleClick = () => {
    // Jika sudah di halaman yang sama, scroll ke element
    if (window.location.pathname === '/') {
      const element = document.getElementById(pricingId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Jika di halaman berbeda, navigasi ke home dengan hash
      router.push(`/#${pricingId}`);
    }
  };

  return (
    <Button
      variant="default"
      className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
      aria-label="View Pricing"
      onClick={handleClick}
    >
      <RocketIcon />
      {locale.title}
    </Button>
  );
};

export default CTAButton;
