type SocialName = 'Facebook' | 'YouTube' | 'Instagram' | 'X' | 'Pinterest' | 'LinkedIn';

const iconPaths: Record<SocialName, React.ReactNode> = {
  Facebook: <path d="M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4h1.5V5.3c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.6v2.2H8.3v2.8h2.4V21h2.8Z" />,
  YouTube: (
    <>
      <rect x="3" y="6.5" width="18" height="11" rx="2.5" />
      <path d="M10.5 9.5 15 12l-4.5 2.5v-5Z" fill="currentColor" stroke="none" />
    </>
  ),
  Instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="16.6" cy="7.4" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  X: <path d="M5 4.5h3.4l4 5.5 4.5-5.5h2.2l-5.6 6.9 6 8.1h-3.4l-4.4-6-4.9 6H4.6l6-7.4-5.6-7.6Z" fill="currentColor" stroke="none" />,
  Pinterest: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M10 18c.6-2 1.4-5 1.4-5s-.4-.8-.4-2c0-1.9 1.1-3.3 2.5-3.3 1.2 0 1.8.9 1.8 1.9 0 1.2-.7 2.9-1.1 4.5-.3 1.3.7 2.4 2 2.4 2.3 0 4-2.4 4-5.9 0-3.1-2.2-5.3-5.4-5.3-3.6 0-5.8 2.7-5.8 5.5 0 1.1.4 2.2 1 2.8.1.1.1.2.1.3-.1.4-.3 1.3-.3 1.5 0 .2-.2.3-.4.2-1.4-.6-2.3-2.6-2.3-4.2 0-3.4 2.5-6.6 7.1-6.6 3.7 0 6.6 2.6 6.6 6.2 0 3.7-2.3 6.7-5.6 6.7-1.1 0-2.1-.6-2.5-1.2 0 0-.5 2.1-.7 2.7-.2.7-.6 1.4-1 2Z" fill="currentColor" stroke="none" />
    </>
  ),
  LinkedIn: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2.5" />
      <circle cx="8.2" cy="8.4" r="1.1" fill="currentColor" stroke="none" />
      <path d="M8.2 11v6M11.5 11v6M11.5 13.7c0-1.5 1-2.4 2.2-2.4 1.3 0 2.1.9 2.1 2.5V17" />
    </>
  ),
};

export function SocialIcon({ name, className = 'h-5 w-5' }: { name: SocialName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}

export type { SocialName };
