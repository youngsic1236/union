import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/union",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
