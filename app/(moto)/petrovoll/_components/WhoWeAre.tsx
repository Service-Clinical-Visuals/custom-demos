"use client";

import React from "react";
import Button from "./Button";

export default function WhoWeAre() {
  const certs = [
    { src: "/moto/petrovoll/Frame 1.png", alt: "ISO 9001:2015" },
    { src: "/moto/petrovoll/Frame 2.png", alt: "ISO 14001:2015" },
    { src: "/moto/petrovoll/Frame 3.png", alt: "OHSAS 18001:2007" },
    { src: "/moto/petrovoll/Frame 4.png", alt: "API" },
    { src: "/moto/petrovoll/Frame 5.png", alt: "Chemical Compliance" },
    { src: "/moto/petrovoll/Frame 6.png", alt: "JASO MA2" },
  ];

  return (
    <section id="about" className="relative w-full py-16 md:py-24 bg-white overflow-hidden flex items-center">
      <div className="custom-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Content Column */}
          <div className="w-full lg:col-span-7 flex flex-col items-start justify-center">
            {/* Header Design */}
            <div className="flex flex-col gap-1 sm:gap-2 mb-4 sm:mb-8" data-aos="fade-up">
              <h2 className="text-md sm:text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-dark tracking-wide leading-none">
                Who We Are
              </h2>
              <div className="w-15 lg:w-25 h-[3px] bg-secondary mx-auto" />
            </div>

            {/* Description Paragraphs */}
            <div className="flex flex-col gap-2 sm:gap-4 text-gray-700 text-[10px] sm:text-xs md:text-sm lg:text-base leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              <p>
                Petrovöll GmbH specializes in the development, production and distribution of advanced high performance lubricants for automotive, industrial and marine applications. It was established in 1999 in Bochum, Germany and is a wholly owned subsidiary of the Haliburg Group of Companies.
              </p>
              <p>
                High quality products, short delivery times and competitive prices make the company, which is ISO 9001 : 2015, ISO 14001:2015 and ISO 18001:2007 certified, a recognized brand and trusted trade partner both at home and abroad.
              </p>
              <p>
                Petrovöll's main export trade markets include the Middle East, Africa, South America, Asia-Pacific and CIS countries. At present, the company supplies to customers in over a dozen countries around the world, with a distribution network expanding rapidly.
              </p>
            </div>

            {/* Certifications Grid */}
            <div 
              className="grid grid-cols-3 gap-4 sm:gap-6 w-full mt-4 sm:mt-6"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              {certs.map((cert, index) => (
                <div 
                  key={index}
                  className="border border-gray-200 bg-white flex items-center justify-center h-14 sm:h-20 md:h-24 lg:h-26 xl:h-28 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:border-gray-400 transition-all duration-300"
                >
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    className=" object-contain filter brightness-95 contrast-105 hover:brightness-100 transition-all"
                  />
                </div>
              ))}
            </div>

            {/* Read More Slanted Button */}
            <div className="mt-4 sm:mt-6" data-aos="fade-up" data-aos-delay="300">
              <Button
                text="Read More"
                variant="primary-slanted"
                href="#about"
              />
            </div>
          </div>

          {/* Right Image Column with Custom Diagonal Cut */}
          <div className="w-full lg:col-span-5 flex justify-center" data-aos="fade-left">
            <div className="relative w-full h-[320px] sm:h-[450px] md:h-[500px] lg:h-[85vh] xl:h-[95vh] max-h-[800px] overflow-hidden [clip-path:polygon(0_0,_100%_0,_100%_calc(100%-40px),_calc(100%-40px)_100%,_0_100%)] sm:[clip-path:polygon(0_0,_100%_0,_100%_calc(100%-60px),_calc(100%-60px)_100%,_0_100%)] md:[clip-path:polygon(0_0,_100%_0,_100%_calc(100%-80px),_calc(100%-80px)_100%,_0_100%)] lg:[clip-path:polygon(0_0,_100%_0,_100%_calc(100%-100px),_calc(100%-100px)_100%,_0_100%)] shadow-xl bg-gray-50">
              <img
                src="/moto/petrovoll/who_img.png"
                alt="Petrovöll Storage Tanks"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
