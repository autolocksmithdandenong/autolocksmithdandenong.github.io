import Link from 'next/link';
import { BUSINESS, SOCIAL_LINKS, NAP_DISCLAIMER } from '@/lib/constants';
import { footerServiceLinks, footerAreaLinks, legalNav } from '@/data/navigation';
import { Icon } from '@/components/ui/Icon';
import { SocialIcon, type SocialName } from '@/components/ui/SocialIcons';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-navy-950 text-slate-300">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <Link href="/" className="text-xl font-extrabold tracking-tight text-white">
            Auto Locksmith Dandenong
          </Link>
          <p className="text-sm text-slate-400">
            Mobile automotive locksmith assistance for cars and motorcycles across Dandenong and surrounding
            suburbs.
          </p>
          <p className="text-sm text-slate-400">Established {BUSINESS.foundingDateDisplay}</p>
          <p className="flex items-center gap-1.5 text-sm font-medium text-amber-400">
            <Icon name="clock" className="h-4 w-4" />
            Open 24/7
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Main Services</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {footerServiceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-slate-400 hover:text-cyan-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Service Areas</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {footerAreaLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-slate-400 hover:text-cyan-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/service-areas/" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300">
            View All Service Areas &rarr;
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
          <a href={BUSINESS.phoneHref} className="text-sm text-slate-400 hover:text-cyan-400">
            {BUSINESS.phoneDisplay}
          </a>
          <a href={BUSINESS.emailHref} className="break-all text-sm text-slate-400 hover:text-cyan-400">
            {BUSINESS.email}
          </a>
          <p className="text-sm text-slate-400">{BUSINESS.addressFull}</p>
          <p className="text-sm text-slate-400">Open 24/7</p>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {legalNav.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-cyan-400">
                {link.label}
              </Link>
            ))}
            <span>&copy; {year} Auto Locksmith Dandenong</span>
          </div>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Auto Locksmith Dandenong on ${social.name}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
              >
                <SocialIcon name={social.name as SocialName} />
              </a>
            ))}
          </div>
        </Container>
        <Container className="pb-8 text-xs text-slate-500">{NAP_DISCLAIMER}</Container>
      </div>
    </footer>
  );
}
