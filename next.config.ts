import type { NextConfig } from 'next';

/**
 * The site is deployed to GitHub Pages, which serves plain files from a CDN.
 * That means a fully static export, no image optimizer, and — when the repo is
 * a project site rather than a user site — a base path in front of every URL.
 * Both values come from the deploy workflow so nothing is hardcoded here.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  // Pages has no server, so it cannot resolve extensionless URLs reliably.
  // Directory-style output (work/capo/index.html) removes the ambiguity.
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // No Next.js server in production, so no on-demand optimization. The
    // screenshots are already WebP at sensible dimensions for this reason.
    unoptimized: true,
  },
};

export default nextConfig;
