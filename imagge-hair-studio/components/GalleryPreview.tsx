import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from './SectionHeading';
import { GALLERY } from './gallery-data';

export default function GalleryPreview() {
  // Pick a balanced 4-image preview — interior + 3 hair shots
  const preview = [GALLERY[0], GALLERY[2], GALLERY[3], GALLERY[6]];

  return (
    <section className="py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16 reveal">
          <div className="lg:col-span-7">
            <SectionHeading
              number="04 —"
              eyebrow="A Look Around"
              title={
                <>
                  Quiet rooms, <span className="italic">honest work.</span>
                </>
              }
            />
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <Link
              href="/gallery"
              className="link-underline text-[11px] uppercase tracking-widest-x text-walnut"
            >
              Open the full gallery →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
          {preview.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden bg-sand reveal ${
                i === 0 || i === 3 ? 'aspect-[3/4]' : 'aspect-[3/4] lg:mt-12'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-out-soft hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
