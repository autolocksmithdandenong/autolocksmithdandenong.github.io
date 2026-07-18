import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { mainNav } from '@/data/navigation';
import { services } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';
import { Icon } from '@/components/ui/Icon';
import { MobileNav } from '@/components/layout/MobileNav';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="hidden bg-navy-950 text-slate-200 lg:block">
        <div className="mx-auto flex w-full max-w-content items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
          <span className="flex items-center gap-1.5 text-amber-400">
            <Icon name="clock" className="h-3.5 w-3.5" />
            Open 24 Hours a Day, 7 Days a Week
          </span>
          <div className="flex items-center gap-4">
            <a href={BUSINESS.emailHref} className="hover:text-white">
              {BUSINESS.email}
            </a>
            <a href={BUSINESS.phoneHref} className="font-semibold text-cyan-400 hover:text-cyan-300">
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-content items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 text-cyan-400">
            <Icon name="shield" className="h-6 w-6" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold text-navy-950 sm:text-base">Auto Locksmith</span>
            <span className="text-sm font-bold text-cyan-600 sm:text-base">Dandenong</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          <Link href="/" className="rounded-lg px-3 py-2 text-sm font-medium text-navy-900 hover:bg-slate-100">
            Home
          </Link>

          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-navy-900 marker:content-none hover:bg-slate-100 [&::-webkit-details-marker]:hidden">
              Services
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.25a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <div className="absolute left-1/2 top-full z-50 mt-2 w-[640px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}/`}
                    className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-cyan-600"
                  >
                    {service.name.replace(' Dandenong', '')}
                  </Link>
                ))}
              </div>
              <div className="mt-3 border-t border-slate-100 pt-3">
                <Link href="/services/" className="px-3 text-sm font-semibold text-cyan-600 hover:text-cyan-500">
                  View All Services &rarr;
                </Link>
              </div>
            </div>
          </details>

          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-navy-900 marker:content-none hover:bg-slate-100 [&::-webkit-details-marker]:hidden">
              Service Areas
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.25a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <div className="absolute left-1/2 top-full z-50 mt-2 w-[520px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/service-areas/${area.slug}/`}
                    className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-cyan-600"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
              <div className="mt-3 border-t border-slate-100 pt-3">
                <Link href="/service-areas/" className="px-3 text-sm font-semibold text-cyan-600 hover:text-cyan-500">
                  View All Service Areas &rarr;
                </Link>
              </div>
            </div>
          </details>

          {mainNav
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-navy-900 hover:bg-slate-100"
              >
                {link.label}
              </Link>
            ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-navy-950 hover:bg-cyan-400"
          >
            <Icon name="phone" className="h-4 w-4" />
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
