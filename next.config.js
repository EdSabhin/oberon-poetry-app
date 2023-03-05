/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.pinimg.com", "www.azquotes.com"],
  },
  experimental: {
    fontLoaders: [
      {
        loader: "next/font/google",
        options: { subsets: ["latin"] },
      },
    ],
  },
};

module.exports = nextConfig;
