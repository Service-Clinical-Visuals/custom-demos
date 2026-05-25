"use client";
import React from "react";
import { Wrench, ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function FeaturedProductOne() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">

          {/* Left: Text Content */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4 text-[var(--moove-text-dark)]">
              <Wrench className="w-5 h-5" />
              <h6 className="text-[15px]! font-bold tracking-wider">
                Our Featured Products
              </h6>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--moove-text-dark)] mb-6 leading-tight">
              Mobil Super™ Everyday Protection<br />5W-40
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 text-justify">
              Mobil Super™ Everyday Protection 5W-40 is a high-performance engine oil specially formulated to provide reliable protection and long-lasting performance for both gasoline and diesel engines. Designed for everyday driving conditions, it helps reduce engine wear, maintain cleanliness, and deliver smooth operation across a wide range of temperatures. Its advanced formulation supports cold-start protection, high-temperature stability, and improved engine efficiency, making it suitable for passenger cars, SUVs, light trucks, and vans.
            </p>

            <div>
              <button className="flex items-center bg-[#001C46] hover:bg-[#002D72] text-white transition-colors">
                <span className="px-6 py-2.5 text-[16px] font-bold">Explore products</span>
                <div className="bg-white text-[#001C46] px-3 py-2.5 border border-[#001C46]">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            </div>
          </div>

          {/* Right: 360 Video / Checkerboard */}
          <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-gray-200 shadow-inner bg-[#F5F5F5] flex items-center justify-center">
            {/* Checkerboard Pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(45deg, #ccc 25%, transparent 25%), 
                  linear-gradient(-45deg, #ccc 25%, transparent 25%), 
                  linear-gradient(45deg, transparent 75%, #ccc 75%), 
                  linear-gradient(-45deg, transparent 75%, #ccc 75%)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
              }}
            ></div>

            {/* Dynamic 360 Video Player */}
            <div className="absolute inset-0 z-10">
              <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />
            </div>


          </div>

        </div>
      </div>
    </section>
  );
}
