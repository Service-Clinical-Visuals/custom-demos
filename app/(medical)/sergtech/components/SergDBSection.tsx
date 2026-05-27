"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import "aos/dist/aos.css";
import VideoPlaceholder from "./SergVideoPlaceholder";
import SergFeatures from "./SergFeatures";

export default function SergDBSection() {


  return (
    <div className="bg-[#CDC8FF29] py-20">
    <section className="max-w-[1750px] mx-auto">
      {/* TOP GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
        {/* VIDEO */}
        <div
          data-aos="fade-right"
          className="aspect-video rounded-[28px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#e7e7e7]"
        >
          <VideoPlaceholder />
        </div>

        {/* CONTENT */}
        <div
          data-aos="fade-left"
          className="pt-6"
        >
          <h2 className="text-[#252f8d] text-4xl leading-[1.18] font-bold tracking-[-1.2px]">
            What is DBS (Deep Brain Stimulation)?
          </h2>

          <div className="mt-8 space-y-6">
            <p className="text-[16px] leading-[2] text-[#767676]">
              DBS is the cornerstone of advanced Parkinson&apos;s Therapy. It
              delivers an inhibitory current to the parts of the brain affected
              by Parkinson&apos;s to drastically reduce the most severe motor
              symptoms.
            </p>

            <p className="text-[16px] leading-[2] text-[#767676]">
              Without StimSense, it can take 4 to 5 hours to program one DBS
              stimulator unit. In practice, this means that a clinician can only
              see one patient a day.
            </p>

            <p className="text-[16px] leading-[2] text-[#767676]">
              As symptoms fluctuate with disease progression, programs need to
              be reviewed in response to these changes.
            </p>

            <p className="text-[16px] leading-[2] text-[#767676]">
              DBS works, but the established support infrastructure around it is
              limited.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="mt-8 w-full h-[1px] bg-[#e3e3e3]" />

          {/* BUTTON */}
          <button className="cursor-pointer group mt-8 h-[54px] rounded-full bg-[#252f8d] hover:bg-[#313cb0] transition-all duration-300 pl-8 pr-3 flex items-center shadow-[0_10px_25px_rgba(37,47,141,0.18)]">
            <span className="text-white text-[16px] font-semibold tracking-wide">
              Explore Features
            </span>

            <div className="ml-6 w-[34px] h-[34px] rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-all duration-300">
              <ArrowUpRight size={16} className="text-white" />
            </div>
          </button>
        </div>
      </div>

      {/* BOTTOM GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 mt-14 items-center">
        {/* LEFT TEXT */}
        <div
          data-aos="fade-up"
          className="relative"
        >
          <h3 className="text-[#252f8d] text-4xl font-bold tracking-[-1px]">
            Pilot Study & Evidence
          </h3>

          <div className="mt-7 space-y-5">
            <p className="text-[16px] leading-[2] text-[#767676]">
              We completed a pilot study in collaboration with Boston
              Scientific to test StimSense inside live DBS programming sessions.
            </p>

            <p className="text-[16px] leading-[2] text-[#767676]">
              The aim was to evaluate its impact on session efficiency,
              decision making and clinical outcomes.
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div
          data-aos="zoom-in"
          className="relative flex flex-col md:flex-row gap-6"
        >
          {/* LEFT FLOAT BUTTON */}
          <button className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-[58px] h-[58px] rounded-full bg-[#252f8d] shadow-[0_10px_25px_rgba(37,47,141,0.22)] flex items-center justify-center">
            <ArrowLeft size={24} className="text-white" />
          </button>

          <div className="flex-1">
            <SergFeatures
              title="Significant Time Savings"
              description="Enables Full Automatic Programming under 90 minutes"
            />
          </div>

          <div className="flex-1 relative">
            <SergFeatures
              title="Maintained Clinical Outcomes"
              description="Outcomes comparable to Standard-of-Care using Automatic Programming"
            />

            {/* RIGHT FLOAT BUTTON */}
            <button className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-[58px] h-[58px] rounded-full bg-[#252f8d] shadow-[0_10px_25px_rgba(37,47,141,0.22)] flex items-center justify-center">
              <ArrowRight size={24} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
    </div>
        
  );
}