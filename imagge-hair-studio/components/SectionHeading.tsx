import { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
  number?: string;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  number,
  className = '',
}: Props) {
  const isCenter = align === 'center';
  return (
    <div
      className={`${className} ${
        isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'
      }`}
    >
      <div
        className={`flex items-center gap-4 ${
          isCenter ? 'justify-center' : ''
        }`}
      >
        {number && (
          <span className="font-display italic text-walnut/70 text-sm">
            {number}
          </span>
        )}
        {eyebrow && (
          <span className="text-[11px] uppercase tracking-widest-x text-walnut">
            {eyebrow}
          </span>
        )}
      </div>
      <h2 className="mt-4 font-display font-light text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] tracking-tighter-x text-ink">
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-6 text-base sm:text-lg leading-relaxed text-ink/70 ${
            isCenter ? 'mx-auto' : ''
          } max-w-xl`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
