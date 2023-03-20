/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.ctfassets.net',
      },
    ],
  },
};

module.exports = nextConfig;
