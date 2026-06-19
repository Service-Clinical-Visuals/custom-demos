"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";
import Button from "./Button";

export default function InnovativeSolutions() {
  return (
    <section className="relative w-full py-20 lg:py-24 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto mb-16">
          <Typography variant="h2" color="dark" className="font-bebas tracking-widest uppercase mb-6">
            INNOVATIVE SOLUTIONS, TRUSTED SUPPORT
          </Typography>
          <Typography variant="body" color="body" className="font-exo leading-relaxed text-sm md:text-base">
            We provide a complete range of services designed to support businesses across the automotive, industrial, and lubricant sectors. From private label development and sustainable initiatives to technical support and product selection tools, our expertise helps customers build stronger brands, improve operational efficiency, and achieve long-term growth.
          </Typography>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left Box */}
          <div className="bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-8 lg:p-12 relative group flex flex-col justify-between overflow-hidden min-h-[450px]">
            {/* Red Triangle */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-primary" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />

            <div className="relative z-10 h-full flex flex-col">
              <Typography variant="h3" color="dark" className="font-bebas tracking-widest uppercase mt-4 mb-4">
                PRIVATE LABEL.
              </Typography>
              <hr className="border-t-2 border-gray-300 w-full mb-6" />

              <Typography variant="body" color="body" className="font-exo  leading-relaxed mb-6 block">
                Thanks to our decades of experience and our high-quality lubricants, we are able to act as a contract manufacturer and contract packager for your private label. Together with you, we develop the optimal concept for your private label or store brand - from the creation of labels to the selection of containers including packaging to shelf-ready packaging.
              </Typography>

              <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 mt-auto flex-1">
                <div className="flex flex-col justify-between h-full w-full md:w-3/5 lg:w-[55%]">
                  <Typography variant="body" color="body" className="font-exo leading-relaxed block mb-4">
                    Set yourself apart from the competition with your own lubricant brand, carve out an independent position in the market, and open up new revenue opportunities. All in your good name, with EMKA by your side!
                  </Typography>
                  <a href="#" className="font-exo underline font-bold text-primary hover:text-primary-hover transition-colors whitespace-nowrap mt-auto block pb-2">
                    Read More &gt;&gt;
                  </a>
                </div>

                <div className="w-full md:w-2/5 lg:w-[45%] flex justify-end items-end">
                  <img src="/moto/emka/section31.png" alt="Private Label" className="w-full max-w-[200px] lg:max-w-[240px] h-auto object-contain transform translate-y-4 translate-x-2 lg:translate-x-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Box */}
          <div className="bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-8 lg:p-12 relative group flex flex-col justify-between overflow-hidden min-h-[450px]">
            {/* Red Triangle */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-primary" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />

            <div className="relative z-10 h-full flex flex-col">
              <Typography variant="h3" color="dark" className="font-bebas tracking-widest uppercase mt-4 mb-4">
                THE GREEN PACT
              </Typography>
              <hr className="border-t-2 border-gray-300 w-full mb-6" />

              <Typography variant="body" color="body" className="font-exo leading-relaxed mb-6 block">
                THE GREEN PACT is a newly introduced comprehensive service for our customers, managed by Henning Demke, covering environmental consulting and disposal concepts while maintaining maximum control.
              </Typography>

              <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 mt-auto flex-1">
                <div className="flex flex-col justify-between h-full w-full md:w-3/5 lg:w-[55%]">
                  <Typography variant="body" color="body" className="font-exo leading-relaxed block mb-4">
                    However, the main benefit for you is the all-around support, which means reduced workload, saving you time and energy, and allowing you to focus on your core business competencies with full legal security.
                  </Typography>
                  <a href="#" className="font-exo underline font-bold text-primary hover:text-primary-hover transition-colors whitespace-nowrap mt-auto block pb-2">
                    Read More &gt;&gt;
                  </a>
                </div>

                <div className="w-full md:w-2/5 lg:w-[45%] flex justify-end items-end">
                  <img src="/moto/emka/section32.png" alt="The Green Pact" className="w-full max-w-[200px] lg:max-w-[240px] h-auto object-contain transform translate-y-2 translate-x-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button text="EXPLORE SERVICES" variant="primary" showIcon={true} />
        </div>

      </Container>
    </section>
  );
}
