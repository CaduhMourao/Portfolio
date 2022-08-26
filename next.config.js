/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  }
}

module.exports = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
}