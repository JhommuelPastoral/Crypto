import React from 'react'
import ScrollFloat from "../../DesignComponents/ScrollFloat/ScrollFloat.jsx";
import SpotlightCard from '../../DesignComponents/SpotlightCard/SpotlightCard.jsx';
export default function 
HowItWorks() {
  return (
    <div className='min-h-screen'>
      <header className="h-30">
        <div className="flex flex-col items-center justify-start font-Sora">
          <div className="flex flex-col items-center w-full max-w-2xl px-4 text-center border5">
            <ScrollFloat
              animationDuration={3}
              ease="power3.out"
              scrollStart="top bottom"
              scrollEnd="bottom top"
              stagger={0.05}
              containerClassName="text-4xl font-bold leading-tight"
            >
              How it Works
            </ScrollFloat>

            <div data-aos="zoom-in" data-aos-duration="1500" className="-mt-5">
              <p className="text-sm text-zinc-400">
                Learn how each part of the system works together to give you seamless, real-time results.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center max-w-6xl md:mx-auto md:px-4 font-Sora">
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          <div data-aos="fade-up">
            <SpotlightCard
              spotlightColor="rgba(255, 255, 255, 0.25)"
              className="flex flex-col justify-between w-full h-full p-6 rounded-2xl gap-6 bg-white/5 backdrop-blur-md shadow-lg transition-transform hover:scale-[1.02] duration-300 border border-white/10"
            >
              <span className="text-sm tracking-wide text-blue-400 uppercase">Step 1</span>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-white">Robust Security</h3>
                <p className="text-sm text-gray-300">
                  Harness the power of cutting-edge blockchain technology to ensure unparalleled security. Every interaction is encrypted and protected.
                </p>
              </div>
              <div className="w-full h-48 overflow-hidden rounded-xl">
                <img src="security.png" alt="security" className="object-cover w-full h-full rounded-xl" />
              </div>
            </SpotlightCard>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <SpotlightCard
              spotlightColor="rgba(255, 255, 255, 0.25)"
              className="flex flex-col justify-between w-full h-full p-6 rounded-2xl gap-6 bg-white/5 backdrop-blur-md shadow-lg transition-transform hover:scale-[1.02] duration-300 border border-white/10"
            >
              <span className="text-sm tracking-wide text-blue-400 uppercase">Step 2</span>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-white">Lightning-Fast Transactions</h3>
                <p className="text-sm text-gray-300">
                  Experience near-instant transaction processing with zero compromises on reliability.
                </p>
              </div>
              <div className="w-full h-48 overflow-hidden rounded-xl">
                <img src="fast.jpg" alt="fast" className="object-cover w-full h-full rounded-xl" />
              </div>
            </SpotlightCard>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <SpotlightCard
              spotlightColor="rgba(255, 255, 255, 0.25)"
              className="flex flex-col justify-between w-full h-full p-6 rounded-2xl gap-6 bg-white/5 backdrop-blur-md shadow-lg transition-transform hover:scale-[1.02] duration-300 border border-white/10"
            >
              <span className="text-sm tracking-wide text-blue-400 uppercase">Step 3</span>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-white">Decentralized Ecosystem</h3>
                <p className="text-sm text-gray-300">
                  Operate in a truly decentralized environment with no single point of failure. Trustless and secure by design.
                </p>
              </div>
              <div className="w-full h-48 overflow-hidden rounded-xl">
                <img src="Decentralized.jpg" alt="decentralized" className="object-cover w-full h-full rounded-xl" />
              </div>
            </SpotlightCard>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <SpotlightCard
              spotlightColor="rgba(255, 255, 255, 0.25)"
              className="flex flex-col justify-between w-full h-full p-6 rounded-2xl gap-6 bg-white/5 backdrop-blur-md shadow-lg transition-transform hover:scale-[1.02] duration-300 border border-white/10"
            >
              <span className="text-sm tracking-wide text-blue-400 uppercase">Step 4</span>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-white">Cost-Effective Transactions</h3>
                <p className="text-sm text-gray-300">
                  Reduce fees while increasing speed. Our system ensures maximum value with minimal cost.
                </p>
              </div>
              <div className="w-full h-48 overflow-hidden rounded-xl">
                <img src="Cost.webp" alt="cost" className="object-cover w-full h-full rounded-xl" />
              </div>
            </SpotlightCard>
          </div>

        </div>
      </main>

    </div>
  )
}
