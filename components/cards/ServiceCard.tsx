import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import type { Service } from '@/lib/types';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-shadow duration-150 hover:shadow-soft">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 text-cyan-400">
        <Icon name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-navy-950">
        <Link href={`/services/${service.slug}/`} className="hover:text-cyan-600">
          {service.name.replace(' Dandenong', '')}
        </Link>
      </h3>
      <p className="flex-1 text-sm text-slate-600">{service.shortDescription}</p>
      <Link
        href={`/services/${service.slug}/`}
        className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-600 hover:text-cyan-500"
      >
        Learn More
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  );
}
