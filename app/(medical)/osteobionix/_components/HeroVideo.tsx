"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function HeroVideo() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-end justify-center pb-24">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for video / image. User will update later. */}
        <DynamicVideoPlayer type="banner" className="absolute inset-0 w-full h-full object-cover opacity-80" />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 z-10" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 text-center max-w-4xl px-4 animate-fade-in-up">
        <h1 className="text-white font-heading text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed tracking-wide">
          A patented technology that bridges the gap between rigid metal implants and the natural movement of the human body.
        </h1>
      </div>
    </section>
  );
}
