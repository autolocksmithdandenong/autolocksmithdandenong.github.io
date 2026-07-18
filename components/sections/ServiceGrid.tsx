import type { Service } from '@/lib/types';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/cards/ServiceCard';

export function ServiceGrid({
  eyebrow,
  title,
  description,
  services,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  services: Service[];
}) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
