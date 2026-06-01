"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function VascularGraft() {
  return (
    <section id="products" className="w-full py-16 lg:py-20 bg-[#004A87] text-white">
      <div className="container mx-auto px-4 lg:px-2">
        {/* Section Header */}
        <div className="w-full text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-[26px] md:text-[30px] lg:text-[34px] font-bold text-white leading-tight">
            Spiral Flow™ Peripheral Vascular Graft
          </h2>
        </div>

        {/* Two-Column Responsive Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14 items-center">
          
          {/* Left Column: Copywriting & Information */}
          <div className="flex flex-col items-start space-y-6" data-aos="fade-right">
            <p className="text-white!">
              Once implanted, the Spiral Flow™ Peripheral Bypass Graft will create Spiral Flow™ immediately. Spiral Laminar Flow™ is easily determined by taking a transverse color Doppler ultrasound over the distal portion of the graft or distal artery. The process of blockage caused by neointimal hyperplasia at graft-artery anastomosis is driven to a large part by disturbed or turbulent flow.
            </p>

            {/* Pointer List Items */}
            <div className="space-y-4 w-full">
              <div className="flex items-start gap-3">
                <span className="text-[#00A0E0] text-lg mt-0.5 select-none font-bold">➤</span>
                <p className="text-white!">
                  Vascular Flow are 100% confident in the benefits of our Spiral Flow Technology.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#00A0E0] text-lg mt-0.5 select-none font-bold">➤</span>
                <p className="text-white!">
                  We have a wealth of evidence describing the benefits of Spiral Flow in different applications.
                </p>
              </div>
            </div>

            <p className="text-white font-extrabold pt-2 text-[18px]!">
              Contact us today to find out how Spiral Laminar Flow can be integrated into your medical device technology.
            </p>

            {/* Split Button CTA */}
            <div className="pt-4">
              <Button variant="white-split" href="#quote">
                Get Quote
              </Button>
            </div>
          </div>

          {/* Right Column: 360deg Video Container */}
          <div 
            className="w-full aspect-video relative rounded-2xl overflow-hidden shadow-2xl"
            data-aos="fade-left"
          >
            {/* 360 degree Video Player */}
            <DynamicVideoPlayer 
              type="360" 
              className="absolute inset-0 w-full h-full aspect-video" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}
