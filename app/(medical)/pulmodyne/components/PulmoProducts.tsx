"use client";

import { useRef, useState } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

const products = [
  {
    id: 1,
    title: "BiTrac® NIV Nasal Mask",
    image: "/pulmo/pulmo-product-1.png",
    category: "Respiratory",
  },
  {
    id: 2,
    title: "O2-MAX®",
    image: "/pulmo/pulmo-product-2.png",
    category: "EMS",
  },
  {
    id: 3,
    title: "BiTrac® NIV Nasal Mask",
    image: "/pulmo/pulmo-product-3.png",
    category: "Anesthesia",
  },
  {
    id: 4,
    title: "GO-PAP™",
    image: "/pulmo/pulmo-product-4.png",
    category: "Respiratory",
  },
  {
    id: 5,
    title: "Control-Cric®",
    image: "/pulmo/pulmo-product-5.png",
    category: "Respiratory",
  },
];

const GAP = 32; // gap-8 = 32px

export default function PulmoProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const maxIndex = products.length - 1;

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const containerWidth = scrollRef.current.offsetWidth;
    const visible = containerWidth >= 1024 ? 3 : containerWidth >= 768 ? 2 : 1;
    const step = (containerWidth + GAP) / visible;
    scrollRef.current.scrollBy({
      left: dir === "right" ? step : -step,
      behavior: "smooth",
    });
    setCurrentIndex((prev) =>
      dir === "right"
        ? Math.min(prev + 1, maxIndex)
        : Math.max(prev - 1, 0)
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#0065A4] py-16 lg:py-24">
      {/* ================================================= */}
      {/* BACKGROUND DEPTH */}
      {/* ================================================= */}

      {/* RADIAL LIGHT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.06),transparent_35%)]" />

      {/* CURVED SHAPE */}
      <div className="absolute bottom-[-160px] left-[-120px] h-[480px] w-[900px] rounded-full border border-white/[0.05]" />

      {/* CURVED SHAPE */}
      <div className="absolute bottom-[-220px] left-[120px] h-[520px] w-[1000px] rounded-full border border-white/[0.04]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-16">
        {/* ================================================= */}
        {/* TOP BAR */}
        {/* ================================================= */}

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* ================================================= */}
          {/* TITLE */}
          {/* ================================================= */}

          <div>
            <h2 className="text-2xl font-semibold tracking-[-1px] text-white sm:text-3xl sm:tracking-[-2px] lg:text-4xl">
              Our Products
            </h2>
          </div>

          {/* ================================================= */}
          {/* ARROWS */}
          {/* ================================================= */}

          <div className="flex items-center gap-4">
            <button
              onClick={() => scroll("left")}
              disabled={currentIndex === 0}
              className="cursor-pointer text-white transition-all hover:scale-90 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ArrowLeftCircle size={35} strokeWidth={2} />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={currentIndex >= maxIndex}
              className="cursor-pointer text-white transition-all hover:scale-90 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ArrowRightCircle size={35} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* ================================================= */}
        {/* PRODUCT CAROUSEL */}
        {/* ================================================= */}

        <div className="mt-14 overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-scroll [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="group w-[calc(100%-40px)] flex-shrink-0 overflow-hidden rounded-[18px] bg-[#F5F5F5] shadow-[0_16px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_44px_rgba(0,0,0,0.14)] md:w-[calc((100%-32px)/2)] lg:w-[calc((100%-64px)/3)]"
              >
                {/* ================================================= */}
                {/* IMAGE */}
                {/* ================================================= */}

                <div className="relative overflow-hidden px-8 pt-8">
                  <div className="relative overflow-hidden rounded-[12px] bg-white">
                    {/* CATEGORY BADGE */}
                    <span className="absolute right-3 top-3 z-10 rounded-full bg-[#0065A4] px-3 py-[5px] text-[10px] font-semibold uppercase tracking-wider text-white">
                      {product.category}
                    </span>

                    {/* IMAGE */}
                    <div className="aspect-[1/0.72] w-full">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                  </div>
                </div>

                {/* ================================================= */}
                {/* CONTENT */}
                {/* ================================================= */}

                <div className="px-8 pb-8 pt-6 text-center">
                  {/* TITLE */}
                  <h3 className="text-[30px] font-semibold tracking-[-1px] text-[#2B2B2B]">
                    {product.title}
                  </h3>

                  {/* BUTTON */}
                  <div className="mt-8">
                    <button className="cursor-pointer mx-auto flex h-[48px] w-full max-w-[170px] items-center justify-center rounded-[4px] bg-[#0068A8] text-[16px] font-semibold text-white shadow-[0_10px_20px_rgba(0,104,168,0.12)] transition-all duration-300 hover:bg-[#00588E]">
                      View Product
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================================================= */}
        {/* BOTTOM SECTION */}
        {/* ================================================= */}

        <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* ================================================= */}
          {/* DESCRIPTION */}
          {/* ================================================= */}

          <div className="max-w-[760px]">
            <p className="text-[16px] leading-[2] text-white/88">
              We Offer A Complete Line Of Airway And Respiratory Management
              Products For Use In Acute Care, Prehospital/Emergency Medicine,
              And Home Care Markets. Click On One Of The Categories Below To
              Explore Our Innovative Products.
            </p>
          </div>

          {/* ================================================= */}
          {/* CTA */}
          {/* ================================================= */}

          <div>
            <button className="cursor-pointer flex h-[54px] items-center justify-center rounded-[6px] bg-white px-8 text-[16px] font-semibold text-[#0068A8] shadow-[0_10px_22px_rgba(255,255,255,0.12)] transition-all duration-300 hover:bg-[#F3F3F3]">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
