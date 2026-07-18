import { BUSINESS } from '@/lib/constants';
import { Icon } from '@/components/ui/Icon';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function LocalBusinessInfo() {
  const mapQuery = encodeURIComponent(BUSINESS.addressFull);

  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading title="Local Business Details" align="center" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
            <div className="flex items-start gap-3">
              <Icon name="map-pin" className="h-5 w-5 shrink-0 text-cyan-600" />
              <div>
                <p className="text-sm font-semibold text-navy-900">Address</p>
                <p className="text-sm text-slate-600">{BUSINESS.addressFull}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="phone" className="h-5 w-5 shrink-0 text-cyan-600" />
              <div>
                <p className="text-sm font-semibold text-navy-900">Phone</p>
                <a href={BUSINESS.phoneHref} className="text-sm text-cyan-700 hover:text-cyan-600">
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="mail" className="h-5 w-5 shrink-0 text-cyan-600" />
              <div>
                <p className="text-sm font-semibold text-navy-900">Email</p>
                <a href={BUSINESS.emailHref} className="break-all text-sm text-cyan-700 hover:text-cyan-600">
                  {BUSINESS.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="clock" className="h-5 w-5 shrink-0 text-cyan-600" />
              <div>
                <p className="text-sm font-semibold text-navy-900">Hours</p>
                <p className="text-sm text-slate-600">{BUSINESS.hours}</p>
              </div>
            </div>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-1 text-sm font-semibold text-cyan-600 hover:text-cyan-500"
            >
              Get Directions
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card">
            <iframe
              title="Auto Locksmith Dandenong location map"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[320px] w-full border-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
