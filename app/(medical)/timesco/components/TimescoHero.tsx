"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import "aos/dist/aos.css";

import { ArrowRight } from "lucide-react";

export default function TimescoHero() {

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#5f5f5f]">
      
      {/* Future Video Layer */}
      <div className="absolute inset-0">
        <DynamicVideoPlayer type="banner" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      {/* Gradient Light */}
      <div className="absolute bottom-0 left-0 h-[300px] w-full bg-gradient-to-t from-black/20 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] items-end px-10 bottom-20">
        
        {/* LEFT */}
        <div className="w-full lg:w-[38%]">

          <div data-aos="fade-up">
            <h1 className="text-4xl font-bold leading-[1.1] text-white">
              Instruments For Life
            </h1>

            <p className="mt-5 max-w-[450px] text-xl leading-7 text-white">
              Trusted manufacturer and distributor of high quality medical
              supplies for healthcare professionals around the globe.
            </p>

            <button className="group mt-8 flex items-center gap-3 rounded-md bg-[#008b45] px-7 py-4 text-white transition-all duration-300 hover:scale-105">
              Explore More

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}