"use client";

import React from "react";
import { Wrench } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function GasolineEngineOil() {
  const features = [
    "Advanced wear and corrosion protection",
    "Enhanced fuel efficiency and engine cleanliness",
    "Excellent thermal and oxidation stability",
    "Extended equipment and engine life",
  ];

  return (
    <section className="relative w-full bg-white pt-8">
      {/* Dark Card Container */}
    <div className="w-full bg-dark rounded-t-[150px] md:rounded-t-[150px] px-6 py-16 md:py-24 text-white relative overflow-hidden">
        
        {/* Subtle decorative background elements for premium feel */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="custom-container relative z-10">
          {/* Centered Heading */}
          <div className="flex flex-col items-center gap-3 mb-16 text-center" data-aos="fade-up">
            <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-white tracking-wide leading-none">
              Gasoline Engine Oil
            </h1>
           
            <div className="w-30 sm:w-45 md:w-55 lg:w-70 h-[3px] bg-secondary mx-auto" />
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 flex flex-col items-start" data-aos="fade-right">
              {/* Main Subtitle */}
              {/* <h3 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-white leading-snug font-sans tracking-wide"> */}
                <h2 className="text-md sm:text-2xl md:text-3xl lg:text-4xl font-heading font-medium text-white tracking-wide  leading-[1.2]">
                Engineered for Maximum Protection and Performance
              </h2>

              {/* Description */}
              <p className="text-[#ffffff] text-[10px] sm:text-xs md:text-sm lg:text-base leading-relaxed mt-6 mb-8">
                Petrovöll lubricants are developed using advanced additive technology and
                premium base oils to deliver exceptional protection, efficiency, and reliability
                across a wide range of automotive and industrial applications. Designed to
                perform under demanding operating conditions, our products help reduce
                wear, improve fuel economy, and extend equipment life while ensuring smooth
                and consistent performance.
              </p>

              {/* Performance Level Section */}
              <h4 className="text-lg sm:text-xl font-medium text-white mb-6 uppercase tracking-wider font-sans">
                Performance Level
              </h4>

              {/* Features 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Wrench className="text-secondary shrink-0 mt-0.5" size={18} />
                    <span className="text-white text-[10px] sm:text-xs md:text-sm lg:text-base  font-sans font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Video Column */}
            <div className="lg:col-span-7 w-full flex justify-center" data-aos="fade-left">
              <div className="relative w-full aspect-video rounded-[24px] overflow-hidden ">
                {/* 360 Degree Video Player */}
                <DynamicVideoPlayer
                  type="360"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
