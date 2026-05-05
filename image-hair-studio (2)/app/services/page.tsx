import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import { SERVICE_CATEGORIES } from '@/components/services-data';
import Link from 'next/link';

export const metadata = {
  title: 'Services — Image Hair Studio',
  description:
    'Cuts, colour, and styling at Image Hair Studio in Galway. View the full menu and pricing.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Cuts, colour, <br />
            <span className="italic">and the time to do them well.</span>
          </>
        }
        intro="Pricing is a starting point. Final pricing is given at consultation, where we’ll talk through what’s realistic for your hair and what isn’t."
      />

      {/* Category nav */}
      <nav className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="border-y border-ink/10 py-5 flex flex-wrap gap-x-10 gap-y-3">
          {SERVICE_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="link-underline text-[11px] uppercase tracking-widest-x text-ink/70 hover:text-walnut"
            >
              <span className="text-walnut/60 mr-2">{cat.number}</span>
              {cat.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Categories */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-20 lg:py-28 space-y-24 lg:space-y-32">
        {SERVICE_CATEGORIES.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              {/* Sticky title block */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32 reveal">
                  <div className="font-display italic text-walnut text-base">
                    {cat.number} —
                  </div>
                  <h2 className="mt-4 font-display font-light text-5xl lg:text-6xl tracking-tighter-x text-ink">
                    {cat.title}
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-ink/70 max-w-xs">
                    {cat.intro}
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="lg:col-span-8">
                <ul className="divide-y divide-ink/10 border-t border-ink/10">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className="grid grid-cols-12 gap-4 py-7 reveal"
                    >
                      <div className="col-span-12 sm:col-span-7">
                        <h3 className="font-display text-2xl text-ink leading-tight">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="mt-2 text-sm text-ink/65 leading-relaxed max-w-md">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="col-span-6 sm:col-span-3 flex sm:justify-start items-start">
                        {item.duration && (
                          <span className="text-[11px] uppercase tracking-widest-x text-ink/50 pt-2">
                            {item.duration}
                          </span>
                        )}
                      </div>
                      <div className="col-span-6 sm:col-span-2 flex justify-end items-start">
                        {item.from && (
                          <span className="font-display italic text-2xl text-walnut tabular-nums pt-1">
                            {item.from}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Note */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-12 pb-24">
        <div className="bg-sand/60 border border-ink/10 p-8 lg:p-12 reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-3">
              <span className="text-[11px] uppercase tracking-widest-x text-walnut">
                A Note
              </span>
            </div>
            <div className="lg:col-span-9">
              <p className="font-display text-2xl lg:text-3xl leading-snug text-ink italic font-light">
                We always offer a complimentary consultation before colour or
                colour correction. It’s the only honest way to quote, and it
                helps us decide together what’s worth doing.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="link-underline text-[11px] uppercase tracking-widest-x text-walnut"
                >
                  Book a consultation →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
