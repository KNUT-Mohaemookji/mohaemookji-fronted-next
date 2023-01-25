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
  }
}

module.exports = nextConfig
