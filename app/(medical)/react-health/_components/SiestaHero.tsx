"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import ReactHealthButton from "./ReactHealthButton";

export default function SiestaHero() {
  return (
    <section className="relative w-full bg-react-purple overflow-hidden py-12 md:py-20 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/react-health/bg.png')] bg-cover bg-no-repeat bg-center opacity-10" />

      <div className="react-container relative z-10">
        {/* Main Product Container - Image */}
        <div className="bg-white/10 backdrop-blur-sm rounded-[2.5rem] mb-12 shadow-2xl border border-white/20" data-aos="fade-up">
          <div className="relative aspect-[21/9] w-full rounded-[2rem] overflow-hidden">
            <DynamicVideoPlayer type="360" className="w-full h-full object-cover rounded-[2rem]" />
          </div>
        </div>


        {/* Hero Content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8" data-aos="fade-up" data-aos-delay="200">
          <div className="max-w-2xl">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              The NEW Siesta 2 Nasal Mask
            </h1>
            <p className="text-white/90 text-[16px] md:text-base max-w-xl">
              The new Siesta 2 Nasal Mask builds on the original Siesta platform with a refined frame, added comfort features, and simplified inventory management. The Siesta 2 Nasal Mask optimizes air flow and offers updated headgear and frame for increased comfort.
            </p>
          </div>

          <div>
            <ReactHealthButton text="View Details" variant="white" />

          </div>
        </div>
      </div>
    </section>
  );
}
