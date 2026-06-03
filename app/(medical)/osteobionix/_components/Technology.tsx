"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full" data-aos="fade-left">
            {/* Image Box */}
            <div className="w-full h-[300px] sm:h-full min-h-[400px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative bg-white">
              <img
                src="/osteobionix/xray.png"
                alt="Medical Professional examining X-Ray"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Dark Green Card */}
            <div className="w-full h-[300px] sm:h-full min-h-[400px] bg-[#103A31] rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-md">
              <h3 className="text-white font-heading text-2xl lg:text-3xl leading-snug font-medium mb-8">
                We combine 3D printing technology with clinical expertise to create unique solutions that transform lives.
              </h3>
              
              <Link
                href="#"
                className="group flex items-center gap-3 bg-white text-[#103A31] px-5 py-2.5 rounded hover:bg-gray-100 transition-all font-bold text-sm"
              >
                Explore Device
                <span className="bg-[#103A31] text-white p-1 rounded-sm group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
