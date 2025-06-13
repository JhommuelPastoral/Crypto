import DecryptedText from "../../Reactbits/DecryptedText/DecryptedText.jsx"
import { Button } from "./ui/button.jsx"
import { MoveRight, MoveUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="pt-20 font-Sora flex justify-center items-center min-h-screen flex-col gap-16 relative z-20 px-6">
      
      {/* Status Badge */}
      <div className="animate-pulse">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          <span className="text-sm font-medium text-white/80">Unlock Your Assets Spark</span>
          <MoveRight className="w-4 h-4 text-white/60" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto ">
        <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-tight">
          <DecryptedText
            text="Once-click for Asset Defense"
            speed={100}
            maxIterations={30}
            className="revealed cursor-text select-text"
            parentClassName="all-letters select-text"
            encryptedClassName="encrypted"
            animateOn="view"
          />
        </div>
        
        <div className="text-lg md:text-xl mt-8 text-center mx-auto leading-relaxed">
          <DecryptedText
            text="Dive into the art assets, where innovative blockchain technology meets financial expertise"
            speed={100}
            maxIterations={30}
            className="revealed cursor-text select-text text-zinc-300"
            parentClassName="all-letters select-text"
            encryptedClassName="encrypted"
            animateOn="view"
          />
        </div>
      </div>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center relative">
        <Button 
          variant="secondary"
          size="lg"
          className="group cursor-pointer relative overflow-hidden bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
        > 
          <span className="relative z-10 flex items-center gap-2 text-white">
            Unlock Your Assets Spark
            <MoveUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </Button>
        
        <Button 
          size="lg"
          className="group border-2 cursor-pointer border-white/20 hover:border-white/40 bg-white hover:bg-white/90 hover:text-black rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300"
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
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <span>Secure Assets</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-zinc-700"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <span>Blockchain Tech</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-zinc-700"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <span>Financial Expertise</span>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-xl animate-pulse delay-500"></div>
    </div>
  )
}