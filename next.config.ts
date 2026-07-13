import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // A stray lockfile in the user home dir confuses workspace-root inference.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
