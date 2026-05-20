"use client";

import { FiArrowRight, FiCheck } from "react-icons/fi";

const features = [
  "Recognized for exceptional image quality, advanced functionality, and compact design",
  "Global presence including France, Spain, Italy, Finland, Ukraine, the USA, and Australia",
  "Offers a complete ultrasound range from ultraportable to full workstation systems",
  "Suitable for diverse medical and diagnostic applications across hospitals, clinics, emergency care, and point-of-care imaging",
];

export default function SonoCompany() {
  return (
    <section className="relative bg-[#f5f5f5] py-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT CONTENT */}
          <div className="pt-6">
            {/* SMALL TITLE */}
            <div data-aos="fade-up">
              <span className="text-[#123f88] underline underline-offset-4 text-[16px] font-medium">
                Our Company
              </span>
            </div>

            {/* HEADING */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h2 className="mt-5 text-[#123f88] text-4xl leading-[1.12] font-semibold tracking-[-1.8px] max-w-[620px]">
                Innovation Is At The Heart Of Our DNA
              </h2>
            </div>

            {/* PARAGRAPHS */}
            <div
              className="mt-10 space-y-7 max-w-[650px]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p className="text-[#6a6a6a] text-[16px] leading-[1.9] font-normal">
                Sonoscanner was created by and for physicians. Sonoscanner
                ultrasound scanners are particularly well known for their image
                quality, functionality and compactness. Currently, more than
                6,400 doctors are practicing ultrasound with Sonoscanner, in
                more than 56 countries around the world.
              </p>

              <p className="text-[#6a6a6a] text-[16px] leading-[1.9] font-normal">
                Sonoscanner technology has been chosen by CNES and NASA for
                experiments in space and by the French army, because of the
                portability of the device, the quality of the images and its
                simplicity of use.
              </p>

              <p className="text-[#6a6a6a] text-[16px] leading-[1.9] font-normal">
                The Sonoscanner line includes five flagship products
                specifically: the ultraportable U-Lite and T-Lite, the portable
                ultrasound scanners Orcheo Lite and Onina and the Orcheo XQ
                station.
              </p>
            </div>

            {/* FEATURES */}
            <div
              className="mt-10 space-y-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* ICON */}
                  <div className="min-w-[22px] min-h-[22px] rounded-full bg-[#123f88] flex items-center justify-center mt-[3px]">
                    <FiCheck className="text-white text-[13px]" />
                  </div>

                  {/* TEXT */}
                  <p className="text-[#6c6c6c] text-[16px] leading-[1.7]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <div data-aos="fade-up" data-aos-delay="450">
              <button className="mt-12 bg-[#123f88] hover:bg-[#0d326d] transition-all duration-300 text-white rounded-full h-[58px] px-9 flex items-center gap-4 text-[15px] font-semibold shadow-lg">
                Discover Our Story

                <div className="w-7 h-7 rounded-full bg-[#1d4b96] flex items-center justify-center">
                  <FiArrowRight className="text-[15px]" />
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-5">
              {/* TOP LARGE IMAGE */}
              <div
                className="col-span-2 rounded-[22px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                data-aos="zoom-in"
              >
                
                <img src="/sono-scanner/sono-company-1.png" alt="logo" className="w-full" />
              </div>

              {/* BOTTOM LEFT */}
              <div
                className="rounded-[22px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                data-aos="fade-right"
                data-aos-delay="150"
              >
                                <img src="/sono-scanner/sono-company-2.png" alt="logo" className="w-full" />

              </div>

              {/* BOTTOM RIGHT */}
              <div
                className="rounded-[22px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                data-aos="fade-left"
                data-aos-delay="250"
              >
                                <img src="/sono-scanner/sono-company-3.png" alt="logo" className="w-full" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}