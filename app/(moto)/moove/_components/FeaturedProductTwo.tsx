"use client";
import React, { useState } from "react";
import { Wrench } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const KEY_FEATURES = [
  "High-temperature engine protection",
  "Excellent cold-start performance",
  "Helps prevent sludge and engine deposits",
  "Reduces engine wear for longer engine life",
];

const APPLICATIONS = [
  "Passenger cars",
  "SUVs and light trucks",
  "Vans and commercial vehicles",
  "Stop-and-go city driving conditions",
];

export default function FeaturedProductTwo() {
  const [activeTab, setActiveTab] = useState<"features" | "applications">("features");

  const items = activeTab === "features" ? KEY_FEATURES : APPLICATIONS;

  return (
    <section className="w-full relative bg-[url('/moove/home/bg.jpg')] bg-cover bg-no-repeat bg-center py-16 md:py-24">
      <div className="absolute inset-0 z-0 bg-[var(--moove-dark-blue)]/80" />
      <div className="container relative z-1 mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Video */}
          <div className="relative aspect-video w-full overflow-hidden rounded-sm order-2 lg:order-1">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover z-10" />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col order-1 lg:order-2">

            {/* Label */}
            <div className="flex items-center gap-2 mb-3 text-white">
              <Wrench className="w-4 h-4" />
              <span className="text-sm font-bold tracking-wider">Specifications</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Key Features &amp; Applications
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              A premium 5W-40 engine oil formulated to provide dependable engine protection, improved cleanliness, and consistent performance for everyday driving conditions.
            </p>

            {/* Tabs + Panel */}
            <div>
              {/* Tab bar */}
              <div className="flex">
                <button
                  onClick={() => setActiveTab("features")}
                  className={`px-6 py-3 text-[16px] font-bold transition-colors font-heading ${activeTab === "features"
                    ? "bg-white text-[#0d2a5c] underline"
                    : "bg-[#0d2a5c] text-gray-300 hover:text-white"
                    }`}
                >
                  Key Features
                </button>
                <button
                  onClick={() => setActiveTab("applications")}
                  className={`px-6 py-3 text-[16px] font-bold transition-colors font-heading ${activeTab === "applications"
                    ? "bg-white text-[#001C46] underline"
                    : "bg-[#0d2a5c] text-gray-300 hover:text-white"
                    }`}
                >
                  Applications
                </button>
              </div>

              {/* Content card */}
              <div className="bg-white p-6 shadow-md">
                <ul className="flex flex-col gap-4">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Wrench className="w-5 h-5 text-[#006CA5] shrink-0" />
                      <span className="text-[16px] text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
