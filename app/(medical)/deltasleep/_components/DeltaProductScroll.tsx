"use client";

import DeltaScrollStrip from "./DeltaScrollStrip";
import DeltaScrollRevealText from "./DeltaScrollRevealText";

const HEADING_TEXT =
  " Our Products are designed to help patients with sleep-related breathing disorders achieve consistent, restful sleep through safe, reliable, and user-friendly technology.";

export default function DeltaProductScroll() {

  return (
    <>
      <section className="relative bg-[#dfe7e3] flex flex-col justify-center">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-12 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full">
            <div className="flex items-center gap-2" data-aos="fade-up">
              <span className="w-[8px] h-[8px] rounded-full bg-[#00695f]" />
              <p className="text-[18px] font-semibold text-[#00695f]">
                Delta Products
              </p>
            </div>

            <DeltaScrollRevealText
              as="h1"
              text={HEADING_TEXT}
              className="mt-6 text-[#232323] text-4xl lg:text-7xl font-semibold leading-[1.25]"
            />
          </div>
        </div>
      </section>

      <DeltaScrollStrip />
    </>
  );
}
