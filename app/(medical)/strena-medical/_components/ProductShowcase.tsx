"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function ProductShowcase() {
  return (
    <section className="pb-16 lg:pb-20 bg-white strena-medical-root">
      <div className="custom-container mx-auto px-4 lg:px-8">
        <div 
          data-aos="zoom-in"
          className="bg-[#00427C] rounded-[40px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center p-8 lg:p-12 gap-12"
        >
          {/* Left: 360 Video Player */}
          <div className="w-full aspect-square lg:aspect-video relative rounded-3xl overflow-hidden bg-white/10">
            <DynamicVideoPlayer 
              type="360" 
              className="absolute inset-0 w-full h-full object-contain" 
            />
            {/* Checkerboard fallback/overlay if video is loading or missing */}
            <div className="absolute inset-0 z-[-1] bg-[url('https://www.transparenttextures.com/patterns/checkerboard.png')] opacity-10"></div>
          </div>

          {/* Right: Content */}
          <div className="w-full text-white">
            <h2 className=" text-2xl lg:text-3xl font-semibold mb-4">
              MS55 <span className="text-[#009BDB]">Plus</span>
            </h2>
            <h3 className="text-white text-xl lg:text-2xl font-semibold mb-6">
              Adds high technologies to daily routines
            </h3>
            
            {/* <blockquote className="text-xl font-bold italic mb-6">
              "High Quality & Ease of Use"
            </blockquote> */}
            
            <p className="text-white! text-[16px] leading-relaxed mb-10 text-justify">
              Introducing the latest addition to the Medisono line – the MS55 Plus counts with 
              advanced technologies including traditional layer, single-crystal, and multi-frequency, 
              offering high-end features for General imaging, Cardio, and OB/GYN applications. 
              Its dedicated software ensures flexibility and performance that is easily updated 
              to stay ahead of results. Accordingly, ensuring comfort and efficiency through 
              height and orientation adjustments for the keyboard and high-resolution LED monitor (22"/24").
            </p>

            <Button variant="white" size="md" hasArrow>
              View Product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
