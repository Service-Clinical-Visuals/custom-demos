"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function HeroVideo() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for video / image. User will update later. */}
        <DynamicVideoPlayer type="banner" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 h-full flex flex-col justify-end pb-20 md:pb-32">
        <div className="max-w-2xl text-white" data-aos="fade-up" data-aos-delay="200">
          <div className="flex flex-col items-start">
            <h1 className="text-[28px] md:text-[36px] font-bold leading-tight mb-6">
              Easy and inexpensive maintenance <br className="hidden md:block" />
              and servicing
            </h1>
            
            <p className="text-white! leading-relaxed mb-8 max-w-[90%]">
              At all times, the operation of the equipment and the support
              of compliance with legal maintenance regulations are of
              utmost importance to the Otopront service.
            </p>
            
            <Button href="#" arrowType="circle" variant="white">
              Explore Otopront
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
