"use client";

import "aos/dist/aos.css";
import { useState } from "react";

const products = [
  {
    title : "SharkEye BigEye 4 Wheel Laser Aligner - BE4WLA",
    amount : "₹311,875.20",
    image : "/moto/shark/shark-trust-1.png",
    thumbnailText : "BEST SELLING WHEEL ALIGNER IN THE USA",
  },
  {
    title : "SharkEye Hawk SC4WLA 4 Wheel Laser Alignment Gauges. UK Made",
    amount : "₹203,585.20 ",
    image : "/moto/shark/shark-trust-2.png",
    thumbnailText : "BEST SELLING WHEEL ALIGNER IN THE EUROPE",
  },
  {
    title : "SharkEye Zubra TWIN STEER Laser truck wheel alignment tool - HGTSLA",
    amount : "₹₹373,755.20",
    image : "/moto/shark/shark-trust-3.png",
    thumbnailText : "BEST SELLING WHEEL ALIGNER IN THE AUSTRALIA",
  },
  {
    title : "SharkEye Roller Car 4 Wheel Laser Aligner - RO4WLA",
    amount : "₹251,851.60",
    image : "/moto/shark/shark-trust-4.png",
    thumbnailText : "BEST SELLING WHEEL ALIGNER IN THE INDIA",
  },
  {
    title : "SharkEye Falcon 4 Wheel Laser Aligner for Car & Van - LC4WLA",
    amount : "₹162,125.60 ",
    image : "/moto/shark/shark-trust-5.png",
    thumbnailText : "BEST SELLING WHEEL ALIGNER IN THE AFRICA",
  },
  {
    title : "SharkEye Eagle 4 Wheel Laser Alignment Gauges - PC4WLA",
    amount : "₹227,099.60",
    image : "/moto/shark/shark-trust-6.png",
    thumbnailText : "BEST SELLING WHEEL ALIGNER IN THE GLOBALLY",
  },
  {
    title : "SharkEye Roller Car 4 Wheel Laser Aligner - RO4WLA",
    amount : "₹251,851.60",
    image : "/moto/shark/shark-trust-7.png",
    thumbnailText : "BEST SELLING WHEEL ALIGNER IN THE UK",
  }
];

const ITEMS_PER_PAGE = 3;

export default function SharkDistributor() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  return (
    <section className="w-full overflow-hidden bg-[#f5f5f5]">
      {/* TOP DISTRIBUTOR BANNER */}
      <div
        data-aos="fade-down"
        className="relative w-full h-[160px] bg-white overflow-hidden border-b border-black/5"
      >
        <img src="/moto/shark/shark-distributor.png" alt="distributor" className="w-full h-full object-cover" />
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-380 mx-auto py-24">
        {/* TITLE */}
        <div
          data-aos="fade-up"
          className="text-center"
        >
          <h2 className="text-4xl leading-none tracking-[-1px] text-[#1f1f1f]">
            Trusted Products in Countries Worldwide
          </h2>
        </div>

        {/* PRODUCT SLIDER */}
        <div className="mt-16 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
              >
                {products
                  .slice(pageIndex * ITEMS_PER_PAGE, (pageIndex + 1) * ITEMS_PER_PAGE)
                  .map((item, index) => (
                    <div
                      key={item.title + pageIndex}
                      data-aos="fade-up"
                      data-aos-delay={index * 140}
                      className="group"
                    >
                      {/* IMAGE STAGE */}
                      <div className="relative h-[420px] bg-[#e6e6e6] overflow-hidden">
                        {/* THUMBNAIL TEXT */}
                        <p className="absolute top-10 left-0 right-0 text-center text-[22px] font-bold tracking-[1.4px] text-[#F5EA47] uppercase z-10 px-4">
                          {item.thumbnailText}
                        </p>

                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* PRODUCT INFO */}
                      <div className="pt-6">
                        <h3 className="text-[21px] leading-[1.35] tracking-[-0.4px] text-[#1f1f1f] max-w-85">
                          {item.title}
                        </h3>

                        <p className="mt-5 text-[20px] font-black text-[#8a8a8a]">
                          {item.amount}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* SLIDER INDICATORS */}
        <div
          data-aos="fade-up"
          className="mt-16 flex items-center justify-center gap-3"
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`cursor-pointer w-9.5 h-1.5 transition-colors duration-300 ${
                i === page ? "bg-black" : "bg-[#d7d7d7]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CUSTOM CLIP STYLE */}
      <style jsx>{`
        .clip-banner {
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
        }
      `}</style>
    </section>
  );
}
