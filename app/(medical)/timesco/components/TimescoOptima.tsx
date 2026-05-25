"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import AOS from "aos";
import "aos/dist/aos.css";

import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function TimescoOptima() {


  return (
    <section className="w-full bg-[#145826] py-20">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-14 px-8 lg:grid-cols-[1.15fr_0.85fr]">
        
        {/* LEFT VIDEO */}
        <div
          data-aos="fade-right"
          className="relative overflow-hidden rounded-[28px]"
        >
          {/* Future Video */}
          <div className="relative h-[520px] w-full overflow-hidden rounded-[28px] bg-[#d9d9d9]">
            
           <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          data-aos="fade-left"
          className="max-w-[520px]"
        >
          <h2
            className="
              text-4xl
              font-semibold
              leading-[1.08]
              tracking-[-0.03em]
              text-white
            "
          >
            Optima View Video Laryngoscope Handle RU
          </h2>

          <div className="mt-8 space-y-7">
            <p
              className="
                text-[16px]
                leading-[2]
                text-white
              "
            >
              Timesco&apos;s new Optima View video laryngoscope system provides
              crystal clear colour correct outputs using a high resolution
              camera, a 5000k LED light guide and a high quality 3.75”
              LCD screen.
            </p>

            <p
              className="
                text-[16px]
                leading-[2]
                text-white
              "
            >
              The blades follow the same shape as a traditional Mac blade
              whilst the device provides a powerful white LED light output,
              ensuring the anaesthetist does not have to compromise on their
              style of intubation.
            </p>

            <p
              className="
                text-[16px]
                leading-[2]
                text-white 
              "
            >
              The screen rotates 180° from left to right and tilts 110°
              up and down, with a 160° view angle that makes it convenient
              for teaching with multiple viewers.
            </p>
          </div>

          {/* CTA */}
          <button
            className="
              cursor-pointer
              group
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-xl
              border
              border-white
              bg-[#0f8b39]
              px-7
              py-4
              text-[15px]
              font-medium
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#0d7a32]
            "
          >
            Discover Technology

            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        </div>
      </div>
    </section>
  );
}