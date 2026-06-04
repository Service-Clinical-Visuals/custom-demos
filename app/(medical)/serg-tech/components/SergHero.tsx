"use client";

import { ArrowUpRight } from "lucide-react";
import "aos/dist/aos.css";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function SergHero() {
  //  <section
  //       className="relative max-w-[1750px] mx-auto mt-4 rounded-[24px] overflow-hidden w-full aspect-[4/3] md:aspect-video shadow-[0_8px_25px_rgba(0,0,0,0.18)]"
  //       data-aos="zoom-in"
  //     >
  //       {/* VIDEO READY CONTAINER */}
  //       <div className="absolute inset-0 bg-black">
  //         <DynamicVideoPlayer type="banner" className="object-cover w-full h-full" />
  //       </div>

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10">
      <section
        className="relative max-w-[1750px] mx-auto mt-4 rounded-[24px] overflow-hidden w-full aspect-[4/3] md:aspect-video shadow-[0_8px_25px_rgba(0,0,0,0.18)]"
        data-aos="zoom-in"
      >
        {/* VIDEO READY CONTAINER */}
        <div className="absolute inset-0 bg-black">
          <DynamicVideoPlayer type="banner" className="object-cover w-full h-full" />
        </div>

        {/* Content */}
        <div className="relative z-20 h-full flex items-end">
          <div className="pb-20 pl-12">
            <div data-aos="fade-up">
              <h1 className="text-white text-4xl leading-[1.4] font-bold max-w-[700px] tracking-[-1.5px]">
                Intelligent Digital Solutions
                <br />
                Redefining Parkinson’s Care
              </h1>

              <button className="cursor-pointer group mt-8 bg-[#2a37d6] hover:bg-[#3946ec] transition-all duration-300 h-[46px] pl-8 pr-3 rounded-full flex items-center gap-5">
                <span className="text-white text-[16px] font-semibold tracking-wide">
                  View Products
                </span>

                <div className="w-[28px] h-[28px] rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-all duration-300">
                  <ArrowUpRight size={15} className="text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}