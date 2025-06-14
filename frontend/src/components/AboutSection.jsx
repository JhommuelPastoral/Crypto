
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
      <main className="flex flex-col items-center justify-center h-[calc(100vh-200px)]  max-w-6xl mx-auto"> 
        <div className="grid w-full h-full grid-flow-col grid-rows-2 gap-4 ">
            <div className="row-span-2 ">
              <SpotlightCard className="w-full h-full custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                <p>Content 1</p>
              </SpotlightCard>
            </div>
            <div className="col-span-1 ">
              <SpotlightCard className="w-full h-full custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                <p>Content 2</p>
              </SpotlightCard>
            </div>
            <div className="col-span-2 ">
              <SpotlightCard className="w-full h-full custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                <p>Content 3</p>
              </SpotlightCard>
            </div>
            <div className="col-span-1 ">
              <SpotlightCard className="w-full h-full custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                <p>Content 4</p>
              </SpotlightCard>
            </div>

        </div>

      </main>
    </>
  );
}
