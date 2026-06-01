// app/components/ISARSection.tsx

"use client";

import Image from "next/image";
import { CheckCircle2, Play } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const benefits = [
  {
    title: "Medical Devices:",
    description:
      " Precision flow control in devices such as ventilators, infusion systems, and dialysis machines.",
  },
  {
    title: "Analytical Equipment:",
    description:
      " Reliable and accurate fluid control for laboratories, testing environments, and monitoring equipment.",
  },
  {
    title: "Automotive Vehicles:",
    description:
      " Enhanced performance in fuel, and cooling systems for both commercial and passenger vehicles.",
  },
  {
    title: "Industrial Applications:",
    description:
      " Robust fluid management solutions for automation, HVAC, and pneumatic systems in manufacturing environments.",
  },
];



export default function AirSection() {
  return (
    <section className="w-full bg-[#f5f5f5] py-[90px]">
      <div className="mx-auto max-w-[1600px] px-6">
        {/* =====================================================
            TOP GRID
        ====================================================== */}

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          {/* ============================================
              LEFT CONTENT
          ============================================= */}

          <div data-aos="fade-right">
            {/* LABEL */}
            <span
              className="
                text-[16px]
                font-bold
                uppercase
                tracking-[0.3px]
                text-[#ef3d2f]
              "
            >
              iSAR™ (Integrated System Architecture)
            </span>

            {/* HEADING */}
            <h2
              className="
                mt-4
                text-[32px]
                font-bold
                leading-[1.2]
                tracking-[-0.8px]
                text-[#2c2c2c]
              "
            >
              {/* OEM Fluid Technology Division */}
            </h2>

            {/* DESCRIPTION */}
            <div
              className="
                mt-7
                space-y-6
                text-[15px]
                leading-[2]
                text-[#707070]
              "
            >
              <p>
                At Air Engineering Group Ltd., our OEM Fluid Technology
                Division specialises in providing innovative, custom fluid
                manifold solutions tailored to meet your specific needs.
                Whether you require precision for medical devices, reliability
                in analytical equipment, or durability in automotive vehicles,
                our iSAR™ custom fluid manifolds deliver seamless integration
                and superior performance.
              </p>

              <p>
                A custom fluid manifold consolidates all functional components
                such as valves, sensors, and flow controllers into one compact,
                centralised unit. This modular approach simplifies fluid
                control, reduces system complexity, and optimises overall
                performance.
              </p>
            </div>

            {/* BUTTON */}
            <div className="mt-10">
              <button
                className="
                  cursor-pointer
                  group
                  relative
                  overflow-hidden
                  bg-[#00A9E8]
                  px-10
                  py-4
                  text-[14px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#0096cf]
                "
              >
                <span className="relative z-10">View Product</span>

                <span
                  className="
                    absolute
                    inset-0
                    translate-y-full
                    bg-black/10
                    transition-transform
                    duration-300
                    group-hover:translate-y-0
                  "
                />
              </button>
            </div>
          </div>

          {/* ============================================
              VIDEO PLACEHOLDER
          ============================================= */}

          <div
            data-aos="fade-left"
            className="
              relative
              overflow-hidden
              border
              border-[#e5e5e5]
              bg-[#ececec]
            "
          >
            {/* CHECKER PATTERN */}
            <div
              className="
                relative
                flex
                h-[430px]
                items-center
                justify-center
                bg-[linear-gradient(45deg,#f2f2f2_25%,transparent_25%,transparent_75%,#f2f2f2_75%,#f2f2f2),linear-gradient(45deg,#f2f2f2_25%,transparent_25%,transparent_75%,#f2f2f2_75%,#f2f2f2)]
                bg-[length:64px_64px]
                bg-[position:0_0,32px_32px]
              "
            >
                <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div className="mt-[70px] h-[1px] w-full bg-[#d9d9d9]" />

        {/* =====================================================
            BENEFITS TITLE
        ====================================================== */}

        <div
          data-aos="fade-up"
          className="mt-[55px] text-center"
        >
          <h3
            className="
              text-[28px]
              font-bold
              uppercase
              tracking-[-0.5px]
              text-[#3a3a3a]
            "
          >
            KEY BENEFITS OF iSAR™ CUSTOM MANIFOLDS
            AND THE INDUSTRIES WE SERVE
          </h3>
        </div>

        {/* =====================================================
            BENEFITS GRID
        ====================================================== */}

        <div
          className="
            mt-[55px]
            grid
            grid-cols-1
            gap-7
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {benefits.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="
                rounded-[4px]
                border
                border-[#ebebeb]
                bg-white
                px-7
                py-9
                text-center
                shadow-[0_4px_10px_rgba(0,0,0,0.08)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)]
              "
            >
              {/* ICON */}
              <div className="mb-5 flex justify-center">
                <CheckCircle2
                  size={42}
                  className="stroke-[1.6]"
                  color="#00A9E8"
                />
              </div>

              {/* TEXT */}
              <p
                className="
                  text-[16px]
                  leading-[1.9]
                  text-[#5f5f5f]
                "
              >
                <span className="font-bold text-[#2b2b2b]">
                  {item.title}
                </span>

                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}