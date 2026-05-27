"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import "aos/dist/aos.css";

export default function SergInnovation() {

  return (
    <section className="w-full bg-[#f5f5f5] py-16 px-6 overflow-hidden">
      <div className="max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-14 items-center">
          {/* LEFT IMAGE SECTION */}
          <div
            data-aos="fade-right"
            className="relative w-full h-full"
          >
            {/* IMAGE CONTAINER */}
            <div className="">
              <img
                src="/sergtech/serg-innovation.png"
                alt="Healthcare Innovation"
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            data-aos="fade-left"
            className="pb-4"
          >
            <h2 className="text-[#252f8d] text-4xl leading-[1.15] tracking-[-1.5px] font-bold max-w-[650px]">
              Pioneering new digital health solutions
            </h2>

            <div className="mt-4 space-y-3">
              <p className="text-[16px] leading-[2] text-[#707070]">
                The future of healthcare is bright: wearable sensing, the
                Internet of Things (IoT), digital medicine, and AI... but how
                can these technologies radically change Parkinson&apos;s care?
              </p>

              <p className="text-[16px] leading-[2] text-[#707070]">
                At SERG Technologies, we combine expertise in
                bio-mechatronics and clinical neurology to develop innovative
                technologies that support smarter Parkinson&apos;s monitoring,
                personalized treatment, and improved patient care.
              </p>

              <p className="text-[16px] leading-[2] text-[#707070]">
                We are advancing proprietary sensing technologies and
                intelligent algorithms to accurately monitor Parkinsonian motor
                symptoms both inside and outside the clinic, enabling better
                patient insights and personalized care.
              </p>

              <p className="text-[16px] leading-[2] text-[#707070]">
                Our advanced technology enhances every stage of
                Parkinson&apos;s care by supporting accurate symptom tracking,
                optimized DBS programming, medication management, and
                associated therapies.
              </p>

              <p className="text-[16px] leading-[2] text-[#707070]">
                Through intelligent monitoring and data-driven insights, we
                help healthcare professionals deliver more precise,
                personalized, and effective treatment for improved patient
                outcomes.
              </p>
            </div>

            {/* DIVIDER */}
            <div className="mt-4 w-full h-[1px] bg-[#dddddd]" />

            {/* CTA BUTTON */}
            <button className="cursor-pointer group mt-5 h-[56px] rounded-full bg-[#252f8d] hover:bg-[#3340ba] transition-all duration-300 pl-8 pr-3 flex items-center shadow-[0_12px_28px_rgba(37,47,141,0.18)]">
              <span className="text-white text-[16px] font-semibold tracking-wide">
                Discover Our Range
              </span>

              <div className="ml-7 w-[34px] h-[34px] rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-all duration-300">
                <ArrowUpRight
                  size={16}
                  className="text-white"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}