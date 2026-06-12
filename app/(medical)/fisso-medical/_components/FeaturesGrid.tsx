"use client";
import React from "react";
import Typography from "./Typography";

export default function FeaturesGrid() {
  const features = [
    {
      id: 1,
      icon: "/medical/fisso-medical/group1.png",
      text: "Wide range of articulated arms and clamps",
    },
    {
      id: 2,
      icon: "/medical/fisso-medical/group2.png",
      text: "OEM – Customized projects on request",
    },
    {
      id: 3,
      icon: "/medical/fisso-medical/group4.png",
      text: "The Original. 50 year experience with worldwide distribution",
    },
    {
      id: 4,
      icon: "/medical/fisso-medical/group3.png",
      text: "ISO 9001/13485 Certified",
    },
  ];

  return (
    /* top gap = half badge height so badge has room above */
    <section className="
      w-full
      max-w-[1500px] 2xl:max-w-[1960px] mx-auto
      pt-10 sm:pt-15 lg:pt-15 2xl:pt-20
      pb-10 sm:pb-12 2xl:pb-10 z-20
     ">
      <div className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
        gap-x-4 sm:gap-x-5 lg:gap-x-5 2xl:gap-x-7      
        gap-y-20 sm:gap-y-20 2xl:gap-y-24
      ">
        {features.map((feature, idx) => (
          <div
            key={feature.id}
            /* exact spec: border-radius 20px, shadow subtle */
            /* exact spec: width 407 height 195 — use these as a ratio for responsiveness */
            /* on desktop each card is ~407px wide; height fixed at 195px */
            /* top pad — room for badge hanging above */
            className="
              relative
              bg-white
              border border-gray-100
              rounded-[20px]
              w-full
              h-[155px] sm:h-[170px] lg:h-[185px] xl:h-[195px] 2xl:h-[220px]
              shadow-[0_1px_4px_1px_rgba(0,0,0,0.05)]
              hover:shadow-[0_6px_28px_rgba(0,0,0,0.09)]
              hover:-translate-y-1
              transition-all duration-300
              pt-12 sm:pt-14 2xl:pt-16
              pb-5 sm:pb-6 2xl:pb-7
              px-5 sm:px-6 2xl:px-8
              text-center flex flex-col items-center justify-end
              group
            "
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            {/* ── Badge circle — exact spec: 144×144, #9C0B38, shadow 0px 3px 8px #0000003D ── */}
            {/* offset: half of 144px = 72px above card top */}
            {/* exact spec size — scales proportionally on smaller screens */}
            {/* exact spec box-shadow: 0px 3px 8px 0px #0000003D */}
            <div className="
              absolute
              left-1/2 -translate-x-1/2
              -top-[52px] sm:-top-[58px] xl:-top-[64px] 2xl:-top-[72px]
              w-[104px] h-[104px]
              sm:w-[116px] sm:h-[116px]
              xl:w-[130px] xl:h-[130px]
              2xl:w-[144px] 2xl:h-[144px]
              rounded-full
              bg-[#9C0B38]
              border-7 border-white
              shadow-[0px_1px_1px_1px_rgba(0,0,0,0.24)]
              flex items-center justify-center
              group-hover:bg-[#7d0930]
              group-hover:scale-96
              transition-all duration-300
            ">
              <img
                src={feature.icon}
                alt={feature.text}
                className="
                  w-8 h-8 sm:w-9 sm:h-9 xl:w-16 xl:h-16 
                  object-contain brightness-0 invert
                "
              />
            </div>

            {/* ── Feature text — Outfit SemiBold 20px per spec ── */}
            <Typography
              variant="h4"
              as="p"
              color="none"
              className="text-[#222222] font-semibold text-[16px] sm:text-[17px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px] leading-[150%] tracking-[0.005em] text-center px-1"
            >
              {feature.text}
            </Typography>
          </div>
        ))}
      </div>

      {/* Divider below grid */}
      <div className="mt-10 sm:mt-12 2xl:mt-14 border-t border-gray-200" />
    </section>
  );
}