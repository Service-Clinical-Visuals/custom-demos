// app/components/WhyChooseISAR.tsx

"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight, Play } from "lucide-react";

const industries = [
  "Analytical",
  "Medical & Life Science",
  "Automation & Manufacturing",
  "Energy & Renewables",
];

export default function AirChoose() {
  return (
    <section className="w-full bg-[#f5f5f5]">
      {/* =====================================================
          TOP SECTION
      ====================================================== */}

      <div className="mx-auto max-w-[1600px] px-6 py-[80px]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* ============================================
              VIDEO PLACEHOLDER
          ============================================= */}

          <div
            data-aos="fade-right"
            className="
              relative
              overflow-hidden
              border
              border-[#ececec]
              bg-[#f0f0f0]
            "
          >
            {/* FUTURE VIDEO CONTAINER */}
            <div
              className="
                relative
                flex
                h-[420px]
                items-center
                justify-center
                bg-[linear-gradient(45deg,#efefef_25%,transparent_25%,transparent_75%,#efefef_75%,#efefef),linear-gradient(45deg,#efefef_25%,transparent_25%,transparent_75%,#efefef_75%,#efefef)]
                bg-[length:56px_56px]
                bg-[position:0_0,28px_28px]
              "
            >
                <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* ============================================
              RIGHT CONTENT
          ============================================= */}

          <div data-aos="fade-left">
            {/* LABEL */}
            <span
              className="
                text-[16px]
                font-bold
                uppercase
                tracking-[0.4px]
                text-[#ff3b30]
              "
            >
              iSAR™ (Integrated System Architecture)
            </span>

            {/* HEADING */}
            <h2
              className="
                mt-4
                text-4xl
                font-bold
                leading-[1.18]
                tracking-[-1px]
                text-[#323232]
              "
            >
              Why Choose iSAR™
              Custom Manifolds
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                text-[16px]
                leading-[2]
                text-[#6f6f6f]
              "
            >
              Our iSAR™ (Integrated System Architecture) manifolds offer a
              bespoke solution that brings together multiple fluid management
              components into a single, robust platform. This reduces the need
              for multiple connections, minimising potential leaks, energy loss
              and maintenance requirements, while streamlining assembly,
              reducing installation time and improving overall system
              reliability.
            </p>

            {/* BUTTON GRID */}
            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              {industries.map((item, index) => (
                <button
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="
                    cursor-pointer
                    group
                    flex
                    items-center
                    justify-between
                    overflow-hidden
                    border
                    border-[#00A6DF]
                    bg-[#00A6DF]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_8px_20px_rgba(0,166,223,0.25)]
                  "
                > 
                  {/* TEXT */}
                  <span
                    className="
                      px-5
                      py-4
                      text-left
                      text-[16px]
                      font-semibold
                      tracking-[0.2px]
                      text-white
                    "
                  >
                    {item}
                  </span>

                  {/* ICON BOX */}
                  <span
                    className="
                      flex
                      h-full
                      w-[64px]
                      items-center
                      justify-center
                      border-l
                      border-[#0095c9]
                      bg-white
                      transition-all
                      duration-300
                      group-hover:bg-[#f5f5f5]
                    "
                  >
                    <ArrowRight
                      size={20}
                      className="
                        text-black
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          CTA BANNER
      ====================================================== */}

      <div
        className="
          relative
          overflow-hidden

          py-[80px]
        "
      >
        {/* BACKGROUND TEXTURE */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.76]
            blur-[1px]
          "
        >
          <img src="/ae/ae-choose.png" alt="bg-choose" />
        </div>

        {/* CONTENT */}
        <div
          data-aos="zoom-in"
          className="
            relative
            z-10
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            px-6
            text-center
          "
        >
          {/* HEADING */}
          <h3
            className="
              max-w-[1180px]
              text-[38px]
              font-bold
              uppercase
              leading-[1.45]
              tracking-[-0.7px]
              text-white
            "
          >
            CUSTOM FLUID MANIFOLDS BY AIR ENGINEERING GROUP:
            <br />
            STREAMLINED, HIGH PERFORMANCE SOLUTIONS
            WITH iSAR™
          </h3>

          {/* BUTTON */}
          <button
            className="
              group
              relative
              mt-10
              overflow-hidden
              bg-white
              px-12
              py-4
              text-[16px]
              font-bold
              text-[#009FD8]
              shadow-[0_10px_20px_rgba(0,0,0,0.12)]
              transition-all
              duration-300
              hover:-translate-y-1
              cursor-pointer
            "
            style={{
              clipPath:
                "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
            }}
          >
            <span className="relative z-10">Get in Touch</span>

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
    </section>
  );
}