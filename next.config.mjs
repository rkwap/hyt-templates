/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.huntyourtribe.com",
        pathname: "/**", 
      },
    ],
  },

  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@icons-pack/react-simple-icons",
      "date-fns",
      "@radix-ui/react-avatar",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-popover",
      "@radix-ui/react-slot",
      "@radix-ui/react-toast",
    ],
  },
};

export default nextConfig;