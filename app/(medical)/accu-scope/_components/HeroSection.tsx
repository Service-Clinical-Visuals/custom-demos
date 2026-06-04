"use client";

import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative h-screen overflow-hidden">
      
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        className="
          absolute inset-0
          w-full h-full
          object-cover
        "
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="max-w-[1400px] mx-auto h-full px-8">

          <div
            className="
              absolute
              left-8
              bottom-24
              max-w-[650px]
            "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1
              className="
                text-white
                text-[64px]
                leading-[1.15]
                font-[700]
                tracking-[-2px]
              "
            >
              Empowering discovery.
              <br />
              Advancing results.
            </h1>

            <button
              className="
                mt-10
                h-[56px]
                px-8
                rounded-full
                bg-[#005FA3]
                text-white
                font-semibold
                flex items-center gap-3
                hover:scale-105
                transition-all duration-300
              "
            >
              Read More About Me

              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Progress Line */}
      <div
        className="
          absolute
          bottom-8
          right-0
          w-[420px]
          h-[2px]
          bg-white/20
        "
      >
        <div className="w-[120px] h-full bg-white" />
      </div>
    </section>
  );
}