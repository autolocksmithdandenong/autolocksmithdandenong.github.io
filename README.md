# Auto Locksmith Dandenong — Website

Production-ready Next.js 15 (App Router + TypeScript + Tailwind CSS) website for **Auto Locksmith
Dandenong**, a mobile automotive locksmith business based at 294 Thomas St, Dandenong VIC 3175.

## 1. Tech Stack

- Next.js 15 (App Router, React Server Components, Metadata API)
- TypeScript (strict mode)
- Tailwind CSS 3
- Nodemailer (contact form email delivery, server-side only)
- No client-side analytics, tracking cookies, or heavy UI libraries

## 2. Project Structure

```text
app/
  layout.tsx                        Root layout, global schema, header/footer/sticky bar
  page.tsx                          Homepage (12 sections)
  about-auto-locksmith-dandenong/   About page
  services/
    page.tsx                       Services index
    [slug]/page.tsx                 Template for all 20 service pages
  service-areas/
    page.tsx                       Service areas index
    [slug]/page.tsx                 Template for all 17 suburb pages
  blog/
    page.tsx                       Blog index
    [slug]/page.tsx                 Template for all 10 articles
  contact/page.tsx                  Contact page + form
  privacy-policy/page.tsx
  terms-and-conditions/page.tsx
  api/contact/route.ts              Contact form submission handler (rate-limited, sanitised)
  sitemap.ts                        Dynamic XML sitemap
  robots.ts                         Dynamic robots.txt
  not-found.tsx                     Custom 404 page
  globals.css

components/
  layout/        Header, MobileNav, Footer, StickyCallBar
  navigation/     (dropdowns live inside Header/MobileNav)
  sections/       Hero, TrustBar, ServiceGrid, AreaGrid, ProcessSteps, FAQSection, etc.
  cards/          ServiceCard, AreaCard, BlogCard
  forms/          ContactForm (client component)
  ui/             Button, Icon, Container, Breadcrumbs, FAQAccordion, CTABanner, SocialIcons
  seo/            JsonLd

data/
  services.ts       20 services: content, FAQs, related services/areas, metadata
  serviceAreas.ts    17 suburbs: content, FAQs, nearby suburbs, metadata
  navigation.ts      Header/footer navigation link data
  faqs.ts            Homepage FAQ set
  blog.ts            10 blog articles (structured content blocks)

lib/
  constants.ts    Business NAP, social links, disclaimer text (single source of truth)
  metadata.ts     buildMetadata() — canonical, Open Graph, Twitter, robots
  schema.ts       JSON-LD builders (LocalBusiness, Service, FAQPage, BreadcrumbList, etc.)
  types.ts        Service / ServiceArea / FAQ / Icon types
  blogTypes.ts    BlogPost / ContentBlock types
  rateLimit.ts    In-memory rate limiter for the contact API route
```

Services and service areas use a **dynamic route + data file** pattern (`[slug]/page.tsx` with
`generateStaticParams`) rather than 20 and 17 duplicated folders. This produces the exact same static
URLs at build time while keeping the codebase maintainable — one template, one content file per type.

## 3. Environment Variables

Copy `.env.example` to `.env.local` and fill in real values before enabling the contact form:

```
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
CONTACT_TO_EMAIL=
```

Without these set, the contact form will validate input correctly but return a clear "temporarily
unavailable, please call" error rather than silently failing or exposing credentials.

## 4. Setup

```bash
npm install
npm run dev        # http://localhost:3000
```

## 5. Verification Commands

```bash
npm run lint        # ESLint (next/core-web-vitals) — 0 errors
npm run typecheck    # tsc --noEmit — 0 errors
npm run build        # Production build — 61 routes generated successfully
```

All three were run and pass with zero errors as of this delivery. A production build was also smoke
tested with `next start`, confirming every core page, every service page, every service-area page, every
blog post, `/sitemap.xml`, `/robots.txt` and the custom 404 page all return correct HTTP status codes.

