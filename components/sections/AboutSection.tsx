import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function AboutSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <SectionHeading eyebrow="About the Business" title="About Auto Locksmith Dandenong" />
        <div className="flex flex-col gap-4 text-slate-600">
          <p>
            Auto Locksmith Dandenong provides mobile automotive locksmith services across Dandenong and
            surrounding suburbs. The business is owned by {BUSINESS.ownerName} and was established on{' '}
            {BUSINESS.foundingDateDisplay}.
          </p>
          <p>
            The business assists drivers and riders with{' '}
            <Link href="/services/car-key-replacement-dandenong/" className="font-semibold text-cyan-600 hover:text-cyan-500">
              car key replacement
            </Link>
            ,{' '}
            <Link href="/services/motorcycle-locksmith-dandenong/" className="font-semibold text-cyan-600 hover:text-cyan-500">
              motorcycle key assistance
            </Link>
            ,{' '}
            <Link href="/services/car-key-programming-dandenong/" className="font-semibold text-cyan-600 hover:text-cyan-500">
              car key programming
            </Link>{' '}
            and{' '}
            <Link href="/services/vehicle-lockout-assistance-dandenong/" className="font-semibold text-cyan-600 hover:text-cyan-500">
              vehicle lockout assistance
            </Link>
            , attending the vehicle location rather than requiring vehicles to be brought to a premises.
          </p>
          <Link href="/about-auto-locksmith-dandenong/" className="font-semibold text-cyan-600 hover:text-cyan-500">
            Read more about Auto Locksmith Dandenong &rarr;
          </Link>
        </div>
      </Container>
    </section>
  );
}
