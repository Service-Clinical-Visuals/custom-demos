"use client";

import React from "react";
import Button from "./Button";
import SectionBadge from "./SectionBadge";

export default function Heritage() {
  return (
    <section
      id="heritage"
      className="relative w-full bg-[#0D0D0D] py-16 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 flex items-center overflow-hidden"
    >
      <div className="custom-container">
        {/* Mobile-Only Heading (First on small screens) */}
        <div className="flex flex-col items-start w-full xl:hidden mb-6 sm:mb-8" data-aos="fade-up">
          <SectionBadge text="Original Syprin" className="mb-3" />
          <h2 className="text-[#F6F6F6]">
            Over 100 Years of German Automotive Heritage
          </h2>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 sm:gap-10 xl:gap-14 min-[3800px]:gap-24 w-full">
          {/* Visual Column (Second on small screens, Left Column on desktop) */}
          <div
            className="relative w-full xl:w-1/2 flex items-center justify-center min-h-[340px] sm:min-h-[440px] md:min-h-[500px] lg:min-h-[560px] min-[2500px]:min-h-[820px] min-[3800px]:min-h-[1050px]"
            data-aos="fade-right"
          >
            {/* Background Product Wheel: Touches top and bottom on desktop layouts */}
            <div className="absolute left-0 top-0 bottom-0 xl:-top-24 min-[2500px]:-top-32 min-[3800px]:-top-44 xl:-bottom-24 min-[2500px]:-bottom-32 min-[3800px]:-bottom-44 w-[85%] sm:w-[80%] xl:w-[85%] max-w-[580px] min-[2500px]:max-w-[820px] min-[3800px]:max-w-[1100px] overflow-hidden flex items-center justify-start pointer-events-none z-0">
              <img
                src="/moto/syprin/about1.png"
                alt="Original Syprin Product Wheel"
                className="w-full h-full object-cover object-left-top"
              />
            </div>

            {/* Foreground Rounded Black Card with White Border */}
            <div className="relative z-10 ml-auto w-[82%] sm:w-[78%] lg:w-[82%] max-w-[580px] min-[2500px]:max-w-[780px] min-[3800px]:max-w-[1000px] aspect-[677/636] bg-[#0D0D0D] border border-white rounded-[20px] min-[3800px]:rounded-[36px] p-6 sm:p-10 lg:p-12 min-[3800px]:p-20 flex items-center justify-center shadow-2xl">
              <img
                src="/moto/syprin/about2.png"
                alt="Original Syprin"
                className="w-full max-w-[440px] min-[2500px]:max-w-[620px] min-[3800px]:max-w-[820px] h-auto max-h-[80%] object-contain"
              />
            </div>
          </div>

          {/* Text Column (Third on small screens, Right Column on desktop) */}
          <div
            className="flex flex-col items-start w-full xl:w-1/2"
            data-aos="fade-left"
          >
            {/* Desktop Heading (Hidden on mobile, visible on xl+) */}
            <div className="hidden xl:flex flex-col items-start w-full">
              <SectionBadge text="Original Syprin" className="mb-3 min-[3800px]:mb-6" />

              <h2 className="text-[#F6F6F6] mb-5 min-[3800px]:mb-8">
                Over 100 Years of German Automotive Heritage
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-5 min-[3800px]:space-y-8 text-[#CACACA] mb-8 min-[3800px]:mb-12 w-full">
              <p>
                The ORIGINAL SYPRIN® brand dates back to a family-run company in
                Chemnitz, Saxony. For over a hundred years, the Free State of Saxony
                has been considered the center of the German automotive
                industry—a location that combines innovation and engineering
                expertise. This is where our products are manufactured,
                representing “Made in Germany” quality and used worldwide.
              </p>

              <p>
                Since our founding in 2010, we have primarily been developing and
                producing high-quality fuel additives and cleaners for gasoline
                and diesel engines.Due to rapid growth, the company changed its
                legal status from a GbR (civil law partnership) to a GmbH (limited
                liability company) in August 2025 and also changed its name to
                “OS Motorsystem.”
              </p>

              <p>
                As an experienced medium-sized company with a background in
                production and workshop practice, we know what matters in
                day-to-day operations: reliable products, ease of use, and
                noticeable results.
              </p>
            </div>

            <Button
              text="Discover Now"
              href="#categories"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
