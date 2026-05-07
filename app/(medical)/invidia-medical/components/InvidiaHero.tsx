"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight } from "lucide-react";

export default function InvidiaHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* VIDEO BACKGROUND */}
      {/* Replace this div with video later */}
      <div className="absolute inset-0 z-0">
      <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />

      </div>

      <div className="relative z-20 flex h-full items-end bottom-32">
        <div className="w-full ">
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            className="max-w-380 mx-auto px-6 lg:px-0"
          >
            {/* TITLE */}
            <h1 className="text-4xl font-semibold leading-[1.15] tracking-[-1.6px] text-white">
              Precisely yours, INVIDIA Medical
            </h1>

            {/* CTA */}
            <div
              className="mt-10"
            >
              <button className="group cursor-pointer flex h-[42px] items-center overflow-hidden rounded-[3px] bg-[#D3AB00] pl-5 text-base font-semibold text-white transition-all duration-300 hover:translate-y-[-2px]">
                <span>View Products</span>

                <span className="ml-4 flex h-full w-[34px] items-center justify-center bg-white text-[#D3AB00] transition-all duration-300 group-hover:w-[42px]">
                  <ArrowRight
                    size={15}
                    strokeWidth={2.5}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM GRADIENT */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-[180px] w-full bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  );
}