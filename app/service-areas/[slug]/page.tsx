import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/metadata';
import { BUSINESS } from '@/lib/constants';
import { breadcrumbSchema, faqPageSchema, webPageSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTABanner } from '@/components/ui/CTABanner';
import { getServiceAreaBySlug, getNearbyAreas, serviceAreas } from '@/data/serviceAreas';
import { getServiceBySlug } from '@/data/services';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) return {};

  return buildMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/service-areas/${area.slug}/`,
  });
}

export default async function ServiceAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  const path = `/service-areas/${area.slug}/`;
  const nearbyAreas = getNearbyAreas(area);
  const relatedServices = area.relatedServices
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Service Areas', path: '/service-areas/' },
    { name: area.name, path },
  ];

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: area.metaTitle, description: area.metaDescription, path }),
          breadcrumbSchema(breadcrumbItems),
          faqPageSchema(area.faqs),
        ]}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="bg-navy-950 py-14 sm:py-16">
        <Container className="flex flex-col gap-5">
          <span className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-cyan-400">
            <Icon name="map-pin" className="h-4 w-4" />
            Service Area
          </span>
          <h1 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            Automotive Locksmith {area.name}
          </h1>
          <p className="max-w-2xl text-slate-300">{area.intro}</p>
          <div className="flex flex-wrap gap-4">
            <Button href={BUSINESS.phoneHref} variant="primary">
              <Icon name="phone" className="h-4 w-4" />
              Call {BUSINESS.phoneDisplay}
            </Button>
            <Button href="/contact/" variant="outline">
              Contact Page
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="flex flex-col gap-10 lg:col-span-2">
            <div>
              <h2 className="text-2xl font-bold text-navy-950">
                Automotive Locksmith Services Available in {area.name}
              </h2>
              <p className="mt-3 text-slate-600">
                Auto Locksmith Dandenong provides mobile automotive locksmith assistance in {area.name},
                covering car keys, motorcycle keys, key programming and vehicle lockouts. Auto Locksmith
                Dandenong is based at {BUSINESS.addressFull} and travels to {area.name} as a mobile service
                rather than operating a separate local office.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-950">Car Key Replacement in {area.name}</h2>
              <p className="mt-3 text-slate-600">{area.carKeyReplacement}</p>
              <Link
                href="/services/car-key-replacement-dandenong/"
                className="mt-2 inline-block text-sm font-semibold text-cyan-600 hover:text-cyan-500"
              >
                More about car key replacement &rarr;
              </Link>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-950">Lost Car Keys in {area.name}</h2>
              <p className="mt-3 text-slate-600">{area.lostCarKeys}</p>
              <Link
                href="/services/lost-car-keys-dandenong/"
                className="mt-2 inline-block text-sm font-semibold text-cyan-600 hover:text-cyan-500"
              >
                More about lost car key assistance &rarr;
              </Link>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-950">Vehicle Lockout Assistance in {area.name}</h2>
              <p className="mt-3 text-slate-600">{area.vehicleLockout}</p>
              <Link
                href="/services/vehicle-lockout-assistance-dandenong/"
                className="mt-2 inline-block text-sm font-semibold text-cyan-600 hover:text-cyan-500"
              >
                More about vehicle lockout assistance &rarr;
              </Link>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-950">Motorcycle Locksmith in {area.name}</h2>
              <p className="mt-3 text-slate-600">{area.motorcycleLocksmith}</p>
              <Link
                href="/services/motorcycle-locksmith-dandenong/"
                className="mt-2 inline-block text-sm font-semibold text-cyan-600 hover:text-cyan-500"
              >
                More about motorcycle locksmith services &rarr;
              </Link>
            </div>

            <p className="text-slate-600">
              Return to the{' '}
              <Link href="/" className="font-semibold text-cyan-600 hover:text-cyan-500">
                Auto Locksmith Dandenong homepage
              </Link>{' '}
              or view the full list of{' '}
              <Link href="/services/" className="font-semibold text-cyan-600 hover:text-cyan-500">
                automotive locksmith services
              </Link>
              .
            </p>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <h2 className="text-lg font-bold text-navy-950">Relevant Services</h2>
              <ul className="mt-3 flex flex-col gap-2">
                {relatedServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}/`}
                      className="text-sm font-medium text-cyan-600 hover:text-cyan-500"
                    >
                      {service.name.replace(' Dandenong', '')}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <h2 className="text-lg font-bold text-navy-950">Nearby Suburbs</h2>
              <ul className="mt-3 flex flex-col gap-2">
                {nearbyAreas.map((nearby) => (
                  <li key={nearby.slug}>
                    <Link
                      href={`/service-areas/${nearby.slug}/`}
                      className="text-sm font-medium text-cyan-600 hover:text-cyan-500"
                    >
                      {nearby.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/service-areas/"
                className="mt-3 inline-block text-sm font-semibold text-cyan-600 hover:text-cyan-500"
              >
                View All Service Areas &rarr;
              </Link>
            </div>
          </aside>
        </Container>
      </section>

      <FAQSection faqs={area.faqs} idPrefix={area.slug} title="Frequently Asked Questions" />
      <CTABanner
        title={`Need Automotive Locksmith Assistance in ${area.name}?`}
        description={`Call Auto Locksmith Dandenong now for mobile automotive locksmith assistance in ${area.name}.`}
      />
    </>
  );
}
