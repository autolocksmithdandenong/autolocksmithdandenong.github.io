export type NavLink = {
  label: string;
  href: string;
};

export const mainNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-auto-locksmith-dandenong/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerServiceLinks: NavLink[] = [
  { label: 'Car Key Replacement', href: '/services/car-key-replacement-dandenong/' },
  { label: 'Lost Car Keys', href: '/services/lost-car-keys-dandenong/' },
  { label: 'Mobile Car Locksmith', href: '/services/mobile-car-locksmith-dandenong/' },
  { label: 'Car Key Programming', href: '/services/car-key-programming-dandenong/' },
  { label: 'Vehicle Lockout Assistance', href: '/services/vehicle-lockout-assistance-dandenong/' },
  { label: 'Motorcycle Locksmith', href: '/services/motorcycle-locksmith-dandenong/' },
];

export const footerAreaLinks: NavLink[] = [
  { label: 'Dandenong', href: '/service-areas/dandenong/' },
  { label: 'Dandenong North', href: '/service-areas/dandenong-north/' },
  { label: 'Dandenong South', href: '/service-areas/dandenong-south/' },
  { label: 'Keysborough', href: '/service-areas/keysborough/' },
  { label: 'Noble Park', href: '/service-areas/noble-park/' },
  { label: 'Springvale', href: '/service-areas/springvale/' },
];

export const legalNav: NavLink[] = [
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms and Conditions', href: '/terms-and-conditions/' },
  { label: 'Sitemap', href: '/sitemap.xml' },
];
