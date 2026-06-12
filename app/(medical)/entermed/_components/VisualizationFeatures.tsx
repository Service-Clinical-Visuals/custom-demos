"use client";

import React from "react";
import { ArrowRight, Star } from "lucide-react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function VisualizationFeatures() {
  const features = [
    "The Entermed Naso-Pharyngo-Laryngoscope is designed with a working length of 300 mm, ensuring comfortable access and precise examination during procedures.",
    "The device is available with a distal tip diameter of 2.8 mm or 3.4 mm, allowing flexibility to meet different clinical requirements and patient needs.",
    "The scope provides an advanced bending capability of 150° upward and 150° downward, enabling smooth navigation and improved visibility in difficult-to-reach areas.",
    "The imaging system delivers a resolution of 18,000 pixels, providing detailed visualization and reliable image clarity for medical professionals."
  ];

  return (
    <section className="bg-[#F9FAFB] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center">
          {/* Left Content - Video Placeholder */}
          <div className="rounded-[20px] shadow-sm aspect-video md:aspect-video lg:aspect-video relative overflow-hidden flex items-center justify-center border border-gray-100" data-aos="fade-right">
            <DynamicVideoPlayer type="short-1" className="" />
          </div>

          {/* Right Content */}
          <div className="flex flex-col" data-aos="fade-left" data-aos-delay="200">
            <h2 className="text-3xl md:text-[32px] font-bold !text-primary mb-5 flex items-center gap-3">
              <span className="!text-primary text-2xl leading-none pb-1">&bull;</span> Advanced Visualization Features
            </h2>

            {/* Features List */}
            <div className="flex flex-col gap-2">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="bg-gray-800 text-white rounded-full p-1 flex-shrink-0 mt-1 shadow-sm">
                    <Star className="w-3 h-3 fill-white" strokeWidth={0} />
                  </div>
                  <p className="text-gray-500 text-[15px] leading-[1.7] pr-4">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <Button variant="primary-outline" className="mt-4">Explore More</Button>
          </div>

        </div>
      </div>
    </section>
  );
}
