/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API_URL: process.env.API_URL,
    INNER_API_URL: process.env.INNER_API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ptcdn.info",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "f.ptcdn.info",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
