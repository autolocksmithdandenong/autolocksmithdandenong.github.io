import { BUSINESS } from '@/lib/constants';
import { Icon } from '@/components/ui/Icon';
import { Container } from '@/components/ui/Container';
import type { IconKey } from '@/lib/types';

const items: { icon: IconKey; label: string }[] = [
  { icon: 'clock', label: 'Open 24/7' },
  { icon: 'mobile', label: 'Mobile Service' },
  { icon: 'map-pin', label: 'Serving Dandenong and Nearby Suburbs' },
  { icon: 'shield', label: `Established ${BUSINESS.foundingDateDisplay}` },
];

export function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-6">
      <Container className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-2 text-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-950 text-cyan-400">
              <Icon name={item.icon} className="h-5 w-5" />
            </span>
            <span className="text-xs font-semibold text-navy-900 sm:text-sm">{item.label}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}
