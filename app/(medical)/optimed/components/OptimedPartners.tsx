"use client";

import "aos/dist/aos.css";
import { Redo2 } from "lucide-react";

import { FiArrowRight } from "react-icons/fi";
import { PiArrowElbowUpRightThin } from "react-icons/pi";

const specialties = [
  "Interventional Radiology",
  "Gastroenterology",
  "Vascular Surgery",
  "Orthopaedics/Traumatology",
];

export default function OptimedPartners() {

  return (
    <section className="relative w-full overflow-hidden bg-[#BC815282] py-12 md:py-16 xl:py-20">
      
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-[0.12]">
        <img
          src="/optimed/optimed-partner-bg.png"
          alt="world map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-[#7a5b45]/85"></div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6">
        
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-10 items-center">
          
          {/* Left Image */}
          <div
            data-aos="fade-right"
            className="relative rounded-[28px] overflow-hidden shadow-2xl h-[240px] sm:h-[360px] lg:h-[460px] xl:h-[560px]"
          >
            <img
              src="/optimed/optimed-partner.png"
              alt="Partnership"
              className="w-full h-full object-cover"
            />

            {/* Soft Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/5"></div>
          </div>

          {/* Right Content */}
          <div
            data-aos="fade-left"
            className="text-white"
          >
            
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-black tracking-[-1px] leading-[1.05]">
              Partnerships
            </h2>

            {/* Intro */}
            <p className="mt-6 text-white/90 text-[16px] leading-[2] max-w-[760px]">
              As optimed continuously invests in research, development and
              manufactory we are the ideal partner, especially in the following
              areas:
            </p>

            {/* Grid List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8 mt-10">
              
              {specialties.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  className="flex items-center gap-4"
                >
                  <Redo2 className="text-[34px] text-white shrink-0" />

                  <span className="text-[20px] font-medium text-white/95">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Paragraph */}
            <p className="mt-10 text-white/90 text-[17px] leading-[2] max-w-[760px]">
              At optimed, as a medium-sized company, we place a very high value
              on teamwork, as well as the development of each employee into a
              true leader...
            </p>

            {/* CTA */}
            <div className="mt-12">
              
              <button className="cursor-pointer group flex items-center overflow-hidden rounded-full bg-[#f29b58] shadow-lg hover:scale-[1.02] transition-all duration-300">
                
                <span className="px-7 py-4 text-white text-[16px] font-semibold whitespace-nowrap">
                  Our Partners
                </span>

                <span className="w-[58px] h-[58px] rounded-full bg-white flex items-center justify-center">
                  <FiArrowRight className="text-black text-[18px] group-hover:translate-x-1 transition" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}