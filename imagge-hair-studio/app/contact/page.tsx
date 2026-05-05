import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Book — Image Hair Studio',
  description:
    'Book an appointment at Image Hair Studio, Galway. Call (091) 535 921 or send a request online.',
};

const HOURS = [
  { d: 'Tuesday', h: '9:00 — 17:00' },
  { d: 'Wednesday', h: '9:00 — 17:00' },
  { d: 'Thursday', h: '9:00 — 19:00' },
  { d: 'Friday', h: '9:00 — 19:00' },
  { d: 'Saturday', h: '9:00 — 17:00' },
  { d: 'Sunday', h: 'Closed', closed: true },
  { d: 'Monday', h: 'Closed', closed: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Book"
        title={
          <>
            Send us a note,
            <br />
            <span className="italic">or simply call.</span>
          </>
        }
        intro="We work by appointment, with proper time set aside for each guest. Send a request below and we’ll come back to you with a time that fits."
      />

      <section className="mx-auto max-w-[1400px] px-6 lg:px-12 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-7 reveal">
            <div className="border-t border-ink/10 pt-12">
              <h2 className="font-display font-light text-3xl lg:text-4xl text-ink tracking-tighter-x">
                Booking Request
              </h2>
              <p className="mt-2 text-sm text-ink/60">
                We reply within one working day. For same-day appointments,
                please ring the studio directly.
              </p>
            </div>
            <div className="mt-12">
              <ContactForm />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-ink/10 reveal">
            <div className="lg:sticky lg:top-32 space-y-12">
              <div>
                <h3 className="text-[11px] uppercase tracking-widest-x text-walnut mb-4">
                  Studio
                </h3>
                <address className="not-italic font-display text-2xl leading-snug text-ink">
                  Rockfort House
                  <br />
                  1 St Augustine Street
                  <br />
                  Galway, H91 KHK2
                </address>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rockfort+House+St+Augustine+St+Galway"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block link-underline text-[11px] uppercase tracking-widest-x text-walnut"
                >
                  Open in Maps →
                </a>
              </div>

              <div>
                <h3 className="text-[11px] uppercase tracking-widest-x text-walnut mb-4">
                  Reach Us
                </h3>
                <div className="space-y-2 font-display text-2xl leading-snug text-ink">
                  <a
                    href="tel:+353091535921"
                    className="block link-underline w-fit"
                  >
                    (091) 535 921
                  </a>
                  <a
                    href="mailto:hello@imagehairstudio.ie"
                    className="block link-underline w-fit"
                  >
                    hello@imagehairstudio.ie
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-[11px] uppercase tracking-widest-x text-walnut mb-4">
                  Hours
                </h3>
                <ul className="divide-y divide-ink/10 border-t border-ink/10">
                  {HOURS.map((row) => (
                    <li
                      key={row.d}
                      className={`flex justify-between py-3 text-[15px] ${
                        row.closed ? 'text-ink/40' : 'text-ink/85'
                      }`}
                    >
                      <span>{row.d}</span>
                      <span className="tabular-nums">{row.h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-sand/60 border border-ink/10 p-6">
                <p className="font-display italic text-xl leading-snug text-ink">
                  Walking past on holiday? Pop in. We’ll do our best to fit you
                  in for a blow-dry on the day.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
