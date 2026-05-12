"use client";

import { ArrowUpRight, Check, CornerUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const features = [
  "Featuring High - Precision Technology designed specifically for neurosurgery.",
  "Bioplate Offers a Comprehensive product Line.",
  "Manufactured with premium biocompatible materials to support safety, durability, and optimal healing after surgery.",
];

export default function BioplateAbout() {

  return (
    <section className="relative overflow-hidden bg-[#f5f5f3] py-28">
      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#009688]" />

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-stretch gap-20 px-8 lg:grid-cols-2 lg:px-16">
        {/* ================= LEFT CONTENT ================= */}
        <div className="">
          {/* HEADING */}
          <div data-aos="fade-up">
            <h2 className="text-3xl font-semibold tracking-[-1.5px] text-[#202020]">
              About Us
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-2 space-y-3 text-base leading-[1.95] text-[#5e5e5e]"
          >
            <p>
              For over 25 years, we have focused on delivering products that
              help patients who need neurosurgery. Our team is passionate about
              this focused mission. We pride ourselves on being small,
              collaborative, and friendly. 
            </p>

            <p>
              Bioplate designs and manufactures cranial closure and bone
              fixation systems for neurosurgery. The company was founded in 1995
              and continues to share the founders commitment to patient safety
              and practitioners insight into the needs of their patients. 
            </p>
          </div>

          {/* FEATURES */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-3 space-y-3"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* ICON */}
                <div className="mt-[4px] flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-[#2E8B73]">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </div>

                {/* TEXT */}
                <p className="max-w-[500px] text-base leading-[1.8] text-[#5f5f5f]">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div data-aos="fade-up" data-aos-delay="450" className="mt-6">
            <button className="cursor-pointer group flex h-[56px] items-center gap-5 rounded-[10px] bg-[#5DC1B9] px-8 text-[15px] font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#53b7b3]">
              Know More

              <span className="transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]">
                <CornerUpRight size={18} strokeWidth={2.4} />
              </span>
            </button>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div
          data-aos="fade-left"
          data-aos-delay="250"
          className="relative"
        >
          {/* IMAGE CONTAINER */}
          <div className="relative overflow-hidden rounded-[24px]">
            {/* IMAGE PLACEHOLDER */}
            <img
              src="/bioplate/bioplate-about.png"
              alt="Medical Lab"
              className="h-[520px] w-full object-cover"
            />

            {/* DARK OVERLAY */}
            {/* <div className="absolute inset-0 bg-black/18" /> */}

            {/* SOFT LIGHT GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_40%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}