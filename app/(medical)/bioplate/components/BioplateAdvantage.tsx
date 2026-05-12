"use client";

import { ArrowUpRight, Check, CornerUpRight } from "lucide-react";
import "aos/dist/aos.css";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const advantages = [
  "Highly scalable and easy to customize with a wide variety of plate and screw configurations",
  "Screw length markers allow you to customize your screw inventory",
  "Streamlined offering of plates, screws and accessories",
  "Color coded for ease of use",
  "Modular (1.2mm, 1.5mm, 2.0mm with mesh)",
  "Includes contourable Biomesh®",
];

export default function BioplateAdvantage() {

  return (
    <section className="relative overflow-hidden bg-[#006B52] py-24 text-white">
      {/* SUBTLE BACKGROUND DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-8 lg:px-16">
        {/* ================================================= */}
        {/* TOP GRID */}
        {/* ================================================= */}

        <div className="grid items-stretch gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="flex h-full flex-col justify-between">
            <div data-aos="fade-up">
              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-2px] text-white">
                Maxillofacial System
              </h2>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="mt-4 space-y-4"
            >
              <p className="text-base leading-[2] text-white/82">
                Discover how our MaxFax™ System is designed to help
                maxillofacial surgeons and their teams meet the demands and
                challenges of complex fixation procedures. It’s a lightweight,
                modular set that is both cost-effective and completely
                customizable to a surgeon’s needs.
              </p>

              <p className="text-base leading-[2] text-white/82">
                The Bioplate® Maxillofacial Plating System is a precision, high
                quality modular set that is lightweight and cost effective. The
                system includes the most frequently used plates in maxillofacial
                surgery and can be easily customized with additional plates
                and/or accessories.Our MaxFax™ Basic Kit is trusted by top
                maxillofacial surgeons for reconstructive surgery.
              </p>
            </div>

            {/* CTA */}
            <div data-aos="fade-up" data-aos-delay="300" className="mt-4">
              <button className="cursor-pointer group flex h-[58px] items-center gap-5 rounded-[10px] bg-[#5DC1B9] px-8 text-base font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#5bbab3]">
                View Products

                <span className="transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]">
                  <CornerUpRight size={18} strokeWidth={2.4} />
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT VIDEO CONTAINER */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="relative"
          >
            {/* VIDEO WRAPPER */}
            <div className="relative overflow-hidden rounded-[22px] border-[6px] border-[#4A9D8B] bg-[#d9d9d9] shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
              {/* VIDEO PLACEHOLDER */}
              {/* Replace with video later */}
              <div className=" w-full">
                {/* Placeholder Grid */}
                <div className="h-full w-full" />

                {/* Future Video */}
                <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />

              </div>

              {/* LIGHT OVERLAY */}
              {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_40%)]" /> */}
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* DIVIDER */}
        {/* ================================================= */}

        <div className="my-20 h-[1px] w-full bg-white/45" />

        {/* ================================================= */}
        {/* ADVANTAGES */}
        {/* ================================================= */}

        <div>
          {/* TITLE */}
          <div data-aos="fade-up">
            <h3 className="text-4xl font-semibold tracking-[-1.5px] text-white">
              The BIOPLATE ® Advantages
            </h3>
          </div>

          {/* GRID */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {advantages.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="group flex min-h-[118px] items-start gap-5 rounded-[18px] bg-[#F3F3F3] px-7 py-7 text-[#2b2b2b] shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1"
              >
                {/* ICON */}
                <div className="mt-[2px] flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[#2E8B73]">
                  <Check
                    size={18}
                    strokeWidth={2.8}
                    className="text-white"
                  />
                </div>

                {/* TEXT */}
                <p className="text-base leading-[1.9] text-[#3d3d3d]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}