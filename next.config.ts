import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "threewishescereal.com",
        pathname: "/cdn/**",
      },
    ],
  },
};

export default nextConfig;
