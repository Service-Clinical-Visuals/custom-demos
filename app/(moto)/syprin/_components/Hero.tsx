"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] min-[2500px]:min-h-[1000px] min-[3800px]:min-h-[1400px] bg-[#00002b] overflow-hidden flex items-end">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover lg:object-fill pointer-events-none z-0"
          type="banner"
        />

      </div>

      <div className="custom-container relative z-10 pb-16 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-36 min-[2500px]:pb-48 min-[3800px]:pb-60">
        <div className="max-w-[700px] xl:max-w-[70%] pointer-events-auto">
          {/* Subtitle / Tag */}
          <div className="mb-2.5">
            <h4 className="text-white tracking-wide">
              Original Syprin
            </h4>
          </div>

          {/* Main Headline */}
          <h1 className="text-white mb-7 leading-tight">
            Petrol Performance Protection
            <br />
            More Protection. More Performance.
          </h1>

          {/* CTA Button */}
          <div>
            <Button
              text="Discover Now"
              href="#heritage"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
