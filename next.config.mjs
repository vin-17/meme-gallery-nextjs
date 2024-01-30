/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://www.reddit.com/:path*', // Proxy to Reddit API
        },
      ];
    },
  };
export default nextConfig;