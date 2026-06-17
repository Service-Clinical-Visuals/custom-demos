"use client";

import { ArrowRight } from "lucide-react";

export default function Innovation() {
  return (
    <section className="o-two-medical-root py-12 md:py-20 lg:py-24 bg-white" id="company">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center mb-10 lg:mb-16">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-4 md:mb-6 font-display"
            data-aos="fade-up"
          >
            When it comes to <span className="text-[#0091d5]">INNOVATION</span>, We Are <span className="text-[#0091d5]">EXPERIENCED</span>
          </h2>
          <p
            className="text-[14px] md:text-[15px] lg:text-[17px] text-gray-600 leading-relaxed max-w-7xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Since 1971, we have produced state-of-the-art products for the provision of <strong>Emergency Respiratory Care and Inhalation Analgesia</strong>.
            Exporting to over 60 countries and possessing more than 40 patents worldwide, we offer solutions in
            Automatic and Manual Ventilation, Inhalation Analgesia, and Oxygen Administration. Our
            manufacturing and research-and-development facilities are registered to the ISO 13485 Quality system (MDSAP) as well as
            Health Canada (HC), European (CE), and US (FDA) medical device requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8 mb-10 md:mb-12">
          <div
            className="aspect-[16/10] w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img
              src="/o-two/home/section-1-1.jpg"
              alt="O-Two Exhibition Booth"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div
            className="aspect-[16/10] w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <img
              src="/o-two/home/section-1-2.jpg"
              alt="O-Two Product Display"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="w-full h-[1.7px] bg-gray-400/40 mb-4" data-aos="fade-up"
          data-aos-delay="400" />

        <div
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 md:gap-6 pt-4 "
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="text-[14px] md:text-[15px] lg:text-[17px] text-gray-500 max-w-3xl leading-relaxed">
            Pioneering Advanced Emergency Respiratory Care and Inhalation Analgesia Solutions Since 1971, Trusted by Healthcare Professionals
            in Over 60 Countries Worldwide for Innovation, Quality, and Reliability.
          </p>

          <div className="flex-shrink-0">
            <a
              href="#company-details"
              className="group inline-flex items-center bg-[#0091d5] text-white font-bold rounded-full py-2.5 pl-6 pr-10 transition-all duration-300 hover:bg-[#007bb8] hover:shadow-lg active:scale-100 relative"
            >
              <span className="text-[15px] tracking-wide mr-4">Learn More</span>
              <span className="absolute right-0.5 flex items-center justify-center rounded-r-full w-10 h-[calc(100%-4px)] bg-white text-[#0091d5] transition-transform duration-300">
                <ArrowRight size={18} strokeWidth={2.5} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
