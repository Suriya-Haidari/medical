/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["via.placeholder.com"], // Add the external hostname here
  },
};

export default nextConfig;
