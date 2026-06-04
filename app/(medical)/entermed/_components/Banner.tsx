"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Banner() {
  return (
    <section className="bg-white text-black py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-xl md:text-2xl font-medium mb-12 tracking-wide text-gray-800">
          FINESSE+ Electrosurgical System
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] text-gray-900">
              Leading Global Provider
            </h3>
            <p className="text-gray-600 text-base md:text-lg mb-10 leading-relaxed max-w-lg">
              The company concentrates its resources on acquiring, developing and inventing quality equipment hospitals and private clinics alike.
            </p>
            
            <button className="flex items-center gap-5 bg-white border border-gray-300 rounded-full pl-6 pr-2 py-2 hover:bg-gray-50 hover:border-gray-400 transition-colors group shadow-sm">
              <span className="font-medium tracking-wide text-[15px] text-gray-800">Explore More</span>
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-[0_4px_10px_rgba(238,49,70,0.3)] group-hover:scale-105 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
            </button>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative w-full aspect-[4/3] rounded-2xl bg-gray-100 flex items-center justify-center border border-gray-200 overflow-hidden shadow-md">
            {/* User will replace this block with their img tag in the future */}
            <div className="text-gray-400 flex flex-col items-center">
              <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium tracking-widest uppercase opacity-70">Image Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
