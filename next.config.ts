// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  distDir: "out",   // Export folder (Zoho will use this)
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Optional: makes routing safer on static hosts
};

export default nextConfig;
