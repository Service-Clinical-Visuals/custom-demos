"use client";

import Image from "next/image";
import { ArrowRight, CornerUpRight, MoreHorizontal } from "lucide-react";
import { useState } from "react";

const categories = [
  "Large Bone",
  "Extremities",
  "Trauma",
  "Neuro ENT",
  "Arthroscopy",
  "Arthroscop",
];

const products = [
  {
    name: "MBQ-700 series",
    img: "/de-soutter-medical/p1.png",
    category: "Large Bone",
  },
  {
    name: "MBQ-707 series",
    img: "/de-soutter-medical/p2.png",
    category: "Large Bone",
  },
  {
    name: "MBQ-807 series",
    img: "/de-soutter-medical/p3.png",
    category: "Large Bone",
  },
  {
    name: "MPX-600 series",
    img: "/de-soutter-medical/p4.png",
    category: "Large Bone",
  },
];

export default function Products() {
  const [active, setActive] = useState("Large Bone");

  return (
    <section className="w-full bg-[#F5F6FA] py-16 flex justify-center  desoutter-root">
      <div data-aos="fade-up" className="custom-container mx-auto px-6  text-center">
        {/* TITLE */}
        <h2 className="text-[#333333] text-[22px] font-medium">Our Products</h2>
        <p className="text-[#333333] text-base  mt-4 max-w-5xl mx-auto">
          Comprehensive solutions across multiple surgical specialties,
          supported by precision tools, accessories, and disposables for
          reliable clinical performance.
        </p>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {categories.map((item) => (
            <button
              key={item}
              onClick={item === "Large Bone" ? () => setActive(item) : undefined}
              className={`px-12 py-2 rounded-full border text-[18px] transition ${active === item
                ? "bg-[#5A6FB0] text-[#FFFFFF]"
                : "border-[#5A6FB0] text-[#333333] cursor-default"
                }`}>
              {item}
            </button>
          ))}

          {/* MORE BUTTON */}
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5A6FB0] text-white">
            <MoreHorizontal size={18} />
          </button>
        </div>

        <div
          data-aos="fade-up"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {products
            .filter((p) => p.category === active)
            .map((item, i) => (
              <div
                key={i}
                className="bg-white flex flex-col transition hover:shadow-lg"
                style={{
                  borderRadius: "4px 70px 4px 70px",
                  boxShadow: "0px 3px 8px 0px rgba(0,0,0,0.24)",
                  padding: "18px 18px 0 18px",
                }}
              >
                {/* IMAGE */}
                <div
                  className="w-full relative overflow-hidden bg-[#f5f5f5]"
                  style={{
                    aspectRatio: "342 / 221",
                    borderRadius: "1px 69px 1px 69px",
                    border: "1px solid rgba(207, 206, 206, 0.41)",
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* NAME + ARROW */}
                <div className="flex items-center justify-center gap-2.5 px-2 py-4">
                  <h2 className="text-[15px] text-[#333333] font-semibold m-0 whitespace-nowrap">
                    {item.name}
                  </h2>
                  <button
                    aria-label={`View ${item.name}`}
                    className="flex items-center justify-center rounded-full shrink-0"
                    style={{ width: 32, height: 32, background: "#4f63a8" }}
                  >
                    <CornerUpRight size={15} color="#fff" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
