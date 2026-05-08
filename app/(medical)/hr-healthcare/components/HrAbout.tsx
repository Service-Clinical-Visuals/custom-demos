// components/FeatureCardsSection.tsx

"use client";

import { useState } from "react";

const cards = [
  {
    id: 1,
    eyebrow: "HR Healthcare Careers",
    title: "Careers Built on Purpose & People",
    icon: "/medical/hr-healthcare/hr-about-1.png",
    description:
      "With purpose as our top priority, we shape actions to better lives. Our family-owned team is deeply invested in ensuring employees find lasting fulfillment in their personal lives and careers.",
  },
  {
    id: 2,
    eyebrow: "HR HealthCare Patient Services",
    title: "Connected Care Through One Team",
    icon: "/medical/hr-healthcare/hr-about-2.png",
    description:
      "Patient Services integrates medical supply management as a seamless one-company, one-team, one-connection approach to enhance clinician and patient experiences. Inspired by our purpose, we unite products, order processing, and delivery.",
  },
  {
    id: 3,
    eyebrow: "TruAdvance 4P™ Urological Solution",
    icon: "/medical/hr-healthcare/hr-about-3.png",
    title: "Simplify, Standardize, Prevent CAUTI",
    description:
      "The TruAdvance 4P framework transforms leading, evidence-based guidance into an easy-to-follow model that brings clarity and confidence to bladder management. At the core of this initiative are nurses.",
  },
];

export default function HrAbout() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#F5F5F5] py-12 md:py-16 lg:py-20">
      {/* CONTAINER */}
      <div className="mx-auto max-w-380 px-4 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-4 sm:gap-6 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {cards.map((card, index) => {
            const isActive = activeCard === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`cursor-pointer group relative flex flex-col rounded-[14px] border transition-[transform,background-color,border-color,box-shadow,height] duration-500 ease-out ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""} ${
                  isActive
                    ? "h-[560px] -translate-y-1.5 border-[#071B35] bg-[#041A34] shadow-[0_18px_40px_rgba(2,15,35,0.28)]"
                    : "h-[460px] border-[#D9D9D9] bg-[#F7F7F7] shadow-none"
                }`}
              >
                {/* PURPLE FLOATING BADGE ONLY FOR ACTIVE CARD */}
            
                {/* CONTENT */}
                <div className="flex flex-1 flex-col px-5 pb-7 pt-5 text-center sm:px-8 sm:pb-8 overflow-hidden">
                  {/* ICON + TEXT AREA — shrinks to make room for button */}
                  <div className="flex-1 min-h-0 overflow-hidden">
                    {/* ICON */}
                    <div
                      className={`mx-auto flex h-[56px] w-[56px] items-center justify-center rounded-full border transition-[background-color,border-color,box-shadow] duration-500 ${
                        isActive
                          ? "border-[#E7E7E7] bg-[#F5F5F5] shadow-[0_5px_10px_rgba(0,0,0,0.14)]"
                          : "border-[#E3E3E3] bg-[#F8F8F8] shadow-[0_4px_8px_rgba(0,0,0,0.10)]"
                      }`}
                    >
                      {card.icon && (
                        <img
                          src={card.icon}
                          alt={card.title}
                          className="h-[36px] w-[36px] object-contain"
                        />
                      )}
                    </div>

                    {/* TEXT AREA */}
                    <div className="mt-4">
                      <p
                        className={`text-base font-normal transition-colors duration-500 ${
                          isActive ? "text-[#E6E6E6]" : "text-[#4B4B4B]"
                        }`}
                      >
                        {card.eyebrow}
                      </p>

                      <h3
                        className={`mx-auto mt-[8px] max-w-[310px] text-[24px] font-normal leading-[1.2] tracking-[-0.8px] transition-colors duration-500 sm:text-[28px] lg:text-[31px] ${
                          isActive ? "text-white" : "text-[#101010]"
                        }`}
                      >
                        {card.title}
                      </h3>

                      <p
                        className={`mx-auto mt-5 max-w-[320px] text-base leading-[2] transition-colors duration-500 ${
                          isActive ? "text-[#D9DEE7]" : "text-[#7B7B7B]"
                        }`}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <div className="shrink-0 pt-7">
                    <button
                      className={`flex cursor-pointer h-[48px] w-full items-center justify-center rounded-full text-[15px] font-medium transition-[background-color,color] duration-500 ${
                        isActive
                          ? "bg-white text-[#071B35]"
                          : "bg-[#041A34] text-white"
                      }`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                {/* HOVER GLOW */}
                <div
                  className={`pointer-events-none absolute inset-0 rounded-[14px] transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  } bg-[radial-gradient(circle_at_top,rgba(27,73,140,0.12),transparent_60%)]`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}