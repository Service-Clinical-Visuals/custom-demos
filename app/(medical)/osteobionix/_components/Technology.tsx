"use client";

import Link from "next/link";
import Button from "./Button";

export default function Technology() {
  return (
    <section id="technology" className="w-full py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">

          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-6" data-aos="fade-right">
            <h2 className="text-primary font-heading font-semibold text-3xl md:text-4xl mb-4">
              Our Technology
            </h2>

            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-xl md:text-2xl text-gray-800 mb-1 font-medium">Biomimetic, osteoconductive titanium scaffolds</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
                Engineered to mimic natural bone structure, these scaffolds combine ultra-high porosity (up to 90%) with exceptional mechanical properties. The result is a material that behaves mechanically like bone, optimizing load distribution and promoting bone regeneration through enhanced cell adhesion and vascularization.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-xl md:text-2xl text-gray-800 mb-1 font-medium">Flexible titanium structures</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
                Designed to replicate the biomechanical properties of non-rigid musculoskeletal tissue, these structures offer greater compliance and adaptability, making them ideal for dynamic implants. A patented technology that bridges the gap between rigid metal implants and the natural movement of the human body.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-xl md:text-2xl text-gray-800 mb-1 font-medium">Easier and safer fixation mechanisms</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
                A patented polyaxial locking screw mechanism self-aligns plate and screw threads. A technology that helps reduce complications from misalignment, which can be a challenge in fracture fixation, and improves both surgical flexibility and implant longevity.
              </p>
            </div>
          </div>

          {/* Right Column: Visuals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full lg:min-h-[500px]" data-aos="fade-left">
            {/* Image Box */}
            <div className="w-full h-[95%] rounded-2xl overflow-hidden relative ">
              <img
                src="/osteobionix/techs.png"
                alt="Medical Professional examining X-Ray"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Right Stack */}
            <div className="flex flex-col gap-6 h-full">
              {/* Experience Card */}
              <div className="bg-white rounded-2xl border border-[#317d71]/40 py-8 px-6 flex items-center justify-center gap-5 shadow-sm shrink-0 w-full">
                <span className="text-[56px] font-semibold text-[#317d71] font-heading leading-none">5+</span>
                <h2 className=" text-3xl font-semibold text-gray-900 font-heading leading-tight">
                  Years of<br />Experience
                </h2>
              </div>

              {/* Dark Green Card */}
              <div className="w-full flex-1 bg-[#317d71] rounded-2xl p-6 sm:p-8 flex flex-col justify-center items-center text-center shadow-md">
                <h2 className="text-white font-heading text-2xl lg:text-[26px] leading-snug font-medium mb-8">
                  We combine 3D printing technology with clinical expertise to create unique solutions that transform lives.
                </h2>

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
