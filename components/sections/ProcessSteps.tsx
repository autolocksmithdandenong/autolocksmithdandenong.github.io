import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ProcessSteps({
  title = 'How the Service Process Works',
  steps,
}: {
  title?: string;
  steps: string[];
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading title={title} align="center" />
        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step}
              className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-950 text-sm font-bold text-cyan-400">
                {index + 1}
              </span>
              <p className="text-sm text-slate-600">{step}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
