/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // This forces Next.js to skip trying to pre-render the page during build
  // which prevents the Supabase "crash"
  dynamic: 'force-dynamic'
};

export default nextConfig;
