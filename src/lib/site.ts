/**
 * Single place for anything that depends on where the site is deployed.
 * The deploy workflow sets NEXT_PUBLIC_SITE_URL from the repository name; the
 * fallback only matters for local builds.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ??
  'https://orincole517.github.io/portfolio';

export const siteName = 'Orin Cole — Frontend Engineer';
