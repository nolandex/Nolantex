// components/SocialProof.tsx (Sudah Diperbarui)

import { FaDollarSign } from "react-icons/fa"; // 1. Import ikon dollar

// Import 'Makers' sudah tidak diperlukan dan bisa dihapus
// import { Makers } from "@/config/makers";

const SocialProof = ({ locale }: { locale: any }) => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 pt-16 w-full"> {/* Sedikit menambah gap */}
      <div className="flex flex-col items-center gap-5">
        
        {/* 2. Bagian ini diubah dari gambar user menjadi ikon dollar */}
        <div className="flex items-center justify-center w-24 h-24 bg-blue-100 dark:bg-blue-900/50 rounded-full">
          <FaDollarSign className="w-14 h-14 text-blue-600 dark:text-blue-500" />
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-400 text-center">
          <span className="text-primary font-semibold text-base">1000+</span>{" "}
          {locale.maker}
        </p>
      </div>
    </section>
  );
};

export default SocialProof;