## 6. Deployment

Recommended: **Vercel** (zero-config for Next.js App Router).

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the project in Vercel.
3. Set the environment variables from `.env.example` in the Vercel project settings.
4. Set the production domain to `locksmithdandenong.com.au` (the canonical domain used throughout
   `lib/constants.ts` — update `SITE_URL` there first if the domain ever changes).
5. Deploy. Vercel will run `next build` automatically.

Any other Node.js host (Netlify, self-managed server, etc.) works too — just ensure Node 18.18+ and run
`npm run build && npm run start`.

## 7. Redirect Configuration

This is a fresh, from-scratch build with no legacy URLs to migrate. If the live site at
`locksmithdandenong.com.au` currently has different URLs than the structure below, add 301 redirects in
`next.config.mjs` under a `redirects()` function before launch, for example:

```js
async redirects() {
  return [
    { source: '/old-path', destination: '/new-path/', permanent: true },
  ];
}
```

## 8. Full List of Created URLs

**Core (8):** `/`, `/about-auto-locksmith-dandenong/`, `/services/`, `/service-areas/`, `/blog/`,
`/contact/`, `/privacy-policy/`, `/terms-and-conditions/`

**Services (20):** `/services/automotive-locksmith-dandenong/`,
`/services/car-key-replacement-dandenong/`, `/services/replacement-car-keys-dandenong/`,
`/services/lost-car-keys-dandenong/`, `/services/mobile-car-locksmith-dandenong/`,
`/services/emergency-car-locksmith-dandenong/`, `/services/24-hour-car-locksmith-dandenong/`,
`/services/car-key-programming-dandenong/`, `/services/transponder-key-programming-dandenong/`,
`/services/car-remote-programming-dandenong/`, `/services/car-key-fob-assistance-dandenong/`,
`/services/spare-car-keys-dandenong/`, `/services/duplicate-car-keys-dandenong/`,
`/services/vehicle-lockout-assistance-dandenong/`, `/services/broken-car-key-extraction-dandenong/`,
`/services/ignition-key-assistance-dandenong/`, `/services/motorcycle-locksmith-dandenong/`,
`/services/lost-motorcycle-keys-dandenong/`, `/services/motorbike-key-replacement-dandenong/`,
`/services/spare-motorcycle-keys-dandenong/`

**Service Areas (17):** `/service-areas/dandenong/`, `/service-areas/dandenong-north/`,
`/service-areas/dandenong-south/`, `/service-areas/doveton/`, `/service-areas/keysborough/`,
`/service-areas/noble-park/`, `/service-areas/rowville/`, `/service-areas/springvale/`,
`/service-areas/springvale-south/`, `/service-areas/endeavour-hills/`, `/service-areas/hampton-park/`,
`/service-areas/hallam/`, `/service-areas/berwick/`, `/service-areas/narre-warren/`,
`/service-areas/narre-warren-south/`, `/service-areas/cranbourne/`, `/service-areas/cranbourne-east/`

**Blog (10):** `/blog/what-to-do-when-you-lose-your-car-keys/`,
`/blog/car-key-replacement-options-explained/`, `/blog/how-transponder-car-keys-work/`,
`/blog/what-information-a-locksmith-needs-about-your-vehicle/`,
`/blog/spare-car-keys-why-having-a-backup-matters/`, `/blog/common-reasons-car-remotes-stop-working/`,
`/blog/steps-to-take-when-locked-out-of-a-vehicle/`, `/blog/motorcycle-key-replacement-information/`,
`/blog/difference-between-car-keys-remotes-and-key-fobs/`,
`/blog/preparing-for-a-mobile-automotive-locksmith-visit/`

**Infrastructure:** `/sitemap.xml`, `/robots.txt`, custom `not-found` (404) page.

## 9. Image Asset Plan

