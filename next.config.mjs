/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"randomuser.me"
            },
        ],
    },
    async headers() {
        return [
        {
            source: '/(.*)', // Match all routes
            headers: [
            {
                key: 'X-Frame-Options',
                value: 'ALLOW-FROM https://teams.microsoft.com'
            },
            {
                key: 'Content-Security-Policy',
                value: 'frame-ancestors https://teams.microsoft.com'
            }
            ]
        }
        ];
    }
};

export default nextConfig;
