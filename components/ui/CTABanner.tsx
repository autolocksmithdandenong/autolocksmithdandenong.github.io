import { BUSINESS } from '@/lib/constants';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function CTABanner({
  title = 'Need Automotive Locksmith Assistance in Dandenong?',
  description = 'Call now to speak with Auto Locksmith Dandenong about car keys, remotes, programming or a vehicle lockout.',
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-navy-950 py-14 sm:py-16">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="max-w-xl text-slate-300">{description}</p>
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-amber-400">
          <Icon name="clock" className="h-5 w-5" />
          <span>Open 24 Hours a Day, 7 Days a Week</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href={BUSINESS.phoneHref} variant="amber">
            <Icon name="phone" className="h-4 w-4" />
            Call {BUSINESS.phoneDisplay}
          </Button>
          <Button href={BUSINESS.emailHref} variant="outline">
            <Icon name="mail" className="h-4 w-4" />
            Email Us
          </Button>
          <Button href="/contact/" variant="secondary">
            Contact Page
          </Button>
        </div>
      </Container>
    </section>
  );
}
