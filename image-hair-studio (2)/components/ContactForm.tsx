'use client';

import { useState } from 'react';
import { SERVICE_CATEGORIES } from '@/components/services-data';

type Status = 'idle' | 'submitting' | 'sent' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    // No backend wired in — simulate success.
    // In production this would POST to /api/contact or similar.
    await new Promise((r) => setTimeout(r, 900));
    setStatus('sent');
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setStatus('idle'), 6000);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
        <Field label="Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" required />
        <Field
          label="Preferred Date"
          name="date"
          type="date"
          />
      </div>

      <div>
        <label className="block text-[11px] uppercase tracking-widest-x text-ink/60 mb-3">
          Service of Interest
        </label>
        <div className="flex flex-wrap gap-2">
          {SERVICE_CATEGORIES.flatMap((c) =>
            c.items.slice(0, 2).map((it) => it.name)
          )
            .slice(0, 8)
            .map((s) => (
              <label key={s} className="cursor-pointer">
                <input
                  type="radio"
                  name="service"
                  value={s}
                  className="peer sr-only"
                />
                <span className="inline-block px-4 py-2 text-[12px] border border-ink/20 text-ink/75 hover:border-walnut hover:text-walnut peer-checked:bg-ink peer-checked:text-cream peer-checked:border-ink transition-colors">
                  {s}
                </span>
              </label>
            ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[11px] uppercase tracking-widest-x text-ink/60 mb-3"
        >
          A little more about what you’re after
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full bg-transparent border-b border-ink/30 focus:border-walnut focus:outline-none py-3 text-base text-ink placeholder-ink/40 transition-colors resize-none"
          placeholder="Length, current colour, anything you’d like us to know…"
        />
      </div>

      <div className="flex flex-wrap items-center gap-6 pt-4">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="group inline-flex items-center gap-3 px-8 py-5 bg-ink text-cream text-[11px] uppercase tracking-widest-x hover:bg-walnut transition-colors duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Sending…' : 'Send Request'}
          <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
            →
          </span>
        </button>

        {status === 'sent' && (
          <p className="text-[11px] uppercase tracking-widest-x text-walnut">
            ✦ &nbsp;Thank you — we’ll be in touch shortly.
          </p>
        )}
        {status === 'error' && (
          <p className="text-[11px] uppercase tracking-widest-x text-red-700">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[11px] uppercase tracking-widest-x text-ink/60 mb-3"
      >
        {label}
        {required && <span className="text-walnut"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-ink/30 focus:border-walnut focus:outline-none py-3 text-base text-ink placeholder-ink/40 transition-colors"
      />
    </div>
  );
}
