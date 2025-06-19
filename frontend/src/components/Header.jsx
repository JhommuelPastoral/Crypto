import GooeyNav from '../../DesignComponents/GooeyNav/GooeyNav.jsx'
import { useEffect, useState } from 'react';
export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Sign in", href: "/signin" },
  
  ];
  
  useEffect(() => {

    const updateActiveIndex = () => {
      const curretHash = window.location.hash;
      const index = items.findIndex((item) => item.href === curretHash);
      if(!index){
        setActiveIndex(0);
        return;
      }
      setActiveIndex(index);
    }


    window.addEventListener('custom-hashchange', updateActiveIndex);
    return () => {
      window.removeEventListener('custom-hashchange', updateActiveIndex);
    };
  }, []);

  return (

    <div className="relative flex items-center justify-center max-w-2xl p-3 mx-auto mt-6 overflow-hidden text-sm transition-all duration-300 border shadow-md font-Sora rounded-xl border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl hover:shadow-lg hover:border-white/30">    
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        newActiveIndex={activeIndex}
        animationTime={600}
        timeVariance={500}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}

      />

    </div>

  )
}
