// app/components/OEMNewsGrid.tsx

"use client";

import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Hafner Series HBS CANopen Coupler",
    date: "February 18, 2025",
    image: "/medical/ae/ae-news-1.png",
  },
  {
    title: "Dynamic Four-Day Week",
    date: "July 1, 2022",
    image: "/medical/ae/ae-news-2.png",
  },
  {
    title: "Oxygen Precision Regulators",
    date: "May 16, 2019",
    image: "/medical/ae/ae-news-3.png",
  },
];

export default function AirNews() {
  return (
    <section className="w-full bg-[#ffff] py-[90px]">
      <div className="mx-auto max-w-[1600px] px-6">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          data-aos="fade-up"
          className="text-center"
        >
          {/* LABEL */}
          <span
            className="
              text-[16px]
              font-bold
              uppercase
              tracking-[0.4px]
              text-[#ef3b2d]
            "
          >
            iSAR™ (Integrated System Architecture)
          </span>

          {/* HEADING */}
          <h2
            className="
              mt-4
              text-[32px]
              font-bold
              leading-[1.18]
              tracking-[-1px]
              text-[#343434]
            "
          >
            Check Our Recent Events
          </h2>
        </div>

        {/* =====================================================
            NEWS GRID
        ====================================================== */}

        <div
          className="
            mt-[60px]
            grid
            grid-cols-1
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {articles.map((item, index) => (
            <article
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="
                group
                overflow-hidden
                bg-[#F9F9F9]
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >
              {/* =====================================
                  IMAGE
              ====================================== */}

              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* =====================================
                  CONTENT
              ====================================== */}

              <div className="bg-[#f3f3f3] px-5 py-6">
                {/* TITLE */}
                <h3
                  className="
                    text-xl
                    font-bold
                    leading-[1.45]
                    tracking-[-0.3px]
                    text-[#1f1f1f]
                  "
                >
                  {item.title}
                </h3>

                {/* DIVIDER */}
                <div className="mt-5 h-[1px] w-full bg-[#dddddd]" />

                {/* FOOTER */}
                <div className="mt-5 flex items-center justify-between">
                  {/* DATE */}
                  <span
                    className="
                      text-[16px]
                      font-medium
                      text-[#7a7a7a]
                    "
                  >
                    {item.date}
                  </span>

                  {/* CTA */}
                  <button
                    className="
                      cursor-pointer
                      flex
                      h-[42px]
                      w-[42px]
                      items-center
                      justify-center
                      bg-[#ef3124]
                      text-white
                      transition-all
                      duration-300
                      hover:scale-110
                      hover:bg-[#d9281c]
                    "
                  >
                    <ArrowRight
                      size={19}
                      strokeWidth={2.6}
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}