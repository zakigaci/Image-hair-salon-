const PHRASES = [
  'Precision Cuts',
  'Considered Colour',
  'Quiet Luxury',
  'Sebastian Professional',
  'Galway · Since 2008',
  'By Appointment',
  'Wella Colour',
];

export default function Marquee() {
  // Duplicate the array for seamless loop
  const items = [...PHRASES, ...PHRASES];
  return (
    <div className="relative bg-ink text-cream py-5 overflow-hidden border-y border-cream/10">
      <div className="marquee-track flex whitespace-nowrap gap-12 will-change-transform">
        {items.map((p, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-12 text-[11px] uppercase tracking-widest-x"
          >
            <span>{p}</span>
            <span aria-hidden className="text-walnut-soft">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
