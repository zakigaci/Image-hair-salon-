import SectionHeading from './SectionHeading';

const TESTIMONIALS = [
  {
    quote:
      'Colin is a brilliant stylist and an even better conversationalist. The attention to detail is what keeps me coming back — every single appointment.',
    name: 'Tricia H.',
    context: 'Galway · Regular guest',
  },
  {
    quote:
      'I asked for a meaningful change and was genuinely listened to. The cut suits my face, my hair, and the way I actually live in the morning.',
    name: 'Reshma G.',
    context: 'First-time visitor',
  },
  {
    quote:
      'I walked past on holiday and asked for a blow-dry. They fit me in within the hour and made me feel completely at home. Lovely, lovely people.',
    name: 'Antonella R.',
    context: 'Local Guide · Visiting Galway',
  },
  {
    quote:
      'The aesthetic of the salon, the welcome, the hair — all of it. I left feeling completely myself, only better.',
    name: 'Leona D.',
    context: 'Galway',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-36 relative overflow-hidden">
      {/* Soft sand band */}
      <div className="absolute inset-x-0 top-0 bottom-0 bg-gradient-to-b from-cream via-sand/40 to-cream pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="reveal">
          <SectionHeading
            number="03 —"
            eyebrow="In Their Words"
            align="center"
            title={
              <>
                Kindness,
                <br />
                <span className="italic">written down.</span>
              </>
            }
            intro="Honest words from honest guests. Names shortened for privacy."
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="reveal bg-cream border border-ink/10 p-8 lg:p-10 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-2 text-walnut mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="font-display text-2xl lg:text-3xl leading-snug text-ink italic font-light">
                <span className="text-walnut/70 not-italic">“</span>
                {t.quote}
                <span className="text-walnut/70 not-italic">”</span>
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-ink/10">
                <div className="text-sm text-ink/85">{t.name}</div>
                <div className="mt-1 text-[11px] uppercase tracking-widest-x text-ink/50">
                  {t.context}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-12 text-center text-[11px] uppercase tracking-widest-x text-ink/50">
          Sourced from Google Reviews · 4.7 average across 46 reviews
        </p>
      </div>
    </section>
  );
}
