"use client";

import React from "react";

export default function OurFacility() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & Slanted Image */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Title */}
            <div className="flex flex-col gap-2 mb-6" data-aos="fade-up">
              {/* <h2 className="text-3xl md:text-4xl lg:text-[42px] font-heading font-bold text-dark tracking-wide uppercase leading-none"> */}
                <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-dark tracking-wide leading-none">
                Our Facility
              </h1>
              <div className="w-15 md:w-25 lg:w-35 h-[3px] bg-secondary mx-auto" />
            </div>

            {/* Paragraph 1 */}
            <p className="text-[#484848] text-[10px] sm:text-xs md:text-sm lg:text-base leading-relaxed mb-6 font-sans" data-aos="fade-up" data-aos-delay="50">
              Petrovöll GmbH specializes in the development, production and distribution of advanced high performance lubricants for automotive, industrial and marine applications. It was established in 1999 in Bochum, Germany and is a wholly owned subsidiary of the Haliburg Group of Companies.
            </p>

            {/* Slanted Image (Component 1) */}
            <div 
              className="relative w-full h-[220px] sm:h-[280px] rounded-[24px] overflow-hidden shadow-md mb-6 "
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              <img
                src="/moto/petrovoll/Component 1.png"
                alt="Our Facility Tanks"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Paragraph 2 */}
            <p className="text-[#484848] text-[10px] sm:text-xs md:text-sm lg:text-base leading-relaxed font-sans" data-aos="fade-up" data-aos-delay="150">
              Petrovöll utilizes only the latest technologies and is equipped with a fully automated blending system made in Germany. Advanced logistics also provide the company's production team with unlimited growth opportunities. These advantages allow Petrovöll to deliver only the best quality products, achieve full customer satisfaction and remain committed to achieving full compliance in all aspects of the business.
            </p>
          </div>

          {/* Right Column: 2x2 Grid of Facility Images (Staggered Layout) */}
          <div className="lg:col-span-7 w-full pt-6 sm:pt-10 lg:pt-12">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              
              {/* Left Column of Grid */}
              <div className="flex flex-col gap-4 sm:gap-6">
                {/* Top Left (Component 2) */}
                <div 
                  className="relative group aspect-square sm:aspect-[4/3] rounded-[20px] overflow-hidden shadow-md bg-gray-250 cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/moto/petrovoll/Component 2.png"
                    alt="Blending & Filling Capacity"
                    className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-500"
                  />
                  {/* Overlay (Fades in on hover) */}
                  <div className="absolute inset-0 bg-black/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Number (Fades and slides in on hover) */}
                  <div className="absolute top-4 right-6 z-20 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-5xl sm:text-6xl font-heading font-extrabold text-white opacity-40 tracking-tight select-none">
                      01
                    </span>
                  </div>
                  {/* Title (Fades and slides in on hover) */}
                  <div className="absolute bottom-6 left-6 z-20 max-w-[80%] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-white tracking-wide uppercase leading-tight">
                      Blending & Filling Capacity
                    </h3>
                  </div>
                </div>

                {/* Bottom Left (Component 4) */}
                <div 
                  className="relative group aspect-square sm:aspect-[4/3] rounded-[20px] overflow-hidden shadow-md bg-gray-250 cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <img
                    src="/moto/petrovoll/Component 4.png"
                    alt="Quality Control"
                    className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-500"
                  />
                  {/* Overlay (Fades in on hover) */}
                  <div className="absolute inset-0 bg-black/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Number (Fades and slides in on hover) */}
                  <div className="absolute top-4 right-6 z-20 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-5xl sm:text-6xl font-heading font-extrabold text-white opacity-40 tracking-tight select-none">
                      03
                    </span>
                  </div>
                  {/* Title (Fades and slides in on hover) */}
                  <div className="absolute bottom-6 left-6 z-20 max-w-[80%] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-white tracking-wide uppercase leading-tight">
                      Quality Control
                    </h3>
                  </div>
                </div>
              </div>

              {/* Right Column of Grid - Shifted Upwards */}
              <div className="flex flex-col gap-4 sm:gap-6 -translate-y-6 sm:-translate-y-10 lg:-translate-y-12">
                {/* Top Right (Component 3) */}
                <div 
                  className="relative group aspect-square sm:aspect-[4/3] rounded-[20px] overflow-hidden shadow-md bg-gray-250 cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <img
                    src="/moto/petrovoll/Component 3.png"
                    alt="Laboratory"
                    className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-500"
                  />
                  {/* Overlay (Fades in on hover) */}
                  <div className="absolute inset-0 bg-black/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Number (Fades and slides in on hover) */}
                  <div className="absolute top-4 right-6 z-20 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-5xl sm:text-6xl font-heading font-extrabold text-white opacity-40 tracking-tight select-none">
                      02
                    </span>
                  </div>
                  {/* Title (Fades and slides in on hover) */}
                  <div className="absolute bottom-6 left-6 z-20 max-w-[80%] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-white tracking-wide uppercase leading-tight">
                      Laboratory
                    </h3>
                  </div>
                </div>

                {/* Bottom Right (Component 5) */}
                <div 
                  className="relative group aspect-square sm:aspect-[4/3] rounded-[20px] overflow-hidden shadow-md bg-gray-250 cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <img
                    src="/moto/petrovoll/Component 6.png"
                    alt="Packaging Automation"
                    className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-500"
                  />
                  {/* Overlay (Fades in on hover) */}
                  <div className="absolute inset-0 bg-black/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Number (Fades and slides in on hover) */}
                  <div className="absolute top-4 right-6 z-20 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-5xl sm:text-6xl font-heading font-extrabold text-white opacity-40 tracking-tight select-none">
                      04
                    </span>
                  </div>
                  {/* Title (Fades and slides in on hover) */}
                  <div className="absolute bottom-6 left-6 z-20 max-w-[80%] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-white tracking-wide uppercase leading-tight">
                      Packaging Automation
                    </h3>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
