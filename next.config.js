/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'replicate.com', 
      'ext.same-assets.com',
      'lh3.googleusercontent.com'
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
}

module.exports = nextConfig 