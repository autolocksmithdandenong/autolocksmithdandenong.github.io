import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Container } from '@/components/ui/Container';
import { HeroGraphic } from '@/components/sections/HeroGraphic';

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800">
      <Container className="grid grid-cols-1 items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-amber-400">
            <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5">
              <Icon name="clock" className="h-4 w-4" />
              Open 24/7
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-cyan-300">
              <Icon name="shield" className="h-4 w-4" />
              Established {BUSINESS.foundingDateDisplay}
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            Mobile Automotive Locksmith in Dandenong
          </h1>

          <p className="max-w-xl text-lg text-slate-300">
            Auto Locksmith Dandenong provides mobile automotive locksmith assistance throughout Dandenong and
            surrounding suburbs. Call for{' '}
            <Link href="/services/car-key-replacement-dandenong/" className="font-semibold text-cyan-300 hover:text-cyan-200">
              car key replacement
            </Link>
            ,{' '}
            <Link href="/services/lost-car-keys-dandenong/" className="font-semibold text-cyan-300 hover:text-cyan-200">
              help with lost car keys
            </Link>
            ,{' '}
            <Link href="/services/vehicle-lockout-assistance-dandenong/" className="font-semibold text-cyan-300 hover:text-cyan-200">
              vehicle lockout help
            </Link>
            ,{' '}
            <Link href="/services/car-key-programming-dandenong/" className="font-semibold text-cyan-300 hover:text-cyan-200">
              car key programming assistance
            </Link>{' '}
            and{' '}
            <Link href="/services/motorcycle-locksmith-dandenong/" className="font-semibold text-cyan-300 hover:text-cyan-200">
              motorcycle key services
            </Link>
            .
          </p>

          <p className="flex items-center gap-2 text-sm text-slate-400">
            <Icon name="map-pin" className="h-4 w-4 text-cyan-400" />
            Serving Dandenong and{' '}
            <Link href="/service-areas/" className="font-medium text-cyan-300 hover:text-cyan-200">
              nearby suburbs
            </Link>{' '}
            across Melbourne&apos;s south-east
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href={BUSINESS.phoneHref} variant="primary">
              <Icon name="phone" className="h-4 w-4" />
              Call {BUSINESS.phoneDisplay}
            </Button>
            <Button href="/services/" variant="outline">
              View Services
            </Button>
          </div>
        </div>

        <div className="relative">
          <HeroGraphic />
        </div>
      </Container>
    </section>
  );
}
