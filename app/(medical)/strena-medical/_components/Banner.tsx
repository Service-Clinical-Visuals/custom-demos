"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full h-screen flex items-end overflow-hidden">
      {/* Background Video */}
      <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />

      {/* Content */}
      <div
        data-aos="fade-up"
        className="relative z-10 custom-container mx-auto px-4 lg:px-8 pb-16 lg:pb-20">
        <h1 className="text-[#FFFFFF] text-2xl lg:text-3xl font-semibold leading-tight">
          Reliable Healthcare, Made Accessible
        </h1>
        <p className="text-[#FFFFFF]! text-base lg:text-lg font-normal max-w-3xl mt-4">
          Reliable, affordable medical devices designed to meet global standards—helping healthcare systems deliver safe, efficient, and future-ready patient care.
        </p>
        <div className="flex items-center mt-8">
          <Button variant="outline" size="lg" hasArrow>
            View Products
          </Button>
        </div>
      </div>
    </section>
  );
}
