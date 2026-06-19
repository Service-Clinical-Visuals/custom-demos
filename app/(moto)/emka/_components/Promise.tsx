"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";
import Button from "./Button";

export default function PromiseSection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 2xl:grid-cols-[750px_1fr] lg:items-center lg:justify-center gap-x-12 gap-y-10 2xl:gap-x-16 mb-10 items-start w-full">

          {/* Right Content (Top on smaller screens) */}
          <div className="flex flex-col space-y-6 w-full mt-4 order-1 2xl:order-2 2xl:col-start-2 2xl:row-start-1">
            <Typography variant="h3" color="white" className="font-bebas tracking-widest uppercase mb-4">
              OUR PROMISE
            </Typography>

            <hr className="border-t border-gray-600/50 w-full mb-4" />

            <Typography variant="body" color="white" className="font-exo opacity-90 leading-relaxed block text-sm md:text-base">
              OUR PROMISE EMKA stands for technical perfection and precision. This promise is reflected in each of our products, which are manufactured according to the most stringent quality controls. To ensure that the highest standards are met, we rely on production processes that take place mainly in Germany
            </Typography>

            <Typography variant="body" color="white" className="font-exo opacity-90 leading-relaxed block text-sm md:text-base">
              We obtain our base oils from within Europe, ensuring a consistent quality and short lead times. Production in Germany and the EU is particularly important in view of the challenges posed by a globalised supply chain and the difficult situation in raw material procurement.
            </Typography>

            {/* Red Quote Box */}
            <div className="bg-primary  p-6 md:p-8 mt-6">
              <Typography variant="body" color="white" className="font-exo font-medium leading-relaxed block mb-4 ">
                "Quality and trust are the focus of all business relationships
                on site in South West Germany, nationwide and internationally"
              </Typography>
              <Typography variant="body" color="white" className="font-exo font-bold block">
                -Volker Kilthau
              </Typography>
            </div>
          </div>

          {/* Left Image (Middle on smaller screens) */}
          <div className="relative w-full lg:w-[600px] lg:mx-auto 2xl:mx-0 2xl:w-[750px] shrink-0 aspect-[750/484] overflow-hidden order-2 2xl:order-1 2xl:col-start-1 2xl:row-start-1">
            <img
              src="/moto/emka/promise.jpg"
              alt="EMKA branded Mustang"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Bottom Innovative Solutions section (Bottom on all screens) */}
          <div className="flex flex-col items-center text-center max-w-6xl mx-auto order-3 2xl:col-span-2 2xl:col-start-1 2xl:row-start-2 mt-8 2xl:mt-4 w-full">
            <hr className="border-t border-gray-600/50 w-full mb-10" />

            <Typography variant="h3" color="white" className="font-bebas tracking-widest uppercase mb-4">
              INNOVATIVE SOLUTIONS
            </Typography>

            <Typography variant="body" color="white" className="font-exo opacity-90 leading-relaxed block mb-10 text-sm md:text-base">
              At EMKA, we firmly believe that reliability and quality are the basis for trust and long-term relationships. Therefore, in all our business segments, we strive to set the highest standards and always offer our customers the best solutions.
            </Typography>

            <div className="pt-1">
              <Button text="DISCOVER OUR VALUES" variant="primary" showIcon={true} href="#about" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
