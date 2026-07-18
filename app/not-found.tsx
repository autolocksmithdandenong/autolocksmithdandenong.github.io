import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-6 text-center">
        <span className="text-xl font-extrabold tracking-tight text-navy-950">
          Auto Locksmith <span className="text-cyan-600">Dandenong</span>
        </span>
        <h1 className="text-4xl font-bold text-navy-950">Page Not Found</h1>
        <p className="max-w-md text-slate-600">
          The page you are looking for could not be found. It may have been moved, or the address may be
          incorrect.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/" variant="primary">
            Back to Homepage
          </Button>
          <Button href="/services/" variant="outlineLight">
            View Services
          </Button>
        </div>
        <p className="text-sm text-slate-500">
          Need urgent assistance? Call {BUSINESS.name} on{' '}
          <a href={BUSINESS.phoneHref} className="font-semibold text-cyan-600 hover:text-cyan-500">
            {BUSINESS.phoneDisplay}
          </a>
          .
        </p>
        <Link href="/contact/" className="text-sm font-semibold text-cyan-600 hover:text-cyan-500">
          Or visit the Contact page &rarr;
        </Link>
      </Container>
    </section>
  );
}
