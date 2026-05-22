"use client";

import { useState } from "react";

const services = [
  {
    icon: "/sono-scanner/sono-service-1.png",
    title: "IMAGE QUALITY",
    description:
      "Sonoscanner ultrasound systems deliver exceptional Full HD image quality, providing clear and detailed visualization for enhanced diagnostic confidence. Advanced imaging supports accurate and reliable clinical decisions.",
  },
  {
    icon: "/sono-scanner/sono-service-2.png",
    title: "PORTABILITY",
    description:
      "Our ultrasound systems are designed for maximum mobility and convenience, making them easy to carry and ready to use whenever and wherever needed. Compact and lightweight for fast imaging access anywhere.",
  },
  {
    icon: "/sono-scanner/sono-service-3.png",
    title: "ERGONOMICS",
    description:
      "Designed with healthcare professionals in mind, Sonoscanner ultrasound systems offer an intuitive and user-friendly experience that simplifies everyday workflows. Ergonomic features enhance comfort, efficiency, and ease of use.",
  },
  {
    icon: "/sono-scanner/sono-service-4.png",
    title: "CUSTOMER SERVICE",
    description:
      "With a 96 % satisfaction rate, our Customer Service will accompany you and train you in the best way to use your Sonoscanner Ultrasound. We are committed to ensuring a smooth experience and long-term user confidence.",
  },
];

const CARDS_PER_PAGE = 3;
const totalPages = Math.ceil(services.length / CARDS_PER_PAGE);

export default function SonoServices() {
  const [activePage, setActivePage] = useState(0);

  return (
    <section className="relative bg-[#ffffff] py-28 overflow-hidden">
      {/* SOFT BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(18,63,136,0.03),transparent_55%)]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-11">
        {/* HEADING */}
        <div className="text-center">
          <div data-aos="fade-up">
            <h2 className="text-[#14387F] text-4xl leading-none font-semibold tracking-[-2px]">
              Our Services
            </h2>
          </div>

          <div data-aos="fade-up" data-aos-delay="120">
            <p className="mt-7 max-w-[1200px] mx-auto text-[#707070] text-[16px] leading-[1.9]">
              Sonoscanner provides innovative ultrasound solutions designed to
              simplify clinical workflows and support confident decision-making.
              Combining advanced technology with reliable performance, our
              systems help healthcare professionals deliver efficient and
              high-quality patient care every day.
            </p>
          </div>
        </div>

        {/* CARDS SLIDER */}
        <div className="mt-14 overflow-x-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activePage * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 pt-16"
              >
                {services
                  .slice(pageIndex * CARDS_PER_PAGE, (pageIndex + 1) * CARDS_PER_PAGE)
                  .map((service, index) => (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 150}
                      className="relative"
                    >
                      {/* FLOATING ICON */}
                      <div className="absolute left-1/4 -translate-x-1/2 -top-[52px] z-20">
                        <div className="w-[128px] h-[128px] rounded-full bg-[#14387F] shadow-[0_4px_1px_rgba(0,0,0,0.12)] border-[10px] border-[#f5f5f5] flex items-center justify-center">
                          <div className="text-white">
                            <img src={service.icon} alt="" className="w-15" />
                          </div>
                        </div>
                      </div>

                      {/* CARD */}
                      <div className="bg-white rounded-[28px] pt-12 pb-14 px-10 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-[#ececec] text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
                        {/* TITLE */}
                        <h3 className="text-[#14387F] text-[22px] font-semibold tracking-[-0.5px] ml-30">
                          {service.title}
                        </h3>

                        {/* DIVIDER */}
                        <div className="w-full h-[1px] bg-[#d8dfeb] mt-5 mb-5" />

                        {/* DESCRIPTION */}
                        <p className="text-[#707070] text-[16px] leading-[1.7]  mx-auto">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* SLIDER DOTS */}
        <div
          className="mt-20 flex items-center justify-center gap-3"
          data-aos="fade-up"
          data-aos-delay="450"
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActivePage(i)}
              className={`h-[8px] rounded-full transition-all duration-500 cursor-pointer ${
                i === activePage
                  ? "w-[52px] bg-[#14387F]"
                  : "w-[52px] bg-[#d5d5d5] hover:bg-[#a0a0a0]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
