"use client";

import React from "react";

const sites = [
  {
    title: "Reed Mill",
    image: "/bm-catalysts/images/site-1.jpg",
  },
  {
    title: "Fulwood Rise",
    image: "/bm-catalysts/images/site-2.jpg",
  },
  {
    title: "Unit 1 Fulwood Rise",
    image: "/bm-catalysts/images/site-3.jpg",
  },
  {
    title: "Stoke",
    image: "/bm-catalysts/images/site-4.jpg",
  }
];

export default function OurSites() {
  return (
    <section className="py-14 lg:py-16 bg-white flex justify-center w-full">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Centered Header block */}
        <div 
          className="text-center mb-10 max-w-7xl mx-auto flex flex-col items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-[26px] md:text-[28px] lg:text-[32px] font-bold text-[#333333] font-oxanium mb-2">
            Our Sites
          </h2>
          <hr className="w-20 border-t-2 border-[#1B1537]/80 my-3" />
          <p className="text-[#6E777D] leading-relaxed mt-4 font-exo2">
            Our strategically located facilities are dedicated to advanced manufacturing, precision engineering, quality control, and efficient distribution operations. Equipped with modern technology and streamlined processes, each site plays a vital role in delivering high-quality automotive aftermarket solutions with reliability, consistency, and operational excellence.
          </p>
        </div>

        {/* 4 Cards Sites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {sites.map((site, index) => (
            <div 
              key={index}
              className="bg-white rounded-[2rem] p-5 flex flex-col group"
              style={{ boxShadow: "0px 3px 8px 0px #0000003D" }}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="1000"
            >
              {/* Nested rounded image container */}
              <div className="rounded-[1.5rem] overflow-hidden aspect-[4/3] bg-slate-100 mb-6">
                <img
                  src={site.image}
                  alt={site.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Centered title below */}
              <h4 className="text-center font-bold text-base lg:text-lg text-[#1B1537] font-oxanium pb-2 tracking-wide mb-1">
                {site.title}
              </h4>

            </div>
          ))}
        </div>

        {/* Centered line and bottom quote */}
        <div 
          className="mt-12"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <hr className="border-t border-gray-200/80 my-10" />
          
          <h3
            className="text-center text-[17px] md:text-xl lg:text-[26px] font-extrabold text-[#281B68] font-oxanium max-w-5xl mx-auto leading-relaxed px-4 tracking-wider italic"
          >
            "Modern facilities delivering trusted, high-quality automotive solutions with precision, reliability, and performance."
          </h3>
        </div>

      </div>
    </section>
  );
}
