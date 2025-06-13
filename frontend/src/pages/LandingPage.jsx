import HeroSection from '../components/HeroSection.jsx'
import Header from '../components/Header.jsx'
import Iridescence from '../../Reactbits/Iridescence/Iridescence.jsx'
import Silk from '../../Reactbits/Silk/Silk.jsx';

export default function LandingPage() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full">
        <Header />
      </header>

      <section id="home" className="relative min-h-screen bg-black text-white overflow-hidden z-10">
        <div className="absolute inset-0 opacity-25">
          <Silk/>
        </div>
        <HeroSection />
      </section>

      {/* About Section Placeholder */}
      <section id="about" className="min-h-screen bg-zinc-950 text-white px-6 py-30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <p className="text-zinc-300">
            This is a placeholder for the About section. Replace this with your actual content.
          </p>
        </div>
      </section>
    </>
  );
}
