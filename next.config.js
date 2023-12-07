/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://pokeapi.co',
        port: '',
        pathname: '/api/v2/**',
      },
    ],
  },
};

module.exports = nextConfig;
