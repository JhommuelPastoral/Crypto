
import ScrollFloat from "../../DesignComponents/ScrollFloat/ScrollFloat.jsx";

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
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] border"> 
        <p>asd</p>

      </main>
    </>
  );
}
