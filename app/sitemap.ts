import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { services } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';
import { blogPosts } from '@/data/blog';

// Required for `output: "export"` — MetadataRoute route handlers must be forced static.
export const dynamic = 'force-static';

const staticPaths = [
  '/',
  '/about-auto-locksmith-dandenong/',
  '/services/',
  '/service-areas/',
  '/blog/',
  '/contact/',
  '/privacy-policy/',
  '/terms-and-conditions/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }));

  services.forEach((service) => {
    entries.push({
      url: `${SITE_URL}/services/${service.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  serviceAreas.forEach((area) => {
    entries.push({
      url: `${SITE_URL}/service-areas/${area.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  blogPosts.forEach((post) => {
    entries.push({
      url: `${SITE_URL}/blog/${post.slug}/`,
      lastModified: new Date(post.dateModified),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  return entries;
}
