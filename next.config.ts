import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Add rule to handle pdf.worker.min.js
    config.module.rules.push({
      test: /pdf\.worker\.(min\.)?js$/,
      type: "asset/resource",
      generator: {
        filename: "static/workers/[name][ext]", // Output path for the worker file
      },
    });

    return config;
  },
};

export default nextConfig;