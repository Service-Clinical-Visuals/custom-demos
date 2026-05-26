"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { VideoProvider } from "@/app/_context/VideoContext";

export default function Hero() {
  return (
    <VideoProvider website="bm-catalysts">
      <section className="w-full flex justify-center mt-2">
        {/* OUTER CONTAINER - 95% width and full height like bm-catalysts */}
        <div className="w-[95%] rounded-[2.5rem] overflow-hidden relative h-[100vh] shadow-premium">
          {/* 🎥 Background Video */}
          <DynamicVideoPlayer
            type="banner"
            className="absolute inset-0 w-full h-full object-cover z-0 aspect-video"
          />


          {/* INNER CONTENT - Constrained to Tailwind's default container */}
          <div className="relative z-20 container mx-auto h-full flex items-end pb-12 sm:pb-16 md:pb-24 px-4 sm:px-8 lg:px-12">
            <div className="max-w-3xl text-white">
              <h3
                className="text-[32px] sm:text-[42px] lg:text-[44px] leading-[1.2] mb-8 font-semibold text-white text-shadow-xl"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Advanced Emergency <br />
                Respiratory Care Solutions
              </h3>


              {/* Get In Touch white pill button */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1000"
                className="inline-block"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center bg-white text-[#0091d5] font-bold rounded-full py-2.5 pl-6 pr-10 transition-all duration-300 hover:bg-white/95 hover:shadow-xl active:scale-100 relative"
                >
                  <span className="text-[15px] tracking-wide mr-4">Get In Touch</span>
                  <span className="absolute right-0.5 flex items-center justify-center rounded-r-full w-10 h-[calc(100%-4px)] bg-[#0091d5] text-white transition-transform duration-300">
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>
    </VideoProvider>
  );
}
