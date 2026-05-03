# Pho Garden — Rio Rancho, New Mexico

Ultra-premium Vietnamese restaurant website concept built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## File Structure

```txt
pho-garden-rio-rancho/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── PhoGardenExperience.tsx
├── data/
│   └── content.ts
├── public/
│   └── og.svg
├── .gitignore
├── netlify.toml
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production Build

```bash
npm run build
```

This project uses `output: 'export'`, so the static site is generated in `out/` for Netlify.

## Deploy to Netlify

Netlify settings are already included in `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `out`
- Node version: `20`

Connect the GitHub repo in Netlify, or run:

```bash
netlify deploy --build --prod
```

## Swap Real Restaurant Details

Replace placeholders in:

- `data/content.ts` — menu, JSON-LD schema, gallery, image prompts
- `components/PhoGardenExperience.tsx` — address, phone, email, hours, social links
- `public/og.svg` — social sharing image

Search for:

```txt
[INSERT ACTUAL ADDRESS WHEN AVAILABLE]
[INSERT PHONE]
[year]
```

## Image Strategy

Current images use high-quality Unsplash placeholders through Next Image with `unoptimized: true` for static export compatibility.

For final production, generate or commission proprietary assets from the prompts in `data/content.ts` and replace URLs with local files in `public/images/`.

## Included Luxury Features

- Sticky glass navigation with animated mobile menu
- Dark/light mode toggle
- Smooth scroll and scroll progress bar
- Full-screen immersive hero
- Ingredient marquee
- Storytelling sections
- Signature dishes carousel
- Interactive filterable menu
- Menu item spice/allergen/chef badge metadata
- Gallery masonry with lightbox
- Tock/OpenTable-style reservation placeholder
- Contact/location section with Google Maps embed
- Newsletter signup placeholder
- Gift cards/private dining/specials sections
- Back-to-top leaf button
- SEO metadata, Open Graph, and Restaurant JSON-LD
- WCAG-conscious focus states and semantic labels

## Future Integrations

- OpenTable/Tock/Resy booking widget
- Mailchimp or Klaviyo newsletter endpoint
- DoorDash/Toast/ChowNow ordering link
- Google/Yelp live review embeds
- Real Google Maps place ID once address is finalized
- Analytics and conversion tracking
