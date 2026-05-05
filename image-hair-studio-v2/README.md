# Image Hair Studio — Website

A boutique, editorial website for **Image Hair Studio**, Galway. Built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

---

## Run

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

---

## Design Direction

**Editorial luxury — warm, not cold.** The aesthetic borrows from print magazines and refined hospitality (think Aēsop crossed with a Scandinavian hair magazine). Quiet, considered, unhurried.

### Brand palette (strict)

| Token         | Hex      | Usage                              |
| ------------- | -------- | ---------------------------------- |
| `ink`         | `#1A1A1A`| Primary text, dark UI              |
| `cream`       | `#F5F3EF`| Background                         |
| `walnut`      | `#6B4B2A`| Accents, CTAs, italics, highlights |
| `sand`        | `#D8CFC4`| Soft section breaks, contrast      |

A few derived tones (`cream-deep`, `walnut-deep`, `walnut-soft`, `ink-soft`) are used sparingly for contrast — never to introduce new hues.

### Typography

- **Display:** Cormorant Garamond (light/italic for editorial feel)
- **Body:** DM Sans (clean, refined sans)

These were chosen specifically to *avoid* the generic AI-website look of Inter / Space Grotesk on white.

### Texture

Very subtle SVG paper grain (3.5% opacity) layered over `cream` to add warmth — barely perceptible but breaks the flatness.

---

## Project structure

```
/app
  layout.tsx            Root layout, font loading, navbar/footer
  page.tsx              Home
  globals.css
  not-found.tsx
  /services/page.tsx
  /about/page.tsx
  /gallery/page.tsx
  /contact/page.tsx
/components
  Navbar.tsx
  Footer.tsx
  Hero.tsx
  Marquee.tsx
  IntroSection.tsx
  ServicesPreview.tsx
  Testimonials.tsx
  GalleryPreview.tsx
  GalleryGrid.tsx       (client — filterable)
  CTASection.tsx
  PageHeader.tsx
  SectionHeading.tsx
  Button.tsx
  ContactForm.tsx       (client)
  RevealOnScroll.tsx    (client — IntersectionObserver)
  services-data.ts
  gallery-data.ts
/public/images
  salon-interior.jpg    (real photo)
  salon-storefront.jpg  (real photo)
```

---

## Asset decisions

### Used

- **Real salon photos (2):** interior + storefront. Both are genuinely good and on-brand — used in Hero, About, Gallery, Intro section.

### Discarded

- All Google Maps screenshots (text/UI heavy, not real content).
- The user-submitted nail photo (off-context, low resolution, not representative).

### Supplemented

- The Gallery is supplemented with **carefully curated, on-brand royalty-free hair photography from Unsplash**. Each image was chosen for warm tones, refined styling, and minimal aesthetic. No "AI-looking" stock, no generic salon clichés.

### Real data preserved

Address, phone, hours, rating, real first names of stylists (Natasha, Colin, Nicky), and real review *sentiment* (paraphrased — no copyrighted verbatim quotes) all sourced from the provided screenshots.

---

## Production notes

- The contact form is **frontend-only** — wire `app/api/contact/route.ts` (or your preferred service: Resend, Formspree, etc.) before going live.
- Replace `hello@imagehairstudio.ie` with a real address.
- Add `metadataBase` host once a domain is finalised.
- The Unsplash gallery images are hotlinked. For production, download and self-host them in `/public/images/gallery/`.
