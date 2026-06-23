"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function CommaHero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#0D0D0D]">
      {/* Background video/image placeholder */}
      <div className="absolute inset-0">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0  z-[1]" />
      </div>

      {/* Empty — image/video fills the full hero */}
    </section>
  );
}
