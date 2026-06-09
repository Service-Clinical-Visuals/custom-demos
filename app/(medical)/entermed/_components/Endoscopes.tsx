"use client";

import React from "react";
import { ArrowRight, Star } from "lucide-react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Endoscopes() {
  const features = [
    "Precise motion for perfect control",
    "Crystal clear optics",
    "Waterproof design",
    "The flexible tip can be moved 130°"
  ];

  return (
    <section className="bg-primary text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center">
          {/* Left Content */}
          <div className="flex flex-col" data-aos="fade-right">
            <h2 className="text-3xl md:text-[32px] font-bold mb-2 flex items-center gap-3 !text-white">
              <span className="text-white! text-2xl leading-none pb-1">&bull;</span> Flexible Endoscopes
            </h2>
            <p className="text-white! mb-4 text-[15px] leading-[1.8]">
              The flexible Naso-Pharyngo-Laryngoscope is manufactured in Germany to the highest of standards. It is highly suitable for both adult and paediatric use. The high resolution, crystal clear optics ensure sharp image quality. The flexible tip can be moved 150° using the scope&apos;s mechanism.
            </p>
            <p className="text-white! mb-4 text-[15px] leading-[1.8]">
              This superior flexible endoscope is manufactured in Germany to the highest of standards. It is highly suitable for both adult and paediatric use.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white rounded-lg py-3 px-4 flex items-center gap-3 shadow-sm">
                  <div className="bg-gray-800 text-white rounded-full p-1 flex-shrink-0">
                    <Star className="w-3 h-3 fill-white" strokeWidth={0} />
                  </div>
                  <span className="text-gray-800 text-[14px] font-semibold">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="white-outline">View Product</Button>
          </div>

          {/* Right Content - 360 Video Placeholder */}
          <div className="rounded-[20px] shadow-lg aspect-video relative overflow-hidden flex items-center justify-center" data-aos="fade-left" data-aos-delay="200">
            <DynamicVideoPlayer type="360" className="" />
          </div>
        </div>
      </div>
    </section>
  );
}
