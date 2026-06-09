import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  turbopack: {
    root: projectRoot,
  },
  images: {
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
