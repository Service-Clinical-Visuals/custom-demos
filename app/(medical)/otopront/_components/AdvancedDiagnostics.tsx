import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function AdvancedDiagnostics() {
  return (
    <section className="w-full py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Video Clip Placeholder */}
          <div className="w-full" data-aos="fade-right">
            {/* The checkerboard pattern replicates the image placeholder style */}
            <div className="relative w-full aspect-video rounded-[24px] overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
              
              <DynamicVideoPlayer type='short-1' />
            </div>
          </div>
          
          {/* Right Column: Text Content */}
          <div className="flex flex-col items-start" data-aos="fade-left">
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#111111] mb-4 leading-tight">
              Advanced Flexible Diagnostics
            </h2>
            
            <div className="space-y-6 text-[#484848] md:leading-relaxed mb-6">
              <p>
                Engineered for accurate ENT diagnostics, these flexible endoscopes are designed to deliver clear visualization, smooth handling, and dependable clinical performance. With high-quality optical imaging and an ergonomic structure, they provide enhanced comfort and precise control during examinations of the nasal cavity, nasopharynx, and related ENT regions.
              </p>
              <p>
                Available in multiple configurations with diameters of 2.8 mm, 3.4 mm, and 4 mm, each endoscope is designed with a 320 mm working length and a flexible structure that adapts easily to different examination needs. Features such as the adjustable ocular and 130° angle of movement provide greater flexibility and precision during use, helping practitioners achieve better viewing angles with ease.
              </p>
            </div>
            
            <Button href="#" variant="red" arrowType="circle">
              Browse Device
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
