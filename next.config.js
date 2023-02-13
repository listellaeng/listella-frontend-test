/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  strictMode: true, // fixing a hydration issue when reloading the page https://github.com/vercel/next.js/discussions/35773
  // Transforms our svg files into a <svg> so the computer can render it
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = nextConfig
