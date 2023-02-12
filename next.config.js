const withExportImages = require('next-export-optimize-images');

/** @type {import('next').NextConfig} */
const nextConfig = withExportImages({
  reactStrictMode: true,
  basePathL: process.env.NODE_ENV === 'production' ? '/suitcase' : '/',
});

module.exports = nextConfig;
