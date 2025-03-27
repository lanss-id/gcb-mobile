// apps/mobile/src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import type { Viewport } from 'next';

const inter = Inter({ subsets: ['latin'] });


export const metadata = {
    title: 'GreenCycleBank',
    description: 'Platform Bank Sampah dan Circular Economy',
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <meta name="theme-color" content="#b9f732" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
        />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <div className="mx-auto bg-white max-w-md min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
