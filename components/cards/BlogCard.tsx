import Link from 'next/link';
import type { BlogPost } from '@/lib/blogTypes';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
      <time dateTime={post.datePublished} className="text-xs font-medium uppercase tracking-wide text-cyan-600">
        {formatDate(post.datePublished)}
      </time>
      <h3 className="text-lg font-semibold text-navy-950">
        <Link href={`/blog/${post.slug}/`} className="hover:text-cyan-600">
          {post.title}
        </Link>
      </h3>
      <p className="flex-1 text-sm text-slate-600">{post.excerpt}</p>
      <Link
        href={`/blog/${post.slug}/`}
        className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-600 hover:text-cyan-500"
      >
        Read Article
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </article>
  );
}
