import PageHeader from '@/components/PageHeader';
import GalleryGrid from '@/components/GalleryGrid';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Gallery — Image Hair Studio',
  description:
    'A look at our work — cuts, colour, styling, and the studio itself, on St Augustine Street, Galway.',
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title={
          <>
            A small archive
            <br />
            <span className="italic">of recent work.</span>
          </>
        }
        intro="Cuts, colour and styling from the studio floor. Filter by what you’re curious about."
      />

      <section className="mx-auto max-w-[1400px] px-6 lg:px-12 pb-24 lg:pb-32">
        <GalleryGrid />
      </section>

      <CTASection />
    </>
  );
}
