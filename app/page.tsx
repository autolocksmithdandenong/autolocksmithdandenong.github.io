import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { webPageSchema, faqPageSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { ServiceGrid } from '@/components/sections/ServiceGrid';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { ServiceExplainer } from '@/components/sections/ServiceExplainer';
import { AreaGrid } from '@/components/sections/AreaGrid';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { LocalBusinessInfo } from '@/components/sections/LocalBusinessInfo';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTABanner } from '@/components/ui/CTABanner';
import { featuredServices, getServiceBySlug, motorcycleServices } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';
import { homepageFaqs } from '@/data/faqs';

const title = 'Auto Locksmith Dandenong | Mobile Car Locksmith 24/7';
const description =
  'Call Auto Locksmith Dandenong on 0410 380 354 for mobile car key, vehicle lockout, key programming and motorcycle key assistance across Dandenong.';

export const metadata: Metadata = buildMetadata({ title, description, path: '/' });

const carKeyServiceSlugs = [
  'lost-car-keys-dandenong',
  'replacement-car-keys-dandenong',
  'spare-car-keys-dandenong',
  'transponder-key-programming-dandenong',
  'car-remote-programming-dandenong',
  'car-key-fob-assistance-dandenong',
  'broken-car-key-extraction-dandenong',
  'ignition-key-assistance-dandenong',
];

export default function HomePage() {
  const carKeyServices = carKeyServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: title, description, path: '/' }),
          faqPageSchema(homepageFaqs),
        ]}
      />
      <Hero />
      <TrustBar />
      <ServiceGrid
        eyebrow="Main Services"
        title="Automotive Locksmith Services in Dandenong"
        description="Mobile assistance for the most common car and motorcycle key situations."
        services={featuredServices}
      />
      <AboutSection />
      <ProcessSteps
        steps={[
          'Call and describe the vehicle key or lock problem.',
          'Confirm the vehicle location and service requirements.',
          'A mobile automotive locksmith attends the requested location, subject to availability.',
          'The required key or lock service is assessed and completed where possible.',
        ]}
      />
      <ServiceExplainer
        eyebrow="Car Key Services"
        title="Car Key Services"
        description="From lost keys to programming and broken key extraction, each situation links through to a dedicated service page with more detail."
        services={carKeyServices}
      />
      <ServiceExplainer
        eyebrow="Motorcycle Locksmith Services"
        title="Motorcycle Locksmith Services"
        description="Mobile motorcycle locksmith assistance for lost keys, replacements and spare keys."
        services={motorcycleServices}
        reverse
      />
      <AreaGrid
        title="Service Areas"
        description="Auto Locksmith Dandenong provides mobile service across Dandenong and the following suburbs."
        areas={serviceAreas}
        showViewAll={false}
      />
      <WhyChooseUs />
      <LocalBusinessInfo />
      <FAQSection faqs={homepageFaqs} idPrefix="home" />
      <CTABanner />
    </>
  );
}
