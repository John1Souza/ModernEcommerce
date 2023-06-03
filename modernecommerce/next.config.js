/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['github.com', 'raw.githubusercontent.com'], 
        formats: ['image/avif', 'image/webp'],
      },
}

module.exports = nextConfig
