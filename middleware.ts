// File: middleware.ts (KODE BARU YANG SUDAH BENAR)

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales } from "./lib/i18n";

const DEFAULT_LOCALE = 'en'; // Tentukan locale default Anda di sini

function getLocale(request: NextRequest): string {
  // Anda bisa menambahkan logika untuk mendeteksi locale dari headers, dll.
  // Untuk saat ini, kita akan selalu menggunakan default.
  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Cek apakah path sudah memiliki locale (misal /en/about)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // Jika sudah ada locale, jangan lakukan apa-apa.
    return NextResponse.next();
  }

  // 2. Jika tidak ada locale, kita perlu mengalihkan ke path dengan locale.
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`; // Tambahkan locale di depan path asli

  // 3. Alihkan ke URL baru (misal dari /about menjadi /en/about)
  // Ini akan mengubah URL di browser pengguna ke versi yang benar.
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Jalankan middleware ini pada semua path, KECUALI:
    // - Path yang dimulai dengan /api, /_next/static, /_next/image
    // - Path yang merupakan file aset (dengan ekstensi seperti .ico, .png, dll)
    // - Path SPESIFIK yang tidak kita inginkan memiliki locale, yaitu /services
    '/((?!api|_next/static|_next/image|services|favicon.ico).*)',
  ],
}
