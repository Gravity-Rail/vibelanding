/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    path: process.env.NODE_ENV === 'production' ? '/vibelanding' : '',
  },
  basePath: process.env.NODE_ENV === 'production' ? '/vibelanding' : '',
}

module.exports = nextConfig 