/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: '/home',
                destination: '/component/homepage'
            }
        ]
    },
};

module.exports = nextConfig;
