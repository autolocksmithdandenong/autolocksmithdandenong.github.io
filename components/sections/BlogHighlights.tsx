import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BlogCard } from '@/components/cards/BlogCard';
import { Button } from '@/components/ui/Button';
import type { BlogPost } from '@/lib/blogTypes';

export function BlogHighlights({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="From the Blog"
          title="Helpful Car and Motorcycle Key Advice"
          description="Practical guidance on car keys, key programming and vehicle lockouts from Auto Locksmith Dandenong."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div>
          <Button href="/blog/" variant="outlineLight">
            View All Articles
          </Button>
        </div>
      </Container>
    </section>
  );
}
