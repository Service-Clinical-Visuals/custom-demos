"use client";
import React from 'react';
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import BexenButton from "./BexenButton";

export default function Hero() {
  return (
    <div className="w-full px-10 mx-auto mt-8 mb-8">
      <section className="bg-black w-full h-screen flex flex-col items-start justify-end pb-16 md:pb-24 relative overflow-hidden rounded-[32px]">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <DynamicVideoPlayer
            type="banner"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </div>

        {/* Gradient Overlay for Text Readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[1] pointer-events-none"></div> */}

        <div className="relative z-10 w-full px-8 md:px-16">
          <div className="max-w-3xl">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-white text-[32px] md:text-[38px] lg:text-[38px] font-semibold leading-[1.2] tracking-tight mb-8"
            >
              We generate comprehensive<br />
              solutions for the health sector
            </h1>

            <div data-aos="fade-up" data-aos-delay="200">
              <BexenButton size="lg">
                Request Information
              </BexenButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
