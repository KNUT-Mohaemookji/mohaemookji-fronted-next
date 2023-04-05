/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: [
      'static.wtable.co.kr',
      'www.foodsafetykorea.go.kr'
    ] 
  },
  env: {
    BASE_URL: process.env.BASE_URL
  },
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/video/:path*",
        destination: `${process.env.NEXT_PUBLIC_BACKEND_API_PATH}/:path*`
      },
      {
        source: "/recipeAPI/:path*",
        destination: `${process.env.NEXT_PUBLIC_RECIPE_API}/${process.env.NEXT_PUBLIC_RECIPE_API_KEY}/COOKRCP01/json/0/9/:path*`
      }
    ];
  },
}

module.exports = nextConfig;
