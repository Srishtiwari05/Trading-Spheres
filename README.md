# Trading Spheres

A modern marketing website for Trading Spheres built with Next.js 16 and Tailwind CSS v4. The app showcases trading programs, founder information, community sponsorships, and WhatsApp-based enrollment.

## Key Features

- Landing page with responsive course/program cards
- Dedicated About page for founder details and sponsorship announcements
- Smooth animated interactions via `framer-motion`
- Floating WhatsApp call-to-action for instant enrollment
- Blog section with Sanity CMS integration and local fallback content
- Custom glassmorphism UI styling and gold accent theme

## Tech Stack

- Next.js 16.2.3
- React 19.2.4
- Tailwind CSS v4
- TypeScript 5
- Framer Motion
- Sanity content integration via `next-sanity`
- Lucide React icons

## Getting Started

### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for production

```bash
npm run build
npm run start
```

## Environment Variables

Create a `.env.local` file at the project root if you want to configure the WhatsApp and Sanity integration.

Example values:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=919464807614
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hi%2C%20I%20want%20to%20enroll%20in%20Trading%20Spheres
NEXT_PUBLIC_SANITY_PROJECT_ID=trading-spheres-v1
NEXT_PUBLIC_SANITY_DATASET=production
```

> Note: If the Sanity dataset is unavailable, the blog section uses fallback posts so the site still renders normally.

## Project Structure

- `src/app/page.tsx` — homepage layout
- `src/app/about/page.tsx` — founder/about page
- `src/components` — reusable UI sections and widgets
- `src/lib/constants.ts` — site content, pricing, and fallback data
- `src/lib/sanity.ts` — Sanity client configuration
- `src/app/globals.css` — global styling and custom Tailwind utilities

## Customizations

- Update program pricing and course cards in `src/components/CoursesSection.tsx`
- Edit founder biography in `src/app/about/page.tsx`
- Change WhatsApp enrollment link in `src/components/EnrollButton.tsx`
- Update footer contact details in `src/components/Footer.tsx`

## Deployment

This app is ready for deployment on Vercel, Netlify, or any Node-compatible hosting provider.

- Use `npm run build` to create a production build
- Use `npm run start` to serve the optimized build

## Notes

- Sanity integration currently depends on environment variables and an accessible dataset.
- The site includes animated effects and responsive layouts for both mobile and desktop.

---

Built for Trading Spheres by the Trading Spheres development team.
