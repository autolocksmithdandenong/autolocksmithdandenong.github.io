import Link from 'next/link';
import type { Service } from '@/lib/types';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Icon } from '@/components/ui/Icon';

export function ServiceExplainer({
  eyebrow,
  title,
  description,
  services,
  reverse = false,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  services: Service[];
  reverse?: boolean;
}) {
  return (
    <section className={`py-16 sm:py-20 ${reverse ? 'bg-slate-50' : ''}`}>
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}/`}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-navy-900 shadow-card hover:border-cyan-400 hover:text-cyan-600"
              >
                <Icon name={service.icon} className="h-5 w-5 shrink-0 text-cyan-600" />
                {service.name.replace(' Dandenong', '')}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
