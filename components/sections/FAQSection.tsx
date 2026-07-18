import type { FAQ } from '@/lib/types';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

export function FAQSection({
  faqs,
  idPrefix,
  title = 'Frequently Asked Questions',
  description,
}: {
  faqs: FAQ[];
  idPrefix: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading title={title} description={description} align="center" />
        <div className="mx-auto w-full max-w-3xl">
          <FAQAccordion faqs={faqs} idPrefix={idPrefix} />
        </div>
      </Container>
    </section>
  );
}
