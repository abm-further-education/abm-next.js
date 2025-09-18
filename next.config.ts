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
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'maps.gstatic.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ['@supabase/supabase-js'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push('@supabase/node-fetch');
    }
    return config;
  },
};

export default withNextIntl(nextConfig);
