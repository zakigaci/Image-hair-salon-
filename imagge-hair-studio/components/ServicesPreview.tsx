import Link from 'next/link';
import SectionHeading from './SectionHeading';
import { SERVICE_CATEGORIES } from './services-data';

export default function ServicesPreview() {
  return (
    <section className="py-24 lg:py-36 bg-cream-deep relative">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Heading row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end reveal">
          <div className="lg:col-span-7">
            <SectionHeading
              number="02 —"
              eyebrow="What We Do"
              title={
                <>
                  Three things,
                  <br />
                  done well.
                </>
              }
            />
          </div>
          <div className="lg:col-span-5">
            <p className="text-base lg:text-lg leading-relaxed text-ink/70 max-w-md">
              We keep the menu intentionally short. Cuts, colour, and styling
              — each given the time it deserves. Pricing is a starting point;
              your stylist will quote at consultation.
            </p>
            <div className="mt-6">
              <Link
                href="/services"
                className="link-underline text-[11px] uppercase tracking-widest-x text-walnut"
              >
                Full service menu →
              </Link>
            </div>
          </div>
        </div>

        {/* Three columns */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border-y border-ink/10">
          {SERVICE_CATEGORIES.map((cat) => (
            <article
              key={cat.id}
              className="group bg-cream-deep p-8 lg:p-12 reveal hover:bg-cream transition-colors duration-700"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display italic text-walnut text-base">
                  {cat.number}
                </span>
                <span className="text-[10px] uppercase tracking-widest-x text-ink/40">
                  Service
                </span>
              </div>
              <h3 className="mt-8 font-display font-light text-4xl lg:text-5xl tracking-tighter-x text-ink">
                {cat.title}
              </h3>
              <p className="mt-6 text-[15px] leading-relaxed text-ink/70 max-w-xs">
                {cat.intro}
              </p>

              <ul className="mt-10 space-y-3">
                {cat.items.slice(0, 3).map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 text-sm text-ink/85 border-b border-ink/10 pb-3"
                  >
                    <span>{item.name}</span>
                    {item.from && (
                      <span className="font-display italic text-walnut tabular-nums">
                        {item.from}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href={`/services#${cat.id}`}
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest-x text-ink/70 group-hover:text-walnut transition-colors"
                >
                  See all {cat.title.toLowerCase()}
                  <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
