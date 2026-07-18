import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { Icon } from '@/components/ui/Icon';

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 backdrop-blur lg:hidden">
      <div className="grid grid-cols-3 divide-x divide-slate-200">
        <a
          href={BUSINESS.phoneHref}
          className="flex flex-col items-center justify-center gap-0.5 bg-cyan-500 py-2.5 text-navy-950"
        >
          <Icon name="phone" className="h-4 w-4" />
          <span className="text-[11px] font-semibold">Call Now</span>
        </a>
        <a
          href={BUSINESS.emailHref}
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-navy-900"
        >
          <Icon name="mail" className="h-4 w-4" />
          <span className="text-[11px] font-semibold">Email</span>
        </a>
        <Link
          href="/services/"
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-navy-900"
        >
          <Icon name="key" className="h-4 w-4" />
          <span className="text-[11px] font-semibold">Services</span>
        </Link>
      </div>
    </div>
  );
}
