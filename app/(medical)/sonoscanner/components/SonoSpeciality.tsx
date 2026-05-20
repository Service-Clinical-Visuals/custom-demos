"use client";

import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const specialties = [
  {
    title: "General Medicine",
    img: "/medical/sono-scanner/sono-speciality-1.png",
  },
  {
    title: "Smur - Emergency Medicine",
    img: "/medical/sono-scanner/sono-speciality-2.png",
  },
  {
    title: "Radiology",
    img: "/medical/sono-scanner/sono-speciality-3.png",
  },
  {
    title: "Obstetrics / Gynecology",
    img: "/medical/sono-scanner/sono-speciality-4.png",
  },
  {
    title: "Urology",
    img: "/medical/sono-scanner/sono-speciality-5.png",
  },
  {
    title: "Osteoarticular Field",
    img: "/medical/sono-scanner/sono-speciality-6.png",
  },
  {
    title: "Anesthesia",
    img: "/medical/sono-scanner/sono-speciality-7.png",
  },
  {
    title: "Endocrinology",
    img: "/medical/sono-scanner/sono-speciality-8.png",
  }
];

const PAGE_SIZE = 4;

export default function SonoSpeciality() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(specialties.length / PAGE_SIZE);
  const visible = specialties.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className="relative overflow-hidden bg-[#f5f7fb] py-24">
      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(18,63,136,0.04),transparent_55%)]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16">
        {/* TOP HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* LEFT */}
          <div className="max-w-[760px]">
            <div data-aos="fade-up">
              <h2 className="text-[#123f88] text-4xl leading-none tracking-[-2px] font-semibold">
                Your Specialty
              </h2>
            </div>

            <div data-aos="fade-up" data-aos-delay="120">
              <p className="mt-6 text-[#6f6f6f] text-[16px] leading-[1.9] max-w-[780px]">
                Sonoscanner ultrasound scanners adapt to every specialty with
                dedicated probes and customizable settings, delivering precise
                imaging and reliable performance for a wide range of clinical
                applications.
              </p>
            </div>
          </div>

          {/* RIGHT BUTTON */}
          <div className="pt-3" data-aos="fade-left">
            <button className="group bg-[#123f88] hover:bg-[#0d326d] transition-all duration-300 text-white rounded-full h-[58px] px-10 flex items-center gap-5 shadow-lg">
              <span className="text-[15px] font-semibold">
                Discover Our Story
              </span>

              <div className="transition-transform duration-300 group-hover:translate-x-1">
                <FiArrowRight className="text-[18px]" />
              </div>
            </button>
          </div>
        </div>

        {/* SPECIALTY CARDS */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
          {visible.map((item, index) => (
            <div
              key={page * PAGE_SIZE + index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="group"
            >
              <div className="bg-white rounded-[30px] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#ececec] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]">
                {/* IMAGE WRAPPER */}
                <div className="relative h-[320px] overflow-hidden rounded-[24px]">
                  <img
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                    src={item.img}
                    alt={item.title}
                  />
                </div>

                {/* TITLE */}
                <div className="pt-8 pb-5 text-center">
                  <h3 className="text-[#123f88] text-xl leading-[1.35] tracking-[-1px] font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PAGE INDICATORS */}
        <div
          className="mt-20 flex items-center justify-center gap-3"
          data-aos="fade-up"
          data-aos-delay="450"
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-[8px] rounded-full transition-all duration-300 ${
                i === page
                  ? "w-[52px] bg-[#123f88]"
                  : "w-[52px] bg-[#d8d8d8] hover:bg-[#a0a0a0]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