No stock photography was available for this build, and the brief explicitly asks not to use generic
stock images or house-lock imagery on automotive pages. Rather than insert placeholder photos that would
need replacing anyway, every visual is an original, brand-coloured SVG (hero graphic, service icons,
suburb pin icons, social icons) — so there is nothing broken or "Lorem Ipsum"-like to fix, but there is
also no real photography yet. Before launch, commission or source:

| Placement | Suggested shot |
|---|---|
| Homepage hero | Locksmith beside a modern RHD vehicle in a Dandenong street setting |
| Automotive Locksmith (pillar) | Technician with a diagnostic/programming tool at a car door |
| Car Key Replacement / Spare / Duplicate keys | Cut key beside vehicle key fob on a workbench |
| Car Key Programming / Transponder / Remote | Programming device connected to a vehicle's OBD port |
| Vehicle Lockout / Broken Key Extraction | Locksmith working at a car door with hand tools (no forced-entry imagery) |
| Motorcycle Locksmith pages | Technician with a motorcycle ignition/key barrel |
| About page | Photo of the Dandenong premises or service vehicle |

When real photos are added, use `next/image`, WebP/AVIF, explicit width/height, `priority` only on the
hero image, and lazy-load everything below the fold — the components are already structured to drop an
`<Image>` in where each `HeroGraphic`/`Icon` currently sits.

## 10. Known Limitations / Notes for Handover

- **Contact form email**: requires real SMTP credentials in `.env.local` (see §3). Until then it fails
  gracefully with a "please call us" message rather than pretending to succeed.
- **Rate limiting**: the contact API uses a simple in-memory limiter (5 requests/minute/IP). This resets
  on server restart and does not share state across multiple server instances — fine for a single-instance
  deployment, but swap for a persistent store (e.g. Upstash Redis) if traffic or infrastructure grows.
- **Google Maps embeds**: use the no-API-key `google.com/maps?q=...&output=embed` format. For a more
  customised map (custom pin styling, etc.) a Maps JavaScript API key would be needed.
- **Social links**: all six supplied profiles (Facebook, YouTube, Instagram, X, Pinterest, LinkedIn) are
  wired into the footer and Contact page with `rel="noopener noreferrer"` and `target="_blank"`. No
  TikTok link exists anywhere, per instructions.
- **No AggregateRating/Review schema** and no licence/certification claims are included anywhere, since
  none were supplied — consistent with the brief's restrictions on unverifiable claims.

## 11. Final Technical Audit

- ✅ `npm run build` — 61 routes generated, zero errors
- ✅ `npm run lint` — 0 warnings/errors
- ✅ `npx tsc --noEmit` — 0 type errors
- ✅ Production smoke test (`next start`) — every core, service, service-area and blog URL returns
  `200`; an invalid URL returns `404` via the custom not-found page
- ✅ NAP (name/address/phone/email) sourced from a single `lib/constants.ts` file and reused in header,
  footer, contact page, about page, schema and every CTA — no risk of drift
- ✅ Every service page and service-area page has a unique H1, meta title, meta description, canonical
  tag, and unique body copy (no duplicated paragraphs across pages)
- ✅ JSON-LD present: LocalBusiness+Locksmith and WebSite (global), plus WebPage/Service/AboutPage/
  ContactPage/BreadcrumbList/FAQPage/BlogPosting/Blog schema on the relevant pages
- ✅ Accessible: skip-to-content link, keyboard-operable header dropdowns and mobile menu
  (`aria-expanded`/`aria-controls`), accessible FAQ accordion, focus-visible states, 44px minimum touch
  targets on primary buttons and the mobile sticky bar, `prefers-reduced-motion` respected
- ✅ Mobile sticky call bar does not overlap content (body has `pb-16` on mobile, `pb-0` on desktop)
- ✅ No guaranteed arrival times, no unverified certifications/ratings/insurance/police-approval claims
  anywhere in the copy
