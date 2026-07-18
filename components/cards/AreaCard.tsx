import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import type { ServiceArea } from '@/lib/types';

export function AreaCard({ area }: { area: ServiceArea }) {
  return (
    <Link
      href={`/service-areas/${area.slug}/`}
      className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-card transition-colors duration-150 hover:border-cyan-400"
    >
      <Icon name="map-pin" className="h-5 w-5 shrink-0 text-cyan-600" />
      <span className="font-medium text-navy-950 group-hover:text-cyan-600">{area.name}</span>
    </Link>
  );
}
