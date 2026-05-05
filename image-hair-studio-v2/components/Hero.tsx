import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] pt-24 pb-12 overflow-hidden">
      {/* Decorative background type — large, soft, editorial */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute -bottom-10 -left-6 lg:-bottom-24 lg:-left-12 font-display text-[28vw] lg:text-[22vw] leading-none tracking-tightest text-walnut/[0.06] lowercase"
      >
        image
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end pt-10 lg:pt-20">
          {/* Left — copy */}
          <div className="lg:col-span-6 xl:col-span-6 animate-fade-up">
            {/* Eyebrow row */}
            <div className="flex items-center gap-4">
              <span className="block w-10 h-px bg-walnut" />
              <span className="text-[11px] uppercase tracking-widest-x text-walnut">
                Galway · Est. 2008
              </span>
            </div>

            <h1 className="mt-8 font-display font-light text-5xl sm:text-6xl lg:text-[88px] xl:text-[104px] leading-[0.95] tracking-tighter-x text-ink">
              Hair, <span className="italic text-walnut">considered.</span>
              <br />
              Cut with <span className="italic">care.</span>
            </h1>

            <p className="mt-8 max-w-md text-base sm:text-lg leading-relaxed text-ink/70">
              A boutique studio in the heart of Galway, where every appointment
              is unhurried and every chair is yours alone. Precision cuts,
              quietly considered colour.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-ink text-cream text-[11px] uppercase tracking-widest-x hover:bg-walnut transition-colors duration-500"
              >
                Book an Appointment
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-500 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 px-7 py-4 text-[11px] uppercase tracking-widest-x text-ink/80 hover:text-ink transition-colors"
              >
                <span className="link-underline">View Services</span>
              </Link>
            </div>

            {/* Trust strip */}
            <div className="mt-14 flex items-center gap-6">
              <div className="flex items-center gap-2 text-walnut">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-[11px] uppercase tracking-widest-x text-ink/55">
                4.7 ★ — 46 Google Reviews
              </p>
            </div>
          </div>

          {/* Right — image stack with caption card */}
          <div className="lg:col-span-6 xl:col-span-6 relative animate-fade-in">
            <div className="relative aspect-[4/5] w-full max-w-[560px] ml-auto overflow-hidden">
              <Image
                src="/images/salon-interior.jpg"
                alt="Inside Image Hair Studio — warm walnut floors and quiet light"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover animate-slow-zoom"
              />
              {/* Subtle warm overlay to integrate the photo with the palette */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/15 via-transparent to-transparent" />
            </div>

            {/* Caption card — overlapping */}
            <div className="absolute -bottom-6 -left-2 sm:-left-6 lg:-bottom-10 lg:-left-12 bg-cream border border-ink/10 px-6 py-5 max-w-[260px] shadow-[0_20px_60px_-20px_rgba(26,26,26,0.18)]">
              <p className="text-[10px] uppercase tracking-widest-x text-walnut mb-2">
                The Studio
              </p>
              <p className="font-display italic text-xl leading-snug text-ink">
                Calm, light, and entirely unrushed.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hidden lg:flex items-center gap-3 mt-24">
          <span className="block w-10 h-px bg-ink/30" />
          <span className="text-[10px] uppercase tracking-widest-x text-ink/50">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
