import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Feature from "@/components/home/Feature";
import Hero from "@/components/home/Hero";
import ScrollingLogos from "@/components/home/ScrollingLogos";
import SocialProof from "@/components/home/SocialProof";
import Testimonials from "@/components/home/Testimonials";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import Link from "next/link"; // Import Link dari next/link

export default async function HomeIndex({ lang }: { lang: string }) {
  const langName = lang || defaultLocale;
  const dict = await getDictionary(langName);

  return (
    <>
      {/* Hero Section */}
      <Hero locale={dict.Hero} langName={langName} CTALocale={dict.CTAButton} />
      <SocialProof locale={dict.SocialProof} />
      {/* display technology stack, partners, project honors, etc. */}
      <ScrollingLogos />

      {/* Showcase */}
      {/* <Showcase id="Showcase" locale={dict.Showcase} /> */}

      {/* USP (Unique Selling Proposition) */}
      <Feature id="Features" locale={dict.Feature} langName={langName} />

      {/* Testimonials */}
      <Testimonials id="Testimonials" locale={dict.Testimonials} />

      {/* FAQ (Frequently Asked Questions) */}
      <FAQ id="FAQ" locale={dict.FAQ} langName={langName} />

      {/* CTA (Call to Action) */}
      <CTA locale={dict.CTA} CTALocale={dict.CTAButton} />

      {/* --- Bagian Tombol Baru untuk Halaman Kedua --- */}
      <div style={{
        textAlign: 'center',
        margin: '50px 0', // Menambahkan sedikit ruang di atas dan bawah
        padding: '20px',
        backgroundColor: '#f9f9f9', // Warna latar belakang ringan
        borderRadius: '8px'
      }}>
        <h2>{langName === 'en' ? 'Explore More!' : 'Jelajahi Lebih Lanjut!'}</h2>
        <p style={{ marginBottom: '20px' }}>
          {langName === 'en' ? 'Click the button below to discover our second page.' : 'Klik tombol di bawah untuk menjelajahi halaman kedua kami.'}
        </p>
        <Link href="/second-page" passHref>
          {/* Anda bisa menggunakan komponen tombol kustom Anda seperti CTAButton di sini */}
          <button style={{
            padding: '12px 25px',
            fontSize: '18px',
            fontWeight: 'bold',
            backgroundColor: '#007bff', // Warna biru untuk tombol
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
          >
            {langName === 'en' ? 'Go to Second Page' : 'Pergi ke Halaman Kedua'}
          </button>
        </Link>
      </div>
      {/* --- Akhir Bagian Tombol Baru --- */}
    </>
  );
}
