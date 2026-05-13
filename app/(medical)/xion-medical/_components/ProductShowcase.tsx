"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { Check } from "lucide-react";
import Button from "./Button";

export default function ProductShowcase() {
  return (
    <section className="relative">
      {/* Teal Background Part */}
      <div className="bg-[#00AFAF] pt-20 pb-48 text-white">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="grid grid-cols-1 lg:grid-cols-2 justify-between items-start gap-10">
            <div className="max-w-md">
              <span className="text-white font-bold text-[16px] mb-3 block">Product Showcase</span>
              <h2 className="text-[26px] lg:text-[34px] font-extrabold leading-tight">EndoSTROBE Spectar</h2>
              <p className="text-[18px] font-bold opacity-90 mt-2">The Ultimate Workstation For Phonosurgery</p>
            </div>
            <div className="max-w-xl lg:justify-self-end">
              <p className="text-[16px] leading-relaxed">
                Based on the EndoSTROBE PL camera processor, the comprehensively equipped workstation meets all the requirements of voice diagnostics and surgical applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping Content Part */}
      <div className="container mx-auto px-4 -mt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Card */}
          <div 
            data-aos="fade-right"
            className="bg-white rounded-lg p-10 shadow-[0_20px_60px_rgba(0,0,0,0.1)] grid content-between h-full"
          >
            <div>
              <h3 className="text-[18px] font-black text-gray-900 mb-8">The Ultimate Workstation For Phonosurgery</h3>
              <ul className="grid gap-6 mb-12">
                {[
                  "Excellent image quality by means of image processing routines specially adapted to the application",
                  "Universal connectivity of 2D/3D application parts with sensor resolutions up to 4K/UHD",
                  "Advanced diagnostic imaging through Professional Image Enhancement Technology (PIET lumino, PIET chromo and PIET spectro)"
                ].map((item, i) => (
                  <li key={i} className="grid grid-cols-[auto_1fr] gap-4 items-start">
                    <div className="bg-[#00AFAF] p-1 rounded-full text-white mt-1">
                      <Check size={14} strokeWidth={4} />
                    </div>
                    <span className="text-[#666666] text-[15px] leading-snug font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <Button href="#" className="justify-self-start">View Product</Button>
          </div>

          {/* Right 360 Deg Area */}
          <div 
            data-aos="fade-left"
            className="rounded-lg overflow-hidden relative aspect-video"
          >
             <DynamicVideoPlayer type='360' />
          </div>
          
        </div>
      </div>
    </section>
  );
}
