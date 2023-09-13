/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_ZITADEL_ISSUER.slice(8),
        pathname: '/assets/v1/**',
      },
    ],
  },
};
