"use client";

import { useState } from "react";

const applications = [
  {
    title: "Clinical",
    image: "/accu-scope/application/Clinical.png",
    imagehover: "/accu-scope/application/ClinicalHover.png",
  },
  {
    title: "Education",
    image: "/accu-scope/application/Education.png",
    imagehover: "/accu-scope/application/EducationHover.png",
  },
  {
    title: "Research",
    image: "/accu-scope/application/Research.png",
    imagehover: "/accu-scope/application/ResearchHover.png",
  },
  {
    title: "Veterinary",
    image: "/accu-scope/application/Veterinary.png",
    imagehover: "/accu-scope/application/VeterinaryHover.png",
  },
  {
    title: "Industrial",
    image: "/accu-scope/application/Industrial.png",
    imagehover: "/accu-scope/application/IndustrialHover.png",
  },
  {
    title: "OEM",
    image: "/accu-scope/application/OEM.png",
    imagehover: "/accu-scope/application/OEMHover.png",
  },
];

export default function ChooseApplicationSection() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section
      className="
        relative
        overflow-hidden
        py-18
        bg-gradient-to-b
        from-[#005F97]
        via-[#007FA3]
        to-[#00B3A4]
      "
    >
      <div className="max-w-[1500px] 2xl:max-w-[80%] mx-auto px-6">

        {/* Header */}
        <div
          className="text-center max-w-6xl mx-auto"
          data-aos="fade-up"
        >
          <h2
            className="
              text-[#FFFFFF]!
              text-[38px]
              line-height-[60px]
              font-bold
            "
          >
            Choose Your Application
          </h2>

          <p
            className="
              mt-4
              text-[#FFFFFF]!
              text-[16px]
              line-height-[26px]
            "
          >
            Explore microscopy solutions tailored for clinical,
            educational, research, veterinary, industrial,
            and OEM needs designed to deliver precision and
            performance across every field.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-20
            grid
            grid-cols-2
            md:grid-cols-3
            xl:grid-cols-6
            gap-6
          "
        >
          {applications.map((item, index) => (
            <div
              key={item.title}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="
                group
                cursor-pointer
                text-center
              "
              onMouseEnter={() => setHoveredItem(item.title)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image Card */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[24px]
                  h-[320px]
                  shadow-xl
                "
              >
                <img
                  src={hoveredItem === item.title ? item.imagehover : item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/10
                    group-hover:bg-white/30
                    transition-all
                  "
                />
              </div>

              {/* Label */}
              <h3
                className="
                  mt-5
                 text-[#FFFFFF]!
                  text-[28px]
                  font-bold
                "
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}