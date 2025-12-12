/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    unoptimized: true, // Disable image optimization for static export
  },
  // Set basePath for GitHub Pages
  basePath: '/arez',
  // Enable static exports for GitHub Pages
  output: 'export',
}

module.exports = nextConfig