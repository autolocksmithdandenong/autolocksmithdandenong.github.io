import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/metadata';
import { BUSINESS } from '@/lib/constants';
import { blogPostingSchema, breadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { CTABanner } from '@/components/ui/CTABanner';
import { BlogContent } from '@/components/sections/BlogContent';
import { blogPosts, getBlogPostBySlug } from '@/data/blog';
import { getServiceBySlug } from '@/data/services';

type Props = {
  params: Promise<{ slug: string }>;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}/`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const path = `/blog/${post.slug}/`;
  const relatedServices = post.relatedServices
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog/' },
    { name: post.title, path },
  ];

  return (
    <>
      <JsonLd
        data={[
          blogPostingSchema({
            headline: post.title,
            description: post.metaDescription,
            path,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
          }),
          breadcrumbSchema(breadcrumbItems),
        ]}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <article className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <header className="flex flex-col gap-3">
              <h1 className="text-3xl font-bold text-navy-950 sm:text-4xl">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
                <span>
                  By <span className="font-medium text-navy-900">{BUSINESS.ownerName}</span>
                </span>
                <span aria-hidden="true">&middot;</span>
                <time dateTime={post.datePublished}>Published {formatDate(post.datePublished)}</time>
                {post.dateModified !== post.datePublished ? (
                  <>
                    <span aria-hidden="true">&middot;</span>
                    <time dateTime={post.dateModified}>Updated {formatDate(post.dateModified)}</time>
                  </>
                ) : null}
              </div>
            </header>

            <BlogContent blocks={post.content} />

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-lg font-bold text-navy-950">Related Services</h2>
              <ul className="mt-3 flex flex-wrap gap-3">
                {relatedServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}/`}
                      className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-cyan-700 hover:border-cyan-400"
                    >
                      {service.name.replace(' Dandenong', '')}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-slate-600">
                Return to the{' '}
                <Link href="/" className="font-semibold text-cyan-600 hover:text-cyan-500">
                  Auto Locksmith Dandenong homepage
                </Link>{' '}
                or read more on the{' '}
                <Link href="/blog/" className="font-semibold text-cyan-600 hover:text-cyan-500">
                  Auto Locksmith Dandenong blog
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </article>

      <CTABanner />
    </>
  );
}
