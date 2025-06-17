
import ScrollFloat from "../../DesignComponents/ScrollFloat/ScrollFloat.jsx";
import SpotlightCard from "../../DesignComponents/SpotlightCard/SpotlightCard.jsx";
export default function AboutSection() {
  return (
    <>
      <header className="h-30">
        <div className="flex flex-col items-center justify-start font-Sora">
          <div className="flex flex-col items-center max-w-2xl px-4 text-center">
            <ScrollFloat
              animationDuration={3}
              ease="power3.out"
              scrollStart="top bottom"
              scrollEnd="bottom top"
              stagger={0.05}
              containerClassName="text-4xl font-bold leading-tight"
            >
              Features and Benefits
            </ScrollFloat>

            <div data-aos="zoom-in" data-aos-duration="1500" className="-mt-5">
              <p className="text-sm text-zinc-400">
                Exploratory mission with DeFi Horizon & navigating through the vast possibilities of DeFi
              </p>
            </div>
          </div>

        </div>
      </header>
      <main className="flex flex-col items-center justify-center h-[calc(100vh-200px)]  max-w-6xl mx-auto font-Sora"> 
        <div className="grid w-full h-[80%] grid-flow-col grid-rows-2 gap-4  grid-cols-3 ">
          <div className="row-span-2" data-aos="fade-right" >
            <SpotlightCard
              spotlightColor="rgba(255, 255, 255, 0.25)"
              className="flex flex-col justify-between w-full h-full p-6 rounded-2xl gap-6 bg-white/5 backdrop-blur-md shadow-lg transition-transform hover:scale-[1.015] duration-300"
            >
              {/* Text Content */}
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold leading-snug text-white">
                  Robust Security
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  Harness the power of cutting-edge blockchain technology to ensure
                  unparalleled security for your transactions. Every interaction is
                  encrypted and protected by default.
                </p>
              </div>
              {/* Image Content */}
              <div className="w-full h-full overflow-hidden rounded-xl">
                <img
                  src="security.png"
                  alt="security"
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            </SpotlightCard>

          </div>
          <div className="" data-aos="fade-down">
            <SpotlightCard
              spotlightColor="rgba(255, 255, 255, 0.25)"
              className="flex flex-col justify-between w-full h-full p-6 rounded-2xl gap-6 bg-white/5 backdrop-blur-md shadow-lg transition-transform hover:scale-[1.015] duration-300"
            >
              {/* Text Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold leading-snug text-white">
                  Lighting-Fast Transaction
                </h3>
              </div>
              {/* Image Content */}
              <div className="w-full h-full overflow-hidden rounded-xl">
                <img
                  src="fast.jpg"
                  alt="fast"
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            </SpotlightCard>
          </div>
          <div className="col-span-2" data-aos="fade-up">
            <SpotlightCard
              spotlightColor="rgba(255, 255, 255, 0.25)"
              className="flex flex-col justify-between w-full h-full p-6 rounded-2xl gap-6 bg-white/5 backdrop-blur-md shadow-lg transition-transform hover:scale-[1.015] duration-300"
            >
              {/* Text Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold leading-snug text-white">
                  Decentralized Ecosystem
                </h3>
              </div>
              {/* Image Content */}
              <div className="w-full h-full overflow-hidden rounded-xl">
                <img
                  src="Decentralized.jpg"
                  alt="Decentralized"
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            </SpotlightCard>
          </div>
          <div className="" data-aos="fade-left">
            <SpotlightCard
              spotlightColor="rgba(255, 255, 255, 0.25)"
              className="flex flex-col justify-between w-full h-full p-6 rounded-2xl gap-6 bg-white/5 backdrop-blur-md shadow-lg transition-transform hover:scale-[1.015] duration-300"
            >
              {/* Text Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold leading-snug text-white">
                  Cost-Effective Transactions
                </h3>
              </div>
              {/* Image Content */}
              <div className="w-full h-full overflow-hidden rounded-xl">
                <img
                  src="Cost.webp"
                  alt="Cost"
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            </SpotlightCard>
          </div>
        </div>
      </main>
    </>
  );
}
