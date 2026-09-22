"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const features = [
  { num: "01", title: "Easy Handling", desc: "The tool features a compact and lightweight design, which significantly enhances its comfort level when handling it during repetitive tasks." },
  { num: "02", title: "Tight-Space Access", desc: "Its slim ratchet head helps reach fastening points where larger tools can be difficult to position." },
  { num: "03", title: "Quick Fastening", desc: "Electric assistance helps speed up repetitive fastening and loosening operations." },
];

const Designed = () => {
  return (
    <section className="w-full py-16 xl:py-24 overflow-hidden relative bg-white">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-8"
        style={{ backgroundImage: 'url("/moto/vessel/bg.jpg")' }}
      ></div>
      <div className="absolute inset-0 z-0 bg-[#D7E0E3]/50"></div>

      <div className="custom-container relative z-10 flex flex-col xl:grid xl:grid-cols-12 gap-8 min-[3800px]:gap-12 items-center">

        {/* Left: Content */}
        <div className="flex flex-col gap-4 order-1 xl:col-span-5 w-full" data-aos="fade-right">
          <div className="flex flex-col gap-2">
            <Typography variant="h6" color="primary">
              • Ready for the Job
            </Typography>
            <Typography variant="h2" color="dark">
              Designed for Everyday Professional Work
            </Typography>
          </div>

          <Typography variant="p" color="muted" className="leading-relaxed">
            From automotive maintenance to assembly and repair tasks, the e-ASSIST MINI provides a practical solution where accessibility, mobility and efficient fastening are important.
          </Typography>

          <div className="flex flex-col gap-6 mt-4">
            {features.map((feature) => (
              <div key={feature.num} className="flex items-start gap-4">
                <div className="w-12 h-12 min-[3800px]:w-16 min-[3800px]:h-16 shrink-0 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-semibold text-xl min-[3800px]:text-2xl shadow-md">
                  {feature.num}
                </div>
                <div className="flex flex-col pt-1 gap-1">
                  <Typography variant="h4" color="dark" className="font-bold text-base min-[3800px]:text-2xl">
                    {feature.title}
                  </Typography>
                  <Typography variant="p" color="muted" className="text-sm min-[3800px]:text-xl leading-relaxed">
                    {feature.desc}
                  </Typography>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right: Video */}
        <div
          className="w-full order-2 xl:col-span-7 relative  overflow-hidden  rounded-lg"
          data-aos="fade-left"
        >
          <div className="aspect-video relative">
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Designed;
