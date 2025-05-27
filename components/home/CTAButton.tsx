// /app/test-button.tsx
"use client";

import { useRouter } from "next/navigation";

export default function TestButton() {
  const router = useRouter();

  return (
    <button 
      onClick={() => {
        console.log("Test button clicked");
        router.push("/second");
      }}
      className="p-4 bg-red-500 text-white"
    >
      TEST BUTTON (Harusnya Work)
    </button>
  );
}
