/* eslint-disable react/no-unescaped-entities */
import { TestimonialsData } from "@/config/testimonials";
import Image from "next/image";

const Testimonials = ({ id, locale }: { id: string; locale: any }) => {
  return (
    <section
      id={id}
      className="flex flex-col justify-center items-center pt-16 gap-12 max-w-[88%]"
    >
      <div className="flex flex-col text-center max-w-xl gap-4">
        <h2 className="text-center text-white">{locale.title}</h2>
        <p className="text-large text-default-500">{locale.description1}</p>
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 overflow-hidden relative transition-all">
        {TestimonialsData.map((testimonial, index) => (
          <div className="mb-4 z-0 break-inside-avoid-column" key={index}>
            <div className="border border-slate/10 rounded-lg p-4 flex flex-col items-start gap-3 h-fit">
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
                    <p className="font-bold">{testimonial.user.name}</p>
                    <p className="dark:text-zinc-400">
                      @{testimonial.user.username}
                    </p>
                  </div>
                </div>
              </div>
              <p className="dark:text-zinc-200 text-[14px]">
                {testimonial.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
