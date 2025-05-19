/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features
  experimental: {
    // Turbopack configuration
    turbo: {
      // Enable Turbopack for development
      loaders: {
        // Add any custom loaders here if needed
      },
    },
  },
};

module.exports = nextConfig; 