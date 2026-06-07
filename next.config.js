/** @type {import('next').NextConfig} */
const nextConfig = {
  // Future Sanity image domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  // Experimental features for Next.js 15
  experimental: {
    typedRoutes: true,
  },
}

module.exports = nextConfig
