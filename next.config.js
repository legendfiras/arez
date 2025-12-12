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
  // Enable static exports for GitHub Pages
  output: 'export',
}

module.exports = nextConfig