"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Power = () => {
  return (
    <section className="w-full py-16 xl:py-24 overflow-hidden relative bg-white">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-8"
        style={{ backgroundImage: 'url("/moto/vessel/bg.jpg")' }}
      ></div>
      <div className="absolute inset-0 z-0 bg-[#D7E0E3]/50"></div>

      <div className="custom-container relative z-10 flex flex-col xl:grid xl:grid-cols-12 gap-8 min-[3800px]:gap-12 items-center">

        {/* Left: Video */}
        <div
          className="w-full order-2 xl:order-1 xl:col-span-8 relative  overflow-hidden  rounded-lg"
          data-aos="fade-right"
        >
          <div className="aspect-video relative">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-fill" />
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col gap-6 order-1 xl:order-2 xl:col-span-4 w-full" data-aos="fade-left">
          <div className="flex flex-col gap-2">
            <Typography variant="h6" color="primary">
              • e-Assist Mini
            </Typography>
            <Typography variant="h2" color="dark">
              Power When You Need It.<br /> Control When It Matters.
            </Typography>
          </div>

          <Typography variant="p" color="muted" className="leading-relaxed">
            Experience the compact e-ASSIST MINI Ratchet Wrench in action. Its electric assistance enables quick fastening and loosening, while manual operation provides greater control when additional tightening force is required.
          </Typography>

          <div className="flex flex-col gap-5 mt-2">
            <div className="flex items-start gap-3">
              <img src="/moto/vessel/vector.png" alt="bullet" className="w-6 h-6 min-[3800px]:w-8 min-[3800px]:h-8 object-contain mt-1 shrink-0" />
              <Typography variant="p" color="muted" className="leading-relaxed text-sm min-[3800px]:text-2xl">
                <strong className="text-[#121C22]">Designed for Confined Working Spaces</strong> – Its compact form makes the e-ASSIST MINI easier to handle in tight and hard-to-reach areas, providing better access and maneuverability where conventional tools may be difficult to use.
              </Typography>
            </div>

            <div className="flex items-start gap-3">
              <img src="/moto/vessel/vector.png" alt="bullet" className="w-6 h-6 min-[3800px]:w-8 min-[3800px]:h-8 object-contain mt-1 shrink-0" />
              <Typography variant="p" color="muted" className="leading-relaxed text-sm min-[3800px]:text-2xl">
                <strong className="text-[#121C22]">Precise Control with a 6° Swing</strong> – The 60-tooth ratchet mechanism allows operation with a small 6° swing angle, making it easier to work in restricted spaces while maintaining smooth and controlled fastening and loosening.
              </Typography>
            </div>
          </div>

          <div className="pt-4" data-aos="fade-up" data-aos-delay="100">
            <Button text="Explore Product" href="#" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Power;
