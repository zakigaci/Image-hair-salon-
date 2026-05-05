import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import SectionHeading from '@/components/SectionHeading';

export const metadata = {
  title: 'About — Image Hair Studio',
  description:
    'A small, considered hair studio on St Augustine Street, Galway. Meet the team behind Image Hair Studio.',
};

const VALUES = [
  {
    n: '01',
    title: 'Listening First',
    body: 'Every appointment begins with a real conversation about your hair, your routine, and what you actually want. The cut comes after.',
  },
  {
    n: '02',
    title: 'Quiet Craft',
    body: 'No rushed appointments, no double-booking. One stylist, one chair, one full hour at a time.',
  },
  {
    n: '03',
    title: 'Honest Colour',
    body: 'We use Wella and Sebastian Professional, and we’ll always tell you what’s realistic for your hair — and what isn’t.',
  },
  {
    n: '04',
    title: 'A Welcoming Room',
    body: 'You don’t need to be a regular to feel like one. First-time guests get the same time, care, and tea.',
  },
];

const TEAM = [
  {
    name: 'Natasha',
    role: 'Owner & Senior Stylist',
    blurb:
      'Natasha opened the studio over a decade ago with a simple idea: small, considered, properly looked after. She still cuts most weeks.',
  },
  {
    name: 'Colin',
    role: 'Senior Stylist',
    blurb:
      'Known by guests for being equal parts brilliant stylist and excellent company. Colin specialises in restyles and lived-in colour.',
  },
  {
    name: 'Nicky',
    role: 'Nail Technician',
    blurb:
      'Soft, considered nails to match the rest of the studio’s aesthetic. By appointment, alongside hair or on its own.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title={
          <>
            A small studio
            <br />
            <span className="italic">on St Augustine Street.</span>
          </>
        }
        intro="We’ve been part of Galway’s city centre for over fifteen years. Three chairs, full attention, and the same belief we started with: do less, but do it well."
      />

      {/* Story + image */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-12 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 reveal">
            <div className="relative aspect-[5/4] w-full overflow-hidden">
              <Image
                src="/images/salon-interior.jpg"
                alt="The studio floor at Image Hair Studio"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-5 reveal">
            <span className="text-[11px] uppercase tracking-widest-x text-walnut">
              Our Story
            </span>
            <h2 className="mt-4 font-display font-light text-4xl lg:text-5xl tracking-tighter-x text-ink leading-[1.05]">
              Begun with a simple <em className="italic">idea.</em>
            </h2>
            <div className="mt-8 space-y-5 text-base lg:text-lg leading-relaxed text-ink/75">
              <p>
                Image Hair Studio was founded with the belief that a salon
                should feel like a quiet room you’d actually want to spend an
                hour in. Walnut floors, soft light, no music too loud to
                think over.
              </p>
              <p>
                Over the years the chairs have stayed the same, and so have
                most of the guests. That, more than anything, tells us we’re
                doing it right.
              </p>
              <p>
                We sit just off Shop Street in the Latin Quarter — a few
                minutes from the docks, easy to find and easy to come back to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-deep py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="reveal">
            <SectionHeading
              number="01 —"
              eyebrow="What We Stand For"
              title={
                <>
                  Four small <span className="italic">commitments.</span>
                </>
              }
            />
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border-y border-ink/10">
            {VALUES.map((v) => (
              <div
                key={v.n}
                className="bg-cream-deep p-10 lg:p-14 reveal hover:bg-cream transition-colors duration-700"
              >
                <div className="font-display italic text-walnut text-base">
                  {v.n}
                </div>
                <h3 className="mt-4 font-display text-3xl lg:text-4xl text-ink tracking-tighter-x">
                  {v.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-ink/70 max-w-md">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="reveal">
            <SectionHeading
              number="02 —"
              eyebrow="The People"
              title={
                <>
                  The team behind <span className="italic">the chairs.</span>
                </>
              }
              intro="A small, steady team. Mostly the same faces year after year — which is, of course, the whole point."
            />
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {TEAM.map((m, i) => (
              <article
                key={m.name}
                className="reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Initial-monogram tile in lieu of staff photos */}
                <div className="relative aspect-[4/5] bg-sand overflow-hidden flex items-end">
                  <div
                    aria-hidden
                    className="absolute inset-0 flex items-center justify-center font-display text-[40vw] md:text-[15vw] lg:text-[10vw] leading-none text-walnut/15 lowercase pointer-events-none select-none"
                  >
                    {m.name.charAt(0).toLowerCase()}
                  </div>
                  <div className="relative z-10 p-6 lg:p-8">
                    <h3 className="font-display text-3xl lg:text-4xl text-ink">
                      {m.name}
                    </h3>
                    <p className="mt-1 text-[11px] uppercase tracking-widest-x text-walnut">
                      {m.role}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-ink/70">
                  {m.blurb}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
