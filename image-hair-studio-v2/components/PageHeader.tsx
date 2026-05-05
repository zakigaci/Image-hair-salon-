import { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
};

export default function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <section className="relative pt-40 pb-16 lg:pt-48 lg:pb-24 overflow-hidden">
      {/* Decorative oversized "image" word */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute -top-2 -right-6 lg:-top-6 lg:-right-12 font-display text-[20vw] lg:text-[14vw] leading-none tracking-tightest text-walnut/[0.05] lowercase"
      >
        image
      </div>
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex items-center gap-4 reveal">
          <span className="block w-10 h-px bg-walnut" />
          <span className="text-[11px] uppercase tracking-widest-x text-walnut">
            {eyebrow}
          </span>
        </div>
        <h1 className="mt-8 font-display font-light text-5xl sm:text-6xl lg:text-[112px] leading-[0.95] tracking-tighter-x text-ink reveal max-w-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-8 max-w-xl text-base lg:text-lg leading-relaxed text-ink/70 reveal">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
