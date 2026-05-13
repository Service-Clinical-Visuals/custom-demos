"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Hero() {
  return (
    <section className="w-full bg-black h-screen relative overflow-hidden">
      <div className="absolute inset-0" data-aos="zoom-out" data-aos-duration="2000">
        <DynamicVideoPlayer
          type="banner"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}