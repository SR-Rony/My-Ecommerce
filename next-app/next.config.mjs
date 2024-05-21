/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '3001',
            pathname: '/public/images/**',
          },
        ],
      },
};

export default nextConfig;