"use client";

import { useEffect } from "react";
import AOS from "aos";
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
];

export default function OptimedProducts() {

  return (
    <section className="w-full bg-[#f3f3f3] py-20 overflow-hidden">
      
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex items-center justify-between gap-6 flex-wrap">
          
          <h2
            data-aos="fade-right"
            className="text-[54px] md:text-4xl font-black tracking-[-1px] text-black"
          >
            Our Products
          </h2>

          {/* CTA */}
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

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 border place-items-start mt-10">
          
          {products.map((product, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative flex items-center justify-center"
            >
              
              {/* Product Card */}
              <div className="relative w-[350px] h-[430px] rounded-[24px] bg-white border border-[#dddddd] shadow-lg overflow-visible">
                
                {/* Product Image */}
                <div className="absolute inset-0 flex items-center justify-center p-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Floating Info Card */}
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

        {/* Slider Indicator */}
        <div className="flex items-center justify-center mt-16">
          
          <div className="w-[70px] h-[8px] rounded-full bg-[#f29b58]"></div>

          <div className="w-[8px] h-[8px] rounded-full bg-[#d7d7d7] ml-3"></div>
        </div>
      </div>
    </section>
  );
}