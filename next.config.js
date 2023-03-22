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
        source: "/api/:path*",
        destination: "http://127.0.0.1:16261/:path*"
      },
    ];
  },
}

// const rewrite = async () => {
//   return [
//     {
//       source: "/:path*",
//       destination: "http://127.0.0.1:16261/:path*"
//     },
//   ];
// }

module.exports = nextConfig;
