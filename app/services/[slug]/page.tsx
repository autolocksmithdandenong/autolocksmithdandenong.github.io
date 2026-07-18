import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/metadata';
import { BUSINESS } from '@/lib/constants';
import { serviceSchema, breadcrumbSchema, faqPageSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTABanner } from '@/components/ui/CTABanner';
import { getServiceBySlug, getRelatedServices, services } from '@/data/services';
import { getServiceAreaBySlug } from '@/data/serviceAreas';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}/`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const path = `/services/${service.slug}/`;
  const relatedServices = getRelatedServices(service);
  const relatedAreas = service.relatedAreas
    .map((areaSlug) => getServiceAreaBySlug(areaSlug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services/' },
    { name: service.name.replace(' Dandenong', ''), path },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: service.name, description: service.metaDescription, path }),
          breadcrumbSchema(breadcrumbItems),
          faqPageSchema(service.faqs),
        ]}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="bg-navy-950 py-14 sm:py-16">
        <Container className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr,220px]">
          <div className="flex flex-col gap-5">
            <span className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
              {service.category === 'motorcycle' ? 'Motorcycle Locksmith' : 'Automotive Locksmith'}
            </span>
            <h1 className="text-3xl font-bold text-white sm:text-4xl">{service.name}</h1>
            <p className="max-w-2xl text-slate-300">{service.summary}</p>
            <div className="flex flex-wrap gap-4">
              <Button href={BUSINESS.phoneHref} variant="primary">
                <Icon name="phone" className="h-4 w-4" />
                Call {BUSINESS.phoneDisplay}
              </Button>
              <Button href="/contact/" variant="outline">
                Contact Page
              </Button>
            </div>
          </div>
          <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-2xl bg-white/5 text-cyan-400">
            <Icon name={service.icon} className="h-20 w-20" />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="flex flex-col gap-10 lg:col-span-2">
            <div>
              <h2 className="text-2xl font-bold text-navy-950">About This Service</h2>
              <p className="mt-3 text-slate-600">{service.summary}</p>
              <p className="mt-3 text-slate-600">
                Learn more about{' '}
                <Link href="/services/" className="font-semibold text-cyan-600 hover:text-cyan-500">
                  all automotive locksmith services
                </Link>{' '}
                offered by Auto Locksmith Dandenong, or return to the{' '}
                <Link href="/" className="font-semibold text-cyan-600 hover:text-cyan-500">
                  Auto Locksmith Dandenong homepage
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-950">Common Situations</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {service.situations.map((situation) => (
                  <li key={situation} className="flex items-start gap-3 text-slate-600">
                    <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                    <span>{situation}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-950">Service Process</h2>
              <ol className="mt-4 flex flex-col gap-3">
                {service.process.map((step, index) => (
                  <li key={step} className="flex items-start gap-3 text-slate-600">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-950 text-xs font-bold text-cyan-400">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-950">Information to Provide When Calling</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {service.callerInfo.map((info) => (
                  <li key={info} className="flex items-start gap-3 text-slate-600">
                    <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                    <span>{info}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <h2 className="text-lg font-bold text-navy-950">Related Services</h2>
              <ul className="mt-3 flex flex-col gap-2">
                {relatedServices.map((related) => (
                  <li key={related.slug}>
                    <Link
                      href={`/services/${related.slug}/`}
                      className="text-sm font-medium text-cyan-600 hover:text-cyan-500"
                    >
                      {related.name.replace(' Dandenong', '')}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <h2 className="text-lg font-bold text-navy-950">Relevant Service Areas</h2>
              <ul className="mt-3 flex flex-col gap-2">
                {relatedAreas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={`/service-areas/${area.slug}/`}
                      className="text-sm font-medium text-cyan-600 hover:text-cyan-500"
                    >
                      {area.name}
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

      <FAQSection faqs={service.faqs} idPrefix={service.slug} title="Frequently Asked Questions" />
      <CTABanner
        title={`Need ${service.name.replace(' Dandenong', '')} in Dandenong?`}
        description={`Call Auto Locksmith Dandenong now to arrange mobile assistance for ${service.name
          .replace(' Dandenong', '')
          .toLowerCase()}.`}
      />
    </>
  );
}
