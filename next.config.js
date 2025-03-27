/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  transpilePackages: ['@gcb/validators', '@gcb/config'],
  // Perubahan untuk Next.js 15
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

// Jika PWA diaktifkan
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

module.exports = withPWA(nextConfig);
