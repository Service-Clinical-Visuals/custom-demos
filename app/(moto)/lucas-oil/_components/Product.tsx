import React from "react";
import Link from "next/link";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Product() {
  return (
    <section className="w-full bg-[#0c2342] py-16 md:py-24">
      <div className="custom-container p-4 md:p-6 xl:px-35 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col space-y-6 mt-5" data-aos="fade-right">
            
          {/* <div>
            <div className="flex flex-row items-center space-x-3">
              <img
                src="/moto/lucas-oil/setting.png"
                alt="Setting icon"
                className="w-7 h-7 md:w-8 md:h-8 object-contain"
              />
              <h2 className="!text-white text-3xl md:text-4xl font-bold leading-none mb-2">
                Lucas Oil Synthetic 5W-30
              </h2>
            </div>

            <h2 className="!text-white text-3xl md:text-4xl font-bold leading-none ">
              ECO-FPW EngineOil
            </h2>
          </div> */}
          <div>
  <div className="flex items-center gap-3">
    <img
      src="/moto/lucas-oil/setting.png"
      alt="Setting icon"
      className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
    />

    <h2
      className="text-white font-semibold leading-none"
      style={{
        fontSize: "clamp(20px, 2vw, 40px)",
        fontFamily: "var(--font-orbitron)",
      }}
    >
      Lucas Oil Synthetic 5W-30
    </h2>
  </div>

  <h2
    className="text-white font-semibold leading-none mt-1"
    style={{
      fontSize: "clamp(20px, 2vw, 40px)",
      fontFamily: "var(--font-orbitron)",
    }}
  >
    ECO-FPW EngineOil
  </h2>
</div>
           
            
            {/* <p className="!text-[#f5f5f5] leading-relaxed"> */}
              <p className="text-white text-sm md:text-[16px] leading-[1.8] ">
              Lucas Oil Synthetic 5W-30 ECO-FPW Engine Oil is a fully synthetic, mid-SAPS engine oil formulated from premium quality base stocks and enhanced with advanced additives to deliver strong protection, cleaner engine performance, and better fuel efficiency.
            </p>
            
            {/* <p className="!text-[#f5f5f5] leading-relaxed"> */}
              <p className="text-white text-sm md:text-[16px] leading-[1.8] ">
              Formulated to meet the performance demands of modern Stellantis group engines, it helps reduce wear, control sludge, and keep engines running smoothly in all driving conditions. Its mid-SAPS formula makes it suitable for use with emission control systems like diesel particulate filters (DPFs) and catalytic converters, helping protect both your engine and the environment.
            </p>
            
            <div>
              <Button href="#" variant="ternary">
                Explore Product
              </Button>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="w-full aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-lg relative bg-white/5" data-aos="fade-left">
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          
        </div>
      </div>
    </section>
  );
}
