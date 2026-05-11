/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/blessing-portfolio',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
