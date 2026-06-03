"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function CmfSolutions() {
  const BulletIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gray-800 mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 3L19 12L5 21V3Z" />
    </svg>
  );

  return (
    <section className="w-full py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Video */}
          <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] relative rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100" data-aos="fade-right">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right Column: Text and Cards */}
          <div className="flex flex-col gap-6" data-aos="fade-left">
            <h2 className="text-[#237B64] font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-2">
              Our CMF solutions include:
            </h2>

            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-100 p-6 flex flex-col gap-4">
              <h4 className="text-[#237B64] font-bold text-lg font-heading">
                Temporo-mandibular joint (TMJ) reconstruction
              </h4>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3 text-gray-600 text-sm md:text-base leading-relaxed">
                  <BulletIcon />
                  <span>Customized TMJ implant designed for individual patient anatomy .</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600 text-sm md:text-base leading-relaxed">
                  <BulletIcon />
                  <span>Available in a patented minimally invasive design to reduce surgical trauma and recovery time.</span>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-100 p-6 flex flex-col gap-4">
              <h4 className="text-[#237B64] font-bold text-lg font-heading">
                Trauma reconstructive surgery
              </h4>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3 text-gray-600 text-sm md:text-base leading-relaxed">
                  <BulletIcon />
                  <span>Custom solutions for fracture stabilization, bone loss reconstruction and facial symmetry restoration.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600 text-sm md:text-base leading-relaxed">
                  <BulletIcon />
                  <span>3D-printed titanium implants and surgical jigs for enhanced procedural accuracy.</span>
                </li>
              </ul>
            </div>

            <div className="mt-2">
              <Link
                href="#"
                className="group inline-flex items-center gap-3 bg-[#237B64] text-white px-5 py-2.5 rounded hover:bg-[#1f5c53] transition-all font-bold text-sm"
              >
                Explore More
                <span className="bg-white text-[#237B64] p-0.5 rounded-sm group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
