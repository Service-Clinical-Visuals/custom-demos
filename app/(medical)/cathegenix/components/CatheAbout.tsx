"use client";

import { ArrowRight } from "lucide-react";
import "aos/dist/aos.css";

export default function CatheAbout() {


  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-[1600px] px-8 lg:px-16">
        {/* ================================================= */}
        {/* MAIN GRID */}
        {/* ================================================= */}

        <div className="grid items-stretch gap-16 lg:grid-cols-[1.05fr_1fr]">
          {/* ================================================= */}
          {/* LEFT IMAGE */}
          {/* ================================================= */}

          <div
            data-aos="fade-right"
            className="relative overflow-hidden rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
          >
            {/* IMAGE */}
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-[24px]">
              {/* PLACEHOLDER IMAGE */}
              <img
                src="/cathegenix/cathe-about.jpg"
                alt="CatheGenix Office"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />

              {/* SOFT OVERLAY */}
              {/* <div className="absolute inset-0 bg-black/[0.02]" /> */}

              {/* DEPTH LIGHT */}
              {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_35%)]" /> */}
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT CONTENT */}
          {/* ================================================= */}

          <div className="max-w-[680px]">
            {/* TITLE */}
            <div data-aos="fade-up">
              <h2 className="text-4xl font-semibold leading-[1.03] tracking-[-2.5px] text-[#2A2A2A]">
                Innovating the Best-in-Class Medical Catheters
              </h2>
            </div>

            {/* PARAGRAPHS */}
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="mt-5 space-y-4"
            >
              <p className="text-[16px] leading-[2] text-[#666666]">
                Choose CatheGenix — your trusted partner in professionalism and
                reliability. Together, let’s advance toward a healthier future.
                CatheGenix is a leading innovator in the research, design,
                development, prototyping, and manufacturing of advanced medical
                catheters.
              </p>

              <p className="text-[16px] leading-[2] text-[#666666]">
                Operating under the Product-Ready Innovation and Manufacturing
                Organisation (PRIMO) model, CatheGenix offers a product-ready
                approach, delivering fully FDA-registered solutions that are
                market-ready while allowing for customization to meet private
                label and OEM/ODM needs.
              </p>

              <p className="text-[16px] leading-[2] text-[#666666]">
                The company is dedicated to providing cost-effective,
                high-quality solutions that enhance patient care and
                accessibility.
              </p>
            </div>

            {/* BUTTON */}
            <div data-aos="fade-up" data-aos-delay="100" className="mt-6">
             <button className="cursor-pointer relative group flex h-[46px] items-center bg-[#05429B] overflow-hidden">
                <span className="px-6 text-base font-semibold text-white transition-all duration-300 group-hover:pr-12">
                   Know More
                </span>

                <span className="absolute right-0 flex h-full items-center justify-center text-white transition-all duration-300 translate-x-full group-hover:-translate-x-1">
                    <div className="bg-[#9DCA3A] p-2.5">
                    <ArrowRight size={18} strokeWidth={2.8} />
                    </div>
                </span>
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}