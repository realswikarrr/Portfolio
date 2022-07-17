/** @type {import('next').NextConfig} */
const nextConfig = {
  rules: {
    "react/display-name": "off",
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
