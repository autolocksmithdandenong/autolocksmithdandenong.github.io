import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { BUSINESS } from '@/lib/constants';
import { breadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';

const title = 'Privacy Policy | Auto Locksmith Dandenong';
const description = 'Read the privacy policy for Auto Locksmith Dandenong, covering how enquiry information is collected and used.';
const path = '/privacy-policy/';

export const metadata: Metadata = buildMetadata({ title, description, path });

export default function PrivacyPolicyPage() {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Privacy Policy', path },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="py-16 sm:py-20">
        <Container>
        <div className="mx-auto flex max-w-3xl flex-col gap-5">
          <h1 className="text-4xl font-bold text-navy-950">Privacy Policy</h1>
          <p className="text-slate-600">
            This privacy policy explains how {BUSINESS.name} collects, uses and protects personal
            information provided through this website, including the contact form.
          </p>

          <h2 className="text-2xl font-bold text-navy-950">Information Collected</h2>
          <p className="text-slate-600">
            When you submit the contact form, the following information may be collected: your name, phone
            number, email address, vehicle details, current suburb, the service required and any message you
            provide.
          </p>

          <h2 className="text-2xl font-bold text-navy-950">How Information Is Used</h2>
          <p className="text-slate-600">
            Information submitted through the contact form is used solely to respond to your enquiry and
            arrange the requested automotive locksmith service. Information is not sold or shared with third
            parties for marketing purposes.
          </p>

          <h2 className="text-2xl font-bold text-navy-950">Data Storage</h2>
          <p className="text-slate-600">
            Contact form submissions are transmitted by email and are not stored in a public-facing database
            on this website. Reasonable steps are taken to keep information secure during transmission.
          </p>

          <h2 className="text-2xl font-bold text-navy-950">Cookies</h2>
          <p className="text-slate-600">
            This website does not use tracking cookies for advertising purposes. Any cookies used relate to
            the basic functioning of the website.
          </p>

          <h2 className="text-2xl font-bold text-navy-950">Contacting Us About Privacy</h2>
          <p className="text-slate-600">
            If you have questions about this privacy policy or wish to request that your information be
            deleted, contact {BUSINESS.name} by phone on {BUSINESS.phoneDisplay} or by email at{' '}
            {BUSINESS.email}.
          </p>

          <h2 className="text-2xl font-bold text-navy-950">Changes to This Policy</h2>
          <p className="text-slate-600">
            This privacy policy may be updated from time to time. Continued use of this website constitutes
            acceptance of any changes.
          </p>
        </div>
        </Container>
      </section>
    </>
  );
}
