/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
