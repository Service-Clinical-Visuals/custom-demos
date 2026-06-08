"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight } from "lucide-react";

export default function FluorescenceSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1560px] 2xl:max-w-[80%] mx-auto px-6">

        {/* Top Row: Title + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <div>
            <h2 className="text-[32px] sm:text-[38px] font-bold text-[#222222] leading-[1.2] uppercase tracking-tight">
              Bipolar Head and Unipolar Head
            </h2>
            <p className="mt-2 text-[15px] text-[#666666]">
              Be complementary and supportive
            </p>
          </div>
          <button className="flex-shrink-0 h-[44px] px-6 rounded-full border border-[#099F94] text-[#099F94] font-semibold text-[14px] flex items-center gap-2 hover:bg-[#099F94] hover:text-white transition-all">
            Request Information <ArrowRight size={16} />
          </button>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mt-10">

          {/* LEFT: Product descriptions */}
          <div data-aos="fade-right" className="space-y-8">

            {/* Bipolar Head */}
            <div className="border border-gray-100 rounded-[16px] p-6 shadow-sm">
              <h3 className="text-[22px] font-bold text-[#222222]">Bipolar Head</h3>
              <p className="mt-3 text-[15px] leading-[26px] text-[#666666]">
                The purpose of the Bipolar Head made of impact alloy with ISO 5832-9 quality levels
                is particularly suitable for the treatment of femoral neck fractures. The principle
                of the Bipolar Head functions as a direct sliding partner with the acetabulum with
                different centers of rotation that has been established for years as the standard.
              </p>
              <button className="mt-4 text-[#099F94] font-semibold text-[14px] flex items-center gap-1 hover:gap-2 transition-all">
                Read More <ArrowRight size={15} />
              </button>
            </div>

            {/* Unipolar Head */}
            <div className="border border-gray-100 rounded-[16px] p-6 shadow-sm">
              <h3 className="text-[22px] font-bold text-[#222222]">Unipolar Head</h3>
              <p className="mt-3 text-[15px] leading-[26px] text-[#666666]">
                The Unipolar Head made of impact alloy with ISO 5832-9 quality levels is particularly
                suitable for the treatment of femoral neck fractures. The principle of the Unipolar
                Head functions in a very simple and reliable way for patients to use due to its straight
                design that is always ready for patients to use.
              </p>
              <button className="mt-4 text-[#099F94] font-semibold text-[14px] flex items-center gap-1 hover:gap-2 transition-all">
                Read More <ArrowRight size={15} />
              </button>
            </div>

          </div>

          {/* RIGHT: Video clip */}
          <div
            data-aos="zoom-in"
            className="bg-white rounded-[24px] shadow-lg overflow-hidden relative"
            style={{ aspectRatio: "16/9" }}
          >
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
}
