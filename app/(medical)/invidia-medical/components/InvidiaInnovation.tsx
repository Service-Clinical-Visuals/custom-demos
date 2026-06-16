"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

const features = [
  "High quality",
  "Individual service",
  "Latest technologies",
  "Global presence",
  "Practical solutions",
];

export default function InvidiaInnovation() {
  return (
    <section className="relative  overflow-hidden bg-[#5A6270] py-[54px]  invidia-root">
      {/* ======================================
          BACKGROUND PATTERN
      ======================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.08]">
        <div className="absolute left-[-120px] top-[-140px] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:10px_10px]" />

        <div className="absolute bottom-[-250px] left-[280px] h-[700px] w-[700px] rounded-full border border-white/10" />

        <div className="absolute bottom-[-350px] left-[240px] h-[900px] w-[900px] rounded-full border border-white/10" />
      </div>

      <div className="relative z-10 mx-auto grid custom-container  grid-cols-1 items-center gap-[36px] px-8 lg:grid-cols-[0.95fr_1.05fr]">
        {/* ======================================
            LEFT CONTENT
        ======================================= */}
        <div>
          {/* TITLE */}
          <div
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <h2 className="max-w-[650px] text-4xl font-semibold leading-[1.08] tracking-[-2px] text-white">
              Innovative solutions for procedural
              excellence
            </h2>
          </div>

          {/* PARAGRAPHS */}
          <div
            data-aos="fade-right"
            data-aos-delay="120"
            className="mt-3  space-y-5"
          >
            <p className="text-base leading-[1.95] text-[#ECECEC]">
              At INVIDIA® Medical GmbH & Co.KG, we focus
              on the{" "}
              <span className="font-semibold text-[#D3AB00]">
                development and manufacture of
                high-quality medical devices.
              </span>{" "}
              Our portfolio includes a wide range of
              instruments for open surgery, endoscopy,
              particularly in the fields of urology and
              gynecology.
            </p>

            <p className="text-base leading-[1.95] text-[#ECECEC]">
              In addition, we offer advanced surgical
              simulators that enable doctors and medical
              professionals to learn and expand their
              skills in a practical way. As an experienced
              manufacturer,{" "}
              <span className="font-semibold text-[#D3AB00]">
                we supply hospitals and medical practices
                worldwide
              </span>{" "}
              with a comprehensive range of products
              through our distributors.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="mt-3 h-px w-full max-w-[620px] bg-white/15" />

          {/* FEATURE GRID */}
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className={`${
                  item === "Practical solutions"
                    ? "sm:col-span-1"
                    : ""
                }`}
              >
                <button className="group flex h-[54px] w-full items-center justify-between rounded-[10px] bg-white px-6 shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-[2px]">
                  <span className="text-base font-semibold tracking-[-0.2px] text-[#3A3A3A]">
                    {item}
                  </span>

                  <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#D4AA00] text-white transition-all duration-300 group-hover:rotate-180">
                    {/* <ChevronDown
                      size={16}
                      strokeWidth={3}
                    /> */}
                    <img className="h-[10px] w-[10px]" src="/invidia/dropbutton.png" alt="down-arrow"></img>
                  </span>
                </button>
              </div>
            ))}

            {/* CTA BUTTON */}
            <div
              data-aos="fade-up"
              data-aos-delay="420"
              className="sm:col-span-1"
            >
              <Link
                href="/"
                className="group flex h-[54px] items-center justify-between overflow-hidden rounded-[10px] bg-[#D4AA00] px-6 text-base font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-[2px]"
              >
                <span>Discover Innovation</span>

                <span className="flex h-[32px] w-[32px] items-center justify-center rounded-[6px] bg-white text-[#D3AB00] transition-all duration-300 group-hover:w-[42px]">
                  <ArrowRight
                    size={16}
                    strokeWidth={2.8}
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* ======================================
            RIGHT IMAGE
        ======================================= */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="relative self-stretch"
        >
          {/* IMAGE CONTAINER */}
          <div className="relative h-full min-h-[352px] overflow-hidden rounded-[20px] bg-[#D9D9D9] shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
            {/* IMAGE PLACEHOLDER */}
            {/* Replace later with actual image */}

            <div className="absolute inset-0 bg-gradient-to-br from-[#F4F4F4] via-[#DDDDDD] to-[#CFCFCF]" />

            {/* OPTIONAL IMAGE */}
            
              <Image
                src="/invidia/invidia-innovation.png"
                alt="Innovation"
                fill
                className="object-cover"
              />
           

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/[0.03] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}