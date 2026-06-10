"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Typography from "./Typography";

export default function Products() {
  const [activeTab, setActiveTab] = useState<"medical" | "industrial">(
    "medical",
  );

  const medicalProducts = [
    {
      id: 1,
      image: "/medical/fisso-medical/product1.jpg",
      title: "Medical Articulated Arms",
      badge: "OEM Components",
    },
    {
      id: 2,
      image: "/medical/fisso-medical/product2.png",
      title: "OEM Rail Clamps, Columns and Quick Release Holders",
      badge: "OEM Components",
    },
    {
      id: 3,
      image: "/medical/fisso-medical/product3.png",
      title: "FISSO Endoscope Holder",
      badge: "FISSO Medical Sets",
    },
  ];

  const industrialProducts = [
    {
      id: 4,
      image: "/medical/fisso-medical/product2.png",
      title: "Industrial Clamping Arm - Heavy Duty",
      badge: "Industrial Sets",
    },
    {
      id: 5,
      image: "/medical/fisso-medical/product1.jpg",
      title: "Classic Arm with Permanent Magnet Base",
      badge: "Magnetic Bases",
    },
    {
      id: 6,
      image: "/medical/fisso-medical/product3.png",
      title: "Universal Clamp with Flexible Mount",
      badge: "Industrial Clamps",
    },
  ];

  const currentProducts =
    activeTab === "medical" ? medicalProducts : industrialProducts;

  return (
    <section
      id="products"
      className="w-full flex justify-center bg-white px-4 sm:px-6 lg:px-8 2xl:px-10 pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16 2xl:pt-16 2xl:pb-20 overflow-x-hidden"
    >
      <div className="w-full max-w-[1400px] 2xl:max-w-[1760px] min-w-0">
        <div
          className="flex flex-col md:flex-row md:items-start justify-between gap-4 sm:gap-5 md:gap-8 mb-8 sm:mb-10 lg:mb-12 2xl:mb-14"
          data-aos="fade-up"
        >
          <div className="min-w-0 text-left">
            <Typography
              variant="h2"
              color="dark"
              weight="semibold"
              className="leading-tight text-[#1a1a1a] mb-2 2xl:mb-3"
            >
              Our Products
            </Typography>
            <Typography
              variant="body"
              color="muted"
              className="leading-relaxed text-[#666666] max-w-[90%] sm:max-w-sm md:max-w-xs lg:max-w-[800px] 2xl:max-w-[800px]"
            >
              The FISSO-Articulated Arm is successfully used as a quality
              product for medical and industrial applications worldwide. It is
              considered the original and is Swiss Made.
            </Typography>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto shrink-0 mt-1">
            {[
              { key: "medical", label: "Medical Products" },
              { key: "industrial", label: "Industrial Products" },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as "medical" | "industrial")}
                className={`
                  flex-1 md:flex-none
                  px-4 sm:px-5 md:px-5 lg:px-6 2xl:px-7
                  py-2.5 2xl:py-3
                  rounded-xl 2xl:rounded-2xl
                  text-[12px] sm:text-[13px] lg:text-sm 2xl:text-base
                  font-semibold tracking-wide whitespace-nowrap
                  transition-all duration-300 cursor-pointer
                  ${activeTab === key
                    ? "bg-[#9C0B38] text-white shadow-sm"
                    : "bg-white text-[#333333] border border-[#9C0B38]/40 hover:bg-gray-50"
                  }
                `}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 2xl:gap-7 min-w-0">
          {currentProducts.map((product, idx) => (
            <div
              key={product.id}
              className="
                min-w-0
                bg-white
                border border-gray-200
                rounded-2xl 2xl:rounded-3xl
                overflow-hidden
                shadow-[0_2px_16px_rgba(0,0,0,0.05)]
                hover:shadow-[0_8px_32px_rgba(0,0,0,0.09)]
                hover:-translate-y-1
                transition-all duration-300
                flex flex-col
                group
              "
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="mx-2 mt-2 sm:mx-2.5 sm:mt-2.5 2xl:mx-3 2xl:mt-3 rounded-lg 2xl:rounded-xl border border-gray-200 bg-white aspect-[4/3] flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-[70%] h-[70%] object-contain transition-transform duration-500 group-hover:scale-105 select-none"
                />
              </div>

              <div className="flex flex-col gap-2 px-3 pt-3 pb-3 sm:px-3.5 sm:pt-3 sm:pb-3.5 2xl:px-4 2xl:pt-4 2xl:pb-4 flex-1 justify-between min-w-0">
                <Typography
                  variant="h3"
                  color="dark"
                  weight="bold"
                  className="leading-snug text-[#1a1a1a] line-clamp-2"
                >
                  {product.title}
                </Typography>

                <div className="flex items-center justify-between gap-2 mt-1">
                  <span className="text-[11px] 2xl:text-[12px] font-semibold text-[#333333] border border-gray-300 bg-white px-3 py-1 2xl:px-4 2xl:py-1.5 rounded-full select-none whitespace-nowrap">
                    {product.badge}
                  </span>

                  <button
                    aria-label={`View ${product.title}`}
                    className="
                      shrink-0
                      w-9 h-9 sm:w-10 sm:h-10 2xl:w-12 2xl:h-12
                      bg-[#3b121e] text-white rounded-full
                      flex items-center justify-center
                      hover:bg-[#9C0B38] active:scale-95
                      transition-all duration-300
                      shadow-sm cursor-pointer
                    "
                  >
                    <ArrowUpRight
                      strokeWidth={2.5}
                      style={{
                        width: "clamp(14px, 1.1vw, 20px)",
                        height: "clamp(14px, 1.1vw, 20px)",
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-8 sm:mt-10 2xl:mt-12">
          <span className="w-7 sm:w-8 2xl:w-10 h-2 rounded-full bg-[#9C0B38]" />
          <span className="w-7 sm:w-8 2xl:w-10 h-2 rounded-full bg-gray-200" />
          <span className="w-7 sm:w-8 2xl:w-10 h-2 rounded-full bg-gray-200" />
        </div>
      </div>
    </section>
  );
}
