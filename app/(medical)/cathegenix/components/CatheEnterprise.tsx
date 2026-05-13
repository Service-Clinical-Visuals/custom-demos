"use client";

import {
  ArrowLeft,
  ArrowRight,
  Microscope,
  Syringe,
} from "lucide-react";

const serviceCards = [
  {
    title: "Commitment to innovation and clinical research",
    icon: Microscope,
  },
  {
    title: "Proprietary development of cutting-edge technologies",
    icon: Syringe,
  },
  {
    title: "Precision-driven, large-scale manufacturing capabilities",
    icon: Microscope,
  },
];

export default function CatheEnterprise() {

  return (
    <section className="overflow-hidden bg-[#F7F7F5]">
      {/* ================================================= */}
      {/* HERO BANNER */}
      {/* ================================================= */}

      <div className="relative h-[420px] overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          {/* PLACEHOLDER IMAGE */}
          <img
            src="/cathegenix/cathe-enterprise.jpg"
            alt="Medical Banner"
            className="h-full w-full object-cover"
          />

          {/* DARK BLUE OVERLAY */}
          <div className="absolute inset-0 bg-[#003C92]/70" />

          {/* DEPTH OVERLAY */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.08),transparent_35%)]" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1450px] items-center px-8 lg:px-16">
          <div className="ml-auto max-w-[520px]">
            {/* TITLE */}
            <div data-aos="fade-up">
              <h2 className="text-4xl font-semibold leading-[1] tracking-[-2px] text-white">
                Endura™ Ureteral Stents
              </h2>

              <p className="mt-6 max-w-[500px] text-[17px] leading-[1.9] text-white/82">
                Provides long-term drainage and patient comfort during extended
                stent placement.
              </p>
            </div>

            {/* BUTTON */}
            <div data-aos="fade-up" data-aos-delay="200" className="mt-10">
              <button className="group flex h-[54px] items-center overflow-hidden rounded-sm shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                {/* LEFT */}
                <span className="flex h-full items-center bg-white px-7 text-[14px] font-semibold text-[#111111]">
                  Explore More
                </span>

                {/* RIGHT */}
                <span className="flex h-full w-[54px] items-center justify-center bg-[#9BCB3B] text-[#111111] transition-all duration-300 group-hover:w-[62px]">
                  <ArrowRight size={18} strokeWidth={2.8} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* ENTERPRISE SERVICES */}
      {/* ================================================= */}

      <div className="py-24">
        <div className="mx-auto grid max-w-[1450px] gap-16 px-8 lg:grid-cols-[0.8fr_1.3fr] lg:px-16">
          {/* ================================================= */}
          {/* LEFT CONTENT */}
          {/* ================================================= */}

          <div>
            {/* TITLE */}
            <div data-aos="fade-up">
              <h2 className="text-[58px] font-semibold tracking-[-2px] text-[#2B2B2B]">
                Enterprise Services
              </h2>

              <p className="mt-7 max-w-[360px] text-[16px] leading-[2] text-[#666666]">
                Optimizing efficiency, ensuring safety, and simplifying the use
                of{" "}
                <span className="font-semibold text-[#0047A6]">
                  advanced medical devices.
                </span>
              </p>
            </div>

            {/* BUTTON */}
            <div data-aos="fade-up" data-aos-delay="200" className="mt-12">
              <button className="group flex h-[54px] items-center overflow-hidden rounded-sm shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                {/* LEFT */}
                <span className="flex h-full items-center bg-[#0047A6] px-7 text-[14px] font-semibold text-white">
                  Discover Services
                </span>

                {/* RIGHT */}
                <span className="flex h-full w-[54px] items-center justify-center bg-[#9BCB3B] text-[#111111] transition-all duration-300 group-hover:w-[62px]">
                  <ArrowRight size={18} strokeWidth={2.8} />
                </span>
              </button>
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT CARDS */}
          {/* ================================================= */}

          <div className="flex items-center gap-6">
            {/* LEFT ARROW */}
            <button className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#0047A6] text-white shadow-[0_10px_20px_rgba(0,71,166,0.2)] transition-all duration-300 hover:scale-105">
              <ArrowLeft size={20} strokeWidth={2.8} />
            </button>

            {/* CARDS */}
            <div className="grid flex-1 gap-6 md:grid-cols-3">
              {serviceCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 120}
                    className="group relative rounded-[22px] border border-[#ECECEC] bg-white px-8 pb-10 pt-16 text-center shadow-[0_10px_24px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
                  >
                    {/* FLOATING ICON */}
                    <div className="absolute left-1/2 top-0 flex h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#EAEAEA] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                      <Icon
                        size={44}
                        strokeWidth={1.8}
                        className="text-[#3D3D3D]"
                      />
                    </div>

                    {/* CONTENT */}
                    <p className="text-[15px] leading-[1.9] text-[#666666]">
                      {card.title}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* RIGHT ARROW */}

               <button className="cursor-pointer relative group flex h-[46px] items-center bg-[#05429B] overflow-hidden">
                <span className="px-6 text-base font-semibold text-white transition-all duration-300 group-hover:pr-12">
                    Explore Features
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
    </section>
  );
}