import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import HeroSection from '../components/HeroSection.jsx';
import Header from '../components/Header.jsx';
import Silk from '../../DesignComponents/Silk/Silk.jsx';
import AboutSection from '@/components/AboutSection.jsx';
import HowItWorks from '@/components/HowItWorks.jsx';
import Testimonial from '@/components/Testimonial.jsx';

export default function LandingPage() {
  const { ref: homeRef, inView: homeInView } = useInView({
    threshold: 0.5,
  });

  const { ref: featuresRef, inView: featuresInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (homeInView) {
      window.history.replaceState(null, '', '#home');
      window.dispatchEvent(new Event('custom-hashchange'));
    }
  }, [homeInView]);

  useEffect(() => {
    if (featuresInView) {
      window.history.replaceState(null, '', '#features');
      window.dispatchEvent(new Event('custom-hashchange'));
    }
  }, [featuresInView]);


  return (
    <>
      <header className="fixed top-0 z-50 w-full">
        <Header />
      </header>

      {/* Home Section */}
      <section
        id="home"
        ref={homeRef}
        className="relative z-10 min-h-screen overflow-hidden text-white bg-black"
      >
        <div className="absolute inset-0 opacity-25">
          <Silk />
        </div>
        <HeroSection />
      </section>

      {/* Features Section */}
      <section
        id="features"
        ref={featuresRef}
        className="min-h-screen px-6 py-20 text-white bg-zinc-950"
      >
        <AboutSection />
      </section>
      <section
        id="how-it-works"
        className="pt-20 text-white md:px-6 bg-zinc-950"
      >
        <HowItWorks />
      </section>
      <section
        id="testimonials"
        className="pt-20 text-white md:px-6 bg-zinc-950"
      >
        <Testimonial />
      </section>

    </>
  );
}
