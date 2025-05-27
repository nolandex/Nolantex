/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/layanan",
        destination: "/id/layanan",
        permanent: true,
      },
      {
        source: "/en/layanan",
        destination: "/id/layanan",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
