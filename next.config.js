/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configure base path for GitHub Pages if needed
  // basePath: '/repository-name', // Uncomment and set if deploying to GitHub Pages under a subdirectory
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
}

module.exports = nextConfig
