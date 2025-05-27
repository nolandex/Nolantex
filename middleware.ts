// middleware.ts
import { locales } from "./lib/i18n";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Cek apakah pathname sudah memiliki locale yang valid
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Jika sudah ada locale, atau jika path adalah "/second-page", biarkan saja.
  // Anda tidak perlu mengecualikan path di sini jika sudah ditangani di matcher
  // (tetapi logika ini untuk memastikan redirect default ke root jika tidak ada locale)
  if (hasLocale) {
    return; // Lanjutkan tanpa perubahan jika path sudah mengandung locale
  }

  // Jika tidak ada locale di path, arahkan ke locale default atau biarkan masuk jika tidak perlu redirect.
  // Dalam kasus Anda, Anda mengalihkan ke root jika tidak ada locale.
  // Bagian ini adalah yang menyebabkan masalah.
  // Untuk mengizinkan /second-page tanpa locale, kita harus tangani di config.matcher
  // atau tambahkan kondisi spesifik di sini.
  // Saat ini, dengan matcher yang direvisi, bagian ini mungkin tidak akan terpicu untuk /second-page.

  // Jika tidak ada locale, kita akan mengalihkan ke root dengan locale default.
  // Ini adalah perilaku asli dari middleware Anda.
  // Ini tetap penting untuk halaman lain yang mungkin perlu locale.
  request.nextUrl.pathname = `/${locales[0] || 'en'}`; // Arahkan ke root dengan locale default (misal /en)
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Include all paths except API routes, static assets, and specific non-locale pages
    // Tambahkan path "/second-page" ke daftar pengecualian
    '/((?!api|_next/static|_next/image|terms|second-page|.*\\.(?:txt|xml|ico|png|jpg|jpeg|svg|gif|webp|js|css|woff|woff2|ttf|eot)).*)',
    // Jika Anda menggunakan "/second" saja, maka ganti "second-page" dengan "second"
    // '/((?!api|_next/static|_next/image|terms|second|.*\\.(?:txt|xml|ico|png|jpg|jpeg|svg|gif|webp|js|css|woff|woff2|ttf|eot)).*)'
  ]
};
