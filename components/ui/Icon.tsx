import type { IconKey } from '@/lib/types';

type IconProps = {
  name: IconKey;
  className?: string;
};

const paths: Record<IconKey, React.ReactNode> = {
  key: (
    <>
      <circle cx="7" cy="12" r="3.5" />
      <path d="M10.3 12h10.2M17 12v3M20.5 12v2" />
    </>
  ),
  car: (
    <>
      <path d="M4 16l1.5-5A2 2 0 0 1 7.4 9.6h9.2A2 2 0 0 1 18.5 11L20 16" />
      <path d="M3 16h18v2.5a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1V18H6.5v.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V16Z" />
      <circle cx="7" cy="16.5" r="1.2" />
      <circle cx="17" cy="16.5" r="1.2" />
    </>
  ),
  'car-key': (
    <>
      <circle cx="6.5" cy="12" r="3" />
      <path d="M9.3 12H19M14.5 12v3M18 12v2" />
    </>
  ),
  'lost-key': (
    <>
      <circle cx="7" cy="9" r="3" />
      <path d="M10 9h9M16 9v2.5M19 9v1.5" />
      <path d="M5 15l14 6M19 15 5 21" />
    </>
  ),
  mobile: (
    <>
      <path d="M4 17l1-6a3 3 0 0 1 3-2.5h8A3 3 0 0 1 19 11l1 6" />
      <path d="M3 17h18v2a1 1 0 0 1-1 1h-2v-1H6v1H4a1 1 0 0 1-1-1v-2Z" />
      <circle cx="8" cy="17.2" r="1" />
      <circle cx="16" cy="17.2" r="1" />
    </>
  ),
  siren: (
    <>
      <path d="M12 4a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5Z" />
      <path d="M5 15h14v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2Z" />
      <path d="M12 2v1M6 5l.8.8M18 5l-.8.8" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M9.5 7V4.5M14.5 7V4.5M9.5 19.5V17M14.5 19.5V17M7 9.5H4.5M7 14.5H4.5M19.5 9.5H17M19.5 14.5H17" />
    </>
  ),
  remote: (
    <>
      <rect x="8" y="3" width="8" height="18" rx="2" />
      <circle cx="12" cy="8" r="1.4" />
      <path d="M9.5 12.5h5M9.5 15.5h5" />
    </>
  ),
  fob: (
    <>
      <rect x="7.5" y="4" width="9" height="16" rx="3" />
      <circle cx="12" cy="9" r="1.3" />
      <path d="M9.8 13.5h4.4M9.8 16h4.4" />
    </>
  ),
  'spare-key': (
    <>
      <circle cx="7" cy="8" r="2.6" />
      <path d="M9.3 8H17M14 8v2.4M17 8v1.6" />
      <circle cx="7" cy="16" r="2.6" />
      <path d="M9.3 16H17M14 16v2.4M17 16v1.6" />
    </>
  ),
  duplicate: (
    <>
      <circle cx="6.5" cy="9.5" r="2.5" />
      <path d="M8.7 9.5H16M13 9.5v2M16 9.5v1.4" />
      <circle cx="10.5" cy="16" r="2.5" />
      <path d="M12.7 16H19M16 16v2M19 16v1.4" />
    </>
  ),
  lockout: (
    <>
      <rect x="6" y="10.5" width="12" height="9" rx="1.5" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
      <circle cx="12" cy="14.7" r="1.3" />
    </>
  ),
  'broken-key': (
    <>
      <circle cx="6.5" cy="12" r="2.8" />
      <path d="M9.2 12h4.5M13.7 12l1.6-1.8M13.7 12l1.6 1.8" />
      <path d="M18 8l2 2-2 2" />
    </>
  ),
  ignition: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v3M15.5 9.5l-2 1.7M8.5 9.5l2 1.7M12 17v-3" />
    </>
  ),
  motorcycle: (
    <>
      <circle cx="6" cy="17" r="2.3" />
      <circle cx="18" cy="17" r="2.3" />
      <path d="M8.2 17h5.3l2-5h3M13.5 12h-3l-2 3M15.5 8h2.5" />
    </>
  ),
  'map-pin': (
    <>
      <path d="M12 21s-6.5-5.7-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.3-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 5 6v5.5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-2.5Z" />
      <path d="M9 12l2 2 4-4.5" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 5 6.1 1.5 1.5 0 0 1 6.5 3.5Z" />
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="M4.5 7l7.5 6 7.5-6" />
    </>
  ),
};

export function Icon({ name, className = 'h-6 w-6' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
