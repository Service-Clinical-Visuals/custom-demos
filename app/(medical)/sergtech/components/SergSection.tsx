"use client";

import { Check, ArrowUpRight } from "lucide-react";

import "aos/dist/aos.css";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function SergSection() {

  const features = [
    {
      title: "Objective Scoring",
      description:
        "Our objective scoring system uses advanced sensing technology, proprietary biomarkers, and AI algorithms to deliver accurate Parkinson’s symptom assessment and support informed clinical decisions.",
    },
    {
      title: "Fast, Secure, Integrated",
      description:
        "Designed for seamless clinical integration, our platform delivers fast and secure data processing through lightweight algorithms and advanced edge device technology, enabling efficient and reliable Parkinson’s care solutions.",
    },
    {
      title: "Automates Programming",
      description:
        "Our intelligent automation platform provides instant feedback, advanced analytics, and high-resolution symptom scoring to support accurate DBS programming and optimized Parkinson’s treatment decisions.",
    },
    {
      title: "Personalized Care",
      description:
        "By leveraging comprehensive patient data and advanced analytics, our platform enables personalized Parkinson’s care, optimizing treatment plans and improving patient outcomes.",
    }
  ];

  return (
    <section className="relative overflow-hidden bg-[#1A237E] py-24 px-6">
      {/* BACKGROUND DESIGN */}
      <div className="absolute inset-0 overflow-hidden">
        <img src="/sergtech/serg-section-bg.png" alt="Background 1" className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] opacity-30 clip-path-hexagon" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-8 items-stretch">
          {/* LEFT SIDE */}
          <div data-aos="fade-right" className="flex flex-col h-full">
            <h2 className="text-white text-4xl leading-[1.1] tracking-[-1.8px] font-bold max-w-[680px]">
              This is why we built StimSense
            </h2>

            <div className="mt-8 space-y-5">
              <p className="text-white/90 text-[16px] leading-[2] font-medium">
                StimSense is an advanced automated assessment platform designed
                to support accurate and efficient DBS programming for
                Parkinson&apos;s care. By combining wearable sensor data,
                proprietary biomarkers, and AI-powered algorithms, the system
                objectively evaluates motor symptoms such as tremor, rigidity,
                bradykinesia, and dyskinesia.
              </p>

              {/* <p className="text-white/90 text-[16px] leading-[2] font-medium">
                The platform provides fast, secure, and intelligent symptom
                analysis with instant feedback and high-resolution scoring,
                helping clinicians optimize DBS settings and deliver more
                personalized Parkinson&apos;s care.
              </p> */}
            </div>

            {/* VIDEO CONTAINER */}
            <div
              data-aos="zoom-in"
              className="mt-10 aspect-video relative flex-1 min-h-0 rounded-[28px] overflow-hidden"
            >
             <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            data-aos="fade-left"
            className="flex flex-col gap-5 pt-6"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#f7f7f7] rounded-[26px] px-8 py-4 shadow-[0_10px_28px_rgba(0,0,0,0.12)] border border-white/30"
              >
                <div className="flex items-start gap-4">
                  {/* ICON */}
                  <div className="min-w-[22px] h-[22px] rounded-full bg-[#252f8d] flex items-center justify-center mt-[3px]">
                    <Check size={13} className="text-white stroke-[3]" />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3 className="text-[#313131] text-xl leading-tight font-bold">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-[#6f6f6f] text-[16px] leading-[1.9] font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* BUTTON */}
            <button className="cursor-pointer group mt-2 w-fit h-[56px] rounded-full bg-white hover:bg-[#f4f4f4] transition-all duration-300 pl-8 pr-3 flex items-center shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
              <span className="text-[#313131] text-[16px] font-bold tracking-wide">
                View Product Details
              </span>

              <div className="ml-7 w-[34px] h-[34px] rounded-full bg-[#252f8d] flex items-center justify-center group-hover:rotate-45 transition-all duration-300">
                <ArrowUpRight
                  size={16}
                  className="text-white"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* CUSTOM HEXAGON STYLE */}
      <style jsx>{`
        .clip-path-hexagon {
          clip-path: polygon(
            25% 6.7%,
            75% 6.7%,
            100% 50%,
            75% 93.3%,
            25% 93.3%,
            0% 50%
          );
        }
      `}</style>
    </section>
  );
}