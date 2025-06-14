import DecryptedText from "../../DesignComponents/DecryptedText/DecryptedText.jsx"
import Magnet from "../../DesignComponents/Magnet/Magnet.jsx";
import { Button } from "./ui/button.jsx"
import { MoveRight, MoveUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center min-h-screen gap-10 px-6 pt-20 border font-Sora">
      
      {/* Status Badge */}
      <Magnet padding={10} disabled={false} magnetStrength={1} >
        <div className="animate-pulse">
          <div className="inline-flex items-center gap-2 px-4 py-2 border rounded-full bg-white/5 border-white/10 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            <span className="text-sm font-medium text-white/80">Unlock Your Assets Spark</span>
            <MoveRight className="w-4 h-4 text-white/60" />
          </div>
        </div>
      </Magnet> 

      {/* Main Content */}
      <div className="relative z-10 mx-auto ">
        <div className="text-4xl font-bold leading-tight text-center md:text-6xl lg:text-7xl">
          <DecryptedText
            text="Once-click for Asset Defense"
            speed={100}
            maxIterations={30}
            className="select-text revealed cursor-text"
            parentClassName="all-letters select-text"
            encryptedClassName="encrypted"
            animateOn="view"
          />
        </div>
        
        <div className="mx-auto mt-8 text-lg leading-relaxed text-center md:text-xl">
          <DecryptedText
            text="Dive into the art assets, where innovative blockchain technology meets financial expertise"
            speed={100}
            maxIterations={30}
            className="select-text revealed cursor-text text-zinc-300"
            parentClassName="all-letters select-text"
            encryptedClassName="encrypted"
            animateOn="view"
          />
        </div>
      </div>

      {/* Call to Action Buttons */}
      <div className="relative flex flex-col items-center gap-4 sm:flex-row">
        <Button 
          variant="secondary"
          size="lg"
          className="relative px-8 py-4 overflow-hidden text-lg font-semibold transition-all duration-300 transform border rounded-full cursor-pointer group bg-white/10 hover:bg-white/20 border-white/20 hover:scale-105"
        > 
          <span className="relative z-10 flex items-center gap-2 text-white">
            Unlock Your Assets Spark
            <MoveUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </Button>
        
        <Button 
          size="lg"
          className="px-8 py-4 text-lg font-semibold transition-all duration-300 bg-white border-2 rounded-full cursor-pointer group border-white/20 hover:border-white/40 hover:bg-white/90 hover:text-black"
        > 
          <span className="flex items-center gap-2">
            Unlock Your Assets Spark
          </span>
        </Button>
      </div>

      {/* Trust Indicators */}
      <div className="flex flex-col items-center gap-4 mt-8">
        <div className="flex items-center gap-6 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
            <span>Secure Assets</span>
          </div>
          <div className="hidden w-px h-4 sm:block bg-zinc-700"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
            <span>Blockchain Tech</span>
          </div>
          <div className="hidden w-px h-4 sm:block bg-zinc-700"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
            <span>Financial Expertise</span>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute w-20 h-20 rounded-full top-1/4 left-10 bg-white/5 blur-xl animate-pulse"></div>
      <div className="absolute w-32 h-32 delay-1000 rounded-full bottom-1/4 right-10 bg-white/5 blur-xl animate-pulse"></div>
      <div className="absolute w-16 h-16 delay-500 rounded-full top-1/2 right-1/4 bg-white/5 blur-xl animate-pulse"></div>

      {/* Footer */}
      <footer className="absolute w-full space-y-4 text-sm transform -translate-x-1/2 bottom-4 left-1/2 text-zinc-500">
        <p className="text-center">Sponsored By</p>

        <div className="relative flex items-center justify-center gap-4">
          <div className="flex items-center justify-center w-full gap-2 ">
            <Magnet padding={10} disabled={false} magnetStrength={1} className="px-3 py-1 border rounded-full">
              <p className="text-zinc-400">Vercel</p>
            </Magnet>
            <Magnet padding={10} disabled={false} magnetStrength={1} className="px-3 py-1 border rounded-full">
              <p className="text-zinc-400">Render</p>
            </Magnet>
            <Magnet padding={10} disabled={false} magnetStrength={1} className="px-3 py-1 border rounded-full">
              <p className="text-zinc-400">Supabase</p>
            </Magnet>
            <Magnet padding={10} disabled={false} magnetStrength={1} className="px-3 py-1 border rounded-full">
              <p className="text-zinc-400">Firebase</p>
            </Magnet>
          </div>

        </div>

      </footer>
      
    </div>
  )
}