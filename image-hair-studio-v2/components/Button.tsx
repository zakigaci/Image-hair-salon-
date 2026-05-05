import Link from 'next/link';
import { ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'ghost';
type Props = {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  ariaLabel?: string;
};

const base =
  'group inline-flex items-center justify-center gap-3 px-7 py-4 text-[11px] uppercase tracking-widest-x transition-all duration-500 ease-out-soft';

const variants: Record<Variant, string> = {
  primary:
    'bg-ink text-cream hover:bg-walnut hover:text-cream',
  outline:
    'border border-ink/80 text-ink hover:bg-ink hover:text-cream',
  ghost: 'text-ink hover:text-walnut',
};

export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  ariaLabel,
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <span
        aria-hidden
        className="inline-block transition-transform duration-500 ease-out-soft group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );
  if (href) {
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
