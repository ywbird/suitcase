/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {};

if (process.env.NODE_ENV === 'production') {
  config.basePath = '/suitcase';
}

module.exports = config;
