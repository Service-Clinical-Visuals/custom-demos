"use client";

import React from "react";

const team = [
  {
    name: "CRAIG DUNLOP",
    role: "General Manager",
    image: "/vascular-flow/team-1.png"
  },
  {
    name: "GRAEME HOUSTON",
    role: "Non-executive Medical Director",
    image: "/vascular-flow/team-2.png"
  },
  {
    name: "ANGELA PATERSON",
    role: "Head of Quality Assurance & Regulatory affairs",
    image: "/vascular-flow/team-3.png"
  },
  {
    name: "LUCY PETERSEN",
    role: "QA & RA Manager",
    image: "/vascular-flow/team-4.png"
  }
];

export default function MeetOurTeam() {
  return (
    <section id="team" className="w-full py-16 lg:py-20 bg-[#004A87] text-white">
      <div className="container mx-auto px-4 lg:px-2">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-[26px] md:text-[30px] lg:text-[34px] font-bold text-white leading-tight mb-4">
            Meet Our Team
          </h2>
          <p className="text-white!">We are the team behind the technology that restores the natural pattern of blood flow.</p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Frame with Grayscale filter */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden mb-5 border-2 border-white/5! select-none">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-103"
                />
              </div>

              {/* Identity details */}
              <h3 className="text-[18px] md:text-[20px] font-bold tracking-wide mb-1 uppercase text-white!">
                {member.name}
              </h3>
              <p className="text-white! max-w-[90%]">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
