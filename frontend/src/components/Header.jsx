import GooeyNav from '../../DesignComponents/GooeyNav/GooeyNav.jsx'
export default function LandingPage() {
const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Whitepaper", href: "#whitepaper" },
  { label: "Team", href: "#team" },
  { label: "FAQs", href: "#faqs" },
  { label: "Sign in", href: "#faqs" },

];

  return (

    <div className="relative flex items-center justify-center max-w-5xl p-3 mx-auto mt-6 overflow-hidden text-sm transition-all duration-300 border shadow-md font-Sora rounded-xl border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl hover:shadow-lg hover:border-white/30">    
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={500}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}

      />

    </div>

  )
}
