"use client";

import "aos/dist/aos.css";

import { ArrowRight, ChevronRight, ChevronsRight } from "lucide-react";

const promises = [
  [
    "60 Years of Trust",
    "Personal Customer Service",
  ],
  [
    "Extensive Product Range",
    "Quality Products",
  ],
  [
    "End User Satisfaction",
    "Clinical Feedback",
  ],
  [
    "Reputable Brand",
    "Efficient Logistics",
  ],
];

export default function TimescoWhoWeAre() {

  return (
    <section className="w-full bg-[#ffff] py-20">
      <div className="mx-auto max-w-[1600px] px-8">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.05fr] items-stretch">
          
          {/* LEFT CONTENT */}
          <div data-aos="fade-right" className="flex flex-col justify-center">
            
            {/* WHO WE ARE */}
            <div>
              <h2
                className="
                  text-2xl
                  font-semibold
                  leading-tight
                  tracking-[-0.03em]
                  text-[#0d4f20]
                "
              >
                Who We Are
              </h2>

              <p
                className="
                  mt-3
                  text-[17px]
                  leading-[2]
                  text-[#555]
                "
              >
                In 1964, Capt. M.F. Bhatti founded Timesco Healthcare Ltd,
                previously known as Timesco of London. Initially, the company
                produced surgical instruments for leading English brands.
                However, as the company expanded, it established its own
                direct sales teams and began supplying products under its own
                brand names.
              </p>
            </div>

            {/* WHAT WE DO */}
            <div className="mt-7">
              <h2          
                className="
                  text-2xl
                  font-semibold
                  leading-tight
                  tracking-[-0.03em]
                  text-[#0d4f20]
                "
              >
                What We Do
              </h2>

              <p
                className="
                  mt-3
                  text-[17px]
                  leading-[2]
                  text-[#555]
                "
              >
                We have a skilled Direct Sales Team and Customer Support Teams
                to market our products directly to the NHS and Private
                Sectors. Our Hospital Sales Team Territory Managers have
                specialist knowledge.
              </p>

              {/* CTA */}
              <button
                className="
                  group
                  mt-5
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-[#0a8d34]
                  px-7
                  py-4
                  text-[16px]
                  font-medium
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#08752b]
                  cursor-pointer
                "
              >
                Learn About Us

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div
            data-aos="fade-left"
            className="relative flex items-stretch justify-center"
          >
            {/* Main Image */}
            <div
              className="
                w-full
                overflow-hidden
                rounded-[30px]
              "
            >
              <img
                src="/timesco/timesco-who.png"
                alt="Lab"
                className="
                  h-auto
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                "
              />
            </div>

          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-10 border-t border-[#d8d8d8]" />

        {/* PROMISES */}
        <div className="mt-7">
          
          <h3
            data-aos="fade-up"
            className="
              text-center
              text-2xl
              font-semibold
              tracking-[-0.03em]
              text-[#0d4f20]
            "
          >
            Timesco Promises
          </h3>

          <div
            className="
              mt-6
              grid
              grid-cols-1
              gap-8
              md:grid-cols-2
              xl:grid-cols-4
            "
          >
            {promises.map((group, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 120}
                className="
                  rounded-[28px]
                  border-2
                  border-[#0a8d34]
                  bg-white/60
                  px-10
                  py-10
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <div className="space-y-3">
                  {group.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <ChevronsRight size={18} className="text-[#0a8d34]"/>

                      <p
                        className="
                          text-[18px]
                          font-medium
                          text-[#4d4d4d]
                        "
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}