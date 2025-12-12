/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  // Set basePath and assetPrefix for GitHub Pages
  basePath: '/arez',
  assetPrefix: '/arez/',
  // Removed output: 'export' to enable API routes
}

module.exports = nextConfig