import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { AreaCard } from '@/components/cards/AreaCard';
import { CTABanner } from '@/components/ui/CTABanner';
import { serviceAreas } from '@/data/serviceAreas';

const title = 'Service Areas | Auto Locksmith Dandenong';
const description =
  'Auto Locksmith Dandenong provides mobile automotive locksmith services across Dandenong and surrounding suburbs.';
const path = '/service-areas/';

export const metadata: Metadata = buildMetadata({ title, description, path });

export default function ServiceAreasIndexPage() {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Service Areas', path },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-4">
          <span className="text-sm font-semibold uppercase tracking-wide text-cyan-600">Service Areas</span>
          <h1 className="text-4xl font-bold text-navy-950 sm:text-5xl">
            Automotive Locksmith Service Areas
          </h1>
          <p className="max-w-2xl text-lg text-slate-600">
            Auto Locksmith Dandenong is based at 294 Thomas St, Dandenong VIC 3175, and provides mobile
            automotive locksmith services throughout Dandenong and the following surrounding suburbs. Visit
            the{' '}
            <Link href="/" className="font-semibold text-cyan-600 hover:text-cyan-500">
              Auto Locksmith Dandenong homepage
            </Link>{' '}
            to learn more, or view the full range of{' '}
            <Link href="/services/" className="font-semibold text-cyan-600 hover:text-cyan-500">
              automotive locksmith services
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {serviceAreas.map((area) => (
              <AreaCard key={area.slug} area={area} />
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
