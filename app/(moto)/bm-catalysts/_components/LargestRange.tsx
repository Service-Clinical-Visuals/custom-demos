"use client";

import React from "react";
import Button from "./Button";


export default function LargestRange() {
  return (
    <section 
      className="py-16 lg:py-20 bg-[#1B1537] bg-cover bg-center bg-no-repeat relative overflow-hidden flex justify-center w-full"
      style={{ backgroundImage: `url('/bm-catalysts/images/cta-bg.png')` }}
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Trigger Button */}
          <div 
            className="lg:col-span-6 flex flex-col justify-center space-y-8"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="text-[30px] md:text-[34px] lg:text-[38px] font-bold text-white font-oxanium mb-4 max-w-3xl">
              Our Largest Range In Europe Covering Over 90% Of The Car Parc Sites
            </h2>
            
            <div className="pt-2">
              <Button
                href="#worldwide"
                variant="white"
                size="md"
                rounded="full"
                hasArrow
                className="px-8 shadow-xl font-bold hover:bg-white/95"
              >
                Trusted Worldwide
              </Button>
            </div>
          </div>

          {/* Right Column: Vehicles Silhouette Image */}
          <div 
            className="lg:col-span-6 flex justify-center items-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="w-full max-w-lg lg:max-w-xl">
              <img 
                src="/bm-catalysts/images/vehicles.png" 
                alt="BM Catalysts Vehicles Coverage" 
                className="w-full h-auto object-contain select-none"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
