/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)', // apply to all routes
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOWALL', // Allow Teams to iframe your app
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://*.teams.microsoft.com https://*.skype.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;