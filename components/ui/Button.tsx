import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'outlineLight' | 'amber';

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-cyan-500 text-navy-950 hover:bg-cyan-400 focus-visible:outline-cyan-400',
  secondary:
    'bg-white text-navy-900 hover:bg-slate-100 focus-visible:outline-white',
  outline:
    'border border-white/30 text-white hover:bg-white/10 focus-visible:outline-white',
  outlineLight:
    'border border-slate-300 text-navy-950 hover:bg-slate-100 focus-visible:outline-cyan-500',
  amber:
    'bg-amber-500 text-navy-950 hover:bg-amber-400 focus-visible:outline-amber-400',
};

export function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  ...props
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http');

  const classes = `inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClasses[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
