"use client";


import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import "aos/dist/aos.css";
import { Play } from "lucide-react";

export default function SharkRoller() {

  return (
    <section className="w-full bg-[#f5f5f5] py-28 overflow-hidden">
      <div className="max-w-full mx-auto px-6 lg:px-14">
        {/* TOP CONTENT */}
        <div
          data-aos="fade-up"
          className="max-w-[860px] mx-auto text-center"
        >
          <h2 className="text-4xl leading-none tracking-[-1.5px] text-[#242424]">
            SharkEye Roller Car 4 Wheel Laser Aligner
          </h2>

          <p className="mt-7 text-[16px] leading-[2] text-[#727272] font-medium font-body">
            Versatile mobile car 4 wheel laser aligner for professional garages.
            This sturdy mobile trolley allows for practical storage of aligners
            and accessories with the added bonus of being able to roll it into,
            and out of, any corner of your workshop.
          </p>
        </div>

        {/* VIDEO SECTION */}
        <div
          data-aos="zoom-in"
          className="relative mt-14 max-w-[980px] mx-auto"
        >
          {/* VIDEO WRAPPER */}
          <div className="relative overflow-hidden bg-[#ebebeb] shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            {/* VIDEO PLACEHOLDER */}
            <div className="relative aspect-[16/9] w-full">
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover z-0" />
            </div>
          </div>

          {/* GLOW */}
          <div className="absolute inset-0 bg-white/20 pointer-events-none" />
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 max-w-[980px] mx-auto">
          {/* DESCRIPTION */}
          <p
            data-aos="fade-right"
            className="text-[16px] leading-[2] text-[#7a7a7a] font-medium max-w-[620px]"
          >
            Like all SharkEye products, it’s quick, it’s simple to use, it's
            well priced and it’s built to last.
          </p>

          {/* BUTTON */}
          <button
            data-aos="fade-left"
            className="relative h-[56px] cursor-pointer px-12 bg-[#f0df32] text-black font-black text-[15px] tracking-wide hover:translate-x-1 transition-all duration-300"
          >
            View Product

            {/* ANGLED EDGE */}
            <span className="absolute top-0 right-[-18px] border-t-[28px] border-b-[28px] border-l-[18px] border-t-transparent border-b-transparent border-l-[#f0df32]" />
          </button>
        </div>
      </div>
    </section>
  );
}