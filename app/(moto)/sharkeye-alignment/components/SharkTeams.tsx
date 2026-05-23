"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    name: "CARL GIBSON",
    role: "MD / Sales / Production",
    img: "/moto/shark/shark-team-1.png",
    description:
      "Owner and founder of SharkEye. He boasts a degree in Philosophy, so if he looks deep in thought, that's why. When he's not running his global wheel alignment enterprise, he can be found chasing after his three young children - with half an eye on the fortunes of Leeds United.",
  },
  {
    name: "ROZINA SHAININGWALA",
    role: "Finance Controller",
    img: "/moto/shark/shark-team-2.png",
    description:
      "Before joining SharkEye, Rozina, a Chartered Accountant, worked for major brands including Disney and Universal. Outside work she’s taking flying lessons with a view to gaining a pilot’s licence.",
  },
  {
    name: "FAIZ SHAININGWALA",
    role: "Fasep Products Manager / Production",
    img: "/moto/shark/shark-team-3.png",
    description:
      "Specialising in all things Fasep, the Italian manufacturer of premium-grade wheel aligners, which SharkEye enjoys sole UK distribution rights for. Faiz has a diploma and a degree in engineering. He’s also a Level 5 network engineer. And like his brother, he hits the gym regularly.",
  },
];

export default function SharkTeams() {

  return (
    <section className="w-full bg-[#ffff] py-24 overflow-hidden">
      <div className="max-w-380 mx-auto px-4 sm:px-6">
        {/* SECTION TITLE */}
        <div
          data-aos="fade-up"
          className="text-center"
        >
          <h2 className="text-4xl leading-none tracking-[-1.5px]  text-[#1f1f1f]">
            Sharkeye UK Team
          </h2>
        </div>

        {/* TEAM GRID */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              data-aos="fade-up"
              data-aos-delay={index * 140}
              className="group bg-[#efefef] border border-black/5 shadow-[0_10px_28px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500"
            >
              {/* IMAGE AREA */}
              <div className="relative h-[420px] overflow-hidden bg-white">
                {/* PLACEHOLDER IMAGE CONTAINER */}
                <div className="absolute inset-0 flex items-end justify-center">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* SOFT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/[0.02]" />
              </div>

              {/* CONTENT */}
              <div className="px-6 py-7">
                {/* NAME */}
                <h3 className="text-[22px] leading-none tracking-[-0.5px] font-black text-[#1f1f1f] uppercase">
                  {member.name}
                </h3>

                {/* ROLE */}
                <p className="mt-5 text-[16px] font-medium text-[#6f6f6f]">
                  {member.role}
                </p>

                {/* DIVIDER */}
                <div className="w-full h-[1px] bg-[#dddddd] mt-6" />

                {/* DESCRIPTION */}
                <p className="mt-6 text-[15px] leading-[2] text-[#7a7a7a] font-medium">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}