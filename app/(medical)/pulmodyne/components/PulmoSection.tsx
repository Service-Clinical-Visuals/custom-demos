"use client";

import { ArrowRightCircle } from "lucide-react";
import "aos/dist/aos.css";

const categories = [
  {
    id: "01",
    title: "EMS",
    description:
      "Pulmodyne EMS solutions are engineered to assist first responders with dependable airway management and respiratory care products for critical emergency situations.",
    hoverImg: "/medical/pulmo/pulmo-section-1.jpg",
    hoverColor: "#0065A4B2",
  },
  {
    id: "02",
    title: "Anesthesia",
    description:
      "Pulmodyne anesthesia products are designed to enhance patient safety and support efficient ventilation management during surgical and clinical procedures.",
    hoverImg: "/medical/pulmo/pulmo-section-2.png",
    hoverColor: "#0065A4B2",
  },
  {
    id: "03",
    title: "Respiratory",
    description:
      "Pulmodyne respiratory solutions provide advanced breathing support technologies focused on improving patient comfort, therapy efficiency, and clinical performance.",
    hoverImg: "/medical/pulmo/pulmo-section-3.jpg",
    hoverColor: "#0065A4B2",
  },
];

export default function PulmoSection() {

  return (
    <section className="overflow-hidden bg-[#F4F4F4] py-16 lg:py-28">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-16">
        {/* ================================================= */}
        {/* STACKED BACKGROUND LAYERS */}
        {/* ================================================= */}

        <div className="relative mx-auto max-w-[1600px]">
          {/* BACK LAYER 1 */}
          <div className="absolute left-1/2 top-[-12px] h-full w-[95%] -translate-x-1/2 rounded-[34px] bg-[#6DB2A4]/35" />

          {/* BACK LAYER 2 */}
          <div className="absolute left-1/2 top-[-24px] h-full w-[90%] -translate-x-1/2 rounded-[34px] bg-[#4A9C8B]/30" />

          {/* ================================================= */}
          {/* MAIN CONTAINER */}
          {/* ================================================= */}

          <div className="relative overflow-hidden rounded-[36px] bg-[#008D70] px-6 py-9 shadow-[0_18px_40px_rgba(0,0,0,0.12)] sm:px-8 sm:py-10 lg:px-12 lg:py-14">
            {/* GRID */}
            <div className="grid gap-6 lg:grid-cols-3">
              {categories.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  className="cursor-pointer group relative overflow-hidden rounded-[16px] bg-[#F5F5F5] px-8 pb-8 pt-7 shadow-[0_10px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_34px_rgba(0,0,0,0.08)]"
                >
                  {/* HOVER BG IMAGE */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ backgroundImage: `url(${item.hoverImg})` }}
                  />

                  {/* HOVER COLOR OVERLAY */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ backgroundColor: item.hoverColor }}
                  />

                  {/* ================================================= */}
                  {/* NUMBER */}
                  {/* ================================================= */}

                  <div className="absolute right-7 top-5">
                    <span className="relative text-[40px] font-semibold leading-none tracking-[-4px] text-[#303030] transition-colors duration-300 group-hover:text-white lg:text-[55px]">
                      {item.id}
                    </span>
                  </div>

                  {/* ================================================= */}
                  {/* TITLE */}
                  {/* ================================================= */}

                  <div className="relative">
                    <h3 className="text-2xl font-semibold tracking-[-1px] text-[#0068A8] transition-colors duration-300 group-hover:text-white lg:text-3xl">
                      {item.title}
                    </h3>

                    {/* LINE */}
                    <div className="mt-4 h-[1px] w-full bg-[#E3E3E3] transition-colors duration-300 group-hover:bg-white/30" />
                  </div>

                  {/* ================================================= */}
                  {/* DESCRIPTION */}
                  {/* ================================================= */}

                  <p className="relative mt-7 max-w-full text-[16px] leading-[1.95] text-[#666666] transition-colors duration-300 group-hover:text-white/90">
                    {item.description}
                  </p>

                  {/* ================================================= */}
                  {/* ACTIONS */}
                  {/* ================================================= */}

                  <div className="relative mt-10 flex flex-col md:flex-row items-center gap-5">
                    {/* VIEW PRODUCTS */}
                    <button className="cursor-pointer flex h-[42px] items-center justify-center rounded-[4px] bg-[#0068A8] px-6 text-[16px] font-semibold text-white shadow-[0_8px_16px_rgba(0,104,168,0.14)] transition-all duration-300 hover:bg-[#00598F]">
                      View Products
                    </button>

                    {/* DISTRIBUTIONS */}
                    <button className="cursor-pointer group/link inline-flex items-center gap-2 text-[16px] font-medium text-[#0068A8] transition-colors duration-300 group-hover:text-white">
                      Distributions

                      <ArrowRightCircle
                        size={25}
                        strokeWidth={2.3}
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
