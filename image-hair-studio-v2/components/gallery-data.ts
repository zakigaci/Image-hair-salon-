export type GalleryImage = {
  src: string;
  alt: string;
  category: 'Studio' | 'Cuts' | 'Colour' | 'Styling';
  span?: 'tall' | 'wide' | 'square';
  unoptimized?: boolean;
};

// Two real salon photos + carefully curated, on-brand hair photography.
// Unsplash images selected for: warm tones, refined styling, minimal salon
// aesthetic. No "AI-looking" stock, no models making peace signs.
export const GALLERY: GalleryImage[] = [
  {
    src: '/images/salon-interior.jpg',
    alt: 'Inside Image Hair Studio — warm walnut floors and quiet light',
    category: 'Studio',
    span: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    alt: 'Stylist working on a client’s hair, soft natural light',
    category: 'Cuts',
    span: 'square',
  },
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Soft balayage colour, dimensional and lived-in',
    category: 'Colour',
    span: 'square',
  },
  {
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=80',
    alt: 'Considered cut on long brunette hair',
    category: 'Cuts',
    span: 'tall',
  },
  {
    src: '/images/salon-storefront.jpg',
    alt: 'The studio storefront on St Augustine Street, Galway',
    category: 'Studio',
    span: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=80',
    alt: 'Gentle waves, finished and polished',
    category: 'Styling',
    span: 'square',
  },
  {
    src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Detailed shot of hand-painted highlights',
    category: 'Colour',
    span: 'square',
  },
  {
    src: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=1200&q=80',
    alt: 'Soft blonde finish with movement',
    category: 'Colour',
    span: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80',
    alt: 'Gentleman’s precision cut',
    category: 'Cuts',
    span: 'square',
  },
  {
    src: 'https://images.unsplash.com/photo-1635273051937-c9c3e2ea4fa3?auto=format&fit=crop&w=1200&q=80',
    alt: 'Soft up-style for an occasion',
    category: 'Styling',
    span: 'square',
  },
];
