"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowUpRight, Dot, Settings, SettingsIcon, X } from "lucide-react";

const features = [
  "Compatible with modern emission control systems, including DPF and catalytic converters.",
  "Suitable for petrol, diesel, and hybrid vehicles requiring 5W-30 specifications.",
  "Reliable performance in both high and low temperature conditions.",
  "Helps reduce engine noise and ensures smoother operation.",
];

export default function CommaProduct360() {
  return (
    <section className="bg-[#FFF3F2] py-20">
      <div className="mx-auto grid max-w-[1550px] grid-cols-1 gap-10 lg:grid-cols-[65fr_35fr] items-center">

        {/* 360 placeholder */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex justify-center items-center"
        >
          <div
            className="
              relative
              w-full
              h-auto
              aspect-video
              overflow-hidden
              rounded-xl
              bg-[#ECECEC]
            "
          >
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover z-0" />
          </div>
        </div>

        {/* Product info */}
        <div data-aos="fade-left" data-aos-duration="1000">
          <span className="content flex max-w-[280px] justify-center items-center rounded-full border bg-[#FD423926] border-[#FF4A43] px-4 py-1 text-[black] uppercase tracking-wider">
            <><Dot /> Synthetic Technology</>
          </span>

          <h2 className="mt-4 text-[48px] font-light leading-tight text-[#1A1A1A]">
            EGD-SFP 5W30
          </h2>

          <p className="mt-2 text-[14px] leading-7 text-[#555]">
            We work side by side with workshops to produce high-quality engine oils, lubricants and chemicals for passenger cars and commercial vehicles. Our solutions are OEM approved and specially formulated to help workshops run smoother and your business achieve its full potential.
          </p>

          <h4 className="mt-4 text-[36px] text-[#1A1A1A]">Product Features</h4>

          <ul className="mt-2 space-y-2">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-3">
                <SettingsIcon className="text-[#FF4A43] w-5 h-5 shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-[13px] leading-6 text-[#444]">{f}</span>
              </li>
            ))}
          </ul>

          <button
            className="
              mt-6
              bg-[#FF4A43]
              px-12
              py-2
              text-[22px]
              font-semibold
              uppercase
              text-white
              transition-all
              duration-300
              hover:brightness-110
            "
            style={{
              clipPath: "polygon(7% 0%, 100% 0%, 93% 100%, 0% 100%)",
              letterSpacing: "0.5px",
            }}
          >
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
}
