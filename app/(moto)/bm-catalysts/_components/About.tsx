"use client";

import React from "react";
import Button from "./Button";

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-18 items-center">
          
          {/* Left Column: Custom Rounded Image Grid (1:1 with design) */}
          <div 
            className="w-full flex flex-col gap-6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            
            {/* Top Wide Image - Factory Aerial view */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-lg relative group aspect-[2.1/1] bg-slate-100">
              <img
                src="bm-catalysts/images/about-1.png"
                alt="BM Belton Massey Factory"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Bottom Two Side-By-Side Images (col-span-5 and col-span-7 for perfect 1:1 width balance) */}
            <div className="grid grid-cols-12 gap-6">
              
              {/* Bottom Left Square-ish Image - Brand Sign */}
              <div className="col-span-5 rounded-[2rem] overflow-hidden shadow-lg relative group aspect-square bg-slate-100">
                <img
                  src="bm-catalysts/images/about-2.png"
                  alt="BM Belton Massey Sign"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Bottom Right Horizontal Image - Staff Engineer */}
              <div className="col-span-7 rounded-[2rem] overflow-hidden shadow-lg relative group aspect-[1.4/1] bg-slate-100">
                <img
                  src="bm-catalysts/images/about-3.jpg"
                  alt="BM Catalysts Staff Member"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

            </div>
          </div>

          {/* Right Column: High-Fidelity Text Content */}
          <div 
            className="w-full flex flex-col justify-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            
            {/* Title Section */}
            <div>
              <h2 className="text-[26px] md:text-[28px] lg:text-[32px] font-bold text-[#333333] font-oxanium mb-2">
                Powering The Aftermarket With Quality & Innovation
              </h2>
              <hr className="border-t border-gray-200/80 my-5" />
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-[#6E777D] leading-relaxed font-exo2">
              <p>
                As Europe’s leading manufacturer of aftermarket hot end emissions products, you would expect us to deliver a wide range of quality focussed parts that are easy to order. What you may not expect is a company that has an ethos of continual investment and improvement to deliver the best possible working partnerships.
              </p>
              <p>
                When you work with us, you will find that our approach is focussed on exceeding the aftermarket’s expectations on quality. However, we also believe in working in partnership, helping you to increase your profits, offer a wider range and reduce your stock holdings so that you can ensure your customers have the very best choice available.
              </p>
              <p>
                By aligning our business to suit your needs, we can offer bespoke solutions that are specific to your customers. We know that details matter so we invest in quality with our own best-in-class manufacturing processes.
              </p>
              {/* <p>
                We Lead The Way In Providing Practical And Fitting Support As Well As Cataloguing Assistance. From Product Guidance To Specialist Sector Support And Education, We Can Help You Every Step Of The Way. Visit Our Products Page For More Information And To See Our Ever-Expanding Range.
              </p> */}
              <p>
                BM Catalysts bring precision engineering and partner-first service to your business.
              </p>
            </div>

            <hr className="border-t border-gray-200/80 my-5" />

            {/* Call To Action & Button */}
            <div className="space-y-6">
              <h3 className="text-lg lg:text-xl font-semibold text-[#1B1537] font-oxanium tracking-wide">
                Everything We Do Is Dedicated To Exceeding Your Expectations.
              </h3>
              
              <div className="pt-1">
                <Button 
                  href="#story" 
                  variant="primary" 
                  size="md" 
                  rounded="full" 
                  hasArrow
                  className="px-8 shadow-md transform hover:scale-[1.02] transition-transform duration-300"
                >
                  Explore Our Story
                </Button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
