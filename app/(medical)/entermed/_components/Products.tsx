"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function Products() {
  const products = [
    {
      title: "ENT treatment units",
      path: "/entermed/product-1.png",
      description: "Entermed ENT treatment units are hand built to the highest standards. Ergonomic, hygienic and digitally automated."
    },
    {
      title: "Endoscopes",
      path: "/entermed/product-2.png",
      description: "Quality endoscopes with cristal clear optics. Seeing details throughout the entire field of view."
    },
    {
      title: "Headlights",
      path: "/entermed/product-3.png",
      description: "Ergonomic headlights. For optimal lighting or enlargement of the research and treatment area."
    },
    {
      title: "Microscopes",
      path: "/entermed/product-4.png",
      description: "The economical modern version for ENT practice and minor operations ."
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24" id="products">
      <div className="container mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center max-w-8xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-[32px] font-bold !text-primary mb-6 flex items-center justify-center gap-3">
            <span className="text-primary text-2xl leading-none pb-1">&bull;</span> Our Products
          </h2>
          <p className="text-gray-500 text-[15px] leading-[1.8]">
            Entermed ENT treatment units are hand built to the highest standards by a team of highly skilled craftsmen. Every attention is paid to the smallest detail during the fabrication process resulting in beautifully crafted custom made ENT treatment units and complementary furniture.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, idx) => (
            <div key={idx} className="flex flex-col rounded-4xl border border-primary overflow-hidden shadow-sm hover:shadow-md transition-shadow group h-full" data-aos="fade-up" data-aos-delay={idx * 100}>
              {/* Image Top Half */}
              <div className="bg-white aspect-[4/3] p-6 flex items-center justify-center relative max-h-[280px]">
                <img src={product.path} alt={product.title} className="w-full h-full object-contain" />
              </div>

              {/* Content Bottom Half */}
              <div className="bg-primary p-6 flex flex-col flex-grow relative  rounded-4xl">
                <h4 className="text-white! font-bold text-lg mb-3">{product.title}</h4>
                <p className="text-white! text-[14px] leading-relaxed">
                  {product.description}
                </p>

                {/* Arrow Icon Button */}
                <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm cursor-pointer">
                  <ArrowRight className="w-4 h-4 text-primary transform -rotate-45" strokeWidth={2.5} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Static Pagination Indicator */}
        <div className="flex justify-center items-center gap-2 mt-8" data-aos="fade-up" data-aos-delay="400">
          <div className="w-10 h-2.5 rounded-full bg-primary"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
        </div>

      </div>
    </section>
  );
}
