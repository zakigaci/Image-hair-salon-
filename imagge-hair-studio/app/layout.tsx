import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
});

const sans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Image Hair Studio — Galway',
  description:
    'A boutique hair studio on St Augustine Street, Galway. Precision cuts, considered colour, and quiet luxury — by appointment.',
  metadataBase: ,
  openGraph: {
    title: 'Image Hair Studio — Galway',
    description:
      'Precision cuts, considered colour, and quiet luxury in the heart of Galway.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="grain font-sans bg-cream text-ink antialiased">
        <RevealOnScroll />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
