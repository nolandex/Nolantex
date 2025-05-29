"use client";

import PhMoonFill from "@/components/icons/moon";
import PhSunBold from "@/components/icons/sun";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react"; // Jika menggunakan NextUI, sesuaikan jika tidak

export function ThemedButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Set mounted to true on client-side and ensure theme is initialized
  useEffect(() => {
    setMounted(true);
    // Jika tidak ada tema di localStorage, atur ke "light"
    if (!localStorage.getItem("theme")) {
      setTheme("light");
    }
  }, [setTheme]);

  // Tampilkan placeholder (PhSunBold) selama hydration
  if (!mounted) {
    return (
      <Button isIconOnly variant="light" className="text-foreground">
        <PhSunBold className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <Button
      isIconOnly
      variant="light"
      className="text-foreground"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <PhMoonFill className="w-6 h-6" />
      ) : (
        <PhSunBold className="w-6 h-6" />
      )}
    </Button>
  );
}
