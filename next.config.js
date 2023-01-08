/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  env: {
    BASE_URL: process.env.BASE_URL
  }
}

module.exports = nextConfig
