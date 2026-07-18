import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { BUSINESS, SOCIAL_LINKS } from '@/lib/constants';
import { contactPageSchema, breadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { ContactForm } from '@/components/forms/ContactForm';
import { SocialIcon, type SocialName } from '@/components/ui/SocialIcons';

const quickServiceLinks = [
  { label: 'Automotive Locksmith', href: '/services/automotive-locksmith-dandenong/' },
  { label: 'Emergency Car Locksmith', href: '/services/emergency-car-locksmith-dandenong/' },
  { label: 'Replacement Car Keys', href: '/services/car-key-replacement-dandenong/' },
  { label: 'Lost Car Keys', href: '/services/lost-car-keys-dandenong/' },
  { label: 'Mobile Car Locksmith', href: '/services/mobile-car-locksmith-dandenong/' },
];

const quickAreaLinks = [
  { label: 'Dandenong', href: '/service-areas/dandenong/' },
  { label: 'Noble Park', href: '/service-areas/noble-park/' },
  { label: 'Springvale', href: '/service-areas/springvale/' },
];

const title = 'Contact Auto Locksmith Dandenong | Call 0410 380 354';
const description =
  'Contact Auto Locksmith Dandenong by phone, email or the online form for mobile car and motorcycle locksmith assistance in Dandenong.';
const path = '/contact/';

export const metadata: Metadata = buildMetadata({ title, description, path });

export default function ContactPage() {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path },
  ];
  const mapQuery = encodeURIComponent(BUSINESS.addressFull);

  return (
    <>
      <JsonLd data={[contactPageSchema({ path }), breadcrumbSchema(breadcrumbItems)]} />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-4">
          <span className="text-sm font-semibold uppercase tracking-wide text-cyan-600">Contact</span>
          <h1 className="text-4xl font-bold text-navy-950 sm:text-5xl">Contact Auto Locksmith Dandenong</h1>
          <p className="max-w-2xl text-lg text-slate-600">
            Call for urgent automotive locksmith assistance, or send an enquiry using the form below for
            non-urgent requests.
          </p>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="flex items-center gap-2 text-sm font-semibold text-amber-700">
                <Icon name="siren" className="h-5 w-5" />
                Urgent assistance needed?
              </p>
              <p className="mt-2 text-sm text-amber-800">
                Call now for the fastest response, available 24 hours a day, 7 days a week.
              </p>
              <div className="mt-4">
                <Button href={BUSINESS.phoneHref} variant="amber">
                  <Icon name="phone" className="h-4 w-4" />
                  Call {BUSINESS.phoneDisplay}
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <div className="flex items-start gap-3">
                <Icon name="map-pin" className="h-5 w-5 shrink-0 text-cyan-600" />
                <div>
                  <p className="text-sm font-semibold text-navy-900">Address</p>
                  <p className="text-sm text-slate-600">{BUSINESS.addressFull}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="mail" className="h-5 w-5 shrink-0 text-cyan-600" />
                <div>
                  <p className="text-sm font-semibold text-navy-900">Email</p>
                  <a href={BUSINESS.emailHref} className="break-all text-sm text-cyan-700 hover:text-cyan-600">
                    {BUSINESS.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="clock" className="h-5 w-5 shrink-0 text-cyan-600" />
                <div>
                  <p className="text-sm font-semibold text-navy-900">Hours</p>
                  <p className="text-sm text-slate-600">{BUSINESS.hours}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="shield" className="h-5 w-5 shrink-0 text-cyan-600" />
                <div>
                  <p className="text-sm font-semibold text-navy-900">Service Area</p>
                  <p className="text-sm text-slate-600">Dandenong and surrounding suburbs</p>
                </div>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Auto Locksmith Dandenong on ${social.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:border-cyan-400 hover:text-cyan-600"
                  >
                    <SocialIcon name={social.name as SocialName} />
                  </a>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card">
              <iframe
                title="Auto Locksmith Dandenong location map"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[280px] w-full border-0"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8 lg:col-span-3">
            <h2 className="text-xl font-bold text-navy-950">Send an Enquiry</h2>
            <p className="mt-2 text-sm text-slate-600">
              Complete the form to open a pre-filled email to Auto Locksmith Dandenong in your own email
              application. For urgent matters, please call directly.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 py-10">
        <Container className="flex flex-col gap-3 text-sm text-slate-500">
          <p>
            Looking for a specific service?{' '}
            {quickServiceLinks.map((link, index) => (
              <span key={link.href}>
                <Link href={link.href} className="font-medium text-cyan-600 hover:text-cyan-500">
                  {link.label}
                </Link>
                {index < quickServiceLinks.length - 1 ? ', ' : '. '}
              </span>
            ))}
            <Link href="/services/" className="font-medium text-cyan-600 hover:text-cyan-500">
              View all services &rarr;
            </Link>
          </p>
          <p>
            Also servicing{' '}
            {quickAreaLinks.map((link, index) => (
              <span key={link.href}>
                <Link href={link.href} className="font-medium text-cyan-600 hover:text-cyan-500">
                  {link.label}
                </Link>
                {index < quickAreaLinks.length - 1 ? ', ' : ' '}
              </span>
            ))}
            and{' '}
            <Link href="/service-areas/" className="font-medium text-cyan-600 hover:text-cyan-500">
              other nearby suburbs
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
