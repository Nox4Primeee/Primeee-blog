/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.postimg.cc', 'localhost'],
  },
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig
