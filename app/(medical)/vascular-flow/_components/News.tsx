"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const newsItems = [
  {
    category: "CATEGORY",
    date: "21/05/2026",
    title: "Vascular Flow is excited to be exhibiting at the Medical Device Manufacturing Centre Conference 2026!"
  },
  {
    category: "CATEGORY",
    date: "27/10/2025",
    title: "FDA clearance for Spiral Laminar Flow™ AV graft for haemodialysis"
  }
];

export default function News() {
  return (
    <section id="news" className="w-full py-16 lg:py-20 bg-[#f1f1f1]">
      <div className="container mx-auto px-4 lg:px-2">
        {/* Header */}
        <div className="text-center max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="text-[26px] md:text-[30px] lg:text-[34px] font-bold text-[#212121] leading-tight mb-4">
            News
          </h2>
          <p>
            Stay updated with our latest innovations, medical advancements, and industry insights shaping the future of cardiovascular care.
          </p>
        </div>

        <div className="w-full h-px bg-slate-500/70 my-7"></div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <div 
              key={index}
              className="bg-[#004A87] p-6 md:p-8 rounded-xl flex items-center justify-between gap-6 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Left Side: Category, Date & Title */}
              <div className="flex flex-col text-left flex-grow">
                <div className="flex items-center gap-3 text-[13px] font-extrabold tracking-widest uppercase">
                  <span className="text-[#00A0E0]">{item.category}</span>
                  <span className="text-white/30 font-light">|</span>
                  <span className="text-white/80">{item.date}</span>
                </div>
                <h3 className="text-white font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-snug mt-3 group-hover:text-white/95 transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Right Side: Round Cyan Arrow Button */}
              <div className="flex-shrink-0 bg-[#00A0E0] group-hover:bg-[#008ec4] text-white p-3.5 rounded-full shadow-sm transition-transform duration-300 group-hover:scale-105">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
