// File: middleware.ts (KODE BARU UNTUK REWRITE)

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Locale yang akan digunakan secara default dan "disembunyikan" di URL
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Cek jika path adalah untuk aset statis (gambar, css, dll), jangan lakukan apa-apa.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    /\.(.*)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // 2. Cek jika path sudah mengandung locale ('/en', '/id', dll.)
  // Ini berguna jika Anda nanti ingin mengaktifkan bahasa lain lagi.
  // Untuk saat ini, kita anggap tidak ada.
  
  // 3. Jika path tidak memiliki locale, kita akan rewrite ke defaultLocale ('en')
  // Contoh:
  // - Request ke '/' akan disajikan dari '/en'
  // - Request ke '/services' akan disajikan dari '/en/services'
  
  // Penting: Kita menggunakan NextResponse.rewrite(), BUKAN NextResponse.redirect()
  // Rewrite akan menyajikan konten tanpa mengubah URL di browser.
  return NextResponse.rewrite(
    new URL(`/${defaultLocale}${pathname}`, request.url)
  );
}

export const config = {
  // Jalankan middleware ini pada semua path untuk menangkap semua kemungkinan.
  // Pengecualian sudah ditangani di dalam logika middleware di atas.
  matcher: ['/((?!_next/static|_next/image|images|favicon.ico).*)'],
};
