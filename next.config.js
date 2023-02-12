const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

if (process.env.NODE_ENV === 'production') {
  nextConfig.basePath = '/suitcase';
}

module.exports = nextConfig;
