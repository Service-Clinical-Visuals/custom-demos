"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";
import Button from "./Button";

export default function Company() {
  return (
    <section id="company" className="relative w-full py-15 lg:py-15 bg-white overflow-hidden">
      <Container>
        {/* Top: Text and Image */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">

          {/* Left Content */}
          <div className="contents lg:flex lg:flex-col lg:space-y-8 lg:z-20 lg:relative lg:order-1">
            <div className="order-1 lg:order-none w-full" data-aos="fade-right">
              <Typography variant="h2" color="primary" className="font-teko leading-tight tracking-wide uppercase">
                Company German Gold
              </Typography>
              <div className="w-[40%] h-[1.5px] rounded bg-[#E4C012] mb-5"></div>
            </div>

            <div className="space-y-4 order-3 lg:order-none w-full" data-aos="fade-right" data-aos-delay="100">
              <Typography variant="body" className="font-exo text-[#6E777D]">
                Our company German Gold refineries are Europe's most modern and efficient lubricant producers for refined oil. These refineries process high quality base oils to produce diverse German Gold high performance lubricants. Quality has its origin: Made in Germany - and also a name: German Gold:
              </Typography>
              <Typography variant="body" className="font-exo text-[#6E777D]">
                German Gold brand name products comprise of a wide range of high quality lubricants. We have a fitting product to satisfy each purpose. Our lubricants range from a selection of engine oils, transmission fluids and hydraulic oils through to various industrial oils.
              </Typography>
              <Typography variant="body" className="font-exo text-[#6E777D]">
                With the highest of standards and level of development, our products are in conformity with all norms and specifications, which, in turn, is an asset to resources and the environment. These products are certified in accordance with ISO 14001 Environmental Management System.
              </Typography>
              <Typography variant="body" className="font-exo text-[#6E777D]">
                Our high quality lubricants are blended and filled using the most modern of machinery, thereby fulfilling the ISO 9001 standard. This is carried out by means of fully automated SMB and DDU processes.
              </Typography>
            </div>

            <div className="pt-2 lg:pt-2 order-4 lg:order-none w-full" data-aos="fade-right" data-aos-delay="200">
              <Button text="ABOUT" variant="primary" showIcon={true} href="#about" />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] rounded-xl overflow-hidden order-2 shadow-xl" data-aos="fade-left">
            {/* Using product1.jpg as a placeholder for the missing facility image */}
            <img
              src="/german-gold/SECTION21.jpg"
              alt="German Gold Facility"
              className="absolute w-full h-full aspect-[4/3] lg:aspect-[16/10]  object-cover z-40"
            />
          </div>

        </div>

        {/* Bottom: 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 lg:mt-24">

          {/* Card 1 */}
          <div className="bg-white shadow-md flex items-stretch min-h-[120px]" data-aos="fade-up">
            <div className="bg-[#c68906] w-[110px] sm:w-[130px] shrink-0 flex items-center justify-center">
              <img src="/german-gold/section2.png" alt="Globe" className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] object-contain" />
            </div>
            <div className="flex flex-col justify-center px-6 py-4">
              <span className="font-exo  font-semibold text-[#181715] text-[28px] lg:text-[40px] leading-none mb-1">30+</span>
              <span className="font-exo font-bold text-[#6E777D] text-md sm:text-base leading-tight">Countries</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md flex items-stretch min-h-[120px]" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-[#c68906] w-[110px] sm:w-[130px] shrink-0 flex items-center justify-center">
              <img src="/german-gold/section21.png" alt="Categories" className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] object-contain" />
            </div>
            <div className="flex flex-col justify-center px-6 py-4">
              <span className="font-exo font-semibold text-[#181715] text-[28px] lg:text-[40px] leading-none mb-1">50+</span>
              <span className="font-exo font-bold text-[#6E777D] text-md sm:text-base leading-tight">Product Categories</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md flex items-stretch min-h-[120px]" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-[#c68906] w-[110px] sm:w-[130px] shrink-0 flex items-center justify-center">
              <img src="/german-gold/section23.png" alt="Standards" className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] object-contain" />
            </div>
            <div className="flex flex-col justify-center px-6 py-4">
              <span className="font-exo font-semibold text-[#181715] text-[24px] lg:text-[40px] leading-none mb-1">German</span>
              <span className="font-exo font-bold text-[#6E777D] text-md sm:text-base leading-tight">Quality Standards</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-md flex items-stretch min-h-[120px]" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-[#c68906] w-[110px] sm:w-[130px] shrink-0 flex items-center justify-center">
              <img src="/german-gold/section24.png" alt="Network" className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] object-contain" />
            </div>
            <div className="flex flex-col justify-center px-6 py-4">
              <span className="font-exo font-semibold text-[#181715] text-[24px] lg:text-[40px] leading-none mb-1">Global</span>
              <span className="font-exo font-bold text-[#6E777D] text-md sm:text-base leading-tight">Contribution Network</span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
