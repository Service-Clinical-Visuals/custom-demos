"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";

export default function Products() {
  const products = [
    {
      id: 1,
      title: "AUTOMOTIVE",
      desc: "High-performance lubricants for engines can significantly enhance their performance and longevity...",
      image: "/moto/emka/product1.png"
    },
    {
      id: 2,
      title: "BFL HEAVY DUTY",
      desc: "In forestry and agriculture, a wide variety of machines and equipment are used. Therefore, lubricants are required...",
      image: "/moto/emka/product2.png"
    },
    {
      id: 3,
      title: "INDUSTRY",
      desc: "The highest precision, great efficiency, and absolute reliability are the benchmarks in your production. Our high...",
      image: "/moto/emka/product3.png"
    },
    {
      id: 4,
      title: "BIKES & QUADS",
      desc: "Whether for the road or off-road, choosing a high-quality engine oil is essential to ensure the longevity of motorcycles...",
      image: "/moto/emka/product4.png"
    }
  ];

  return (
    <section id="products" className="relative w-full py-20 lg:py-24 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto mb-16">
          <Typography variant="h2" color="dark" className="font-bebas tracking-widest uppercase mb-6">
            EXPLORE OUR PRODUCTS
          </Typography>
          <Typography variant="body" color="body" className="font-exo  leading-relaxed text-sm md:text-base">
            EMKA offers a comprehensive range of high-quality lubricants, fluids, additives, and maintenance solutions designed for automotive, industrial, and commercial applications. Built on advanced technology and strict quality standards, our products deliver reliable performance, protection, and long-lasting efficiency.
          </Typography>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-6 lg:p-8 relative group flex flex-col justify-between overflow-hidden">
              {/* Red Triangle */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-primary" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />

              <div className="w-full aspect-square mb-6 flex items-center justify-center relative z-10">
                <img src={product.image} alt={product.title} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>

              <div className="relative z-10 flex flex-col flex-1">
                <Typography variant="h4" color="dark" className="font-bebas tracking-widest uppercase mb-4">
                  {product.title}
                </Typography>

                <hr className="border-t border-gray-300 h-1 rounded-full w-full mb-4" />

                <Typography variant="body" color="body" className="font-exo leading-relaxed mb-6 block flex-1 text-sm">
                  {product.desc}
                </Typography>

                <a href="#" className="font-exo underline font-bold text-primary hover:text-primary-hover transition-colors whitespace-nowrap mt-auto block text-sm">
                  Read More &gt;&gt;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel indicators */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-1.5 bg-primary skew-x-[-25deg]"></div>
          <div className="w-8 h-1.5 bg-gray-300 skew-x-[-25deg]"></div>
          <div className="w-8 h-1.5 bg-gray-300 skew-x-[-25deg]"></div>
        </div>
      </Container>
    </section>
  );
}
