// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

export const isProd = process.env.NODE_ENV === 'production';
module.exports = { 
  basePath: isProd ? '/nukipizookie.gay' : '', 
  assetPrefix: isProd ? '/nukipizookie.gay/' : '', 
  images: { unoptimized: true, }, 
};

// export const getPath = (path: string): string => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

export default nextConfig;

// import type { NextConfig } from "next";

// const repo = "nukipizookie.gay";

// const nextConfig: NextConfig = {
//   output: "export",

//   basePath: process.env.NODE_ENV === "production" ? `/${repo}` : "",
//   assetPrefix: process.env.NODE_ENV === "production" ? `/${repo}/` : "",

//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;