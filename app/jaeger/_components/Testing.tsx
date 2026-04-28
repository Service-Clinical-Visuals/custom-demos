"use client";

import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Testing() {
  return (
    <section className="w-full bg-[#F0FFF2] py-16">
      <div className="container mx-auto px-6 space-y-10">
        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* LEFT COLUMN - Tag, Title, Description, Video */}
          <div data-aos="fade-up" className="lg:col-span-7 flex flex-col">
            {/* Tag */}
            <div className="mb-4">
              <span className="bg-[#3DAA4A2E] text-[#3DAA4A] text-base px-3 py-1 rounded-md">
                Pulmonary Function Testing
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-[38px] font-semibold text-[#1F242E] mb-6">
              Vyntus™ BODY Plethysmograph
            </h2>

            {/* Description */}
            <p className="text-[#333333] text-base leading-relaxed mb-8">
              People come in all shapes and sizes, so we designed Vyntus™ BODY to
              accommodate most patients while maintaining a compact footprint.
              This state-of-the-art plethysmograph integrates advanced
              technology and smart innovations to ensure accuracy, ease of use,
              and patient comfort.
            </p>

            {/* VIDEO BOX */}
            <div className="flex-1 bg-gray-200 rounded-2xl overflow-hidden min-h-[400px] shadow-sm flex items-center justify-center relative">
              <DynamicVideoPlayer
                type="360"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-2xl font-bold text-[#1F242E] opacity-20 uppercase tracking-widest">360 Video</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Images */}
          <div data-aos="fade-up" className="lg:col-span-5 flex flex-col">

            <div className="flex-1 flex flex-col gap-6">
              <div className="flex-1 relative min-h-[200px]">
                <img
                  src="/jaeger/product-1.png"
                  alt="Product 1"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-md"
                />
              </div>

              <div className="flex-1 relative min-h-[200px]">
                <img
                  src="/jaeger/product-2.png"
                  alt="Product 2"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CONTENT - Corners */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div data-aos="fade-up" className="lg:col-span-7">
            {/* Bottom Text */}
            <p className="text-[#333333] text-sm md:text-base leading-relaxed font-medium">
              Vyntus™ BODY is the ideal plethysmograph for precise lung volume
              measurement, combining innovative technology with an intuitive,
              patient-friendly design.
            </p>
          </div>
          <div data-aos="fade-up" className="lg:col-span-5 flex justify-end">
            {/* Button */}
            <button className="flex items-center bg-[#3DAA4A] text-[#FFFFFF] text-base font-medium px-6 py-2 rounded-md hover:bg-green-700 transition">
              Explore More <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
