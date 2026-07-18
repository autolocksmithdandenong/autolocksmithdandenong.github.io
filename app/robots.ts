import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

// Required for `output: "export"` — MetadataRoute route handlers must be forced static.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
