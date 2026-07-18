export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <span className="text-sm font-semibold uppercase tracking-wide text-cyan-600">{eyebrow}</span>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">{title}</h2>
      {description ? <p className="text-base text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}
