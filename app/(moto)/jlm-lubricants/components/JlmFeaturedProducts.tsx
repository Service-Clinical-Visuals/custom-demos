"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from "./JlmProductCard";

export default function JlmFeaturedProducts() {
  const products = [
    {
      title: "JLM Diesel Extreme Clean",
      image: "/jlm/jlm-product-1.png",
    },
    {
      title: "Diesel Roetfilter ( DPF ) Reiniging Pakket",
      image: "/jlm/jlm-product-2.png",
    },
    {
      title:
        "JLM Diesel DPF Particulate Filter Cleaner",
      image: "/jlm/jlm-product-3.png",
    },
  ];

  return (
    <section className="bg-[#F3B313] py-14">
      <div className="mx-auto max-w-[1600px] px-6">
        {/* Header */}
        <div
          data-aos="fade-up"
          className="
            flex
            items-center
            justify-between
          "
        >
          <h2
            className="
              text-4xl
              font-bold
              text-[#161616]
            "
          >
            Exceptional Engine Protection
          </h2>

          <div className="flex gap-2">
            <button
              className="
                flex
                h-[52px]
                w-[52px]
                items-center
                justify-center
                rounded-md
                bg-[#141B29]
                text-white
              "
            >
              <ArrowLeft size={18} />
            </button>

            <button
              className="
                flex
                h-[52px]
                w-[52px]
                items-center
                justify-center
                rounded-md
                bg-[#141B29]
                text-white
              "
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="mt-5 h-px bg-black/15" />

        {/* Products */}
        <div
          className="
            mt-10
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {products.map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <ProductCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}