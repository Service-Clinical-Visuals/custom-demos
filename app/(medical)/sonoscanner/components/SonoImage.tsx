"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";

const features = [
  {
    title: "RETINA+ IMAGES :",
    description:
      "Make even the most difficult diagnosis easier with enhanced tissue differentiation and crystal-clear visualization.",
  },
  {
    title: "VERY HIGH ACQUISITION RATE :",
    description:
      "The latest generation beamformer processor integrated in the U-Lite PRO ensures ultra-fast image acquisition.",
  },
  {
    title: "OSD LIGHTENING SCREEN",
    description:
      "Experience the most beautiful ultrasound image in any condition, with the optimized full-screen interface.",
  },
  {
    title: "UNIQUE ACTIVEPROBE TECHNOLOGY :",
    description:
      "The U-Lite Pro's ultra-light Full HD probes incorporate an exclusive image optimization system.",
  },
];

export default function SonoImage() {
  return (
    <section className="relative overflow-hidden bg-[#14387F] py-20">
      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0">
        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* RADIAL LIGHT */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_70%)]" />

        {/* LEFT WAVE */}
        <div className="absolute left-0 top-0 w-[450px] h-full opacity-[0.04] bg-[radial-gradient(circle_at_left,white_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
          {/* LEFT CONTENT */}
          <div>
            {/* HEADING */}
            <div data-aos="fade-up">
              <h2 className="max-w-[700px] text-white text-4xl leading-[1.12] tracking-[-2px] font-semibold">
                Experience Unmatched Image Quality In An Ultraportable Format
              </h2>
            </div>

            {/* VIDEO WRAPPER */}
            <div
              className="mt-10"
              data-aos="zoom-in"
              data-aos-delay="120"
            >
              <div className="relative overflow-hidden rounded-[28px] bg-[#e5e5e5] aspect-[16/9] shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                 <DynamicVideoPlayer type="short-1" className="absolute top-0 left-0 w-full h-full object-cover" />
              </div>
            </div>

            {/* DESCRIPTION */}
            <div
              className="mt-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p className="max-w-[760px] text-white/85 text-[16px] leading-[1.9]">
                The U-Lite PRO delivers advanced imaging performance,
                exceptional clarity, and smart portability for confident and
                efficient diagnostics.
              </p>
            </div>

            {/* BUTTON */}
            <div
              className="mt-10"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <button className="cursor-pointer group bg-white hover:bg-[#f2f2f2] transition-all duration-300 h-[58px] px-10 rounded-full flex items-center gap-5 text-[#123f88] text-[16px] font-semibold shadow-xl">
                See Product Range

                <div className="transition-transform duration-300 group-hover:translate-x-1">
                  <FiArrowRight className="text-[18px]" />
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT FEATURE PANEL */}
          <div
            className="rounded-[26px] bg-[#12479E]/95 border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.18)] p-6 lg:p-7 backdrop-blur-md"
            data-aos="fade-left"
          >
            {/* PANEL TITLE */}
            <div className="text-center">
              <h3 className="text-white text-2xl tracking-[-1px] font-semibold">
                Advanced Imaging In A Compact Design
              </h3>

              <div className="w-full h-[1px] bg-white/20 mt-5 mb-7" />
            </div>

            {/* FEATURE LIST */}
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white cursor-pointer rounded-[20px] p-7 shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                >
                  <div className="flex items-start justify-between gap-5">
                    {/* TEXT */}
                    <div>
                      <h4 className="text-[#123f88] text-[22px] leading-[1.3] tracking-[-0.5px] font-semibold">
                        {feature.title}
                      </h4>

                      <p className="mt-4 text-[#6f6f6f] text-[16px] leading-[1.9]">
                        {feature.description}
                      </p>
                    </div>

                    {/* ICON */}
                    <button className="min-w-[50px] h-[50px] rounded-full bg-[#123f88] flex items-center justify-center shadow-md">
                      <FiChevronDown className="text-white text-[20px]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}