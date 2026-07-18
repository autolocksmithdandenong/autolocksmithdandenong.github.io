import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { breadcrumbSchema, blogSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { BlogCard } from '@/components/cards/BlogCard';
import { CTABanner } from '@/components/ui/CTABanner';
import { getSortedBlogPosts } from '@/data/blog';

const title = 'Blog | Auto Locksmith Dandenong';
const description =
  'Read helpful articles about car keys, motorcycle keys, key programming and vehicle lockouts from Auto Locksmith Dandenong.';
const path = '/blog/';

export const metadata: Metadata = buildMetadata({ title, description, path });

export default function BlogIndexPage() {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path },
  ];
  const posts = getSortedBlogPosts();

  return (
    <>
      <JsonLd data={[blogSchema(), breadcrumbSchema(breadcrumbItems)]} />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-4">
          <span className="text-sm font-semibold uppercase tracking-wide text-cyan-600">Blog</span>
          <h1 className="text-4xl font-bold text-navy-950 sm:text-5xl">Auto Locksmith Dandenong Blog</h1>
          <p className="max-w-2xl text-lg text-slate-600">
            Helpful information about car keys, motorcycle keys, key programming and vehicle lockouts from
            Auto Locksmith Dandenong.
          </p>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
