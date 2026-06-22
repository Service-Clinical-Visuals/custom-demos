"use client";

import React from "react";
import { Wrench } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function TrustedSolutions() {
  return (
    <div className="w-full flex flex-col">
      {/* Top Part: Video & Features */}
      <section className="relative w-full py-16 md:py-24 overflow-hidden">
        <div className="custom-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Short Video */}
            <div className="lg:col-span-6 w-full flex justify-center" data-aos="fade-right">
              <div className="relative w-full aspect-video  rounded-[24px] overflow-hidden shadow-lg">
                <DynamicVideoPlayer
                  type="short-1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Text & Features */}
            <div className="lg:col-span-6 flex flex-col items-start">
              {/* Header */}
              <div className="flex flex-col gap-2 mb-6" data-aos="fade-up">
            
                 <h2 className="text-md sm:text-2xl md:text-3xl lg:text-4xl mt-2 sm:mt-2 lg:mt-0 font-heading font-medium text-dark tracking-wide  leading-[1.2] max-w-[800px]">
                  Trusted Lubrication Solutions for Every Journey
                </h2>
                <div className="w-60 sm:w-75 md:w-85 lg:w-95 h-[3px] bg-secondary mx-auto" />
              </div>

              {/* Main Paragraph */}
            
                <p className="text-[#484848] text-[14px] sm:text-xs md:text-sm lg:text-base leading-relaxed mt-2 mb-8" data-aos="fade-up" data-aos-delay="100">
                At Petrovöll, we combine innovation, quality, and technical expertise to create lubricants that
                meet the evolving needs of modern vehicles and machinery. Every formulation is designed to
                support optimal performance, minimize downtime, and provide long-lasting protection, helping
                customers achieve greater productivity and operational efficiency.
              </p>

              {/* Features List */}
              <div className="flex flex-col gap-6 w-full" data-aos="fade-up" data-aos-delay="200">
                
                {/* Feature 1 */}
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-2 text-secondary font-medium text-base sm:text-lg font-sans  tracking-wider">
                    <img src="/moto/petrovoll/setting.png"></img>
                    <span className="text-[#cc0b10] text-[16px] sm:text-md md:text-xl lg:text-xl leading-relaxed !font-heading">Proven Quality Standards</span>
                  </div>
                  
                  <p className="text-[#484848] text-[14px] sm:text-xs md:text-sm lg:text-base leading-relaxed mt-2 md:mt-0" data-aos="fade-up" data-aos-delay="100">
                    Manufactured under strict quality control processes to ensure consistent performance and reliability.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-2 text-secondary font-medium text-base sm:text-lg font-sans  tracking-wider">
                    <img src="/moto/petrovoll/setting.png"></img>
                    <span className="text-[#cc0b10] text-[16px] sm:text-md md:text-lg lg:text-xl leading-relaxed !font-heading">Comprehensive Product Range</span>
                  </div>
                
                  <p className="text-[#484848] text-[14px] sm:text-xs md:text-sm lg:text-base leading-relaxed mt-2 md:mt-0 " data-aos="fade-up" data-aos-delay="100">
                    From engine oils and transmission fluids to greases and coolants, Petrovöll offers complete
                    lubrication solutions for every application.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Part: Full Width Banner Image */}
      <div className="w-full relative  overflow-hidden " data-aos="fade-up">
        <img
          src="/moto/petrovoll/bg.png"
          alt="Premium Lubricants and Grease"
          className="w-full h-full object-cover "
        />
      </div>
    </div>
  );
}
