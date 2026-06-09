"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function About() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">

        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 mb-10 lg:mb-14 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center" data-aos="fade-right">
            <h2 className="text-3xl md:text-[32px] font-semibold !text-primary mb-4 flex items-center gap-3">
              <span className="text-primary text-2xl leading-none pb-1">&bull;</span> About Us
            </h2>
            <p className="text-gray-500 mb-6 text-[15px] leading-[1.8]">
              Entermed is a leading global provider of high-end treatment units and equipment for the ear, nose and throat (ENT) discipline. We optimize the OPD work environment and help simplify the procedures of otolaryngologists around the world with our advanced ENT solutions.
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.8]">
              By getting out there, Ian knows our customers and hand-picked network of distributors better than anyone. He goes above and beyond assisting our customers. Besides providing training on how to use our innovations, he also advises on how to design entire ENT departments. Ian is a true specialist and always willing to help.
            </p>
          </div>

          {/* Images Content */}
          <div className="grid grid-cols-2 gap-4 md:gap-6" data-aos="fade-left" data-aos-delay="200">
            {/* Globe Image Placeholder */}
            <div className="rounded-[20px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.14)] aspect-square bg-white flex items-center justify-center p-6 relative overflow-hidden">
              <div className="w-full h-full rounded-full border border-blue-200/50 border-dashed flex items-center justify-center bg-blue-50/20">
                <img src="/entermed/about-1.png" alt="about-1" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* People Image Placeholder */}
            <div className="rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] aspect-square bg-gray-100 flex items-center justify-center relative overflow-hidden border border-gray-100">
              <img src="/entermed/about-2.png" alt="about-2" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center">
          {/* Large Image Content */}
          <div className="rounded-[20px] aspect-[2/1.3] bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-100 order-2 lg:order-1 relative" data-aos="fade-right">
            <img src="/entermed/about-3.png" alt="about-3" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-start order-1 lg:order-2" data-aos="fade-left" data-aos-delay="200">
            <h2 className="text-3xl md:text-[32px] font-bold !text-primary mb-6 flex items-center gap-3">
              <span className="text-primary text-2xl leading-none pb-1">&bull;</span> Designed with a Strong Focus
            </h2>
            <p className="text-gray-500 mb-6 text-[15px] leading-[1.8]">
              Established in 1976, we build on a long history of experience and innovation. We were the creators of ENT treatment units as we see them in the market today. Thanks to our extensive knowledge of the field, we understand how ENT specialists work. Our treatment units are specifically designed to facilitate their work procedures, with a strong focus on ergonomics, hygiene, quality and safety.
            </p>
            <p className="text-gray-500 mb-10 text-[15px] leading-[1.8]">
              We integrate product development, design, sales and training. In doing so, the company has become a thought leader in the global market. We serve loyal customers in more than 40 countries, accommodated by our worldwide, handpicked network of distributors. The distributors handle the import, installation and maintenance of our products.
            </p>

            <Button variant="primary-outline">Explore Entermed</Button>
          </div>
        </div>

      </div>
    </section>
  );
}
