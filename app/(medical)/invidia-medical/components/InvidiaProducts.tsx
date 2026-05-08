"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const products = [
  {
    title: "Surgical Instruments",
    img: "/invidia/invidia-pro-1.png",
  },
  {
    title: "Endoscopy",
    img: "/invidia/invidia-pro-2.png",
  },
  {
    title: "Surgical Simulators",
    img: "/invidia/invidia-pro-3.png",
  },
  {
    title: "InViridis 4K ICG/NIR System",
    img: "/invidia/invidia-pro-4.png",
  },
];

export default function InvidiaProducts() {
  return (
    <section className="overflow-hidden bg-[#F4F4F4] py-[72px]">
      <div className="mx-auto max-w-380 px-8">
        {/* ======================================
            TOP HEADER
        ======================================= */}
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
          {/* LEFT CONTENT */}
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="max-w-[640px]"
          >
            {/* SUBTITLE */}
            <span className="text-base font-medium text-[#555555]">
              Our range of products
            </span>

            {/* TITLE */}
            <h2 className="mt-3 text-4xl font-semibold leading-[1.05] tracking-[-2px] text-[#353535]">
              Advanced Surgical Solutions
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-[620px] text-base leading-[1.9] text-[#6A6A6A]">
              Comprehensive solutions supporting modern
              surgical practices—from traditional
              procedures and minimally invasive
              techniques to advanced visualization
              systems designed to enhance precision,
              training, and clinical performance.
            </p>
          </div>

          {/* RIGHT BUTTON */}
          <div
            data-aos="fade-left"
            data-aos-duration="900"
            className="pt-2"
          >
            <Link
              href="/"
              className="group inline-flex h-[42px] items-center overflow-hidden rounded-[4px] bg-[#D3AB00] pl-5 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-[2px]"
            >
              <span>View Specifications</span>

              <span className="ml-4 flex h-full w-[34px] items-center justify-center bg-white text-[#D3AB00] transition-all duration-300 group-hover:w-[42px]">
                <ArrowRight
                  size={15}
                  strokeWidth={2.5}
                />
              </span>
            </Link>
          </div>
        </div>

        {/* ======================================
            PRODUCT GRID
        ======================================= */}
        <div className="mt-[52px] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="group"
            >
              {/* CARD */}
              <div className="rounded-[18px] border border-[#DDDDDD] bg-[#F7F7F7] p-[12px] shadow-[0_4px_14px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-[6px] hover:shadow-[0_18px_35px_rgba(0,0,0,0.08)]">
                {/* IMAGE HOLDER */}
                <div className="relative h-[248px] overflow-hidden rounded-[14px] bg-[#DADADA]">
                  {/* PLACEHOLDER */}
                  {/* Replace later with actual image */}

                  <div className="absolute inset-0 bg-gradient-to-br from-[#ECECEC] to-[#D4D4D4]" />

                  {/* OPTIONAL IMAGE */}
                  
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                 

                  {/* OVERLAY LIGHT */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/[0.04] to-transparent" />
                </div>
              </div>

              {/* TITLE */}
              <h3 className="mt-4 text-xl font-medium tracking-[-0.3px] text-[#353535]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}