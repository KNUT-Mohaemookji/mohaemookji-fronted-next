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
        destination: "http://127.0.0.1:16261/:path*"
      },
      {
        source: "/recipe",
        destination: "https://openapi.foodsafetykorea.go.kr/api/360e29b086e142e4856b/COOKRCP01/json/0/9"
      }
    ];
  },
}

module.exports = nextConfig;
