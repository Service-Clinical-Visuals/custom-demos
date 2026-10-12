"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const benefits = [
  { title: "Enhanced Fuel System Cleaning", text: "Helps remove deposits and maintain clean fuel injectors." },
  { title: "Reliable Corrosion & Wear Protection", text: "Helps protect critical fuel-system components against corrosion and wear." },
  { title: "Cleaner & More Efficient Combustion", text: "Supports smoother engine performance, efficient combustion, and reduced soot and pollutants." },
];

export default function DieselProtection() {
  return (
    <section className="bg-[#2B2B2B] py-14 md:py-20 desk:py-24 min-[2500px]:py-36 min-[3800px]:py-48">
      <div className="custom-container grid grid-cols-1 desk:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] items-center gap-8 md:gap-10 desk:gap-8 xl:gap-10 min-[2500px]:gap-16">
        {/* Text */}
        <div className="min-w-0">
          <div className="flex items-center gap-2.5 min-[2500px]:gap-4">
            <span className="w-5 min-[2500px]:w-8 h-[3px] min-[2500px]:h-[5px] rounded-full bg-accent" />
            <span className="tag-label text-[#F6F6F6]">Diesel Engine Protection</span>
          </div>

          <h2 className="text-[#F6F6F6] mt-3 md:mt-4 min-[2500px]:mt-6">Complete Care for Your Diesel System</h2>

          <p className="text-[#CACACA] mt-3 md:mt-4 min-[2500px]:mt-6">
            Advanced diesel care helps clean and protect diesel injectors and fuel-system components, supporting smooth operation, cleaner combustion, reduced deposits, for reliable engine performance.
          </p>

          <div className="w-[72px] min-[2500px]:w-[120px] h-px bg-white/40 mt-4 md:mt-5 min-[2500px]:mt-8" />

          <ul className="flex flex-col gap-3 md:gap-4 min-[2500px]:gap-7 mt-5 md:mt-6 min-[2500px]:mt-10">
            {benefits.map((b) => (
              <li key={b.title} className="flex items-start gap-2 min-[2500px]:gap-4 text-[#CACACA]">
                <Check className="w-4 h-4 min-[2500px]:w-7 min-[2500px]:h-7 text-accent shrink-0 mt-1" strokeWidth={4} />
                <span>
                  <strong className="font-semibold text-[#F6F6F6]">{b.title}</strong> — {b.text}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/syprin/product-details"
            className="button inline-flex items-center justify-center mt-7 md:mt-8 min-[2500px]:mt-12 bg-accent hover:bg-accent-hover text-white rounded-[4px] min-[3800px]:rounded-[8px] px-6 py-2.5 md:px-7 md:py-3 min-[2500px]:px-10 min-[2500px]:py-5 transition-colors active:scale-95"
          >
            Learn More
          </Link>
        </div>

        {/* Video 01 */}
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[4px] min-[3800px]:rounded-[8px] bg-[#1a1a1a]">
          <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
