"use client";

import { ArrowUpRight } from "lucide-react";

export default function JlmCare() {
  return (
    <section className="relative overflow-hidden">
      {/* Top Divider */}
      <div className="h-px w-full bg-white" />

      <div
        className="
          absolute inset-0
          bg-cover bg-center
          opacity-40
        "
        style={{
          backgroundImage:
            "url('/moto/jlm/jlm-shop-bg.png')",
        }}
      />

      <div className="mx-auto max-w-[1600px] px-6 py-24">
        <div
          className="
            grid
            items-center
            gap-8
            lg:grid-cols-[58%_42%]
          "
        >
          {/* IMAGE */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="overflow-hidden"
            style={{
              clipPath:
                "polygon(12% 0%,100% 0%,100% 100%,0% 100%,0% 14%)",
            }}
          >
            <img
              src="/jlm/jlm-care.png"
              alt=""
              className="
                h-full
                w-full
                object-cover
                transition-all
                duration-700
              "
            />
          </div>

          {/* CONTENT */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className=""
          >
            <h2
              className="
                text-4xl
                font-bold
                leading-tight
                text-white
              "
            >
              NEW: Car Care PRODUCTS
            </h2>

            <p
              className="
                mt-5
                text-[16px]
                leading-8
                text-white/80
              "
            >
              JLM Car Care brings professional cleaning to the outside of your vehicle.Built on decades of additive expertise and proven in the extreme conditions of FIA ERC rallying, every product is engineered as a Liquid Tool.
            </p>

            <p
              className="
                mt-5
                text-[16px]
                leading-8
                text-white/80 
              "
            >
              The JLM Car Care range delivers professional exterior and interior cleaning. Inspired by the extreme conditions of FIA ERC rallying, these high-performance products are tough on dirt, safe on vehicle surfaces and kind to the environment. From foam cleaners to iron removers, all products are engineered with JLM’s trade-trusted expertise keeping every vehicle driven hard and cleaned right.
            </p>

            <button
              data-aos="zoom-in"
              data-aos-delay="300"
              className="
                cursor-pointer
                mt-8
                flex
                items-center
                gap-4
                rounded-full
                bg-white
                px-5
                py-2.5
                text-base
                text-black
                transition-all
                duration-300
                hover:scale-105
                font-medium
              "
            >
              Read More

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F4B400]
                "
              >
                <ArrowUpRight
                  size={20}
                  className="text-white"
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="h-px w-full bg-white" />
    </section>
  );
}