/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Tells Vercel to build a static site (un-crashable)
  images: { unoptimized: true }, // Required for static sites
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
