export function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 480 360"
      className="h-auto w-full"
      role="img"
      aria-label="Illustration of a mobile automotive locksmith attending a car in Dandenong"
    >
      <rect width="480" height="360" rx="24" fill="#0a1220" />
      <circle cx="400" cy="70" r="90" fill="#0fc9f0" opacity="0.12" />
      <circle cx="60" cy="300" r="70" fill="#38e0ff" opacity="0.1" />

      <rect x="60" y="205" width="230" height="70" rx="14" fill="#162542" stroke="#1e3358" strokeWidth="2" />
      <rect x="80" y="175" width="140" height="45" rx="12" fill="#162542" stroke="#1e3358" strokeWidth="2" />
      <circle cx="110" cy="278" r="20" fill="#050b16" stroke="#38e0ff" strokeWidth="3" />
      <circle cx="250" cy="278" r="20" fill="#050b16" stroke="#38e0ff" strokeWidth="3" />
      <rect x="95" y="185" width="35" height="30" rx="4" fill="#0a1220" />
      <rect x="140" y="185" width="65" height="30" rx="4" fill="#0a1220" />

      <g transform="translate(300,150)">
        <rect x="-12" y="40" width="24" height="70" rx="10" fill="#f59e0b" />
        <circle cx="0" cy="20" r="24" fill="#ffb547" />
        <rect x="20" y="10" width="52" height="10" rx="5" fill="#ffb547" />
        <rect x="55" y="-2" width="10" height="34" rx="4" fill="#ffb547" />
        <rect x="68" y="4" width="8" height="20" rx="3" fill="#ffb547" />
      </g>

      <g transform="translate(345,235)" stroke="#38e0ff" strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M0 0 h34" />
        <path d="M34 0 v-14" />
        <path d="M50 -14 h30" />
      </g>

      <rect x="30" y="330" width="420" height="6" rx="3" fill="#1e3358" />
    </svg>
  );
}
