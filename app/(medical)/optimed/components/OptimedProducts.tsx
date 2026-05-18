"use client";

import { useState } from "react";
import "aos/dist/aos.css";

import { FiArrowRight } from "react-icons/fi";

const products = [
  {
    title: "SINUS-XL",
    description:
      "The sinus-XL is a self-expanding big lumen stent for the treatment of the central venous and arterial segments.",
    image: "/optimed/optimed-product-1.png",
  },
  {
    title: "Douro*",
    description:
      "The Douro stone baskets are used in the ureter. The material Nitinol ensures a good opening of the basket.",
    image: "/optimed/optimed-product-2.png",
  },
  {
    title: "X-Filter™*",
    description:
      "Die flexible Spitze wird am Stein vorbeigeführt und weiter in das Nierenbecken vorgeschoben.",
    image: "/optimed/optimed-product-3.png",
  },
  {
    title: "Cemento-MP*",
    description:
      "The sinus-XL is a self-expanding big lumen stent for the treatment of the central venous and arterial segments.",
    image: "/optimed/optimed-product-4.png",
  },
  {
    title: "CO₂-Angioset",
    description:
      "The CO₂-Angioset is a sterile disposable product for arterial and venous vascular imaging.",
    image: "/optimed/optimed-product-5.png",
  },
  {
    title: "Sinus-XL",
    description:
      "The sinus-XL is a self-expanding big lumen stent for the treatment of the central venous and arterial segments.",
    image: "/optimed/optimed-product-6.png",
  },
];

const pages = [products.slice(0, 3), products.slice(3)];

export default function OptimedProducts() {
  const [activePage, setActivePage] = useState(0);

  return (
    <section className="w-full bg-[#ffff] py-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <h2
            data-aos="fade-right"
            className="text-3xl md:text-4xl font-black tracking-[-1px] text-black"
          >
            Our Products
          </h2>

          <button
            data-aos="fade-left"
            className="group flex items-center overflow-hidden rounded-full bg-[#f29b58] shadow-md hover:scale-[1.02] transition-all duration-300"
          >
            <span className="px-7 py-4 text-white text-[15px] font-semibold whitespace-nowrap cursor-pointer">
              View All Products
            </span>
            <span className="cursor-pointer w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center">
              <FiArrowRight className="text-black text-[18px] group-hover:translate-x-1 transition" />
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#dddddd] mt-8"></div>

        {/* Slider */}
        <div className="mt-10 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activePage * 100}%)` }}
          > 
            {pages.map((pageProducts, pi) => (
              <div
                key={pi}
                className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-16 place-items-start"
              >
                {pageProducts.map((product, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                    className="relative flex items-center justify-start w-full"
                  >
                    {/* Mobile / Tablet Card */}
                    <div className="xl:hidden w-full rounded-[24px] bg-white border border-[#dddddd] shadow-lg overflow-hidden">
                      <div className="h-[260px] flex items-center justify-center p-4">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="bg-[#f29b58] px-6 py-5 text-center">
                        <h3 className="text-white text-xl font-black tracking-[-0.5px]">
                          {product.title}
                        </h3>
                        <p className="mt-2 text-white/95 text-[15px] leading-[1.7]">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* Desktop Card */}
                    <div className="hidden xl:block relative w-[350px] h-[430px] rounded-[24px] bg-white border border-[#dddddd] shadow-lg overflow-visible">
                      <div className="absolute inset-0 flex items-center justify-center p-3">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="absolute -right-40 top-[95px] w-[230px] bg-[#f29b58] rounded-[18px] shadow-xl px-7 py-3 z-20 text-center">
                        <h3 className="text-white text-xl font-black tracking-[-0.5px]">
                          {product.title}
                        </h3>
                        <p className="mt-2 text-white/95 text-[16px] leading-[1.9]">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex items-center justify-center mt-16 gap-3">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActivePage(i)}
              aria-label={`Page ${i + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === activePage
                  ? "w-[70px] h-[8px] bg-[#f29b58]"
                  : "w-[28px] h-[8px] bg-[#d7d7d7] hover:bg-[#f29b58]/50"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
