import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { BUSINESS } from '@/lib/constants';
import { aboutPageSchema, breadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { CTABanner } from '@/components/ui/CTABanner';

const title = 'About Auto Locksmith Dandenong | Auto Locksmith Dandenong';
const description =
  'Learn about Auto Locksmith Dandenong, a mobile automotive locksmith business owned by Michael Simon and established on 15 March 1999.';
const path = '/about-auto-locksmith-dandenong/';

export const metadata: Metadata = buildMetadata({ title, description, path });

const values = [
  'Direct, straightforward communication with customers',
  'Attending the vehicle location rather than requiring a workshop visit',
  'Assisting with both car and motorcycle key situations',
  'Being available at any hour of the day or night',
];

export default function AboutPage() {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path },
  ];

  return (
    <>
      <JsonLd data={[aboutPageSchema({ path }), breadcrumbSchema(breadcrumbItems)]} />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <span className="text-sm font-semibold uppercase tracking-wide text-cyan-600">About Us</span>
          <h1 className="max-w-3xl text-4xl font-bold text-navy-950 sm:text-5xl">
            About Auto Locksmith Dandenong
          </h1>
          <p className="max-w-3xl text-lg text-slate-600">
            Auto Locksmith Dandenong is a mobile automotive locksmith business serving Dandenong and
            surrounding suburbs. Owned by {BUSINESS.ownerName} and established on{' '}
            {BUSINESS.foundingDateDisplay}, the business assists with vehicle keys, vehicle lockouts, key
            programming and motorcycle key requirements.
          </p>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4 text-slate-600">
            <h2 className="text-2xl font-bold text-navy-950">Business History</h2>
            <p>
              The business was established on {BUSINESS.foundingDateDisplay} and has continued to operate
              as a mobile automotive locksmith service based in Dandenong, Victoria. Rather than requiring
              customers to bring a vehicle to a workshop, {BUSINESS.name} attends the vehicle location
              directly, whether that is a home, a workplace or a roadside situation.
            </p>
            <p>
              The business is owned and operated by {BUSINESS.ownerName}, with a focus on car and motorcycle
              key services including replacement keys, lost key assistance, key programming and vehicle
              lockout assistance across Dandenong and nearby suburbs.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-slate-600">
            <h2 className="text-2xl font-bold text-navy-950">Business Values</h2>
            <ul className="flex flex-col gap-3">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
            <h2 className="text-xl font-bold text-navy-950">Service Area Coverage</h2>
            <p className="mt-3 text-slate-600">
              Auto Locksmith Dandenong is based at {BUSINESS.addressFull} and provides mobile service to
              Dandenong and surrounding suburbs.
            </p>
            <Link href="/service-areas/" className="mt-4 inline-block font-semibold text-cyan-600 hover:text-cyan-500">
              View All Service Areas &rarr;
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
            <h2 className="text-xl font-bold text-navy-950">Services Offered</h2>
            <p className="mt-3 text-slate-600">
              From car key replacement and lost key assistance to key programming, vehicle lockouts and
              motorcycle key services, the business covers a wide range of automotive locksmith needs.
            </p>
            <Link href="/services/" className="mt-4 inline-block font-semibold text-cyan-600 hover:text-cyan-500">
              View All Services &rarr;
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold text-navy-950">Get in Touch</h2>
          <p className="max-w-xl text-slate-600">
            Call {BUSINESS.phoneDisplay} or visit the contact page to reach Auto Locksmith Dandenong directly.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 rounded-xl bg-navy-950 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-800"
          >
            Go to Contact Page
          </Link>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
