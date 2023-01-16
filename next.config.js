/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors
  },
  images: {
    domains: [ 'media.licdn.com', 'lh3.googleusercontent.com', 'yt3.ggpht.com'],
  }
}

module.exports = nextConfig
