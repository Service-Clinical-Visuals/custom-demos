"use client";
import React, { useState, useRef } from "react";
import { Wrench, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

type Card = { title: string; desc: string; imgSrc: string };

const TABS_DATA: Record<string, { sideImg: string; sideText: string; cards: Card[] }> = {
  "Mobil Lubricants": {
    sideImg: "/moove/home/brand-side.png",
    sideText: "At Moove™, we offer a range of services and support to your business, which go beyond just the products we provide.",
    cards: [
      { title: "Mobil™ 1", desc: "Uniquely formulated to meet or exceed the industry's toughest standards, Mobil 1 engine oil provides exceptional wear protection, cleaning power and overall performance.", imgSrc: "/moove/home/brand-1.png" },
      { title: "Mobil™ Super", desc: "The right motor oil is the lifeblood of maintaining long engine life. Using Mobil Super engine oil reduces wear, helps combat sludge and provides long engine life and protection for critical engine parts.", imgSrc: "/moove/home/brand-2.png" },
      { title: "Mobil™ Service Centre", desc: "The Mobil Service Centre programme is an independent UK garage network offering a superior service using only Mobil lubricants.", imgSrc: "/moove/home/brand-3.png" },
      { title: "Mobil™ Delvac", desc: "Since its introduction in 1925, Mobil Delvac has been providing long engine life and high performance protection for truck engines and drivelines throughout the world in all conditions.", imgSrc: "/moove/home/brand-4.png" },
      { title: "Mobil™ Industrial lubricants", desc: "Your equipment is essential to your successful business. To safeguard it, you need a dependable lubricant. Mobil lubricants and greases help keep your operations running efficiently and at maximum reliability.", imgSrc: "/moove/home/brand-5.png" },
    ],
  },
  "Mobil Ancillaries": {
    sideImg: "/moove/home/brand-side.png",
    sideText: "At Moove™, we offer a range of services and support to your business, which go beyond just the products we provide.",
    cards: [
      { title: "Brought to you by Moove", desc: "All Mobil™ Ancillaries products are manufactured to the highest quality and thoroughly tested. Product development focuses on meeting next generation market demands with vehicle and equipment builder specific applications.", imgSrc: "/moove/home/brand-6.png" },
      { title: "Manual Gear Oils", desc: "Elevate your vehicle's performance with Mobil™ Transmission Fluid. Engineered for precision, the Mobil range ensures seamless gear shifts, superior protection, and extended transmission life.", imgSrc: "/moove/home/brand-7.png" },
      { title: "Antifreeze & Coolants", desc: "The Mobil™ Antifreeze and Coolant range provides the ultimate in protection and longevity throughout the seasons. Tested and developed for up to five years in collaboration with the world's leading vehicle manufacturers.", imgSrc: "/moove/home/brand-8.png" },
      { title: "Food Aerosols", desc: "Introducing Mobil™ Sprays, NSF registered and specifically designed for the Food Sector.", imgSrc: "/moove/home/brand-9.png" },
      { title: "Industry Aerosols", desc: "Introducing Mobil™ Sprays, specifically designed to complement Mobil Oils.", imgSrc: "/moove/home/brand-10.png" },
      { title: "Brake Fluid", desc: "The Brake Fluid offer provides comprehensive vehicle car parc coverage whilst also meeting with market competitiveness needs. As a safety-critical imperative, brake and vehicle manufacturers unanimously advise.", imgSrc: "/moove/home/brand-11.png" },
    ],
  },
  "ExxonMobil Aviation": {
    sideImg: "/moove/home/brand-side.png",
    sideText: "At Moove™, we offer a range of services and support to your business, which go beyond just the products we provide.",
    cards: [
      { title: "Mobil Jet™ oils", desc: "Mobil Jet™ oils help deliver unparalleled performance to more than 11,000 engines and are designed to meet today and tomorrow's aviation challenges.", imgSrc: "/moove/home/brand-12.png" },
      { title: "Greases", desc: "Our full line of aviation greases is designed to deliver protection against wear and corrosion, endure weather conditions and provide excellent performance in extreme temperatures.", imgSrc: "/moove/home/brand-13.png" },
      { title: "Hydraulic fluids", desc: "Our hydraulic fluids are fire-resistant phosphate esters, designed for commercial aircraft, providing power conveyance, heat transfer protection, and protection against wear and corrosion.", imgSrc: "/moove/home/brand-14.png" },
      { title: "Other lubricants", desc: "Our range of aviation lubricants includes piston, gear and specialty turbine oils, specifically formulated to provide outstanding performance for a wide array of applications.", imgSrc: "/moove/home/brand-15.png" },
    ],
  },
  "Comma": {
    sideImg: "/moove/home/brand-side.png",
    sideText: "At Moove™, we offer a range of services and support to your business, which go beyond just the products we provide.",
    cards: [
      { title: "Workshop offer", desc: "Mobil Jet™ oils help deliver unparalleled performance to more than 11,000 engines and are designed to meet today and tomorrow's aviation challenges.", imgSrc: "/moove/home/brand-16.png" },
      { title: "Motorfactors and sub-distributor offer", desc: "Your customers trust you to provide the right solutions for their workshops and to do this you need confidence in the products you supply.", imgSrc: "/moove/home/brand-17.png" },
      { title: "myComma workshop programme", desc: "The myComma workshop programme is like an extra toolbox designed to make your life simpler and help your workshop run smoother.", imgSrc: "/moove/home/brand-18.png" },
      { title: "Workshop Stars", desc: "Sign up to Comma™ Workshop Stars and we'll roll out the red carpet for your workshop and treat your mechanics like the superstars they are.", imgSrc: "/moove/home/brand-19.png" },
    ],
  },
};

const TAB_KEYS = Object.keys(TABS_DATA);

export default function BrandsCatalogue() {
  const [activeTab, setActiveTab] = useState(TAB_KEYS[0]);
  const swiperRef = useRef<SwiperType | null>(null);

  const { sideImg, sideText, cards } = TABS_DATA[activeTab];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    swiperRef.current?.slideTo(0);
  };

  return (
    <section className="w-full bg-[var(--moove-bg-grey)] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-2 mb-3">
            <Wrench className="w-4 h-4 text-[var(--moove-text-dark)]" />
            <span className="text-sm font-bold uppercase tracking-wider text-gray-500">Our Brands</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--moove-text-dark)]">
            Explore Our Trusted Lubricant Brands
          </h2>
        </div>

        {/* ── Body: sidebar + content ── */}
        <div className="flex flex-col lg:flex-row items-stretch">

          {/* Sidebar — desktop only */}
          <div className="hidden lg:block w-[280px] xl:w-[300px] shrink-0 relative">
            <img
              src={sideImg}
              alt="Moove"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#001C46]/65" />
            <p className="absolute bottom-6 left-6 right-6 text-white text-sm font-bold leading-relaxed z-10">
              {sideText}
            </p>
          </div>

          {/* Right content */}
          <div className="lg:pl-5 flex-1 min-w-0">

            {/* Tab bar + arrows on same row */}
            <div className="flex items-center">
              {/* Tabs — horizontally scrollable on mobile */}
              <div className="flex overflow-x-auto scrollbar-hide flex-1 min-w-0">
                {TAB_KEYS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`px-4 sm:px-5 py-[13px] text-sm font-bold whitespace-nowrap border border-gray-200 -ml-px first:ml-0 transition-colors shrink-0 ${activeTab === tab
                      ? "bg-[#006CA5] text-white border-[#006CA5] relative z-10"
                      : "bg-white text-[#001C46] hover:bg-gray-50"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-1 pl-2 shrink-0">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="bg-[#102A43] hover:bg-[#002D72] text-white p-[13px] transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="bg-[#102A43] hover:bg-[#002D72] text-white p-[13px] transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Swiper cards */}
            <div className="mt-4">
              <Swiper
                modules={[Navigation]}
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                spaceBetween={16}
                slidesPerView={1.2}
                className="brands-swiper"
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 16 },
                  1024: { slidesPerView: 3, spaceBetween: 16 },
                  1280: { slidesPerView: 3, spaceBetween: 16 },
                }}
              >
                {cards.map((card, i) => (
                  <SwiperSlide key={i} className="h-auto">
                    <div className="bg-white flex flex-col group shadow-sm hover:shadow-md transition-shadow h-full">
                      {/* Card image */}
                      <div className="w-full aspect-[4/3] relative overflow-hidden">
                        <img
                          src={card.imgSrc}
                          alt={card.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      {/* Card text */}
                      <div className="p-5 text-center flex flex-col flex-1">
                        <h4 className="text-[#006CA5] font-bold text-base mb-2 leading-snug text-[22px]!">
                          {card.title}
                        </h4>
                        <p className="text-gray-500 text-xs leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
