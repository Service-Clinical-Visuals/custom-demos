// app/components/IntegratedOEMSolutions.tsx

"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { Play } from "lucide-react";

export default function AirSolutions() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#02A6DC]
        to-[#005E82]
        py-[90px]
      "
    >
      {/* =====================================================
          BACKGROUND OVERLAY
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]
        "
      />

      {/* =====================================================
          CONTENT WRAPPER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1600px] px-6">
        {/* =====================================================
            TOP CONTENT
        ====================================================== */}

        <div
          data-aos="fade-up"
          className="text-center"
        >
          {/* LABEL */}
          <span
            className="
              text-[16px]
              font-medium
              tracking-[0.2px]
              text-white/95
            "
          >
            Why Partner with Air Engineering Group Ltd?
          </span>

          {/* HEADING */}
          <h2
            className="
              mx-auto
              mt-5
              max-w-[1120px]
              text-[32px]
              font-bold
              leading-[1.35]
              tracking-[-0.8px]
              text-white
            "
          >
            Integrated OEM Fluid and Pneumatic Solutions Designed for
            Performance and Reliability
          </h2>
        </div>

        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div
          className="
            mt-[60px]
            grid
            grid-cols-1
            items-center
            gap-16
            lg:grid-cols-[1.1fr_1fr]
          "
        >
          {/* =================================================
              VIDEO PLACEHOLDER
          ================================================== */}

          <div
            data-aos="fade-right"
            className="
              relative
              overflow-hidden
              rounded-[8px]
              border
              border-white/10
              shadow-[0_16px_40px_rgba(0,0,0,0.18)]
            "
          >
            {/* =================================================
                VIDEO CONTAINER
            ================================================== */}

            <div
              className="
                relative
                flex
                h-[420px]
                items-center
                justify-center
                bg-[linear-gradient(45deg,#ececec_25%,transparent_25%,transparent_75%,#ececec_75%,#ececec),linear-gradient(45deg,#ececec_25%,transparent_25%,transparent_75%,#ececec_75%,#ececec)]
                bg-[length:56px_56px]
                bg-[position:0_0,28px_28px]
                bg-[#f4f4f4]
              "
            >
                <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
              
            </div>
          </div>

          {/* =================================================
              RIGHT CONTENT
          ================================================== */}

          <div data-aos="fade-left">
            {/* PARAGRAPH 1 */}
            <p
              className="
                text-[16px]
                leading-[2]
                text-white
              "
            >
              At AEG, we specialise in designing and manufacturing pneumatic
              and fluid control chassis assemblies that are fully integrated
              into your device, providing seamless functionality and optimised
              performance. These assemblies act as the backbone of your fluid
              and pneumatic systems, incorporating key components like
              integrated manifolds into a single, custom-designed solution.
              Our chassis assemblies are engineered to meet your exact
              requirements, ensuring they become a vital, functional part of
              the equipment they are designed for.
            </p>

            {/* PARAGRAPH 2 */}
            <p
              className="
                mt-7
                text-[16px]
                leading-[2]
                text-white
              "
            >
              Explore how Air Engineering Group can improve fluid system
              performance with custom iSAR™ manifolds, delivering precise
              control across air, gas and liquid applications.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <button
                className="
                  cursor-pointer
                  group
                  relative
                  overflow-hidden
                  bg-white
                  px-12
                  py-4
                  text-[15px]
                  font-bold
                  text-[#009DD8]
                  shadow-[0_12px_24px_rgba(0,0,0,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
                style={{
                  clipPath:
                    "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
                }}
              >
                <span className="relative z-10">
                  Explore Product
                </span>

                <span
                  className="
                    absolute
                    inset-0
                    translate-y-full
                    bg-black/5
                    transition-transform
                    duration-300
                    group-hover:translate-y-0
                  "
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}