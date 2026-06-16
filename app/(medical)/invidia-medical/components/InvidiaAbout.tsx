"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const features = [
  "Expertise in manufacturing and distributing surgical & endoscopic instruments",
  "Based in a global medical technology hub with 30+ years of experience",
  "Focus on quality manufacturing and reliable solutions",
  "Commitment to high standards and premium-quality instruments",
];

export default function InvidiaAbout() {
  return (
    <section className="relative overflow-hidden bg-[#F3F3F3] py-[68px] invidia-root">
      <div className="mx-auto grid custom-container  grid-cols-1 items-center gap-[64px] px-8 lg:grid-cols-2">
        {/* =========================
            LEFT CONTENT
        ========================== */}
        <div className="max-w-380">
          {/* TITLE */}
          <div
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-2px] text-[#2E2E2E]">
              <span className="font-black">INVIDIA</span>
              <span className="align-top text-[26px] font-semibold">
                ®
              </span>{" "}
              Medical GmbH & Co.KG
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div
            data-aos="fade-right"
            data-aos-delay="120"
            className="mt-3 space-y-3"
          >
            <p className="text-base leading-[1.9] text-[#676767]">
              We have extensive expertise as a{" "}
              <span className="font-semibold text-[#D3AB00]">
                manufacturer
              </span>{" "}
              and{" "}
              <span className="font-semibold text-[#D3AB00]">
                distributor
              </span>{" "}
              of surgical and endoscopic instruments and
              high-precision devices. Our office is based in
              Tuttlingen, the global centre of medical
              technology, which enables us to draw on over 30
              years of experience in quality manufacturing.
            </p>

            <p className="text-base leading-[1.9] text-[#676767]">
              Due to our flexible, innovative and efficient
              consulting services we are able to fulfil{" "}
              <span className="font-semibold text-[#D3AB00]">
                requirements at the highest level.
              </span>{" "}
              We offer first-class instruments of the highest
              quality as well as consulting services.
            </p>
          </div>

          {/* FEATURES */}
          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="mt-4 space-y-3"
          >
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
              >
                {/* ICON */}
                <div className="mt-[2px] flex h-[16px] w-[16px] min-w-[16px] items-center justify-center rounded-full bg-[#D3AB00]">
                  <Check
                    size={10}
                    strokeWidth={3}
                    className="text-white"
                  />
                </div>

                {/* TEXT */}
                <p className="text-base leading-[1.6] text-[#6B6B6B]">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <div
            data-aos="fade-up"
            data-aos-delay="350"
            className="mt-5 flex items-center gap-3"
          >
            {/* PRIMARY */}
            <Link
              href="/"
              className="group flex h-[42px] items-center overflow-hidden rounded-[4px] bg-[#D3AB00] pl-5 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-[2px]"
            >
              <span>Learn More</span>

              <span className="ml-4 flex h-full w-[34px] items-center justify-center bg-white text-[#D3AB00] transition-all duration-300 group-hover:w-[42px]">
                <ArrowRight
                  size={15}
                  strokeWidth={2.5}
                />
              </span>
            </Link>

            {/* SECONDARY */}
            <Link
              href="/"
              className="group flex h-[42px] items-center overflow-hidden rounded-[4px] border border-[#D8D8D8] bg-transparent pl-5 text-base font-semibold text-[#2E2E2E] shadow-sm transition-all duration-300 hover:-translate-y-[2px]"
            >
              <span>Get in touch</span>

              <span className="ml-4 flex h-full w-[34px] items-center justify-center bg-[#D3AB00] text-white transition-all duration-300 group-hover:w-[42px]">
                <ArrowRight
                  size={15}
                  strokeWidth={2.5}
                />
              </span>
            </Link> 
          </div>
        </div>

        {/* =========================
            RIGHT IMAGE
        ========================== */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="relative self-stretch"
        >
          <div className="relative h-full min-h-[330px] overflow-hidden rounded-[18px] shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
            {/* IMAGE PLACEHOLDER */}
            {/* Replace later with actual image */}
            <div className="h-full w-full bg-[#D8D1C8]" />

            {/* SAMPLE IMAGE */}
            
            <Image
              src="/invidia/invidia-about.jpg"
              alt="Medical"
              fill
              className="object-cover"
            />
           

            {/* SOFT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/[0.03] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}