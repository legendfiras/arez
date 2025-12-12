/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  // Set basePath for GitHub Pages
  basePath: '/arez',
  // Removed output: 'export' to enable API routes
}

module.exports = nextConfig