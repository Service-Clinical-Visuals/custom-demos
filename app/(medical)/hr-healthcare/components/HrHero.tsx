// components/Hero.tsx

"use client";

import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function HrHero() {

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* FUTURE VIDEO LAYER */}
      {/* Replace this image with video later */}
      <div className="absolute inset-0">
              <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />
        
        </div>

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto flex w-full max-w-380 items-center px-8">
          {/* LEFT CONTENT */}
          <div className="max-w-[530px] pt-72">
            <div data-aos="fade-up">
              <h1 className=" text-4xl font-semibold leading-[1.08] tracking-[-2px] text-white">
                Carbomer-Free. Clinically Trusted.
              </h1>
            </div>

            <div data-aos="fade-up" data-aos-delay="150">
              <p className="mt-3  text-xl font-normal leading-[1.8] text-white/88">
                Reliable lubrications for women’s health screenings,
                without compromise.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="250">
              <button className="mt-5 cursor-pointer flex h-[48px] w-[152px] items-center justify-center rounded-full border border-white/70 bg-transparent text-base font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#0B1D44]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 h-[120px] w-full bg-gradient-to-t from-black/20 to-transparent" />
    </section>
  );
}