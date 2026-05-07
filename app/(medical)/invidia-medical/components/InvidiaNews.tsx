"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const events = [
  {
    title: "MEDICA: 11–14 November 2024 in Düsseldorf",
    img: "/invidia/invidia-news-1.jpg",
  },
  {
    title: "SESAM: 19–21 June 2024 in Prague",
    img: "/invidia/invidia-news-2.jpg",
  },
  {
    title: "MEDICA: 17–20 November 2025 in Düsseldorf",
    img: "/invidia/invidia-news-3.png",
  },
  {
    title: "SESAM: 25–27 June 2025 in Valencia",
    img: "/invidia/invidia-news-4.png",
  },
];

export default function InvidiaNews() {
  return (
    <section className="relative overflow-hidden bg-[#5C6472] py-[62px]">


      <div className="relative z-10 mx-auto max-w-380 px-8">
        {/* ======================================
            TOP SECTION
        ======================================= */}
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-start">
          {/* LEFT CONTENT */}
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="max-w-[650px]"
          >
            {/* TITLE */}
            <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-1.8px] text-white">
              Trade fairs and congresses
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-7 text-base leading-[1.95] text-[#ECECEC]">
              We participate at trade fairs and congresses
              in the medical technology sector. These
              events provide us with an opportunity to
              present our{" "}
              <span className="font-semibold text-[#D3AB00]">
                latest products and innovations
              </span>{" "}
              to an international audience. We regularly
              exhibit at the following trade fairs where
              you can meet us and take the opportunity to
              get to know us personally and find out more
              about our high-quality medical technology
              solutions.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div
            data-aos="fade-left"
            data-aos-duration="900"
            className="min-w-[320px]"
          >
            {/* TITLE */}
            <h3 className="text-3xl font-semibold leading-[1.1] tracking-[-1.5px] text-white">
              Latest News & Events
            </h3>

            {/* DIVIDER */}
            <div className="mt-5 h-px w-full bg-white/15" />

            {/* BUTTONS */}
            <div className="mt-5 flex flex-wrap gap-3">
              {/* BTN 01 */}
              <Link
                href="/"
                className="group inline-flex h-[42px] items-center overflow-hidden rounded-[4px] bg-[#D3AB00] pl-5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-[2px]"
              >
                <span>Trade fairs</span>

                <span className="ml-4 flex h-full w-[34px] items-center justify-center bg-white text-[#D3AB00] transition-all duration-300 group-hover:w-[42px]">
                  <ArrowRight
                    size={15}
                    strokeWidth={2.5}
                  />
                </span>
              </Link>

              {/* BTN 02 */}
              <Link
                href="/"
                className="group inline-flex h-[42px] items-center overflow-hidden rounded-[4px] bg-[#D3AB00] pl-5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-[2px]"
              >
                <span>Current trade fair</span>

                <span className="ml-4 flex h-full w-[34px] items-center justify-center bg-white text-[#D3B00] transition-all duration-300 group-hover:w-[42px]">
                  <ArrowRight
                    size={15}
                    strokeWidth={2.5}
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* ======================================
            EVENTS GRID
        ======================================= */}
        <div className="mt-[56px] grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group flex flex-col"
            >
              {/* CARD */}
              <div className="flex h-full flex-col rounded-[18px] bg-[#F7F7F7] p-[12px] shadow-[0_12px_28px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-[6px] hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                {/* IMAGE */}
                <div className="relative h-[260px] overflow-hidden rounded-[14px] border border-[#DDDDDD] bg-[#EAEAEA]">
                  {/* PLACEHOLDER */}
                  {/* Replace later with actual image */}

                  <div className="absolute inset-0 bg-gradient-to-br from-[#F4F4F4] to-[#DDDDDD]" />

                  {/* OPTIONAL IMAGE */}
                  
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                 

                  {/* SOFT OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/[0.03] to-transparent" />
                </div>

                {/* TITLE */}
                <h4 className="mt-5 text-lg font-medium leading-[1.55] tracking-[-0.3px] text-[#3B3B3B]">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}