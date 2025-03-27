// apps/mobile/src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Header dengan status bar mobile dan logo */}
      <div className="relative w-full" style={{ height: '55vh' }}>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-lime-400 rounded-b-[40px]">

          {/* Logo GCB besar */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-80">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#F5F5DC" strokeWidth="10" />
                <line x1="50" y1="5" x2="50" y2="95" stroke="#F5F5DC" strokeWidth="10" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Logo kecil di tengah */}
      <div className="flex justify-center -mt-5 mb-6">
        <div className="w-8 h-8 relative">
          <svg viewBox="0 0 100 100" className="w-full h-full text-lime-400">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10" />
            <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="10" />
          </svg>
        </div>
      </div>

      {/* Konten */}
      <div className="px-6 flex flex-col flex-1">
        <h1 className="text-center text-2xl font-bold mb-2">
          Selamat datang di Green Cycle Bank
        </h1>
        <p className="text-center text-gray-600 text-sm mb-8">
          dengan menjual sampah kamu bisa mendapat point yang bisa kamu tukarkan menjadi uang
        </p>

        {/* Tombol-tombol */}
        <div className="mt-auto mb-8 space-y-3">
          <Link
            href="/auth/register"
            className="block w-full py-3.5 bg-lime-400 rounded-full text-center font-medium"
          >
            Buat akun
          </Link>
          <Link
            href="/auth/login"
            className="block w-full py-3.5 border border-gray-300 rounded-full text-center font-medium"
          >
            Sudah punya akun
          </Link>
        </div>
      </div>
    </main>
  );
}
