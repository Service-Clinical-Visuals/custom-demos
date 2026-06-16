"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "aos/dist/aos.css";

const serviceCards = [
  {
    title: "Commitment to innovation and clinical research",
    icon: "/cathegenix/cathe-service-1.png",
  },
  {
    title: "Proprietary development of cutting-edge technologies",
    icon: "/cathegenix/cathe-service-2.png",
  },
  {
    title: "Precision-driven, large-scale manufacturing capabilities",
    icon: "/cathegenix/cathe-service-3.png",
  },
  {
    title: "High-quality products and exceptional services",
    icon: "/cathegenix/cathe-service-4.png",
  },
];

export default function CatheEnterprise() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement;
    const amount = (card?.offsetWidth ?? 280) + 24;
    el.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden bg-[#F7F7F5] cathegenix-root">
      {/* ================================================= */}
      {/* HERO BANNER */}
      {/* ================================================= */}

      <div className="relative h-[420px] overflow-hidden md:h-[420px]">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
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
        <div className="relative z-10 flex h-full custom-container items-center px-8 lg:px-14">
          <div className="mx-auto max-w-[700px] text-center lg:ml-auto lg:mr-0 lg:text-left">
            {/* TITLE */}
            <div data-aos="fade-up">
              <h2 className="text-3xl font-semibold leading-[1.15] text-white md:text-5xl md:tracking-[-2px] md:leading-[1]">
                Endura™ Ureteral Stents
              </h2>

              <p className="mt-6 max-w-[500px] text-[17px] leading-[1.9] text-white/82">
                Provides long-term drainage and patient comfort during extended
                stent placement.
              </p>
            </div>

            {/* BUTTON */}
            <div data-aos="fade-up" data-aos-delay="200" className="mt-10 flex justify-center lg:justify-start">
              <button className="cursor-pointer relative group flex h-[46px] items-center bg-white overflow-hidden">
                <span className="px-6 text-base font-semibold text-black transition-all duration-300 group-hover:pr-12">
                  Explore More
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

      {/* ================================================= */}
      {/* ENTERPRISE SERVICES */}
      {/* ================================================= */}

      <div className="py-16 md:py-24">
        <div className="grid custom-container gap-10 px-8 lg:grid-cols-[0.8fr_1.5fr] lg:gap-5 lg:px-14">
          {/* ================================================= */}
          {/* LEFT CONTENT */}
          {/* ================================================= */}

          <div className="max-w-full lg:max-w-[440px]">
            {/* TITLE */}
            <div data-aos="fade-up">
              <h2 className="text-3xl font-semibold tracking-[-1.5px] text-[#2B2B2B] md:text-4xl md:tracking-[-2px]">
                Enterprise Services
              </h2>

              <p className="mt-7 text-[17px] leading-[2] text-[#666666]">
                Optimizing efficiency, ensuring safety, and simplifying the use
                of{" "}
                <span className="font-bold text-[#05429B]">
                  advanced medical devices.
                </span>
              </p>
            </div>

            {/* BUTTON */}
            <div data-aos="fade-up" data-aos-delay="200" className="mt-12">
              <button className="cursor-pointer relative group flex h-[46px] items-center bg-[#05429B] overflow-hidden">
                <span className="px-6 text-base font-semibold text-white transition-all duration-300 group-hover:pr-12">
                  Discover Services
                </span>
                <span className="absolute right-0 flex h-full items-center justify-center text-white transition-all duration-300 translate-x-full group-hover:-translate-x-1">
                  <div className="bg-[#9DCA3A] p-2.5">
                    <ArrowRight size={18} strokeWidth={2.8} />
                  </div>
                </span>
              </button>
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT — CAROUSEL */}
          {/* ================================================= */}

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center mt-10 lg:mt-0">
            {/* LEFT ARROW — desktop only */}
            <button
              onClick={() => scroll("left")}
              className="hidden lg:flex cursor-pointer h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#0047A6] text-white  transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft size={20} strokeWidth={2.8} />
            </button>

            {/* SCROLLABLE CARDS */}
            <div
              ref={scrollRef}
              className="flex flex-1 gap-6 overflow-x-auto pt-[70px] -mt-[70px] pb-2 [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none" }}
            >
              {serviceCards.map((card, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  className="group relative flex-shrink-0 rounded-[22px] border border-[#ECECEC] bg-white px-8 pb-10 pt-16 text-center shadow-[0_10px_24px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] w-[calc(100%-2rem)] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  {/* FLOATING ICON */}
                  <div className="absolute left-1/2 top-0 flex h-[122px] w-[122px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#EAEAEA] bg-white">
                    <img src={card.icon} alt="icon" className="w-16 h-auto" />
                  </div>

                  {/* CONTENT */}
                  <p className="text-[16px] leading-[1.9] text-[#666666]">
                    {card.title}
                  </p>
                </div>
              ))}
            </div>

            {/* ARROWS — mobile/tablet: shown below cards as a row */}
            <div className="flex justify-center gap-4 lg:contents">
              <button
                onClick={() => scroll("left")}
                className="flex lg:hidden cursor-pointer h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#0047A6] text-white shadow-[0_10px_20px_rgba(0,71,166,0.2)] transition-all duration-300 hover:scale-105"
              >
                <ArrowLeft size={20} strokeWidth={2.8} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="flex lg:hidden cursor-pointer h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#0047A6] text-white shadow-[0_10px_20px_rgba(0,71,166,0.2)] transition-all duration-300 hover:scale-105"
              >
                <ArrowRight size={20} strokeWidth={2.8} />
              </button>
            </div>

            {/* RIGHT ARROW — desktop only */}
            <button
              onClick={() => scroll("right")}
              className="hidden lg:flex cursor-pointer h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#0047A6] text-white shadow-[0_10px_20px_rgba(0,71,166,0.2)] transition-all duration-300 hover:scale-105"
            >
              <ArrowRight size={20} strokeWidth={2.8} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}