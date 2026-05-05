import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import IntroSection from '@/components/IntroSection';
import ServicesPreview from '@/components/ServicesPreview';
import Testimonials from '@/components/Testimonials';
import GalleryPreview from '@/components/GalleryPreview';
import CTASection from '@/components/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <IntroSection />
      <ServicesPreview />
      <GalleryPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
