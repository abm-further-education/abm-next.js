import type { NextConfig } from 'next';
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'abm.edu.au',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
