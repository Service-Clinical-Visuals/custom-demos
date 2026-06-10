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
      icon: "/medical/fisso-medical/group3.png",
      text: "The Original. 50 year experience with worldwide distribution",
    },
    {
      id: 4,
      icon: "/medical/fisso-medical/group4.png",
      text: "ISO 9001/13485 Certified",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-14 sm:gap-x-6 2xl:gap-x-8 2xl:gap-y-16">
      {features.map((feature, idx) => (
        <div
          key={feature.id}
          className="relative bg-white border border-gray-100 rounded-2xl 2xl:rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.09)] hover:-translate-y-1 transition-all duration-300 pt-14 sm:pt-16 xl:pt-18 2xl:pt-20 pb-7 sm:pb-8 xl:pb-9 2xl:pb-10 px-5 xl:px-6 2xl:px-7 text-center flex flex-col items-center group"
          data-aos="fade-up"
          data-aos-delay={idx * 100}
        >
          <div className="absolute -top-10 sm:-top-11 xl:-top-12 2xl:-top-14 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-22 sm:h-22 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 rounded-full bg-[#9C0B38] border-4 border-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center group-hover:bg-[#7d0930] group-hover:scale-105 transition-all duration-300">
            <img
              src={feature.icon}
              alt={feature.text}
              className="w-8 h-8 sm:w-9 sm:h-9 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11 object-contain brightness-0 invert"
            />
          </div>

          <Typography
            variant="body"
            color="dark"
            weight="medium"
            className="leading-snug text-[#222222] px-1"
          >
            {feature.text}
          </Typography>
        </div>
      ))}
    </div>
  );
}
