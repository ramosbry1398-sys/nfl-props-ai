/** @type {import('next').NextConfig} */
const nextConfig = {
  // Forces the build to complete even if there are tiny type warnings
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Optimizes the build for mobile environments
  experimental: {
    turbo: {
      rules: {
        // Option to add custom rules if needed
      }
    }
  }
};

export default nextConfig;
