/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/your-repo-name', // Replace with your actual repository name
}

module.exports = nextConfig 