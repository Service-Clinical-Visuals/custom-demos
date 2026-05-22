"use client";

import "aos/dist/aos.css";
import DeltaScrollRevealText from "./DeltaScrollRevealText";

const products = [
  {
    title: "Notte Series",
    image: "/delta/delta-product-1.png",
    description:
      "DeltaSleep’s Notte Series offers ultra-quiet, Canadian-engineered CPAP and BiPAP therapy. Featuring intelligent humidification and automated leak compensation, these compact devices ensure precise, restorative sleep for every patient.",
  },
  {
    title: "Full Face Mask FM-1",
    image: "/delta/delta-product-2.png",
    description:
      "Engineered for mouth-breathing and high-pressure therapy, the FM01 utilizes a brace-free design to maximize visibility while maintaining optimal interface stability.",
  },
  {
    title: "Nasal Mask NM-1",
    image: "/delta/delta-product-3.png",
    description:
      "Experience a new level of freedom with the NM-1 Nasal Mask. Engineered for minimal contact and maximum stability, this mask features a “Less Block, Better Vision” design that allows you to read or watch TV comfortably before falling asleep.",
  },
];

export default function DeltaProducts() {

  return (
    <section className="relative overflow-hidden py-24 lg:py-28 bg-[#dfe7e3]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        {/* Top Content */}
        <div
          className=" mx-auto text-center"
          data-aos="fade-up"
        >
          {/* Small Label */}
          <div className="flex items-center justify-center gap-2 mb-7">
            <span className="w-[8px] h-[8px] rounded-full bg-[#00695f]" />

            <p className="text-[16px] font-medium text-[#8d8d8d] ">
              Clinical Pedigree
            </p>
          </div>

          {/* Heading */}
          <DeltaScrollRevealText
            text="DeltaSleep is governed by a management collective with over two decades of cross-functional expertise in sleep medicine, medical-device manufacturing, and global healthcare operations."
            className="text-[#222222] text-4xl font-semibold leading-[1.5]"
          />
        </div>

        {/* Product Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="group relative rounded-[18px] bg-[#006f67] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Product Media */}
              <div className="relative p-3">
                <div className="relative rounded-[10px] overflow-hidden bg-gradient-to-br from-[#2e8f88] to-[#005c56] h-[340px] flex items-center justify-center">
                  {/* Future Image Support */}
                  {/* Replace with real product images */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain w-[82%] h-[82%] transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Soft Overlay */}
                  <div className="absolute inset-0 bg-black/5" />
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pb-7">
                <h3 className="text-white text-[34px] sm:text-[36px] lg:text-[30px] font-semibold   leading-none">
                  {product.title}
                </h3>

                <p className="mt-4 text-white/92 text-[16px] leading-[1.75] font-light">
                  {product.description}
                </p>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-[18px] border border-white/5 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}