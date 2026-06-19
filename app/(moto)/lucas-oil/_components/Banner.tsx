import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative w-full h-screen  overflow-hidden flex flex-col justify-end bg-[#050a1f]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 select-none">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    

      {/* Content Overlay */}
      <div className="custom-container relative z-10 mb-20 ">
        <div className="max-w-2xl text-left" data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-3xl md:text-4xl lg:text-[38px] font-bold !font-sans !text-white mb-10 leading-[1.2] drop-shadow-lg tracking-wide">
            Designed to support everyone from daily drivers to professionals with products that perform.
          </h1>
          
          <Link 
            href="#" 
            className="inline-block border-2 border-[#00c0e8] bg-white/10 backdrop-blur-sm text-white px-6 py-2.5 font-medium !font-[family-name:var(--font-orbitron)] hover:bg-white/20 transition-all"
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}
