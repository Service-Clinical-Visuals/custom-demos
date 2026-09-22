"use client";

import React, { useState } from "react";
import SectionBadge from "./SectionBadge";
import { ArrowRight } from "lucide-react";

export default function ProductCategories() {
  const [activeTab, setActiveTab] = useState("Oil");

  const tabs = [
    { label: "Oil", value: "Oil" },
    { label: "Lead substitute", value: "Lead substitute" },
    { label: "Diesel", value: "Diesel" },
    { label: "Gasoline", value: "Gasoline" },
    { label: "View All", value: "View All" },
  ];

  const products = [
    // Oil
    {
      id: 1,
      title: "ORIGINAL SYPRIN Bicycle Chain Oil and Bicycle Chain Cleaner Set",
      image: "/moto/syprin/p1.png",
      category: "Oil",
    },
    {
      id: 2,
      title: "ORIGINAL SYPRIN Bicycle Chain Oil",
      image: "/moto/syprin/p2.png",
      category: "Oil",
    },
    {
      id: 3,
      title: "ORIGINAL SYPRIN shaving head oil",
      image: "/moto/syprin/p3.png",
      category: "Oil",
    },
    {
      id: 4,
      title: "ORIGINAL SYPRIN Shaver Oil and Shaver Cleaner Set",
      image: "/moto/syprin/p4.png",
      category: "Oil",
    },
    // Lead substitute
    {
      id: 5,
      title: "ORIGINAL SYPRIN Carburetor / Lead Replacement Kit",
      image: "/moto/syprin/p5.png",
      category: "Lead substitute",
    },
    {
      id: 6,
      title: "ORIGINAL SYPRIN Lead Replacement",
      image: "/moto/syprin/p6.png",
      category: "Lead substitute",
    },
    // Diesel
    {
      id: 7,
      title: "ORIGINAL SYPRIN Diesel Frost Stop",
      image: "/moto/syprin/p7.png",
      category: "Diesel",
    },
    {
      id: 8,
      title: "ORIGINAL SYPRIN Diesel Rescue Box",
      image: "/moto/syprin/p8.png",
      category: "Diesel",
    },
    {
      id: 9,
      title: "ORIGINAL SYPRIN Diesel Additive",
      image: "/moto/syprin/p9.png",
      category: "Diesel",
    },
    {
      id: 10,
      title: "Original Syprin diesel particulate filter cleaner",
      image: "/moto/syprin/p10.png",
      category: "Diesel",
    },
    // Gasoline
    {
      id: 11,
      title: "ORIGINAL SYPRIN Petrol Performance Protection",
      image: "/moto/syprin/p11.jpg",
      category: "Gasoline",
    },
    {
      id: 12,
      title: "ORIGINAL SYPRIN Gasoline Additive",
      image: "/moto/syprin/p12.png",
      category: "Gasoline",
    },
    {
      id: 13,
      title: "ORIGINAL SYPRIN Gasoline System Cleaner",
      image: "/moto/syprin/p13.png",
      category: "Gasoline",
    },
    {
      id: 14,
      title: "ORIGINAL SYPRIN Carburetor / Brake Cleaner Bundle",
      image: "/moto/syprin/p14.png",
      category: "Gasoline",
    },
  ];

  const displayedProducts =
    activeTab === "View All"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <section id="categories" className="w-full bg-[#0D0D0D] py-16 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44">
      <div className="custom-container">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[90%] xl:max-w-[70%] mx-auto mb-10 min-[3800px]:mb-16" data-aos="fade-up">
          <SectionBadge text="Product Categories" center className="mb-3 min-[3800px]:mb-6" />
          <h2 className="text-[#F6F6F6]">
            Innovative Solutions Tailored for Every Journey
          </h2>
        </div>

        {/* Categories Tab Pill */}
        <div
          className="flex justify-center mb-12 min-[3800px]:mb-20 px-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="w-fit max-w-full flex items-center justify-center bg-[#F6F6F6] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] rounded-[10px] min-[3800px]:rounded-[20px] h-[44px] min-[2500px]:h-[65px] min-[3800px]:h-[90px] px-6 sm:px-10 min-[3800px]:px-14 overflow-x-auto gap-6 sm:gap-8 lg:gap-10 min-[3800px]:gap-14">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.value;
              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setActiveTab(tab.value)}
                  className={`navbar !font-medium font-medium transition-colors cursor-pointer select-none whitespace-nowrap ${
                    isActive
                      ? "text-[#A12624] underline underline-offset-4 decoration-2"
                      : "text-[#0D0D0D]/75 hover:text-[#A12624]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Flex Grid - Centered rows for odd/remainder counts */}
        <div className="flex flex-wrap justify-center gap-6 xl:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 items-stretch">
          {displayedProducts.map((product, index) => (
            <div
              key={product.id}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-[390px] min-[2500px]:max-w-[500px] min-[3800px]:max-w-[650px] bg-[#F6F6F6] rounded-[10px] min-[3800px]:rounded-[20px] p-5 min-[3800px]:p-8 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1.5 shadow-lg group"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Product Image: aspect-[350/305] */}
              <div className="w-full aspect-[350/305] rounded-[10px] min-[3800px]:rounded-[16px] overflow-hidden mb-4 bg-[#0a1220] flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Footer: Title + Arrow Action */}
              <div className="flex items-center justify-between gap-3 min-h-[60px] min-[3800px]:min-h-[90px]">
                <h3 className="text-[#353535] line-clamp-2 max-w-[276px] min-[3800px]:max-w-[400px]">
                  {product.title}
                </h3>

                <button
                  type="button"
                  aria-label={`View ${product.title}`}
                  className="w-[40px] h-[40px] min-[3800px]:w-[65px] min-[3800px]:h-[65px] rounded-full bg-[#A12624] hover:bg-[#861e1c] text-white flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110 shadow-md cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4 min-[3800px]:w-7 min-[3800px]:h-7" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
