import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from './SectionHeading';

export default function IntroSection() {
  return (
    <section className="py-24 lg:py-36 relative">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image — left, slightly inset */}
          <div className="lg:col-span-5 reveal">
            <div className="relative aspect-[4/5] w-full max-w-[480px] overflow-hidden">
              <Image
                src="/images/salon-storefront.jpg"
                alt="Image Hair Studio storefront on St Augustine Street, Galway"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            {/* Tiny credit */}
            <p className="mt-4 text-[10px] uppercase tracking-widest-x text-ink/40">
              St Augustine Street · Galway
            </p>
          </div>

          {/* Copy */}
          <div className="lg:col-span-6 lg:col-start-7 reveal">
            <SectionHeading
              number="01 —"
              eyebrow="The Studio"
              title={
                <>
                  A small studio with a <em className="italic text-walnut font-light">large</em> sense
                  of care.
                </>
              }
            />
            <div className="mt-8 space-y-6 text-base lg:text-lg leading-relaxed text-ink/75 max-w-xl">
              <p>
                Image Hair Studio has lived on St Augustine Street for over a
                decade. We are deliberately small — three chairs, full attention,
                conversations that go where they want to go.
              </p>
              <p>
                The work is honest. We listen first, then cut and colour the way
                your hair actually behaves at home, not just under salon lights.
                You leave the way you came in: like yourself, only a little more
                so.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
              <Stat n="15+" label="Years on St Augustine St" />
              <Stat n="4.7★" label="Google rating · 46 reviews" />
              <Stat n="1:1" label="Stylist to chair, every visit" />
            </div>

            <div className="mt-12">
              <Link
                href="/about"
                className="link-underline text-[11px] uppercase tracking-widest-x text-ink"
              >
                Read our story →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl text-walnut leading-none">{n}</div>
      <div className="mt-2 text-[11px] uppercase tracking-widest-x text-ink/55">
        {label}
      </div>
    </div>
  );
}
