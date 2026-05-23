"use client";

import React from "react";
import { Calendar, ChevronDown } from "lucide-react";

const newsItems = [
  {
    title: "BM Catalysts Set Sights On More Silverware At IAAF Football Tournament",
    date: "14th May 2026",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "BM Catalysts To Exhibit At First GSF Techfest Of The Year",
    date: "11th May 2026",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "From Replacement To Specialism, The Rising Value Of Emissions Expertise",
    date: "7th May 2026",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=400&auto=format&fit=crop"
  }
];

export default function LatestNews() {
  return (
    <section className="py-16 lg:py-20 bg-white flex justify-center w-full">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header Block: Two-Column Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <h2 className="text-[26px] md:text-[28px] lg:text-[32px] font-bold text-[#333333] font-oxanium mb-2">
              Latest News
            </h2>
            <hr className="w-20 border-t-2 border-[#1B1537]/80 my-3" />
            <p className="text-[#6E777D] leading-relaxed font-exo2 max-w-3xl">
              Stay Updated With The Latest News, Industry Insights, Product Launches, Events, And Company Updates From BM Catalysts. Explore How We Continue To Drive Innovation, Strengthen Aftermarket Solutions, And Support The Automotive Industry With Expert Knowledge And Advanced Emissions Technology.
            </p>
          </div>
          
          <div className="lg:col-span-4 flex flex-col lg:items-end justify-end">
            <span className="text-[17px] md:text-[19px] lg:text-[21px] font-bold text-[#333333] font-oxanium uppercase mb-2 tracking-wide">
              Archive
            </span>
            <div className="flex items-center justify-between w-full max-w-[240px] bg-[#1B1537] text-white py-3.5 px-6 rounded-full shadow-md font-bold font-exo2 text-sm cursor-pointer border border-white/5 hover:bg-[#261e4d] transition-all duration-300">
              <span>Select Year</span>
              <ChevronDown className="w-4 h-4 ml-2 shrink-0 text-white" />
            </div>
          </div>
        </div>

        {/* 3 Cards News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {newsItems.map((card, index) => (
            <div 
              key={index}
              className="bg-white rounded-[2rem] p-5 flex flex-col group cursor-pointer"
              style={{ boxShadow: "0px 3px 8px 0px #0000003D" }}
            >
              {/* Card Image and custom logo watermark */}
              <div className="rounded-[1.5rem] overflow-hidden aspect-[1.5/1] relative bg-slate-100 mb-6">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* 🏷️ High-Fidelity Branded Watermark in bottom right */}
                <div className="absolute bottom-3.5 right-3.5 text-white px-3.5 py-1 rounded-md text-[9px] font-black tracking-widest font-oxanium uppercase border border-white/10 flex items-center shadow-lg">
                 <img src="/bm-catalysts/images/logo-small.png" alt="bm catalysts" className="w-16 h-auto" />
                </div>
              </div>

              {/* Title */}
              <h4 className="font-semibold text-[17px] lg:text-[19px] text-[#333333] font-oxanium tracking-tight mb-4 group-hover:text-[#1B1537] transition-colors duration-300 min-h-[48px] line-clamp-3">
                {card.title}
              </h4>
              
              <hr className="border-t border-gray-100 my-3" />

              {/* Calendar stamp footer */}
              <div className="flex items-center gap-2.5 text-gray-600 font-medium text-xs font-exo2 mt-auto pb-1">
                <Calendar className="w-4 h-4 text-gray-600 shrink-0" />
                <span>{card.date}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
