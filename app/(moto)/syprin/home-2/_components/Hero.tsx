"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Hero() {
  return (
    <section className="relative w-full h-svh min-h-[460px] md:min-h-[560px] min-[2500px]:min-h-[1000px] min-[3800px]:min-h-[1400px] bg-[#00002b] overflow-hidden flex items-end">
      {/* Background video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer className="absolute inset-0 w-full h-full object-cover pointer-events-none" type="banner" />
        </div>

      <div className="custom-container relative z-10 pb-12 sm:pb-14 md:pb-16 desk:pb-[72px] min-[2500px]:pb-32 min-[3800px]:pb-44">
        <h1 className="text-white max-w-[720px] min-[2500px]:max-w-[1100px] min-[3800px]:max-w-[1500px]">
          Petrol Performance Protection
          <br />
          More Protection. More Performance.
        </h1>
      </div>
    </section>
  );
}
