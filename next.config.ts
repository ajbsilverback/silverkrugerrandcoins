import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  
  // Permanent (301) redirects for renamed routes
  async redirects() {
    return [
      {
        source: "/prices",
        destination: "/live-silver-prices",
        permanent: true,
      },
      // Legacy gold route redirect (for any external links)
      {
        source: "/live-gold-prices",
        destination: "/live-silver-prices",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
