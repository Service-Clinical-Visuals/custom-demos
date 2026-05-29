"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowUpRight } from "lucide-react";

export default function JlmHero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#02005F]">
      {/* Future Video */}
      <div className="absolute inset-0">
       <DynamicVideoPlayer type="banner" className="absolute inset-0 w-full h-full object-cover z-0" />
      </div>

      {/* 3D Object Placeholder */}
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="absolute inset-0 flex items-center justify-center"
      >
        <img
          src="/hero-object.png"
          alt=""
          className="
            w-[1150px]
            max-w-none
            object-contain
            translate-y-4
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] items-end px-6 pb-16 ">
        <div
          data-aos="fade-right"
          data-aos-delay="300"
          className=""
        >
          <h1
            className="
              max-w-[620px]
              text-4xl
              font-semibold
              leading-[1.05]
              text-white
            "
          >
            Fuel additives and lubricants for automotive aftermarket.
          </h1>

          <button
            data-aos="fade-up"
            data-aos-delay="500"
            className="
              cursor-pointer
              mt-8
              flex
              items-center
              gap-4
              rounded-full
              bg-[#F4B400]
              px-6
              py-3
              text-base
              text-white
              shadow-lg
              font-bold
            "
          >
            Explore Products

            <span
              className="
                cursor-pointer
                flex h-8 w-8
                items-center
                justify-center
                rounded-full
                bg-white
                text-black
              "
            >
              <ArrowUpRight size={16} className="text-black" />
            </span>
          </button>
        </div>
      </div>

    
    </section>
  );
}