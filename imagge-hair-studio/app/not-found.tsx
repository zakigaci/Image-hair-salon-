import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 w-full pt-32">
        <div className="flex items-center gap-4">
          <span className="block w-10 h-px bg-walnut" />
          <span className="text-[11px] uppercase tracking-widest-x text-walnut">
            404 · Not Found
          </span>
        </div>
        <h1 className="mt-8 font-display font-light text-5xl sm:text-6xl lg:text-[112px] leading-[0.95] tracking-tighter-x text-ink">
          The page you’re after
          <br />
          <span className="italic">isn’t here.</span>
        </h1>
        <p className="mt-8 max-w-md text-base lg:text-lg leading-relaxed text-ink/70">
          It may have moved, or it may never have been. Either way, here are a
          few good places to go instead.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 px-7 py-4 bg-ink text-cream text-[11px] uppercase tracking-widest-x hover:bg-walnut transition-colors duration-500"
          >
            Back to Home
            <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/contact"
            className="link-underline px-2 py-4 text-[11px] uppercase tracking-widest-x text-ink"
          >
            Book an appointment →
          </Link>
        </div>
      </div>
    </section>
  );
}
