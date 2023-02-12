const withExportImages = require('next-export-optimize-images');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

if (process.env.NODE_ENV === 'production') {
  nextConfig.basePath = '/suitcase';
}

module.exports = withExportImages(nextConfig);
