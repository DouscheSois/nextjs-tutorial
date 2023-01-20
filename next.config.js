/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "unsplash.com", "m.media-amazon.com"],
  },
};

module.exports = nextConfig;
