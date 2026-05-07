// components/ProductVideoSection.tsx

"use client";

import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function HrProduct() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F3F3F3]">
      {/* TOP DARK AREA */}
      <div className="relative h-[295px] w-full bg-[#031A34]">
        <div className="mx-auto flex h-full max-w-380 items-start justify-between px-6 pt-[58px]">
          {/* LEFT CONTENT */}
          <div
            data-aos="fade-right"
            className="max-w-380"
          >
            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-1.8px] text-white">
              TruCath® Foley Catheters
            </h2>

            <p className="mt-5 max-w-[520px] text-base leading-[1.9] text-white/80">
              The TruCath® Foley range includes integral and innovative
              configurations to accommodate care. Connect to a TruCath® leg or
              drainage bag for urine collection.
            </p>
          </div>

          {/* BUTTON */}
          <div
            data-aos="fade-left"
            data-aos-delay="120"
            className="pt-[18px]"
          >
            <button className="flex h-[48px] w-[142px] items-center justify-center rounded-full bg-[#F3F3F3] text-base cursor-pointer font-medium text-[#061B35] transition-all duration-300 hover:translate-y-[-2px] hover:bg-white">
              View Products
            </button>
          </div>
        </div>
      </div>

      {/* VIDEO CONTAINER */}
      <div className="relative z-20 -mt-[56px] pb-16">
        <div
          data-aos="zoom-in"
          data-aos-delay="220"
          className="mx-auto max-w-380 px-6"
        >
          {/* VIDEO CARD */}
          <div className="relative overflow-hidden rounded-[6px] shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
            {/* VIDEO PLACEHOLDER */}
            <div className="relative aspect-[16/8] w-full">
              {/* FUTURE VIDEO */}
              {/* Replace with actual video later */}

              {/* CHECKERBOARD BACKGROUND */}
              <div
                className="absolute inset-0"

              />

              {/* VIDEO LABEL */}
              <div className="absolute inset-0 flex items-center justify-center">
                           <DynamicVideoPlayer type="360" className="w-full h-full object-cover rounded-2xl" />
               
              </div>

              {/* OPTIONAL VIDEO OVERLAY */}
              <div className="absolute inset-0 bg-black/[0.01]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}