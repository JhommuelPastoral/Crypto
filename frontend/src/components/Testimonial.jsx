import ScrollFloat from "../../DesignComponents/ScrollFloat/ScrollFloat.jsx";
import SpotlightCard from "../../DesignComponents/SpotlightCard/SpotlightCard.jsx";
import { Facebook, Twitter, Instagram, Github } from 'lucide-react';

export default function Testimonial() {
  return (
    <div className='relative min-h-screen'>
      <header className="h-30">
        <div className="flex flex-col items-center justify-start font-Sora">
          <div className="flex flex-col items-center w-full max-w-2xl px-4 text-center ">
            <ScrollFloat
              animationDuration={3}
              ease="power3.out"
              scrollStart="top bottom"
              scrollEnd="bottom top"
              stagger={0.05}
              containerClassName="text-4xl font-bold leading-tight"
            >
              Testimonials
            </ScrollFloat>

            <div data-aos="zoom-in" data-aos-duration="1500" className="-mt-5">
              <p className="text-sm text-zinc-400">
                Hear from users who’ve experienced the difference firsthand.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center max-w-6xl px-4 py-16 mx-auto font-Sora">
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          
          {/* Testimonial 1 */}
          <div data-aos="fade-up">
            <SpotlightCard
              spotlightColor="rgba(255, 255, 255, 0.15)"
              className="flex flex-col justify-between w-full h-full p-6 rounded-2xl gap-6 bg-white/5 backdrop-blur-md shadow-lg transition-transform hover:scale-[1.02] duration-300 border border-white/10"
            >
              <p className="text-base italic text-gray-300">
                “This platform gave me total confidence in every transaction I made. The security is rock-solid and the experience seamless.”
              </p>
              <div className="mt-4">
                <h4 className="font-semibold text-white">Alex Ramirez</h4>
                <span className="text-sm text-gray-400">Crypto Enthusiast</span>
              </div>
            </SpotlightCard>
          </div>

          {/* Testimonial 2 */}
          <div data-aos="fade-up" data-aos-delay="100">
            <SpotlightCard
              spotlightColor="rgba(255, 255, 255, 0.15)"
              className="flex flex-col justify-between w-full h-full p-6 rounded-2xl gap-6 bg-white/5 backdrop-blur-md shadow-lg transition-transform hover:scale-[1.02] duration-300 border border-white/10"
            >
              <p className="text-base italic text-gray-300">
                “Transactions are incredibly fast. I’ve never had to wait — it feels instant every time. Highly recommend this system.”
              </p>
              <div className="mt-4">
                <h4 className="font-semibold text-white">Maria Santos</h4>
                <span className="text-sm text-gray-400">Blockchain Developer</span>
              </div>
            </SpotlightCard>
          </div>

          {/* Testimonial 3 */}
          <div data-aos="fade-up" data-aos-delay="200">
            <SpotlightCard
              spotlightColor="rgba(255, 255, 255, 0.15)"
              className="flex flex-col justify-between w-full h-full p-6 rounded-2xl gap-6 bg-white/5 backdrop-blur-md shadow-lg transition-transform hover:scale-[1.02] duration-300 border border-white/10"
            >
              <p className="text-base italic text-gray-300">
                “I love how decentralized everything is. I feel more in control of my assets and less dependent on middlemen.”
              </p>
              <div className="mt-4">
                <h4 className="font-semibold text-white">Kenji Nakamoto</h4>
                <span className="text-sm text-gray-400">Web3 Researcher</span>
              </div>
            </SpotlightCard>
          </div>

          {/* Testimonial 4 */}
          <div data-aos="fade-up" data-aos-delay="300">
            <SpotlightCard
              spotlightColor="rgba(255, 255, 255, 0.15)"
              className="flex flex-col justify-between w-full h-full p-6 rounded-2xl gap-6 bg-white/5 backdrop-blur-md shadow-lg transition-transform hover:scale-[1.02] duration-300 border border-white/10"
            >
              <p className="text-base italic text-gray-300">
                “The low transaction costs helped me scale faster without worrying about fees. It’s perfect for small businesses like mine.”
              </p>
              <div className="mt-4">
                <h4 className="font-semibold text-white">Liam Cruz</h4>
                <span className="text-sm text-gray-400">Startup Founder</span>
              </div>
            </SpotlightCard>
          </div>

        </div>
      </main>

      <footer className="absolute bottom-0 w-full py-6 text-white border-t font-Sora">
        <div className="flex flex-col items-center justify-between max-w-6xl gap-4 px-6 mx-auto text-sm md:flex-row">
          
          <p className="text-zinc-400">&copy; {new Date().getFullYear()} CryptoLab. All rights reserved.</p>
          
          <div className="flex gap-4">
            <Facebook/>
            <Twitter/>
            <Instagram/>
            <Github/>
          </div>
        </div>
      </footer>

    </div>
  )
}
