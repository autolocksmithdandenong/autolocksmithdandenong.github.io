import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { CTABanner } from '@/components/ui/CTABanner';
import { carServices, motorcycleServices, services } from '@/data/services';

const title = 'Automotive Locksmith Services Dandenong | Auto Locksmith Dandenong';
const description =
  'Browse mobile automotive locksmith services in Dandenong, covering car keys, key programming, vehicle lockouts and motorcycle keys.';
const path = '/services/';

export const metadata: Metadata = buildMetadata({ title, description, path });

const generalServices = services.filter((s) => s.category === 'general');

export default function ServicesIndexPage() {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-4">
          <span className="text-sm font-semibold uppercase tracking-wide text-cyan-600">Services</span>
          <h1 className="text-4xl font-bold text-navy-950 sm:text-5xl">
            Automotive Locksmith Services in Dandenong
          </h1>
          <p className="max-w-2xl text-lg text-slate-600">
            Auto Locksmith Dandenong offers a full range of mobile automotive locksmith services for cars and
            motorcycles. Select a service below for details specific to Dandenong and surrounding suburbs, or
            head back to the{' '}
            <Link href="/" className="font-semibold text-cyan-600 hover:text-cyan-500">
              Auto Locksmith Dandenong homepage
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading eyebrow="General" title="Automotive Locksmith" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {generalServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading eyebrow="Car Keys" title="Car Key Services" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {carServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading eyebrow="Motorcycles" title="Motorcycle Locksmith Services" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {motorcycleServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
