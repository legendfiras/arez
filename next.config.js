/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  // Removed output: 'export' to enable API routes
  // Add basePath if your GitHub Pages URL is not the root
  // basePath: '/arez', // Uncomment and adjust if needed
}

module.exports = nextConfig