/** @type {import('next').NextConfig} */
const CopyPlugin = require('copy-webpack-plugin');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/page/1',
        permanent: true,
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new CopyPlugin({
          patterns: [{ from: 'src/db/user.json', to: 'src/db' }],
        })
      );
    }

    return config;
  },
};

module.exports = nextConfig;
