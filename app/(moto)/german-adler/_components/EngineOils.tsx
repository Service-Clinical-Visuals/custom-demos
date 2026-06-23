import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function EngineOils() {
  return (
    <section className="w-full py-20 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-full h-full z-0  pointer-events-none flex justify-end">
        <img 
          src="/moto/german-adler/bgengiloil.png" 
          alt="Background pattern" 
          className="h-full object-cover object-right" 
        />
      </div>

      <div className="custom-container relative z-10 ">
        {/* Top Header Row */}
        <div className="flex flex-col xl:flex-row justify-between items-start gap-8 mb-12">
          {/* Title & Button */}
          <div className="xl:w-1/2 flex flex-col gap-6" data-aos="fade-right">
          <div className=" flex flex-row gap-6" data-aos="fade-right"><h2 className="text-xl sm:text-2xl  md:text-3xl lg:text-4xl font-semibold text-black tracking-tight"> GERM<span className="text-[#fcc415] font-inherit">A</span>N ADLER SYNT Engine Oils
  </h2></div>
             

            <div>
              <Button text="Product Catalog" href="#" />
            </div>
          </div>

          {/* Description */}
          <div className="xl:w-1/2 px-25" data-aos="fade-left">
            <p className=" text-[#333333] text-md md:text-[16px] leading-[1.8] max-w-[95%] ">
              GERMAN ADLER SYNT is a synthetic premium engine oil that is suitable for new gasoline engines and was also developed for BMW's hybrid petrol engines. The technology used enable optimal functionality of the particle filter and thus reduction NOx, CO and particle emissions.
            </p>
          </div>
        </div>

        {/* Video Area */}
        <div className="w-full rounded-[24px] overflow-hidden relative aspect-video   shadow-2xl " data-aos="fade-up" data-aos-delay="100">
          <DynamicVideoPlayer 
            type="360" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        
        </div>
      </div>
    </section>
  );
}
