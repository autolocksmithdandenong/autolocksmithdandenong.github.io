'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { mainNav } from '@/data/navigation';
import { services } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';
import { Icon } from '@/components/ui/Icon';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, []);

  return (
    <div className="flex items-center gap-2 lg:hidden">
      <a
        href={BUSINESS.phoneHref}
        aria-label={`Call Auto Locksmith Dandenong on ${BUSINESS.phoneDisplay}`}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-navy-950"
      >
        <Icon name="phone" className="h-5 w-5" />
      </a>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setIsOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-navy-900"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
            <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {isOpen ? (
        <div
          id="mobile-menu-panel"
          className="fixed inset-x-0 top-[64px] z-50 max-h-[calc(100vh-64px)] overflow-y-auto border-t border-slate-200 bg-white px-4 pb-28 pt-4 shadow-soft"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-navy-900 hover:bg-slate-100"
            >
              Home
            </Link>

            <details className="rounded-lg">
              <summary className="cursor-pointer list-none rounded-lg px-3 py-3 text-base font-medium text-navy-900 marker:content-none hover:bg-slate-100 [&::-webkit-details-marker]:hidden">
                Services
              </summary>
              <div className="flex flex-col gap-0.5 py-1 pl-3">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}/`}
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-cyan-600"
                  >
                    {service.name.replace(' Dandenong', '')}
                  </Link>
                ))}
                <Link
                  href="/services/"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-cyan-600"
                >
                  View All Services &rarr;
                </Link>
              </div>
            </details>

            <details className="rounded-lg">
              <summary className="cursor-pointer list-none rounded-lg px-3 py-3 text-base font-medium text-navy-900 marker:content-none hover:bg-slate-100 [&::-webkit-details-marker]:hidden">
                Service Areas
              </summary>
              <div className="flex flex-col gap-0.5 py-1 pl-3">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/service-areas/${area.slug}/`}
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-cyan-600"
                  >
                    {area.name}
                  </Link>
                ))}
                <Link
                  href="/service-areas/"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-cyan-600"
                >
                  View All Service Areas &rarr;
                </Link>
              </div>
            </details>

            {mainNav
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-navy-900 hover:bg-slate-100"
                >
                  {link.label}
                </Link>
              ))}

            <a
              href={BUSINESS.phoneHref}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 text-base font-semibold text-navy-950"
            >
              <Icon name="phone" className="h-4 w-4" />
              Call {BUSINESS.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
