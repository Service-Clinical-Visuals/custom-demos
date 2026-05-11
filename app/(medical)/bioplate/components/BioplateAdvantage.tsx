"use client";

import { ArrowUpRight, Check } from "lucide-react";
import "aos/dist/aos.css";

const advantages = [
  "Highly scalable and easy to customize with a wide variety of plate and screw configurations",
  "Screw length markers allow you to customize your screw inventory",
  "Streamlined offering of plates, screws and accessories",
  "Color coded for ease of use",
  "Modular (1.2mm, 1.5mm, 2.0mm with mesh)",
  "Includes contourable Biomesh®",
];

export default function BioplateAdvantage                  () {

  return (
    <section className="relative overflow-hidden bg-[#006B52] py-24 text-white">
      {/* SUBTLE BACKGROUND DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-8 lg:px-16">
        {/* ================================================= */}
        {/* TOP GRID */}
        {/* ================================================= */}

        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="max-w-[560px]">
            <div data-aos="fade-up">
              <h2 className="text-[54px] font-semibold leading-[1.05] tracking-[-2px] text-white">
                Maxillofacial System
              </h2>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="mt-8 space-y-7"
            >
              <p className="text-[17px] leading-[2] text-white/82">
                Discover how our MaxFax™ System is designed to help
                maxillofacial surgeons and their teams meet the demands and
                challenges of complex fixation procedures. It’s a lightweight,
                modular set that is both cost-effective and completely
                customizable to a surgeon’s needs.
              </p>

              <p className="text-[17px] leading-[2] text-white/82">
                The Bioplate® Maxillofacial Plating System is a precision, high
                quality modular set that is lightweight and cost effective. The
                system includes the most frequently used plates in maxillofacial
                surgery and can be easily customized with additional plates
                and/or accessories.Our MaxFax™ Basic Kit is trusted by top
                maxillofacial surgeons for reconstructive surgery.
              </p>
            </div>

            {/* CTA */}
            <div data-aos="fade-up" data-aos-delay="300" className="mt-12">
              <button className="group flex h-[58px] items-center gap-5 rounded-[10px] bg-[#6BC9C1] px-8 text-[15px] font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#5bbab3]">
                View Products

                <span className="transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]">
                  <ArrowUpRight size={18} strokeWidth={2.4} />
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
              <div className="aspect-[16/10] w-full">
                {/* Placeholder Grid */}
                <div className="h-full w-full bg-[linear-gradient(45deg,#e7e7e7_25%,transparent_25%),linear-gradient(-45deg,#e7e7e7_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#e7e7e7_75%),linear-gradient(-45deg,transparent_75%,#e7e7e7_75%)] bg-[size:40px_40px] bg-[position:0_0,0_20px,20px_-20px,-20px_0px]" />

                {/* Future Video */}
                {/*
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                >
                  <source src="/videos/maxillo.mp4" type="video/mp4" />
                </video>
                */}
              </div>

              {/* LIGHT OVERLAY */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_40%)]" />
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
            <h3 className="text-[46px] font-semibold tracking-[-1.5px] text-white">
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
                <p className="text-[15px] leading-[1.9] text-[#3d3d3d]">
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