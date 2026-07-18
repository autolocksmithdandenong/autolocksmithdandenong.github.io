import type { ServiceArea } from '@/lib/types';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AreaCard } from '@/components/cards/AreaCard';
import { Button } from '@/components/ui/Button';

export function AreaGrid({
  title = 'Service Areas',
  description,
  areas,
  showViewAll = true,
}: {
  title?: string;
  description?: string;
  areas: ServiceArea[];
  showViewAll?: boolean;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading title={title} description={description} align="center" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {areas.map((area) => (
            <AreaCard key={area.slug} area={area} />
          ))}
        </div>
        {showViewAll ? (
          <div className="flex justify-center">
            <Button href="/service-areas/" variant="outlineLight">
              View All Service Areas
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
