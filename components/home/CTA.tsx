// components/home/CTA.tsx
/* eslint-disable react/no-unescaped-entities */
import CTAButton from "./CTAButton";
import { RoughNotation } from "react-rough-notation";

interface LocaleProps {
  title: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  description6: string;
}

interface CTALocaleProps {
  title: string;
}

interface CTAProps {
  locale: LocaleProps;
  CTALocale: CTALocaleProps;
}

const CTA = ({ locale, CTALocale }: CTAProps) => {
  return (
    <section className="flex flex-col justify-center max-w-[88%] items-center py-16 gap-12">
      <div className="flex flex-col text-center gap-4">
        <h2 className="text-center">{locale.title}</h2>
        <p className="text-large text-default-500">
          <RoughNotation type="box" color="#b71c1c" show={true}>
            {locale.description1}
          </RoughNotation>{" "}
          {locale.description2}{" "}
          <RoughNotation type="box" color="#b71c1c" show={true}>
            {locale.description3}
          </RoughNotation>{" "}
          {locale.description4}{" "}
          <RoughNotation type="box" color="#b71c1c" show={true}>
            {locale.description5}
          </RoughNotation>
          {locale.description6}
        </p>
      </div>
      <CTAButton locale={CTALocale} />
    </section>
  );
};

export default CTA;
