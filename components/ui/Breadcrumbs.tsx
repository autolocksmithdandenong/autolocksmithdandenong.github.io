import Link from 'next/link';

export type Crumb = {
  name: string;
  path: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto flex w-full max-w-content flex-wrap items-center gap-1.5 px-4 py-3 text-sm text-slate-500 sm:px-6 lg:px-8">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <span key={item.path} className="flex items-center gap-1.5">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {isLast ? (
                <span className="font-medium text-navy-900" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-cyan-600">
                  {item.name}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </nav>
  );
}
