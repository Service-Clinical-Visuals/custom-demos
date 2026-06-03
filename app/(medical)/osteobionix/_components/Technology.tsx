"use client";

import Link from "next/link";
import Button from "./Button";

export default function Technology() {
  return (
    <section id="technology" className="w-full py-16 lg:py-20 bg-[#fafafa]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-6" data-aos="fade-right">
            <h2 className="text-[#237B64] font-heading font-bold text-3xl md:text-4xl mb-4">
              Our Technology
            </h2>

            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-gray-800 text-lg">Biomimetic, osteoconductive titanium scaffolds</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                Engineered to mimic natural bone structure, these scaffolds combine ultra-high porosity (up to 90%) with exceptional mechanical properties. The result is a material that behaves mechanically like bone, optimizing load distribution and promoting bone regeneration through enhanced cell adhesion and vascularization.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-gray-800 text-lg">Flexible titanium structures</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                Designed to replicate the biomechanical properties of non-rigid musculoskeletal tissue, these structures offer greater compliance and adaptability, making them ideal for dynamic implants. A patented technology that bridges the gap between rigid metal implants and the natural movement of the human body.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-gray-800 text-lg">Easier and safer fixation mechanisms</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                A patented polyaxial locking screw mechanism self-aligns plate and screw threads. A technology that helps reduce complications from misalignment, which can be a challenge in fracture fixation, and improves both surgical flexibility and implant longevity.
              </p>
            </div>
          </div>

          {/* Right Column: Visuals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full min-h-[400px] lg:min-h-[500px]" data-aos="fade-left">
            {/* Image Box */}
            <div className="w-full h-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative bg-white">
              <img
                src="/osteobionix/tech.png"
                alt="Medical Professional examining X-Ray"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Right Stack */}
            <div className="flex flex-col gap-6 h-full">
              {/* Experience Card */}
              <div className="bg-white rounded-2xl border border-[#317d71]/40 py-8 px-6 flex items-center justify-center gap-5 shadow-sm shrink-0 w-full">
                <span className="text-[56px] font-bold text-[#317d71] font-heading leading-none">5+</span>
                <span className="text-[22px] font-bold text-gray-900 font-heading leading-tight">
                  Years of<br />Experience
                </span>
              </div>

              {/* Dark Green Card */}
              <div className="w-full flex-1 bg-[#317d71] rounded-2xl p-6 sm:p-8 flex flex-col justify-center items-center text-center shadow-md">
                <h3 className="text-white font-heading text-2xl lg:text-[26px] leading-snug font-medium mb-8">
                  We combine 3D printing technology with clinical expertise to create unique solutions that transform lives.
                </h3>
                
                <Button variant="primary" href="#">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
