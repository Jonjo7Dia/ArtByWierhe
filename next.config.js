/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["artbyweirhe.prismic.io", "images.prismic.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "artbyweirhe.prismic.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
