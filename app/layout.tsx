import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { BUSINESS, SITE_URL } from '@/lib/constants';
import { localBusinessSchema, websiteSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyCallBar } from '@/components/layout/StickyCallBar';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Auto Locksmith Dandenong | Mobile Car Locksmith 24/7',
    template: '%s',
  },
  description:
    'Call Auto Locksmith Dandenong on 0410 380 354 for mobile car key, vehicle lockout, key programming and motorcycle key assistance across Dandenong.',
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.ownerName }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={inter.variable}>
      <body className="flex min-h-screen flex-col bg-white pb-16 font-sans antialiased lg:pb-0">
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
