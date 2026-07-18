/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages (autolocksmithdandenong.github.io) — no Node server available.
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // NOTE: custom headers() is intentionally omitted — it is not supported (and is silently
  // ignored) under `output: "export"`, and GitHub Pages has no mechanism to apply custom
  // response headers via Next.js config. If security headers are required, they would need
  // to be configured at a CDN/proxy layer in front of GitHub Pages.
};

export default nextConfig;
