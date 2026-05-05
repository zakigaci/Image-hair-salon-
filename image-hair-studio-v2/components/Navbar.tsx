'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-soft ${
        scrolled
          ? 'bg-cream/85 backdrop-blur-md border-b border-ink/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-baseline gap-2"
            aria-label="Image Hair Studio — home"
          >
            <span className="font-display text-[28px] leading-none tracking-tightest text-ink lowercase">
              image
            </span>
            <span className="hidden sm:inline text-[10px] tracking-widest-x uppercase text-walnut-deep">
              Hair Studio
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="link-underline text-[12px] uppercase tracking-widest-x text-ink/80 hover:text-ink transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-cream text-[11px] uppercase tracking-widest-x hover:bg-walnut transition-colors duration-500"
            >
              Book
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex flex-col items-end gap-1.5 p-2"
          >
            <span
              className={`block h-px bg-ink transition-all duration-500 ${
                open ? 'w-6 translate-y-[6px] rotate-45' : 'w-6'
              }`}
            />
            <span
              className={`block h-px bg-ink transition-all duration-500 ${
                open ? 'opacity-0' : 'w-4'
              }`}
            />
            <span
              className={`block h-px bg-ink transition-all duration-500 ${
                open ? 'w-6 -translate-y-[6px] -rotate-45' : 'w-5'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-700 ease-out-soft ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        } bg-cream border-t border-ink/5`}
      >
        <nav className="px-6 py-10 flex flex-col gap-6">
          {NAV_LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-ink"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {l.label}
            </Link>
          ))}
          <div className="hair-line my-2" />
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex w-fit items-center gap-2 px-5 py-3 bg-ink text-cream text-[11px] uppercase tracking-widest-x"
          >
            Book an Appointment
            <span aria-hidden>→</span>
          </Link>
          <div className="mt-6 text-[11px] tracking-widest-x uppercase text-ink/60">
            (091) 535 921
          </div>
        </nav>
      </div>
    </header>
  );
}
