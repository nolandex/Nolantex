/* eslint-disable react/no-unescaped-entities */
"use client"; // Direktif untuk Client Component

import { TestimonialsData } from "@/config/testimonials";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Pastikan lucide-react terinstal

const Testimonials = ({ id, locale }: { id: string; locale: any }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScroll, setIsAutoScroll] = useState(true); // State untuk mengontrol auto-scroll

  // Fungsi untuk menggeser ke kiri
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
      setIsAutoScroll(false); // Hentikan auto-scroll saat diklik
    }
  };

  // Fungsi untuk menggeser ke kanan
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      setIsAutoScroll(false); // Hentikan auto-scroll saat diklik
    }
  };

  // Auto-scroll setiap 3 detik
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoScroll && scrollRef.current) {
      interval = setInterval(() => {
        if (scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          // Jika sudah di ujung kanan, kembali ke awal
          if (scrollLeft + clientWidth >= scrollWidth) {
            scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
          }
        }
      }, 3000); // Geser setiap 3 detik
    }
    return () => clearInterval(interval); // Bersihkan interval saat unmount
  }, [isAutoScroll]);

  // Fungsi untuk menghitung tinggi testimonial pertama
  const getFirstTestimonialHeight = () => {
    // Asumsi tinggi default berdasarkan konten testimonial pertama
    // Anda bisa mengukur tinggi secara dinamis jika diperlukan
    return "auto"; // Ganti dengan nilai tetap (misalnya, "300px") jika ingin tinggi statis
  };

  return (
    <section
      id={id}
      className="flex flex-col justify-center items-center pt-16 gap-12 max-w-[88%] mx-auto"
    >
      <div className="flex flex-col text-center max-w-xl gap-4">
        <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
          {locale.title}
        </h2>
        <p className="text-large text-gray-600 dark:text-gray-400">
          {locale.description1}
        </p>
      </div>
      <div className="relative w-full">
        {/* Tombol Panah Kiri */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        {/* Konten Testimonial */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto snap-x snap-mandatory flex flex-row gap-4 pb-4 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-500 scrollbar-track-gray-100 dark:scrollbar-track-gray-800"
        >
          {TestimonialsData.map((testimonial, index) => (
            <div
              className="snap-start flex-shrink-0 w-[300px] mb-4 transition-all hover:scale-105 hover:shadow-lg"
              key={index}
              style={{ minHeight: getFirstTestimonialHeight() }} // Samakan tinggi dengan testimonial pertama
            >
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex flex-col items-start gap-3 h-full bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900">
                <div className="flex items-start justify-between w-full">
                  <div className="flex items-start gap-2">
                    <Image
                      src={testimonial.user.image}
                      alt="user"
                      height={40}
                      width={40}
                      className="w-12 h-12 rounded-full object-cover object-top"
                    />
                    <div className="flex flex-col items-start">
                      <p className="font-bold text-gray-900 dark:text-white">
                        {testimonial.user.name}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        @{testimonial.user.username}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-200 text-[14px]">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Tombol Panah Kanan */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
