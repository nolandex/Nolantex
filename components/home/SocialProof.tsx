// components/SocialProof.tsx (FINAL - Sesuai Permintaan)

import { FaDollarSign } from "react-icons/fa";

const SocialProof = ({ locale }: { locale: any }) => {
  return (
    // 1. Posisi dinaikkan dengan mengurangi padding atas (pt-16 -> pt-12)
    <section className="flex flex-col items-center justify-center gap-10 pt-12 w-full">
      {/* 2. Jarak antara ikon dan teks diperkecil (gap-5 -> gap-4) */}
      <div className="flex flex-col items-center gap-4">
        
        {/* 3. LINGKARAN BIRU DIHAPUS. Ikon dollar sekarang berdiri sendiri. */}
        {/* Ukuran ikon diatur menjadi w-12 h-12 (lebih kecil) */}
        <FaDollarSign className="w-12 h-12 text-blue-600 dark:text-blue-500" />

        <p className="text-sm text-slate-700 dark:text-slate-400 text-center">
          <span className="text-primary font-semibold text-base">1000+</span>{" "}
          {locale.maker}
        </p>
      </div>
    </section>
  );
};

export default SocialProof;
