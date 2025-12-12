/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    unoptimized: true, // Disable image optimization for static export
  },
  // Removed output: 'export' to enable API routes
}

module.exports = nextConfig