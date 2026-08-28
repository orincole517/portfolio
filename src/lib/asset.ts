/**
 * Prefix a file in `public/` with the deployment base path.
 *
 * next/image only applies `basePath` through its optimizer. The GitHub Pages
 * build sets `images.unoptimized`, so the `src` is emitted verbatim and a
 * project-site deployment (served from /<repo>) would 404 on every image.
 * Everything that points at `public/` goes through here.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function asset(path: string): string {
  return `${basePath}${path}`;
}
