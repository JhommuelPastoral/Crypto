import HeroSection from '../components/HeroSection.jsx'
import Header from '../components/Header.jsx'
import Silk from '../../DesignComponents/Silk/Silk.jsx';
import AboutSection from '@/components/AboutSection.jsx';
export default function LandingPage() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full">
        <Header />
      </header>

      <section id="home" className="relative z-10 min-h-screen overflow-hidden text-white bg-black">
        <div className="absolute inset-0 opacity-25">
          <Silk/>
        </div>
        <HeroSection />
      </section>

      {/* About Section Placeholder */}
      <section id="about" className="max-h-screen px-6 py-20 pb-10 text-white bg-zinc-950">
        <AboutSection/>
      </section>
    </>
  );
}
