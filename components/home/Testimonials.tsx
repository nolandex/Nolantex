/* eslint-disable react/no-unescaped-entities */
"use client";

import { TestimonialsData } from "@/config/testimonials";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { RoughNotation } from "react-rough-notation";

const Testimonials = ({ id, locale }: { id: string; locale: any }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const firstTestimonialRef = useRef<HTMLDivElement>(null);
  const [testimonialHeight, setTestimonialHeight] = useState("auto");

  useEffect(() => {
    if (firstTestimonialRef.current) {
      setTestimonialHeight(`${firstTestimonialRef.current.offsetHeight}px`);
    }
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoScroll && scrollRef.current) {
      interval = setInterval(() => {
        if (scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          const cardWidth = 300 + 16;
          const maxScroll = scrollWidth - clientWidth;

          if (scrollLeft >= maxScroll - 1) {
            scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
          }
        }
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoScroll]);

  const handleTouchStart = () => {
    setIsAutoScroll(false);
  };

  const handleTouchEnd = () => {
    setIsAutoScroll(true);
  };

  return (
    <section
      id={id}
      className="flex flex-col justify-center items-center pt-16 gap-12 max-w-[88%] mx-auto"
    >
      <div className="flex flex-col text-center max-w-xl gap-4">
        <h2 className="text-center text-3xl font-bold text-white">
          <RoughNotation type="highlight" show={true} color="#2563EB">
            {locale.title}
          </RoughNotation>
        </h2>
        <p className="text-large text-gray-600 dark:text-gray-400">
          {locale.description1}
        </p>
      </div>
      <div className="relative w-full">
        <div
          ref={scrollRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleTouchStart}
          onMouseUp={handleTouchEnd}
          // PERBAIKAN FINAL UNTUK MENGHILANGKAN SCROLLBAR
          className="w-full overflow-x-auto snap-x snap-mandatory flex flex-row gap-4 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {TestimonialsData.map((testimonial, index) => (
            <div
              ref={index === 0 ? firstTestimonialRef : null}
              className="snap-start flex-shrink-0 w-[300px] mb-4 transition-all hover:scale-105 hover:shadow-lg"
              key={index}
              style={{ minHeight: testimonialHeight }}
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
      </div>
    </section>
  );
};

export default Testimonials;
