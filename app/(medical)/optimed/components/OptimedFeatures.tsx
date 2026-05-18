"use client";

import "aos/dist/aos.css";

import {
  FiArrowUpRight,
  FiArrowRight,
} from "react-icons/fi";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { Redo2 } from "lucide-react";


const icons = [
    "/optimed/optimed-feature-1.png", 
    "/optimed/optimed-feature-2.png", 
    "/optimed/optimed-feature-3.png"
]



export default function OptimedFeatures() {

  return (
    <section className="w-full bg-[#FFF1E6] py-20 overflow-hidden">
      
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center">
          
          <h1
            data-aos="fade-up"
            className="text-[28px] sm:text-4xl font-black tracking-[-0.5px] lg:tracking-[-1.5px] text-black leading-[1.1]"
          >
            OptiSoft Renal Transplantation Ureteral Stents
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-6 max-w-[1400px] mx-auto text-[#8c847d] text-[16px] leading-[2]"
          >
            OptiSoft Renal Transplantation Ureteral Stents combine innovative
            material technology with a patient-focused design approach. The
            soft surface and flexible construction help reduce friction and
            discomfort, while the optimized shape ensures reliable placement
            and drainage efficiency.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#d7ccc2] mt-10"></div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[320px_1fr_320px] gap-8 lg:gap-10 mt-10 items-start">
          
          {/* Left Features */}
          <div data-aos="fade-right" className="md:order-2 lg:order-1">
            
            <h2 className="text-3xl font-black text-black">
              Features
            </h2>

            <div className="mt-8 space-y-7">
              
              {/* Feature */}
              <div className="flex items-start gap-4">
                <Redo2 className="text-[#f39b5a] text-[28px] mt-1 shrink-0" />

                <p className="text-[#7e756e] text-[16px] leading-[1.8]">
                  Composed of soft polyurethane for high wearing comfort
                </p>
              </div>

              {/* Feature */}
              <div className="flex items-start gap-4">
                <Redo2 className="text-[#f39b5a] text-[28px] mt-1 shrink-0" />

                <p className="text-[#7e756e] text-[16px] leading-[1.8]">
                  Short lengths with a shaft length of 8 – 14 cm available
                </p>
              </div>

              {/* Feature */}
              <div className="flex items-start gap-4">
                <Redo2 className="text-[#f39b5a] text-[28px] mt-1 shrink-0" />

                <p className="text-[#7e756e] text-[16px] leading-[1.8]">
                  Pigtail configuration: Both ends open
                </p>
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4  mt-6">

             {
               icons.map((icon, index) => (
                <>
              {/* Card */}
              <div key={index} className="w-[100px] h-[100px] rounded-full flex flex-col items-center justify-center">
                <img
                  src={icon}
                  alt={`Feature ${index + 1}`}
                  className="w-[70px] h-[70px] object-contain rounded-full shadow-md"
                />
              </div>
                </>        
                ))
            }
              
            </div>
                <div className="mt-6">
              
              <button className="cursor-pointer group flex items-center overflow-hidden rounded-l-xl rounded-r-4xl bg-white shadow-lg border border-[#ddd2c8] hover:scale-[1.02] transition-all duration-300">
                
                <span className="px-8 py-4 text-[15px] font-bold text-black whitespace-nowrap">
                  Explore products
                </span>

                <span className="w-[58px] h-[58px] rounded-full bg-[#f39b5a] flex items-center justify-center">
                  <FiArrowRight className="text-white text-[20px] group-hover:translate-x-1 transition" />
                </span>
              </button>
            </div>
          </div>

          {/* Center Video */}
          <div
            data-aos="zoom-in"
            className="relative rounded-[22px] overflow-hidden border border-[#d7ccc2] shadow-xl bg-[#e4e0dc] aspect-video md:col-span-2 lg:col-span-1 md:order-1 lg:order-2"
          >
            
            {/* Replace later with actual video */}
            <DynamicVideoPlayer type="360" className="absolute top-0 left-0 w-full h-full object-cover" />
          </div>

          {/* Right Content */}
          <div data-aos="fade-left" className="md:order-3 lg:order-3">
            
            <div className="space-y-8">
              
              <p className="text-[#7e756e] text-[16px] leading-[2]">
                In order to take into account the anatomical peculiarities after
                a kidney transplantation, we have developed particularly short
                ureteral stents. The OptiSoft material allows a high wearing
                comfort.
              </p>

              <p className="text-[#7e756e] text-[16px] leading-[2]">
                These stents are specifically developed to accommodate the
                anatomical peculiarities after kidney transplantation, ensuring
                efficient urinary drainage and smoother postoperative
                management.
              </p>
            </div>

            {/* Button */}

          </div>
        </div>
      </div>
    </section>
  );
}