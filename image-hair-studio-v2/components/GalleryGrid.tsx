'use client';

import Image from 'next/image';
import { useState } from 'react';
import { GALLERY, type GalleryImage } from '@/components/gallery-data';

const FILTERS: Array<GalleryImage['category'] | 'All'> = [
  'All',
  'Studio',
  'Cuts',
  'Colour',
  'Styling',
];

export default function GalleryGrid() {
  const [active, setActive] = useState<typeof FILTERS[number]>('All');
  const items =
    active === 'All' ? GALLERY : GALLERY.filter((g) => g.category === active);

  return (
    <div>
      {/* Filter bar */}
      <div className="border-y border-ink/10 py-5 mb-12 lg:mb-16">
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {FILTERS.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-[11px] uppercase tracking-widest-x transition-colors ${
                  isActive
                    ? 'text-walnut'
                    : 'text-ink/55 hover:text-ink'
                }`}
              >
                <span className={isActive ? 'border-b border-walnut pb-1' : ''}>
                  {f}
                </span>
                <span className="ml-2 text-ink/30 tabular-nums">
                  {f === 'All'
                    ? GALLERY.length
                    : GALLERY.filter((g) => g.category === f).length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Masonry grid via CSS columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6 [&>*]:mb-4 lg:[&>*]:mb-6">
        {items.map((img, i) => (
          <figure
            key={`${img.src}-${i}`}
            className="break-inside-avoid relative overflow-hidden bg-sand group"
          >
            <div
              className={`relative w-full ${
                img.span === 'tall'
                  ? 'aspect-[3/4]'
                  : img.span === 'wide'
                  ? 'aspect-[4/3]'
                  : 'aspect-square'
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1400ms] ease-out-soft group-hover:scale-[1.04]"
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-ink/70 to-transparent text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <span className="text-[10px] uppercase tracking-widest-x text-cream/70">
                {img.category}
              </span>
              <p className="mt-1 text-sm leading-snug max-w-xs">{img.alt}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {items.length === 0 && (
        <p className="text-center text-ink/50 py-20">
          Nothing to show yet — check back soon.
        </p>
      )}
    </div>
  );
}
