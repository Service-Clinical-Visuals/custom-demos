"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function InvidiaCamera() {
  return (
    <section className="relative overflow-hidden bg-[#505866] py-[58px]">
      {/* SUBTLE RADIAL TEXTURE */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="absolute bottom-[-180px] right-[-120px] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:8px_8px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-380 grid-cols-1 items-stretch gap-[38px] px-8 lg:grid-cols-[1.08fr_0.92fr]">
        {/* ======================================
            LEFT - VIDEO CONTAINER
        ======================================= */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="relative h-full"
        >
          {/* VIDEO FRAME */}
          <div className="relative h-full overflow-hidden rounded-[18px] bg-[#E9E9E9] shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
            {/* CHECKER PLACEHOLDER */}
            <div
              className="absolute inset-0"
            />

            <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* ======================================
            RIGHT - CONTENT
        ======================================= */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="relative"
        >
          {/* TITLE */}
          <div data-aos="fade-up">
            <h2 className="text-4xl mb-5 font-semibold leading-[1.08] tracking-[-1.6px] text-[#D3AB00]">
              4K Fluorescence Imaging Solution
            </h2>
          </div>

          {/* CONTENT CARD */}
          <div
            data-aos="fade-up"
            data-aos-delay="120"
            className="mt-1.5 rounded-[16px] border border-[#69717E] bg-[rgba(77,85,96,0.78)] p-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-[2px]"
          >
            {/* TOP BLOCK */}
            <div>
              <h3 className="text-lg font-semibold tracking-[-0.4px] text-white">
                4K ICG/NIR Camera Control Unit
              </h3>

              <p className="mt-5 text-base leading-[1.95] text-[#ECECEC]">
                Featuring an extended touchscreen,
                dual-endoscope support, multi-mode
                viewing, and real-time streaming. Enjoy
                exceptional image quality with optional
                multi-color fluorescence and flexible
                storage.
              </p>
            </div>

            {/* DIVIDER */}
            <div className="my-1.5 h-px w-full bg-[#69717E]" />

            {/* BOTTOM BLOCK */}
            <div>
              <h3 className="text-lg font-semibold tracking-[-0.4px] text-white">
                ICG/NIR Camera Head
              </h3>

              <p className="mt-5  text-base leading-[1.95] text-[#ECECEC]">
                Equipped with a native dual 4K CMOS
                sensor for true 4K capture of WLI and
                fluorescence images. Includes programmable
                camera buttons, zoom objective, and auto
                focus for enhanced precision.
              </p>

              {/* BUTTON */}
              <div className="mt-5">
                <Link
                  href="/"
                  className="group inline-flex h-[42px] items-center overflow-hidden rounded-[4px] bg-[#D3AB00] pl-5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-[2px]"
                >
                  <span>View Product Details</span>

                  <span className="ml-4 flex h-full w-[34px] items-center justify-center bg-white text-[#D3AB00] transition-all duration-300 group-hover:w-[42px]">
                    <ArrowRight
                      size={15}
                      strokeWidth={2.5}
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}