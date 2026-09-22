"use client";

import React from "react";
import Button from "./Button";
import SectionBadge from "./SectionBadge";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function EngineCare() {
  const bulletPoints = [
    {
      title: "Engine Protection",
      text: "Protects valves & spark plugs.",
    },
    {
      title: "Convenient Refueling",
      text: "Blends seamlessly during refueling.",
    },
    {
      title: "Long-Lasting Performance",
      text: "Helps extend the service life of older gasoline engines .",
    },
  ];

  return (
    <section
      id="engine-care"
      className="relative w-full bg-[#353535] py-16 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Graphic Image bg1.png without dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/moto/syprin/bg1.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="custom-container relative z-10">
        {/* Section Top Header */}
        <div className="flex flex-col items-center text-center max-w-[90%] xl:max-w-[70%] mx-auto mb-8 xl:mb-12 min-[3800px]:mb-18" data-aos="fade-up">
          <SectionBadge text="Engine Care" center className="mb-3 min-[3800px]:mb-6" />
          <h2 className="text-[#F6F6F6]">
            Advanced ORIGINAL SYPRIN Carburetor
          </h2>
        </div>

        {/* 2-Column Content: Video on Left, Feature Card on Right */}
        <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-12 min-[3800px]:gap-20 w-full">
          {/* Left Column: Video box (60%, aspect-video like Deleo) */}
          <div
            className="w-full xl:w-[calc(60%-1rem)] min-[3800px]:xl:w-[calc(60%-1.5rem)] aspect-video bg-black rounded-[6px] shadow-2xl relative overflow-hidden flex items-center justify-center flex-shrink-0"
            data-aos="fade-right"
          >
            {/* Fallback label matching Figma layer */}
            <div className="absolute inset-0 flex items-center justify-center font-['Fraunces'] font-[600] text-[32px] min-[3800px]:text-[64px] leading-[150%] text-white/30 select-none pointer-events-none">
              VIDEO 01
            </div>
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover rounded-[6px] relative z-10"
            />
          </div>

          {/* Right Column: Info Card (40%) */}
          <div
            className="w-full xl:w-[calc(40%-1rem)] min-[3800px]:xl:w-[calc(40%-1.5rem)] bg-[#F6F6F6] rounded-[10px] min-[3800px]:rounded-[20px] p-6 sm:p-7 min-[3800px]:p-12 shadow-2xl flex flex-col justify-between flex-shrink-0"
            data-aos="fade-left"
          >
            <div>
              <h3 className="text-[#222222]">
                Classic Engine Care &amp; Protection
              </h3>

              {/* Red Accent Line */}
              <div className="w-[171px] min-[3800px]:w-[260px] h-[4px] min-[3800px]:h-[7px] bg-[#A12624] rounded-[10px] mt-2 mb-5 min-[3800px]:mb-8" />

              {/* Description Paragraphs */}
              <div className="space-y-4 min-[3800px]:space-y-6 text-[#4B5563] mb-6 min-[3800px]:mb-10">
                <p>
                  The ORIGINAL SYPRIN Carburetor / Lead Replacement Kit provides
                  reliable care for classic gasoline vehicles, helping reduce
                  deposits and protect valves and spark plugs.
                </p>
                <p>
                  Easy to use while refueling, it provides reliable care for
                  classic gasoline engines. Made in Germany for lasting
                  performance and protection.
                </p>
              </div>

              {/* Bullet Features */}
              <div className="space-y-4 xl:space-y-5 min-[3800px]:space-y-7 mb-8 min-[3800px]:mb-12">
                {bulletPoints.map((point) => (
                  <div key={point.title} className="flex items-start gap-3.5">
                    <span className="w-[20px] h-[15px] min-[3800px]:w-[32px] min-[3800px]:h-[24px] bg-[#A12624] flex-shrink-0 mt-[5px]" />
                    <p className="text-[#4B5563]">
                      <strong className="font-semibold text-[#222222]">{point.title}</strong> — <span className="font-normal">{point.text}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex justify-start">
              <Button
                text="Know More"
                href="#contact"
                className="self-start"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
