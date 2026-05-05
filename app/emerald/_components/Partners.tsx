"use client";

import React from "react";

const partners = [
  {
    name: "Infinity",
    logo: "/emerald/images/infinity.png"
  },
  {
    name: "OASIS",
    logo: "/emerald/images/oasis.png"
  }
];

const Partners = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="w-full h-[1px] bg-[#dddddd] mb-8 lg:mb-16"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Content */}
          <div data-aos="fade-right" className="">
            <span className="text-[#199A68] font-semibold text-[16px] lg:text-[17px] tracking-wider">Our Partners</span>
            <h2 className="text-[28px] lg:text-[32px] font-semibold text-[#014D65] mb-2">Our Network of Trusted Partners</h2>
            <p className="text-[16px] lg:text-[17px] text-[#333333] leading-relaxed">
              We collaborate with trusted partners to deliver reliable and innovative healthcare solutions.
            </p>
          </div>

          {/* Partner Logos */}
          <div data-aos="fade-left" className="flex flex-wrap justify-around gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="w-[300px] h-[140px] flex items-center justify-center bg-white border border-[#E5E5E5] rounded-3xl shadow-sm hover:shadow-md transition-shadow p-10"
              >
                <div className="flex flex-col items-center">
                  <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
