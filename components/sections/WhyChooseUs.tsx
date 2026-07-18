import { BUSINESS } from '@/lib/constants';
import { Icon } from '@/components/ui/Icon';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const points = [
  `Established on ${BUSINESS.foundingDateDisplay}`,
  'Locally based in Dandenong',
  'Mobile automotive locksmith service',
  'Available 24 hours a day, 7 days a week',
  'Car and motorcycle key assistance',
  'Direct phone contact with the business',
  'Coverage across Dandenong and nearby suburbs',
];

export function WhyChooseUs() {
  return (
    <section className="bg-navy-950 py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Why Choose Auto Locksmith Dandenong</h2>
        </div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200"
            >
              <Icon name="shield" className="h-5 w-5 shrink-0 text-cyan-400" />
              <span className="text-sm">{point}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
