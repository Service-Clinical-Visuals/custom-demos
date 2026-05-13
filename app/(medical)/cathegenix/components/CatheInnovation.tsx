"use client";

import { ArrowRight } from "lucide-react";
import "aos/dist/aos.css";
import Image from "next/image";

const products = [
  {
    title: "Endura™ Ureteral Stents",
    description:
      "Provides long-term drainage and patient comfort during extended stent placement.",
    image: "/cathegenix/cathe-innovation-1.png",
  },
  {
    title: "Lumena™ Ureteral Access Sheath (Bendable-Tip)",
    description:
      "Provides reliable access to the ureter while protecting surrounding tissues and enhancing procedural control.",
    image: "/cathegenix/cathe-innovation-2.png",
  },
  {
    title: "Lumena™ Ureteral Access Sheath (Straight-Tip)",
    description:
      "Provides reliable access to the ureter while protecting surrounding tissues and enhancing procedural control.",
    image: "/cathegenix/cathe-innovation-3.png",
  },
];

export default function CatheInnovation() {

  return (
    <section className="relative overflow-hidden bg-[#F7F7F5] py-24">
      {/* ================================================= */}
      {/* TOP BLUE BORDER */}
      {/* ================================================= */}

      <div className="absolute left-0 top-0 h-[3px] w-full bg-[#0047A6]" />

      <div className="mx-auto max-w-[1600px] px-8 lg:px-16">
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="mx-auto max-w-[980px] text-center">
          {/* TITLE */}
          <div data-aos="fade-up">
            <h2 className="text-4xl font-semibold tracking-[-2px] text-[#2B2B2B]">
              Innovation · Quality · Trust
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div data-aos="fade-up" data-aos-delay="150">
            <p className="mx-auto mt-7 max-w-[900px] text-[16px] leading-[2] text-[#666666]">
              Choose CatheGenix — your trusted partner in professionalism and
              reliability. Together, let’s advance toward a healthier future.
              CatheGenix is a leading innovator in the research, design,
              development, prototyping, and manufacturing of advanced medical
              catheters.
            </p>
          </div>
        </div>

        {/* ================================================= */}
        {/* PRODUCT CARDS */}
        {/* ================================================= */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="cursor-pointer group rounded-[22px] border border-[#EAEAEA] bg-[#FAFAF8] p-5 shadow-[0_10px_24px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
            >
              {/* ================================================= */}
              {/* IMAGE */}
              {/* ================================================= */}

              <div className="overflow-hidden rounded-[18px] border border-[#EEF0E4] bg-white">
                <div className="aspect-[1.1/0.82] w-full">
                  {/* PLACEHOLDER IMAGE */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                 
                </div>
              </div>

              {/* ================================================= */}
              {/* CONTENT */}
              {/* ================================================= */}

              <div className="px-3 pb-3 pt-8">
                {/* TITLE */}
                <h3 className="text-lg font-semibold leading-[1.2] tracking-[-0.8px] text-[#2B2B2B]">
                  {product.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-5 text-[15px] leading-[1.95] text-[#666666]">
                  {product.description}
                </p>

                {/* LINK */}
                <button className="cursor-pointer group/link mt-8 inline-flex items-center gap-2 text-base font-semibold text-[#0047A6]">
                  Learn More

                  <ArrowRight
                    size={17}
                    strokeWidth={2.8}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ================================================= */}
        {/* SLIDER INDICATOR */}
        {/* ================================================= */}

        <div
          data-aos="fade-up"
          data-aos-delay="250"
          className="mt-20 flex justify-center"
        >
          <div className="flex items-center gap-4">
            {/* ACTIVE */}
            <div className="h-[8px] w-[90px] rounded-full bg-[#0047A6]" />

            {/* INACTIVE */}
            <div className="h-[8px] w-[90px] rounded-full bg-[#D7DFEA]" />
          </div>
        </div>
      </div>
    </section>
  );
}