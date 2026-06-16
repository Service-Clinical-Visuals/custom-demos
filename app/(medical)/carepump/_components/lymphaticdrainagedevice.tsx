"use client";

import { ChevronDown, ArrowRight } from "lucide-react";
import PrimaryButton from "./Button";

export default function LymphaticDrainageDevice() {
  const features = [
    "#1 Polish production and service of devices",
    "20 years of activity on the market of physiotherapy...",
    "98% customers would recommend CarePump to their friends",
  ];

  return (
    <section className="w-full twok py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Image */}
          <div data-aos="fade-right" className="overflow-hidden rounded-[24px] lg:col-span-5">
            <img
              src="/carepump/images/homecarepump.png"
              alt="CarePump"
              className="w-full rounded-[24px] mx-auto"
            />
          </div>

          {/* Right Content */}
          <div data-aos="fade-left" className="lg:col-span-7">
            <h2 className="
                text-[24px]
                sm:text-[28px]
                md:text-[30px]
                lg:text-[32px]
                font-bold
                text-[#333]
                leading-[1.2]
                mb-4 lg:mb-6
                ">
              We are CarePump - a Polish manufacturer of<br /> lymphatic drainage
              devices (compression massage) <br />based in Krakow.
            </h2>

            <p className="
                text-[#777]
                text-[14px]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[17px]
                leading-7
                lg:leading-8
                pb-4
                ">
              We started our activity on the physiotherapy and rehabilitation equipment market over 20 years ago as BardoMed, successfully supplying rehabilitation centers, clinics, and healthcare facilities with advanced devices from renowned manufacturers. Through years of experience and close collaboration with medical professionals, we built a strong reputation for quality, reliability, and innovation in rehabilitation care.
            </p>

            <p className="
                text-[#777]
                text-[14px]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[17px]
                leading-7
                lg:leading-8
                pb-4
                ">
              In 2019, we decided to take the next step by creating our own brand, CarePump — an innovative range of pressotherapy devices developed in cooperation with lymphology experts. Combining modern technology with clinical expertise, CarePump solutions are designed to support effective therapy, improve patient comfort, and enhance rehabilitation outcomes for both healthcare providers and patients.
            </p>

            <PrimaryButton text="Discover Innovation" />

            {/* Divider */}
            <div className="border-t border-gray-300 my-5" />

            {/* Features */}
            <h3 className="
                text-[24px]
                sm:text-[24px]
                md:text-[26px]
                lg:text-[28px]
                font-bold
                text-[#333]
                mb-2
                ">
              Innovation, Experience, and Trusted Patient Care
            </h3>

            <div className="space-y-3">
              {features.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="
                      bg-white
                      rounded-xl
                      shadow-sm
                      border
                      border-gray-100
                      px-4 sm:px-5 lg:px-6
                      py-3
                      flex
                      items-center
                      justify-between
                      gap-4
                      "
                >
                  <span className="
                       text-[#444]
                       text-sm
                       sm:text-base
                       flex-1
                        ">
                    {item}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#10B5E8] flex items-center justify-center">
                    <ChevronDown size={20} className="text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}