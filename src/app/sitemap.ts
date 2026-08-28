import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';

// Written once at build time — required for the static export.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified, changeFrequency: 'monthly', priority: 1 },
    {
      url: `${siteUrl}/work/capo`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
