import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-ink text-cream/85">
      {/* Top hairline accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-walnut-soft/50 to-transparent" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand block */}
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-5xl leading-none tracking-tightest lowercase text-cream">
                image
              </span>
              <span className="text-[10px] tracking-widest-x uppercase text-cream/60">
                Hair Studio
              </span>
            </div>
            <p className="mt-6 max-w-md font-display text-2xl leading-snug text-cream/90 italic">
              A boutique studio on St Augustine Street — quiet, considered, and entirely yours for the hour.
            </p>
            <div className="mt-8 hair-line opacity-30" />
            <p className="mt-6 text-[11px] uppercase tracking-widest-x text-cream/50">
              Galway · Est. since 2008
            </p>
          </div>

          {/* Visit */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-widest-x text-cream/50 mb-5">
              Visit
            </h4>
            <address className="not-italic font-display text-xl leading-relaxed text-cream/90">
              Rockfort House
              <br />
              1 St Augustine Street
              <br />
              Galway, H91 KHK2
            </address>
            <a
              href="tel:+353091535921"
              className="mt-6 inline-block link-underline text-[13px] tracking-tighter-x text-cream/90"
            >
              (091) 535 921
            </a>
          </div>

          {/* Hours */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-widest-x text-cream/50 mb-5">
              Hours
            </h4>
            <ul className="space-y-1.5 text-[13px] text-cream/80">
              <li className="flex justify-between gap-4">
                <span>Tue – Wed</span>
                <span className="tabular-nums">9 — 17</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Thu – Fri</span>
                <span className="tabular-nums">9 — 19</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Saturday</span>
                <span className="tabular-nums">9 — 17</span>
              </li>
              <li className="flex justify-between gap-4 text-cream/50">
                <span>Sun – Mon</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          {/* Navigate */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-widest-x text-cream/50 mb-5">
              Pages
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/about', label: 'About' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/contact', label: 'Book' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="link-underline text-cream/80 hover:text-cream"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-cream/10 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <p className="text-[11px] uppercase tracking-widest-x text-cream/40">
            © {new Date().getFullYear()} Image Hair Studio · Galway
          </p>
          <p className="text-[11px] uppercase tracking-widest-x text-cream/40">
            Sebastian Professional · Wella
          </p>
        </div>
      </div>
    </footer>
  );
}
