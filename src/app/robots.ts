import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';

// Written once at build time — required for the static export.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
