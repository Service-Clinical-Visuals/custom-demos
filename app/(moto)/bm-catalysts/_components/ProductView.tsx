"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function ProductView() {
  return (
    <section className="py-16 lg:py-20 bg-[url('/bm-catalysts/images/product-view-bg.png')] bg-cover bg-center relative overflow-hidden flex justify-center w-full">

      <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* 🎥 Video Container on Top (exact 1:1 rounded ratio aspect-video centered) */}
        <div className="w-full max-w-5xl aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl relative bg-black/40 border border-white/10 mb-8">
          
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />

        </div>

        {/* Text and Actions on the Bottom */}
        <div className="w-full text-center flex flex-col items-center">
          
          <h2 className="text-[26px] md:text-[28px] lg:text-[32px] font-bold text-white font-oxanium mb-2">
            Diesel Particulate Filters
          </h2>
          
          {/* Centered Separator Line */}
          <div className="w-20 h-[1.5px] bg-white/80 mb-4"></div>

          {/* Centered Paragraph Copy */}
          <p className="text-white text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed font-exo2 font-medium mx-auto mb-4 tracking-wide">
            Diesel Vehicles Have Become Increasingly Popular As Diesel Engine Technology Continues To Advance Due To Their Superior Fuel Economy. The Drawback Of Diesel Vehicles Is Their Higher Emissions Compared To Petrol Vehicles. In Response To This, Euro Emissions Standards Were Tightened And Greater Environmentally Friendly Initiatives Developed. Diesel Particulate Filters (DPFs) Help Reduce Harmful Particulate Emissions From Exhaust Gases.
          </p>

          {/* Centered White Pill Button */}
          <div className="pt-2">
            <Button
              href="#products"
              variant="white"
              size="md"
              rounded="full"
              hasArrow
              className="px-10 shadow-xl font-bold hover:bg-white/95"
            >
              View Products
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}
