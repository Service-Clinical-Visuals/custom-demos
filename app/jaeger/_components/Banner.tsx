"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";



export default function Banner() {
  return (
    <section className="relative w-full bg-black h-screen overflow-hidden">
      {/* 🎥 Background Video */}
      <DynamicVideoPlayer
        type="banner"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* 📝 Content */}
      <div className="relative z-10 flex  h-full">
        <div data-aos="fade-up" className="container mx-auto px-6">
          <h1 className="text-[#FFFFFF] text-2xl md:text-[36px] font-semibold max-w-3xl leading-relaxed mt-120 md:mt-165 lg:mt-180">
            Innovative Technology For Respiratory Diagnostics
          </h1>
        </div>
      </div>
    </section>
  );
}
