"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function ComparisonVideo() {
  return (
    <section className="bg-[#F8F9FA] py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Video */}
          <div className="w-full relative" data-aos="fade-right">
            {/* 
              Using DynamicVideoPlayer type="short-1" as requested.
              The classes 'w-full h-auto' ensure the layout height scales proportionally
              to exactly match the intrinsic aspect ratio of the loaded video.
            */}
            <DynamicVideoPlayer 
              type="short-1" 
              className="w-full h-auto rounded-[32px] shadow-sm object-contain" 
            />
          </div>
          
          {/* Right Column: Text Content */}
          <div className="flex flex-col items-start" data-aos="fade-left">
            <h2 className="text-[28px] md:text-[32px] font-semibold text-[#004B87] mb-4 leading-tight">
              Comparison to conventional 12-lead results
            </h2>
            
            <p className="font-sans text-[13px] md:text-[14px] leading-[1.8] mb-6 font-light text-[#484848]">
              Recent data presented at Heart Rhythm Society 2024, "Diagnostic accuracy of a mobile, artificial intelligence-guided, 12-lead ECG device," showed results from a clinical study on 200 patients. See the side-by-side ECG reports from a standard 12-lead compared to one from the Kardia 12L for the same patients. The study found that Kardia 12L enabled rapid acquisition of resting ECG information, and concluded "this approach has significant implications for rapid ECG diagnosis in clinical practice."
            </p>
            
            <p className="font-sans text-[13px] md:text-[14px] leading-[1.8] mb-6 font-light text-[#484848]">
              Patients seen in an outpatient cardiology clinic were enrolled in the study. Kardia 12L (leads I, II, V2 and V4) was obtained simultaneously in 50 patients and sequentially in 150 patients along with a standard, resting 12-lead ECG in the supine position. Single-lead, mobile ECG devices have enhanced the feasibility of arrhythmia diagnosis.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
