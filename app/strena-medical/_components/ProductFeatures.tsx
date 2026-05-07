"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import { CheckCircle2 } from "lucide-react";

export default function ProductFeatures() {
  return (
    <section className="pb-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div 
          data-aos="fade-up"
          className="bg-[#00427C] rounded-[40px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center p-8 lg:p-12 gap-12"
        >
          {/* Left: Video Player */}
          <div className="w-full aspect-video relative rounded-3xl overflow-hidden bg-white/10">
            <DynamicVideoPlayer 
              type="360" 
              className="absolute inset-0 w-full h-full object-contain" 
            />
          </div>

          {/* Right: Content */}
          <div className="w-full text-white">
            <h2 className="text-white text-2xl lg:text-3xl font-bold mb-4">
              Features
            </h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-white! text-[15px] lg:text-[16px] leading-relaxed">
                High-performance and advanced on-board technologies combined with ease of use. 
                New Front End platform to deliver a reliable diagnosis, and ensure every day 
                productivity increase simplicity has never been seen on such a high-level 
                ultrasound scanner.
              </p>
              {/* <p className="text-white! text-[15px] lg:text-[16px] leading-relaxed">Advanced and complete solution for ultrasound users with the most up- to- date Imaging technologies providing impressive image quality in most modalities and applications and ensure the highest level of diagnosis.</p> */}
            </div>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3 text-[15px] lg:text-[16px] font-medium">
                <CheckCircle2 className="text-white shrink-0" size={20} />
                <span>High-density transducers with frequencies ranging from 1.9 to 17 MHz</span>
              </li>
              <li className="flex items-start gap-3 text-[15px] lg:text-[16px] font-medium">
                <CheckCircle2 className="text-white shrink-0" size={20} />
                <span>22- or 24-inch-high-definition LCD monitor with a large imaging area</span>
              </li>
            </ul>

            <Button variant="white" hasArrow>
              View Product Range
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
