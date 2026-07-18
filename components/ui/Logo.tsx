import Image from 'next/image';

const SIZES = {
  sm: 40,
  md: 48,
  lg: 64,
} as const;

type LogoProps = {
  size?: keyof typeof SIZES;
  className?: string;
  priority?: boolean;
};

export function Logo({ size = 'sm', className = '', priority = false }: LogoProps) {
  const px = SIZES[size];

  return (
    <Image
      src="/logo/ostan-locksmiths-logo.png"
      alt="Auto Locksmith Dandenong logo"
      width={px}
      height={px}
      priority={priority}
      className={`shrink-0 rounded-full object-cover ${className}`}
    />
  );
}
