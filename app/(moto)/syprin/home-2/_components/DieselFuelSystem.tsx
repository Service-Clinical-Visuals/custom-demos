"use client";

import Link from "next/link";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const points = [
  "Helps maintain clean and efficient fuel delivery.",
  "Supports reliable and consistent operation of injectors, valves, and fuel lines.",
  "Helps maintain injector cleanliness and performance.",
  "Helps ensure reliable ignition and smooth engine operation.",
  "Suitable for diesel and biodiesel applications.",
];

export default function DieselFuelSystem() {
  return (
    <section className="bg-[#262626] py-14 md:py-20 desk:py-24 min-[2500px]:py-36 min-[3800px]:py-48">
      <div className="custom-container grid grid-cols-1 desk:grid-cols-[minmax(0,1.85fr)_minmax(0,1fr)] items-center gap-8 md:gap-10 desk:gap-6 xl:gap-8 min-[2500px]:gap-16">
        {/* Video 02 */}
        <div className="order-2 desk:order-1 relative w-full aspect-[663/372] overflow-hidden rounded-[4px] min-[3800px]:rounded-[8px] bg-[#1a1a1a]">
          <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Text */}
        <div className="min-w-0 order-1 desk:order-2">
          <div className="flex items-center gap-2.5 min-[2500px]:gap-4">
            <span className="w-5 min-[2500px]:w-8 h-[3px] min-[2500px]:h-[5px] rounded-full bg-accent" />
            <span className="tag-label text-[#F6F6F6]">Diesel Fuel System</span>
          </div>

          <h2 className="text-[#F6F6F6] mt-3 md:mt-4 min-[2500px]:mt-6">Engineered for Excellence. Built for Performance.</h2>

          <p className="text-[#CACACA] mt-3 md:mt-4 min-[2500px]:mt-6">
            Designed to maintain efficient diesel-system operation, this formula supports clean fuel delivery, injector performance, and dependable protection of essential components.
          </p>

          <ul className="flex flex-col gap-3 md:gap-3.5 min-[2500px]:gap-6 mt-6 md:mt-7 min-[2500px]:mt-10">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 min-[2500px]:gap-4 text-[#CACACA]">
                <span className="w-1.5 h-1.5 min-[2500px]:w-2.5 min-[2500px]:h-2.5 rounded-full bg-accent shrink-0 mt-[0.6em]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

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
