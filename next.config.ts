import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile in the user home dir confuses workspace-root inference.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
