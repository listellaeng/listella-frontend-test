/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images-assets.nasa.gov',
        port: '',
        pathname: '/image/**',
      },
    ],
  },
};

module.exports = nextConfig;
