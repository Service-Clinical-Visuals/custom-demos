"use client";

import "aos/dist/aos.css";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const  products = [
  {
  title : "SharkEye BigEye 4 Wheel Laser Aligner - BE4WLA",
  amount : "₹311,875.20",
  image: "/moto/shark/shark-1.png",
  category : "Car",
  },
  {
  title : "SharkEye Falcon 4 Wheel Laser Aligner for Car & Van - LC4WLA",
  amount: "₹162,125.60",
  image: "/moto/shark/shark-2.png",
  category : "Car",
  },
  {
  title : "SharkEye Hawk SC4WLA 4 Wheel Laser Alignment Gauges. UK Made",
  amount: "₹203,585.20",
  image: "/moto/shark/shark-3.png" ,
  category : "Car",
  },
  {
  title : "SharkEye Eagle 4 Wheel Laser Alignment Gauges - PC4WLA",
  amount: "₹227,099.60",
  image: "/moto/shark/shark-4.png",
  category : "Car",
  },
  {
  title : "SharkEye Roller Car 4 Wheel Laser Aligner - RO4WLA",
  amount : "₹251,851.60", 
  image: "/moto/shark/shark-5.png",
  category : "Car", 
  },
  {
    title : "SharkEye MONSTA Wheel Aligner for SUVs, Pick-ups, and 4x4s",
    amount: "₹259,277.20",
    image: "/moto/shark/shark-four-1.png",
    category : "Four",
  },
  {
    title : "SharkEye Elegante 8CCD with 4 x Contactless Clamps",
    amount: "₹989,956.24",
    image: "/moto/shark/shark-four-2.png",
    category : "Four",
  },
  {
    title : "IBEX Mobile Computerised Wheel Aligner - IBMCWA",
    amount: "₹1,023,495.20",
    image: "/moto/shark/shark-four-3.png",
    category : "Four",
  },
  {
    title : "'ELEGANTE' 8CCD Computerised Wheel Aligner - 8CCDA",
    amount: "₹1,023,495.20",
    image: "/moto/shark/shark-four-4.png",
    category : "Four",
  }      
];

const tabs = [
  { label: "Car 2 & 4", category: "Car" },
  { label: "4X4 2 & 4", category: "Four" },
];

const PAGE_SIZE = 3;

export default function SharkProducts() {
  const [activeTab, setActiveTab] = useState("Car");
  const [page, setPage] = useState(0);

  const filtered = products.filter((p) => p.category === activeTab);
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const visible = filtered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  function switchTab(category: string) {
    setActiveTab(category);
    setPage(0);
  }

  return (
    <section className="w-full bg-[#f3f3f3] py-24 overflow-hidden">
      <div className="max-w-380 mx-auto ">
        {/* TOP HEADER */}
        <div className="flex items-center justify-between mb-10">
          {/* TITLE */}
          <h2
            data-aos="fade-right"
            className="text-4xl tracking-[-1px] text-[#232323] leading-none"
          >
            latest Featured Wheel Aligners
          </h2>
 
          {/* TABS */}
          <div
            data-aos="fade-left"
            className="flex items-center overflow-hidden border border-black/5"
          >
            {tabs.map((tab) => (
              <button
                key={tab.category}
                onClick={() => switchTab(tab.category)}
                className={` cursor-pointer h-14.5 px-10 font-bold text-[16px] transition-colors duration-200 ${
                  activeTab === tab.category
                    ? "bg-[#f0df32] text-black"
                    : "bg-transparent text-[#232323]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCT AREA */}
        <div className="relative">
          {/* LEFT ARROW */}
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 0}
            className="cursor-pointer absolute -left-6.5 top-[40%] -translate-y-1/2 z-20 w-13.5 h-13.5 rounded-full bg-[#f0df32] flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-30 disabled:cursor-default disabled:hover:scale-100"
          >
            <ChevronLeft size={24} strokeWidth={2.2} />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page >= totalPages - 1}
            className="cursor-pointer absolute -right-6.5 top-[40%] -translate-y-1/2 z-20 w-13.5 h-13.5 rounded-full bg-[#f0df32] flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-30 disabled:cursor-default disabled:hover:scale-100"
          >
            <ChevronRight size={24} strokeWidth={2.2} />
          </button>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {visible.map((item, index) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="group bg-[#efefef] border border-black/5 shadow-[0_6px_18px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500"
              >
                {/* IMAGE AREA */}
                <div className="relative h-97.5 bg-[#ececec] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="px-6 py-7">
                  <h3 className="text-[20px] leading-[1.35] tracking-[-0.5px] text-[#1f1f1f] max-w-[320px]">
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

        {/* BOTTOM AREA */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 mt-16">
          {/* DESCRIPTION */}
          <p
            data-aos="fade-right"
            className="max-w-175 text-[16px] leading-loose text-[#6c6c6c] font-medium"
          >
            We understand the importance of staying up-to-date with the latest
            trends and technologies. That's why we are continually investing in
            research and development to ensure our products remain the very best
            on the market.
          </p>

          {/* BUTTON */}
          <button
            data-aos="fade-left"
            className="cursor-pointer relative h-13.5 px-10 bg-[#f0df32] text-black font-bold text-[16px] tracking-wide hover:translate-x-1 transition-all duration-300"
          >
            View All Products

            {/* ANGLED EDGE */}
            <span className="absolute top-0 -right-4.5 border-t-27 border-b-27 border-l-18 border-t-transparent border-b-transparent border-l-[#f0df32]" />
          </button>
        </div>
      </div>
    </section>
  );
}