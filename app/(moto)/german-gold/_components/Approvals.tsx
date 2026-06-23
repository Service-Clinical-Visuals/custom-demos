"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";
import Button from "./Button";

export default function Approvals() {
  const logos = [
    { src: "/moto/german-gold/approval1.png", name: "MERCEDES BENZ" },
    { src: "/moto/german-gold/approval2.png", name: "BMW" },
    { src: "/moto/german-gold/approval3.png", name: "VW" },
    { src: "/moto/german-gold/approval4.png", name: "AUDI" }
  ];

  return (
    <section id="approvals" className="relative w-full py-10 lg:py-12 bg-white overflow-hidden">
      <Container>
        <div className="bg-[#181715] rounded-[2rem] lg:rounded-[3rem] px-6 lg:px-12 py-12 lg:py-16 shadow-2xl">

          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6" data-aos="fade-up">
            <Typography variant="h2" color="white" className="font-teko leading-tight tracking-wider uppercase mb-4 sm:mb-0">
              NEW APPROVALS
            </Typography>
            <div className="">
              <Button text="About German Gold" variant="secondary" showIcon={true} href="#about" className="" />
            </div>
          </div>

          {/* Separator */}
          <div className="w-full h-px bg-white/40 mb-5"></div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center justify-center">

            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col space-y-6 order-2 lg:order-1">
              <Typography variant="body" className="font-exo text-white text-sm sm:text-base leading-relaxed" data-aos="fade-right">
                GERMAN GOLD PRODUCTS meets the highest standards. Since 2020 GERMAN GOLD ENGINE POWER 5W-40 ELITE is the first product of German Gold with an official Mercedes Benz approval.
              </Typography>
              <Typography variant="body" className="font-exo text-white text-sm sm:text-base leading-relaxed" data-aos="fade-right" data-aos-delay="100">
                A significant milestone in our journey was achieved when GERMAN GOLD ENGINE POWER 5W-40 ELITE became the first product in our portfolio to receive an official Mercedes-Benz approval, demonstrating our commitment to delivering premium lubricant solutions that satisfy the strict requirements of modern automotive engineering. This recognition reflects the outstanding quality, performance, and reliability that define every German Gold product.
              </Typography>
              <Typography variant="body" className="font-exo text-white text-sm sm:text-base leading-relaxed" data-aos="fade-right" data-aos-delay="200">
                As we continue to expand our product range and strengthen our position in the global lubricant industry, we are actively pursuing additional manufacturer approvals. Ongoing approval processes with leading automotive brands such as BMW and Audi further highlight our dedication to meeting the evolving demands of today's advanced engines and mobility technologies. In addition, our products are developed to comply with the stringent specifications established by major vehicle manufacturers, including Volkswagen, ensuring compatibility and dependable performance across a wide range of applications.
              </Typography>
              <div className="w-full h-px bg-white/40 mb-5"></div>

              {/* Logos Below Text */}
              <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {logos.map((logo, index) => (
                  <div key={index} className="flex flex-col items-center space-y-3" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="w-full rounded  overflow-hidden">
                      <img src={logo.src} alt={logo.name} className="w-full h-auto object-cover" />
                    </div>
                    <span className="font-teko text-white text-center uppercase tracking-wider text-2xl">{logo.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2" data-aos="fade-left">
              <img src="/moto/german-gold/approval.png" alt="German Gold Products" className="w-full max-w-[20%] sm:max-w-[30%] lg:max-w-[40%] xl:max-w-[70%] h-auto object-contain transform lg:scale-110 " />
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
