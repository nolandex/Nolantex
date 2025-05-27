// /app/second/layout.tsx
import { ReactNode } from 'react'

export default function SecondLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header khusus untuk halaman kedua */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h2 className="text-xl font-semibold">Halaman Khusus</h2>
        </div>
      </header>
      
      {/* Konten utama */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}
