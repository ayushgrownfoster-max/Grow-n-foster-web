import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for next-sanity Studio to work embedded in Next.js
  transpilePackages: ["sanity"],

  images: {
    remotePatterns: [
      {
        // Sanity CDN for images uploaded to your Sanity project
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
