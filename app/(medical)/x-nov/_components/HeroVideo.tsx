"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative h-screen overflow-hidden">
       <div className="absolute inset-0 z-0">
             <DynamicVideoPlayer type="banner" className="absolute inset-0 w-full h-full object-cover" />
           </div>

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/35
        "
      />

      {/* Small Label */}
      <div
        className="
          absolute
          top-[90px]
          left-[24px]
          z-20
          text-white
          text-[18px]
          font-light
        "
      >
        HPV– Human Papillomavirus
      </div>

      {/* Content */}
      <div
        className="
          relative
          z-20
          h-full
          max-w-[1400px]
          mx-auto
          px-8
          flex
          items-end
          pb-28
        "
      >
        <div
          data-aos="fade-up"
          className="max-w-[620px]"
        >
          <h1
            className="
              text-white
              text-[40px]
              leading-tight
              font-bold
            "
          >
            Our Technical Skills
          </h1>

          <p
            className="
              mt-5
              text-white/90
              text-[18px]
              leading-[1.8]
            "
          >
            Associated with a creative and efficient multidisciplinary team,
            the three founders of X.NOV have over 60 years of experience in
            the field of medical device research and development (R&D).
          </p>

          <button
            className="
              mt-10
              flex
              items-center
              gap-4
              border
              border-white
              text-white
              h-[58px]
              px-8
              rounded-xl
              transition-all
              hover:bg-white
              hover:text-black
            "
          >
            Explore More

            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}