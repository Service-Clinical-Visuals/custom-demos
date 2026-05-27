"use client";

import { ArrowRight } from "lucide-react";

export default function JustBreathe() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white" id="about">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Text Content */}
          <div data-aos="fade-right">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight mb-6 md:mb-8 font-display">
              Just <span className="text-[#0091d5]">Breathe</span>.
            </h2>

            <div className="space-y-4 text-[14px] md:text-[15px] lg:text-[17px] text-gray-600 leading-relaxed mb-8 md:mb-10 text-justify">
              <p>
                Our complete range of transport Ventilators, Analgesic Gas Delivery Systems, and Emergency
                Respiratory Care products are divided into seven categories that cover the patient's needs from
                both outside and within the hospital environment.
              </p>
              <p>
                Our eSeries and CAREvent® range of ventilators, the innovative Analgesic Gas Delivery Systems
                Equinox®, our award-winning Emergency CPAP, our unique SMART BAG® MO Manual
                Resuscitators, and our robust Demand Valves and Pressure Regulators are world-renowned for
                their exceptional quality and performance.
              </p>
              <p>
                The precision of our products, combined with our advanced engineering and manufacturing
                expertise, has earned us a respected position in the international healthcare industry. Through
                continuous innovation, strict quality standards, and a commitment to excellence, we deliver
                reliable medical solutions trusted by healthcare professionals worldwide for effective patient care
                and clinical performance.
              </p>
            </div>

            <a
              href="#products"
              className="group inline-flex items-center bg-[#0091d5] text-white font-bold rounded-full py-2.5 pl-6 pr-10 transition-all duration-300 hover:bg-[#007bb8] hover:shadow-lg active:scale-100 relative"
            >
              <span className="text-[15px] tracking-wide mr-4">Discover Innovation</span>
              <span className="absolute right-0.5 flex items-center justify-center rounded-r-full w-10 h-[calc(100%-4px)] bg-white text-[#0091d5] transition-transform duration-300">
                <ArrowRight size={18} strokeWidth={2.5} />
              </span>
            </a>
          </div>

          {/* Right: Image */}
          <div
            className="rounded-3xl md:rounded-4xl overflow-hidden shadow-lg h-[280px] sm:h-[380px] md:h-[460px] lg:h-full lg:min-h-[480px]"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <img
              src="/o-two/home/section-5.jpg"
              alt="O-Two Medical Care"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
