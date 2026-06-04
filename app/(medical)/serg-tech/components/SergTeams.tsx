"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SergTeams() {

  const teamMembers = [
    {
      name: "Dr Samuel Wilson",
      role: "CEO",
      image: "/sergtech/serg-teams-1.png",
    },
    {
      name: "Diana Darko",
      role: "COO",
      image: "/sergtech/serg-teams-2.png",
    },
    {
      name: "Ewan Phillips",
      role: "CFO",
      image: "/sergtech/serg-teams-3.png",
    },
    {
      name: "Dr Christos Kapatos",
      role: "CBO",
      image: "/sergtech/serg-teams-4.png",
    },
  ];

  return (
    <section className="w-full bg-[#f6f6f6] py-24 px-6 overflow-hidden">
      <div className="max-w-[1700px] mx-auto">
        {/* HEADER */}
        <div
          data-aos="fade-up"
          className="text-center"
        >
          <h2 className="text-[#252f8d] text-4xl leading-none tracking-[-1.5px] font-bold">
            The SERG Team
          </h2>

          <p className="mt-8 max-w-[1200px] mx-auto text-[#6f6f6f] text-[16px] leading-[2] font-medium">
            At SERG Technologies, our team brings together experts in
            bio-mechatronics, clinical neurology, AI, and digital healthcare to
            develop innovative solutions for Parkinson&apos;s care. Driven by
            collaboration, research, and patient-focused innovation, we are
            committed to improving symptom monitoring, treatment precision, and
            overall quality of life for patients worldwide.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="mt-17 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 120}
              className="group bg-[#f8f8f8] rounded-[26px] border border-[#e9e9e9] shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)]"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-[18px] h-[340px] bg-[#e8e8e8]">
                {/* 
                  Replace with actual team images later
                */}

                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="text-center pt-6 pb-4">
                <h3 className="text-[#252f8d] text-[24px] font-bold tracking-[-0.5px]">
                  {member.name}
                </h3>

                <p className="mt-3 text-[#252f8d] text-[16px] font-semibold tracking-wide">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SLIDER DOTS */}
        <div
          data-aos="fade-up"
          className="flex items-center justify-center gap-3 mt-20"
        >
          {/* ACTIVE */}
          <div className="w-[16px] h-[16px] rounded-full border border-[#252f8d] flex items-center justify-center">
            <div className="w-[8px] h-[8px] rounded-full bg-[#252f8d]" />
          </div>

          {/* INACTIVE */}
          <div className="w-[10px] h-[10px] rounded-full bg-[#d3d3d3]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#d3d3d3]" />
        </div>
      </div>
    </section>
  );
}