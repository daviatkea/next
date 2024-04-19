/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   useLightningcss: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
