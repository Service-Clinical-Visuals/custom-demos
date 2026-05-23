"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  {
    title: "Truck Single & Twin Steer Laser Aligners",
    amount: "₹254,326.80",
    image: "/moto/shark/shark-truck-1.png",
  },
  {
    title: "SharkEye Zubra TWIN STEER Laser truck wheel alignment tool - HGTSLA",
    amount: "₹373,755.20",
    image: "/moto/shark/shark-truck-2.png",
  },
  {
    title : "SharkEye Rhino Laser 2 Wheel Alignment Gauges for HGV, PSV & LCV - HG02WLA",
    amount : "₹129,948.00",
    image : "/moto/shark/shark-truck-3.png",
  },
  // {
  //   title : "SharkEye Ceros Laser wheel alignment tool - HGSS2WLA",
  //   amount : "₹179,452.00",
  //   image : "/moto/shark/shark-truck-4.png",
  // }
];

export default function SharkAllProducts() {

  return (
    <section className="relative w-full overflow-hidden bg-[#181315] py-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
       <img src="/moto/shark/shark-products-bg.jpg" alt="bg" className="w-full h-full object-cover"/>
        </div>

        {/* LARGE SHAPES */}
        <div className="absolute right-[-140px] bottom-[-120px] rotate-[28deg] opacity-[0.04]">
          <div className="grid grid-cols-2 gap-10">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="w-[220px] h-[220px] bg-white"
              />
            ))}
          </div>
        </div> 

        {/* DOT PATTERN */}
        <div className="absolute top-[90px] right-[30px] grid grid-cols-5 gap-8 opacity-40">
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className="w-[10px] h-[10px] rounded-full bg-[#8f7442]"
            />
          ))}
        </div>

        {/* BOTTOM GOLDEN GLOW */}
        <div className="absolute bottom-[-120px] left-1/3 w-[240px] h-[240px] rounded-full bg-[#8f7442]/20 blur-[100px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-380 mx-auto ">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* TITLE */}
          <div data-aos="fade-right">
            <h2 className="text-4xl leading-none tracking-[-1px] font-medium text-white">
              Truck Single & Twin Steer Laser Aligners
            </h2>
          </div>

          {/* BUTTON */}
          <div data-aos="fade-left">
            <button className="cursor-pointer font-black relative h-14 px-12 bg-[#f0df32] text-black text-[16px] tracking-wide hover:translate-x-1 transition-all duration-300">
              View All Product

              {/* ANGLED EDGE */}
              <span className="absolute top-0 -right-4.5 border-t-28 border-b-28 border-l-18 border-t-transparent border-b-transparent border-l-[#f0df32]" />
            </button>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-10 w-full h-px bg-white/20" />

        {/* PRODUCT GRID */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {products.map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group bg-[#efefef] border border-black/5 shadow-[0_12px_30px_rgba(0,0,0,0.35)] hover:-translate-y-2 transition-all duration-500"
            >
              {/* IMAGE AREA */}
              <div className="relative h-97.5 bg-[#ededed] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full bg-cover object-contain group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* CONTENT */}
              <div className="px-6 py-7">
                <h3 className="text-[20px] leading-[1.35]  tracking-[-0.5px] text-[#1f1f1f] max-w-[320px]">
                  {item.title}
                </h3>

                <p className="mt-5 text-[20px] font-black text-[#8a8a8a]">
                  {item.amount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}