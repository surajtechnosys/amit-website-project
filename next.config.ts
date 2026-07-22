import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  
   allowedDevOrigins: [
    "200.141.2.23",
  ],

  experimental: {
    serverActions: {
      bodySizeLimit: "2000mb", // Default is 1MB
    },
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };

    return config;
  },
};

export default nextConfig;
