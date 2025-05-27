import { LineText } from "@/components/LineText";
import CTAButton from "@/components/home/CTAButton";

const Hero = ({
  locale,
  langName,
  CTALocale,
}: {
  locale: any;
  langName: string;
  CTALocale: any;
}) => {
  return (
    <>
      <section
        lang={langName}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-24 md:pt-32 text-center"
      >
        <h1>
          {locale.title1} <LineText>{locale.title2}</LineText> {locale.title3}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-2xl tracking-tight text-slate-700 dark:text-slate-400">
          {locale.description}
        </p>

        {/* Button dipindah ke dalam section untuk lebih rapi */}
        <div className="mt-10">
          <CTAButton locale={CTALocale} href="/second" />
        </div>
      </section>
    </>
  );
};

export default Hero;
