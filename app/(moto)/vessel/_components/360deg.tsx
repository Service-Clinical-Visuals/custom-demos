"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const features = [
  { icon: "/moto/vessel/b1.png", title: "400 RPM", desc: "Fast and efficient electric operation" },
  { icon: "/moto/vessel/b2.png", title: "60-Tooth Gear", desc: "Fine 6° operation process" },
  { icon: "/moto/vessel/b3.png", title: "1.0 N.m", desc: "Electric output power" },
  { icon: "/moto/vessel/b4.png", title: "60 N.m", desc: "Manual endurance torque" },
  { icon: "/moto/vessel/b5.png", title: "USB Type-C", desc: "Convenient rechargeable design" },
];

const Deg360 = () => {
  return (
    <section
      id="360"
      className="w-full py-16 xl:py-24 overflow-hidden relative bg-white"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-8"
        style={{ backgroundImage: 'url("/moto/vessel/bg.jpg")' }}
      ></div>
      <div className="absolute inset-0 z-0 bg-[#D7E0E3]/50"></div>

      <div className="custom-container relative z-10 flex flex-col xl:grid xl:grid-cols-12 gap-8 xl:gap-8 items-center">

        {/* Left Content */}
        <div className="flex flex-col gap-6 order-1 xl:col-span-3 w-full" data-aos="fade-right">
          <div className="flex flex-col gap-2">
            <Typography variant="h6" color="primary">
              • e-Assist Mini Rachet Wrench
            </Typography>
            <Typography variant="h2" color="dark">
              Small Form. Powerful Assistance.
            </Typography>
          </div>

          <Typography variant="p" color="muted" className="leading-relaxed xl:max-w-[90%]">
            Experience the compact ratchet designed for efficient fastening and loosening in confined spaces. With electric assistance for quick operation and manual control for final tightening, it brings flexibility and precision to everyday maintenance work.
          </Typography>

          <div className="flex items-center gap-4 py-2">
            <div className="flex items-center gap-2">
              <img src="/moto/vessel/a1.png" alt="Electric" className="w-7 h-7 min-[3800px]:w-8 min-[3800px]:h-8 object-contain" />
              <Typography variant="h4" color="dark">Electric</Typography>
            </div>
            <div className="w-8 h-[1px] bg-gray-400 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-l border-gray-400 -rotate-45"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-gray-400 rotate-45"></div>
            </div>
            <div className="flex items-center gap-2">
              <img src="/moto/vessel/a2.png" alt="Manual" className="w-7 h-7 min-[3800px]:w-8 min-[3800px]:h-8 object-contain" />
              <Typography variant="h4" color="dark">Manual</Typography>
            </div>
          </div>

          <div className="pt-2" data-aos="fade-up" data-aos-delay="100">
            <Button text="Explore Product" href="#" />
          </div>
        </div>

        {/* Middle Video */}
        <div
          className="w-full order-2 xl:col-span-6 relative overflow-hidden  rounded-lg"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          {/* Add aspect ratio for transparent placeholder or video player */}
          <div className="aspect-video relative">
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>

        {/* Right Features */}
        <div className="w-full flex flex-col gap-3 order-3 xl:col-span-3" data-aos="fade-left">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 min-[3800px]:w-16 min-[3800px]:h-16 flex items-center justify-center rounded-full shrink-0">
                <img src={feature.icon} alt={feature.title} className="w-7 h-7 min-[3800px]:w-10 min-[3800px]:h-10 object-contain" />
              </div>
              <div className="flex flex-col">
                <Typography variant="h4" color="dark" className="text-base font-bold">
                  {feature.title}
                </Typography>
                <Typography variant="span" color="muted" className="text-sm">
                  {feature.desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Deg360;
