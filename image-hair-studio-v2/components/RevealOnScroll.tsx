'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset all reveal elements to hidden first, then re-observe
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    els.forEach((el) => el.classList.remove('is-visible'));

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    // Small delay so the DOM has painted the new page
    const timer = setTimeout(() => {
      const freshEls = document.querySelectorAll<HTMLElement>('.reveal');
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('is-visible');
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
      );
      freshEls.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
