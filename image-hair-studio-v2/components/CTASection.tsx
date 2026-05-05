import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative bg-ink text-cream overflow-hidden">
      {/* Faint walnut wash */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-walnut-deep/40 via-transparent to-transparent pointer-events-none"
      />
      {/* Oversize ghost type */}
      <div
        aria-hidden
        className="absolute -bottom-16 right-0 lg:-bottom-24 lg:-right-12 font-display text-[28vw] lg:text-[18vw] leading-none tracking-tightest text-cream/[0.04] lowercase select-none pointer-events-none"
      >
        image
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 py-28 lg:py-40">
        <div className="reveal max-w-4xl">
          <span className="text-[11px] uppercase tracking-widest-x text-walnut-soft">
            ✦ &nbsp; By Appointment
          </span>
          <h2 className="mt-8 font-display font-light text-5xl sm:text-6xl lg:text-[96px] leading-[0.95] tracking-tighter-x">
            Come in. <br />
            <span className="italic text-cream/85">Sit a while.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/75">
            We work by appointment, with proper time set aside for each guest.
            Call the studio, drop in to chat, or book online — whichever feels
            right.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-5 bg-cream text-ink text-[11px] uppercase tracking-widest-x hover:bg-walnut hover:text-cream transition-colors duration-500"
            >
              Book Online
              <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="tel:+353091535921"
              className="group inline-flex items-center gap-3 px-8 py-5 border border-cream/40 text-cream text-[11px] uppercase tracking-widest-x hover:border-cream hover:bg-cream/10 transition-colors duration-500"
            >
              Call (091) 535 921
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-2xl">
            <div>
              <div className="text-[10px] uppercase tracking-widest-x text-cream/50 mb-2">
                Address
              </div>
              <div className="text-sm text-cream/90 leading-relaxed">
                Rockfort House
                <br />
                1 St Augustine Street
                <br />
                Galway
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest-x text-cream/50 mb-2">
                Hours
              </div>
              <div className="text-sm text-cream/90 leading-relaxed">
                Tue – Sat
                <br />
                Closed Sun &amp; Mon
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest-x text-cream/50 mb-2">
                Reach Us
              </div>
              <div className="text-sm text-cream/90 leading-relaxed">
                (091) 535 921
                <br />
                hello@imagehairstudio.ie
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
