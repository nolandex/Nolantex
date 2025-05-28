export const FAQS_EN = [
  {
    title: "Kenapa Bisnovo Penting untuk Bisnismu?",
    content:
      "Tanpa branding, website, dan sistem digital, pelanggan sulit percaya. Bisnovo bantu kamu punya bisnis online yang terlihat profesional — dari nol, tanpa ribet.",
  },
  {
    title: "Apa Saja yang Saya Dapat dari Bisnovo?",
    content:
      "Website, chatbot, konten sosial media, strategi promosi — semua lengkap! Fokus kamu tinggal jualan, kami yang urus teknis dan brandingnya.",
  },
  {
    title: "Gak Punya Skill Teknis, Gimana?",
    content:
      "Gak masalah! Semua kami siapkan. Kamu tinggal terima jadi dan mulai promosi. Simple, cepat, dan bisa langsung jalan.",
  },
  {
    title: "Bisa Dapat Uang dari Bisnovo?",
    content:
      "Bisa! Gabung program reseller gratis dan langsung dapat paket bisnis online. Cocok untuk kamu yang mau mulai usaha tanpa modal.",
  },
  {
    title: "Gimana Cara Mulainya?",
    content:
      "Chat kami via WhatsApp 085156779923 atau email ke bisnovohq@gmail.com. Kami bantu setup dari A–Z biar kamu langsung siap jualan!",
  },
];

interface FAQSCollection {
  [key: string]: { title: string; content: string }[];
}

export const ALL_FAQS: FAQSCollection = {
  FAQS_EN,
};
