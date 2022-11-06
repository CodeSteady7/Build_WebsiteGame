/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["webgame-server.herokuapp.com"],
    // domains: ["server-webgame.webdevgroupid.com"],
  },
};

module.exports = nextConfig;
