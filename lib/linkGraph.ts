import { services } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';
import { blogPosts } from '@/data/blog';

/**
 * Validates every cross-reference between services, service areas and blog
 * posts at build/import time. Importing this module (for its side effects)
 * from the root layout means an invalid or self-referencing slug throws
 * before a single page can render, failing the build immediately instead of
 * shipping a broken or empty related-content section.
 */

const serviceSlugs = new Set(services.map((s) => s.slug));
const areaSlugs = new Set(serviceAreas.map((a) => a.slug));
const blogSlugs = new Set(blogPosts.map((p) => p.slug));

function assertExists(label: string, slug: string, validSlugs: Set<string>) {
  if (!validSlugs.has(slug)) {
    throw new Error(`Internal link validation failed: "${slug}" referenced in ${label} does not exist.`);
  }
}

function assertNoSelfLink(label: string, ownSlug: string, targetSlug: string) {
  if (ownSlug === targetSlug) {
    throw new Error(`Internal link validation failed: ${label} links to itself ("${ownSlug}").`);
  }
}

services.forEach((service) => {
  service.relatedServices.forEach((slug) => {
    assertExists(`services.ts -> ${service.slug}.relatedServices`, slug, serviceSlugs);
    assertNoSelfLink(`services.ts -> ${service.slug}.relatedServices`, service.slug, slug);
  });
  service.relatedAreas.forEach((slug) => assertExists(`services.ts -> ${service.slug}.relatedAreas`, slug, areaSlugs));
  service.relatedArticles.forEach((slug) =>
    assertExists(`services.ts -> ${service.slug}.relatedArticles`, slug, blogSlugs),
  );
});

serviceAreas.forEach((area) => {
  area.nearby.forEach((slug) => {
    assertExists(`serviceAreas.ts -> ${area.slug}.nearby`, slug, areaSlugs);
    assertNoSelfLink(`serviceAreas.ts -> ${area.slug}.nearby`, area.slug, slug);
  });
  area.relatedServices.forEach((slug) => assertExists(`serviceAreas.ts -> ${area.slug}.relatedServices`, slug, serviceSlugs));
  area.relatedArticles.forEach((slug) => assertExists(`serviceAreas.ts -> ${area.slug}.relatedArticles`, slug, blogSlugs));
});

blogPosts.forEach((post) => {
  post.relatedServices.forEach((slug) => assertExists(`blog.ts -> ${post.slug}.relatedServices`, slug, serviceSlugs));
  post.relatedAreas.forEach((slug) => assertExists(`blog.ts -> ${post.slug}.relatedAreas`, slug, areaSlugs));
  if (post.nextArticle) {
    assertExists(`blog.ts -> ${post.slug}.nextArticle`, post.nextArticle, blogSlugs);
    assertNoSelfLink(`blog.ts -> ${post.slug}.nextArticle`, post.slug, post.nextArticle);
  }
});

export const linkGraphValidated = true;
