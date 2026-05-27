// app/components/AboutSection.tsx

"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import "aos/dist/aos.css";

const features = [
  {
    title: "Industry Expertise",
    description:
      "With years of expertise in fluid control, compressed air, and pneumatics, we deliver the right solutions for your industry.",
  },
  {
    title: "Customised Solutions",
    description:
      "Bespoke engineering systems tailored to the specific requirements of life sciences, analytical, transport, and industrial applications.",
  },
  {
    title: "Sustainability",
    description:
      "We are focused on delivering energy-efficient and environmentally friendly systems that support your sustainability goals.",
  },
  {
    title: "Customer-center Approach",
    description:
      "AEG puts your needs first, providing expert support from design to aftercare to help you reach your operational goals.",
  },
];

export default function AirAbout() {
  return (
    <section className="w-full bg-[#f3f3f3] py-[70px]">
      <div className="mx-auto max-w-[1600px] px-5">
        {/* ======================================
            TOP FEATURE CARDS
        ====================================== */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="
                rounded-[8px]
                border
                border-[#e7e7e7]
                bg-[#fafafa]
                px-7
                py-8
                text-center
                shadow-[0_3px_8px_rgba(0,0,0,0.08)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]
              "
            >
              <div className="mb-4 flex justify-center">
                <CheckCircle2
                  className="stroke-[1.7]"
                  size={34}
                  color="#00A6E6"
                />
              </div>

              <p className="mb-4 text-[18px] font-bold leading-tight text-[#1f1f1f]">
                {item.title}
              </p>

              <p className="text-[16px] leading-[1.9] text-[#757575]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ======================================
            MAIN ABOUT GRID
        ====================================== */}

        <div className="mt-[90px] grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-10">
          {/* LEFT IMAGE */}
          <div data-aos="fade-right" className="relative">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                fill
                src="/ae/ae-about-2.png"
                alt="Industrial Machine"
                className="object-contain w-auto h-full"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            data-aos="fade-left"
            className="flex flex-col justify-center"
          >
            {/* SUBTITLE */}
            <span className="mb-4 text-[16px] font-semibold text-[#ff3b30]">
              About AEG
            </span>

            {/* HEADING */}
            <h2
              className="
                max-w-[640px]
                text-4xl
                font-bold
                leading-[1.45]
                tracking-[-0.6px]
                text-[#2a2a2a]
              "
            >
              Experts in fluidics & pneumatics, offering
              cutting-edge, reliable solutions.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-4
                text-[16px]
                leading-[2]
                text-[#6f6f6f]
              "
            >
              For over twenty five years, the{" "}
              <span className="font-semibold text-[#404040]">
                Air Engineering Group (AEG)
              </span>{" "}
              has been involved in the design, assembly and supply of bespoke
              pneumatics technologies and compressed air equipment. Whatever
              the application, our team can design and provide an effective
              solution.                         
            </p>

            {/* TABS */}
            <div
              className="
                mt-4
                flex
                overflow-hidden
                border
                border-[#ececec]
              "
            >
              <button
                className="
                  relative
                  flex-1
                  bg-white
                  px-8
                  py-5
                  text-[16px]
                  font-semibold
                  text-[#242424]
                "
              >
                <span
                  className="
                    absolute
                    left-0
                    top-0
                    h-[3px]
                    w-full
                    bg-[#ff3b30]
                  "
                />

                Our Mission
              </button>

              <button
                className="
                  flex-1
                  bg-[#f8f8f8]
                  px-8
                  py-5
                  text-[16px]
                  font-semibold
                  text-[#242424]
                "
              >
                Our Commitment
              </button>
            </div>

            {/* TAB CONTENT */}
            <p
              className="
                mt-4
                text-[16px]
                leading-[2]
                text-[#6d6d6d]
              "
            >
              Our mission is to deliver innovative and sustainable, fluid and
              air control solutions that empower industries to operate at their
              best. We strive to build long-term partnerships with our clients,
              providing high-quality, reliable systems that optimise
              performance, enhance productivity, and contribute to a greener
              future.
            </p>

            {/* BUTTON */}
            <div className="mt-5">
              <button
                className="
                  group
                  relative
                  overflow-hidden
                  bg-[#00A6E6]
                  px-10
                  py-4
                  text-[16px]
                  font-semibold
                  uppercase
                  tracking-[0.5px]
                  text-white
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:bg-[#008fc7]
                  cursor-pointer
                "
              >
                <span className="relative z-10">Learn More</span>

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
        </div>
      </div>
    </section>
  );
}