"use client";

import Link from "next/link";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function DieselSystemCare() {
  return (
    <section className="bg-[#262626] py-14 md:py-20 desk:py-24 min-[2500px]:py-36 min-[3800px]:py-48">
      <div className="custom-container grid grid-cols-1 desk:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] items-center gap-8 md:gap-10 desk:gap-8 xl:gap-10 min-[2500px]:gap-16">
        {/* 360° video */}
        <div className="order-2 desk:order-1 relative w-full aspect-[16/9] overflow-hidden rounded-[4px] min-[3800px]:rounded-[8px] bg-[#1a1a1a]">
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Text */}
        <div className="min-w-0 order-1 desk:order-2">
          <div className="flex items-center gap-2.5 min-[2500px]:gap-4">
            <span className="w-5 min-[2500px]:w-8 h-[3px] min-[2500px]:h-[5px] rounded-full bg-accent" />
            <span className="tag-label text-[#F6F6F6]">Diesel System Care</span>
          </div>

          <h2 className="text-[#F6F6F6] mt-3 md:mt-4 min-[2500px]:mt-6">ORIGINAL SYPRIN Diesel Injector &amp; System Cleaner</h2>

          <div className="mt-4 md:mt-5 min-[2500px]:mt-8 flex flex-col gap-3 md:gap-4 min-[2500px]:gap-6 text-[#CACACA]">
            <p>
              SYPRIN Diesel Injection &amp; System Cleaner is a highly effective additive for fast and cost-effective cleaning of deposits in diesel fuel systems. It helps remove disruptive deposits from key fuel-system components, including injectors, valves, and fuel lines, helping maintain clean fuel flow and proper system function. Regular use supports a cleaner fuel system and contributes to smooth, reliable engine operation.
            </p>
            <p>
              The formula also helps protect essential fuel-system components against corrosion and wear while supporting consistent engine performance. Suitable for diesel and biodiesel fuels, it helps maintain injector cleanliness, efficient fuel delivery, and reliable fuel-system operation, helping the engine perform effectively under everyday driving conditions.
            </p>
          </div>

          <Link
            href="/syprin/product-details"
            className="button inline-flex items-center justify-center mt-7 md:mt-8 min-[2500px]:mt-12 bg-accent hover:bg-accent-hover text-white rounded-[4px] min-[3800px]:rounded-[8px] px-6 py-2.5 md:px-7 md:py-3 min-[2500px]:px-10 min-[2500px]:py-5 transition-colors active:scale-95"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
}
