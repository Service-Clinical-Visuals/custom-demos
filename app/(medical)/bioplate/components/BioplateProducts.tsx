"use client";

import { useEffect } from "react";
import {
  ArrowUpRight,
  Check,
  Feather,
  Layers3,
  PiggyBank,
  SlidersHorizontal,
} from "lucide-react";

import "aos/dist/aos.css";

const products = [
  {
    title: "Osteopore® Bioresorbable Bone Scaffold",
    image: "/products/product-1.jpg",
  },
  {
    title: "Sterile kit",
    image: "/products/product-2.jpg",
  },
  {
    title: "BIOMESH® System",
    image: "/products/product-3.jpg",
  },
];

const features = [
  {
    title: "Modular",
    icon: Layers3,
  },
  {
    title: "Light Weight",
    icon: Feather,
  },
  {
    title: "Cost Effective",
    icon: PiggyBank,
  },
  {
    title: "Customizable",
    icon: SlidersHorizontal,
  },
];

const surgicalItems = [
  {
    title: "1.2 mm plates & screws",
    description:
      "Designed with an extremely low-profile structure for better comfort, easier handling compared to 1.0 mm systems, and flexible contour ability for precise adaptation.",
  },
  {
    title: "1.5 mm plates & screws",
    description:
      "Features a low-profile design while delivering greater strength and stability compared to the 1.2 mm system.",
  },
  {
    title: "2.0 mm plates & screws",
    description:
      "Built with a 1.0 mm thickness for enhanced strength and a full countersink design that ensures a smooth, flush fit within the plate.",
  },
];

export default function BioplateProducts() {

  return (
    <section className="overflow-hidden bg-[#f5f5f3] pt-24 pb-44">
      <div className="mx-auto max-w-[1600px] px-8 lg:px-16">
        {/* ================================================= */}
        {/* TOP HEADER */}
        {/* ================================================= */}

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
          {/* TITLE */}
          <div data-aos="fade-up">
            <h2 className="text-4xl font-semibold tracking-[-2px] text-[#232323]">
              Our Products
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div data-aos="fade-up" data-aos-delay="150">
            <p className="max-w-[620px] text-left xl:text-right text-[16px] leading-[1.9] text-[#444444]">
              Featuring high-precision technology designed specifically for
              neurosurgery, Bioplate® offers a comprehensive product line and
              superior service to the surgical community.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-10 h-[1px] w-full bg-[#6EB7AB]" />

        {/* ================================================= */}
        {/* PRODUCT CARDS */}
        {/* ================================================= */}

        <div className="mt-14 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="group flex flex-col rounded-[22px] bg-[#CFE1DC] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-[18px] bg-[#e8e8e8]">
                <div className="aspect-[4/3] w-full">
                  {/* IMAGE PLACEHOLDER */}
                  <div className="h-full w-full bg-[linear-gradient(45deg,#ececec_25%,transparent_25%),linear-gradient(-45deg,#ececec_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#ececec_75%),linear-gradient(-45deg,transparent_75%,#ececec_75%)] bg-[size:40px_40px] bg-[position:0_0,0_20px,20px_-20px,-20px_0px]" />

                  {/* FUTURE IMAGE */}
                  {/*
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover"
                  />
                  */}
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-1 flex-col px-4 pb-2 pt-7 text-center">
                <h3 className="mx-auto max-w-[280px] text-lg font-semibold leading-[1.15] tracking-[-1px] text-[#1f1f1f]">
                  {product.title}
                </h3>

                {/* BUTTON */}
                <div className="mt-auto pt-8 flex justify-center">
                  <button className="cursor-pointer group/btn flex h-[54px] items-center gap-5 rounded-full bg-white px-7 text-base font-medium text-[#1f1f1f] shadow-sm transition-all duration-300 hover:scale-[1.03]">
                    View Catalog

                    <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#007256] text-white transition-all duration-300 group-hover/btn:rotate-45">
                      <ArrowUpRight size={17} strokeWidth={2.5} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================================================= */}
        {/* FEATURE BAR */}
        {/* ================================================= */}

        <div
          data-aos="fade-up"
          className="mt-16 overflow-hidden rounded-[12px] bg-[#2E8B73]"
        >
          <div className="grid md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className={`flex items-center gap-5 px-10 py-8 ${
                    index !== features.length - 1
                      ? "border-b border-white/20 xl:border-b-0 xl:border-r"
                      : ""
                  } border-white/20`}
                >
                  {/* ICON */}
                  <Icon size={36} strokeWidth={1.8} className="text-white" />

                  {/* TEXT */}
                  <h4 className="text-xl font-medium tracking-[-1px] text-white">
                    {feature.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================================================= */}
        {/* SURGICAL INDICATION */}
        {/* ================================================= */}

        <div className="mt-28 grid items-stretch gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            {/* TITLE */}
            <div data-aos="fade-up">
              <h2 className="text-4xl font-semibold tracking-[-1.5px] text-[#222222]">
                Surgical Indication
              </h2>
            </div>

            {/* LIST */}
            <div className="mt-12 space-y-10">
              {surgicalItems.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  className="flex items-start gap-5"
                >
                  {/* ICON */}
                  <div className="mt-[4px] flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#2E8B73]">
                    <Check
                      size={16}
                      strokeWidth={3}
                      className="text-white"
                    />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h4 className="text-lg font-bold tracking-[-0.8px] text-[#0B7A63]">
                      {item.title}
                    </h4>

                    <p className="mt-3 max-w-[700px] text-base leading-[1.95] text-[#5b5b5b]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VIDEO/IMAGE */}
          <div data-aos="fade-left" className="relative h-full">
            <div className="h-full overflow-hidden rounded-[24px] bg-[#e8e8e8] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              <div className="h-full w-full">
                {/* PLACEHOLDER */}
                <div className="h-full w-full bg-[linear-gradient(45deg,#ececec_25%,transparent_25%),linear-gradient(-45deg,#ececec_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#ececec_75%),linear-gradient(-45deg,transparent_75%,#ececec_75%)] bg-[size:40px_40px] bg-[position:0_0,0_20px,20px_-20px,-20px_0px]" />

                {/* FUTURE VIDEO / IMAGE */}
                {/*
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                >
                  <source src="/videos/surgical.mp4" type="video/mp4" />
                </video>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}