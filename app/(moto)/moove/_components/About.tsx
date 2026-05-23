"use client";
import React from "react";
import { ArrowRight, Wrench } from "lucide-react";
import Link from "next/link";
const brandsData = [
  {
    title: "Official Distributor of Mobil lubricants",
    desc: "We are an Authorised Distributor of Mobil lubricants. Delivering innovative lubricant solutions for automotive and industrial applications. We work alongside ExxonMobil to provide...",
    imgSrc: "/moove/home/who-2.png",
  },
  {
    title: "Our proprietary brand: Comma",
    desc: "Since 1965, Comma has been supporting workshops to get the job done right, first time every time. Our Comma lubricants are specially formulated for workshops across almost every OEM.",
    imgSrc: "/moove/home/who-3.png",
  },
  {
    title: "Mobil lubricants and Ancillaries by Moove",
    desc: "We're proud to be the authorized licensee of Mobil Ancillaries. We manufacture sell, market and distribute Mobil Ancillaries across Europe. Including advanced antifreezes, coolants for all PV...",
    imgSrc: "/moove/home/who-4.png",
  },
];
export default function About() {
  return (
    <section className="relative w-full bg-[url('/moove/home/bg.jpg')] background-size-contain background-no-repeat background-position-center text-white py-16">
      <div className="absolute inset-0 z-0 bg-[var(--moove-dark-blue)]/70 z-0" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] mb-10">

          {/* Left: text content */}
          <div className="flex flex-col justify-center pb-12 xl:pb-14 lg:pr-8 text-center lg:text-left">
            <div className="flex items-center gap-2 mb-3 justify-center lg:justify-start">
              <Wrench className="w-4 h-4 text-gray-300" />
              <h6 className="text-[15px]! font-bold tracking-widest text-gray-300">
                Who we are
              </h6>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-bold mb-4 leading-snug">
              Moove is a Global Lubricants Solution Company.
            </h2>

            <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-8 text-justify">
              We're part of the Cosan Group and one of the largest producers and distributors of lubricants in Europe, South America and the US. From our European Headquarters, we sell and distribute to over 40 countries worldwide. Our goal is to be the leading global reference in the Sales and Marketing of lubricants. We produce, sell and distribute lubricants and greases for the automotive, agricultural, aerial, naval, and industrial segments ensuring productivity, efficiency, and performance.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Link
                href="#"
                className="inline-flex items-center bg-white text-[var(--moove-text-dark)] hover:bg-gray-100 transition-colors"
              >
                <span className="px-5 py-2.5 text-[16px] font-bold">Learn More</span>
                <div className="bg-[var(--moove-blue)] text-white px-3 py-2.5 border border-white">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right: image within container */}
          <div className="relative h-[300px] lg:h-auto min-h-[300px] my-8 overflow-hidden rounded-sm">
            <img
              src="/moove/home/who-1.png"
              alt="Who We Are - Moove"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brandsData.map((item, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] group overflow-hidden cursor-pointer bg-gray-800 border-2 border-transparent hover:border-[#006CA5] transition-colors duration-300"
            >
              {/* Image — scales on hover */}
              <div className="absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-500">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Default overlay — lighter, fades out on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-300" />

              {/* Hover overlay — darker for text readability */}
              <div className="absolute inset-0 bg-black/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Default state: title pinned to bottom */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 group-hover:opacity-0 transition-opacity duration-200">
                <h4 className="text-white text-[25px]! font-bold leading-snug">
                  {item.title}
                </h4>
              </div>

              {/* Hover state: title + desc + read more */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                <h4 className="text-white text-[25px]! font-bold leading-snug mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-200 text-xs leading-relaxed mb-4">
                  {item.desc}
                </p>
                <div className="flex items-center gap-1 text-white text-xs font-bold">
                  <span>Read More</span>
                  <span className="text-base">&raquo;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
