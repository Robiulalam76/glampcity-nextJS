/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};
const withImages = require('next-images')
module.exports = withImages({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '/product-view**',
      },
    ],
  },
  webpack(config, options) {
    return config
  }

})

module.exports = nextConfig;
