import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { BUSINESS } from '@/lib/constants';
import { breadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';

const title = 'Terms and Conditions | Auto Locksmith Dandenong';
const description = 'Read the terms and conditions for using the Auto Locksmith Dandenong website and services.';
const path = '/terms-and-conditions/';

export const metadata: Metadata = buildMetadata({ title, description, path });

export default function TermsPage() {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Terms and Conditions', path },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-5">
            <h1 className="text-4xl font-bold text-navy-950">Terms and Conditions</h1>
            <p className="text-slate-600">
              These terms and conditions apply to your use of this website and to any automotive locksmith
              services arranged with {BUSINESS.name}.
            </p>

            <h2 className="text-2xl font-bold text-navy-950">Website Information</h2>
            <p className="text-slate-600">
              Information on this website is general in nature and is provided for informational purposes.
              Service availability, timing and pricing should be confirmed by phone before assuming any
              detail on this website applies to your specific situation.
            </p>

            <h2 className="text-2xl font-bold text-navy-950">Service Availability</h2>
            <p className="text-slate-600">
              Mobile automotive locksmith services are provided subject to availability at the time of your
              call. Arrival times cannot be guaranteed and depend on location, traffic and current job load.
            </p>

            <h2 className="text-2xl font-bold text-navy-950">Ownership Verification</h2>
            <p className="text-slate-600">
              Reasonable proof of ownership or authorisation may be requested before a key, lock or vehicle
              access service is carried out.
            </p>

            <h2 className="text-2xl font-bold text-navy-950">Limitation of Liability</h2>
            <p className="text-slate-600">
              While reasonable care is taken in providing automotive locksmith services, {BUSINESS.name} is
              not liable for pre-existing faults or damage unrelated to the service performed, to the extent
              permitted by law.
            </p>

            <h2 className="text-2xl font-bold text-navy-950">Website Use</h2>
            <p className="text-slate-600">
              This website and its content, including text, images and design, belong to {BUSINESS.name}
              unless otherwise indicated. Content should not be copied or reproduced without permission.
            </p>

            <h2 className="text-2xl font-bold text-navy-950">Governing Law</h2>
            <p className="text-slate-600">
              These terms are governed by the laws of Victoria, Australia.
            </p>

            <h2 className="text-2xl font-bold text-navy-950">Contact</h2>
            <p className="text-slate-600">
              Questions about these terms can be directed to {BUSINESS.name} by phone on{' '}
              {BUSINESS.phoneDisplay} or by email at {BUSINESS.email}.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
