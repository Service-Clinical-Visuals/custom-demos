"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function PrecisionDesign() {
  const features = [
    {
      title: "One system providing patient specific treatment options",
      description: "can be used with a blade with three anchors for stable fixation in osteoporotic bone or a lag screw",
    },
    {
      title: "State of the art lag screw",
      description: "Lag screw with proven thread design.",
    },
    {
      title: "Just lock with Twin Lock",
      description: "Advanced locking system to lock gliding and sliding of the neck element.",
    },
    // {
    //   title: "Smooth nail insertion to preserve reduction",
    //   description: "Flat lateral nail design.",
    // },
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#F9F9F9]" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Video Placeholder ("VIDEO CLIP 01") */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-200 flex items-center justify-center">
          <DynamicVideoPlayer type='short-1'/>
          </div>
          
          {/* Right Side: Precision Design Features */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[28px] md:text-[30px] lg:text-[32px] font-bold mb-4 text-[#212529]">
              Precision Design & Surgical Efficiency
            </h2>
            <p className="md: mb-8 leading-relaxed font-light">
              Designed to support flexible treatment approaches, the HERACLES system offers stable fixation solutions for different patient needs, including osteoporotic bone support and lag screw configurations.
            </p>

            {/* Feature List */}
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-[20px] h-[20px] text-gray-700 flex-shrink-0" strokeWidth={2} />
                    <h4 className="text-[18px] md:text-[20px] font-semibold text-[#CE112D]!">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="md:font-light leading-relaxed pl-[32px]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
