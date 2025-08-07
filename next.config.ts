import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.pexels.com"], // Add your image host domains here
    // OR use remotePatterns for more control:
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "images.pexels.com",
    //     pathname: "/**",
    //   },
    // ],
  },
  // Other Next.js config options can go here
};

export default nextConfig;