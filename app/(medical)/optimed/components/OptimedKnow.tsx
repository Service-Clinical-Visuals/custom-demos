"use client";

import "aos/dist/aos.css";

import { FiArrowRight } from "react-icons/fi";

const cards = [
  {
    title: "Our Vision",
    description:
      "At optimed our objective is to serve the wellbeing of the patient and enhance the expertise of the medical practitioner, supply optimum training for distributors and to secure long-term jobs for its employees in a constantly growing company.",
  },
  {
    title: "Our Values",
    description:
      "It is a matter for us to invest in “niche products” and their research. We are proud to be able to offer a life saving ductus stent for babies in addition to our classic product portfolio.",
  },
  {
    title: "Manufacture",
    description:
      "After more than a year of planning and construction, optimed opened the doors of the new clean room right next to our headquarters in Ettlingen / Germany for the first time in spring 2021.",
  },
];

export default function OptimedKnow() {


  return (
    <section className="w-full bg-[#FFF1E6] py-20 overflow-hidden">
      
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-5">
          
          <h2
            data-aos="fade-right"
            className="text-3xl sm:text-4xl font-semibold tracking-[-1px] text-black"
          >
            Get to Know Optimed
          </h2>

          {/* CTA */}
          <button
            data-aos="fade-left"
            className="group cursor-pointer flex items-center overflow-hidden rounded-l-xl rounded-r-4xl bg-white shadow-md border border-[#e2d5ca] hover:scale-[1.02] transition-all duration-300"
          >
            
            <span className="px-7 py-4 text-[16px] font-semibold text-black whitespace-nowrap">
              Discover More
            </span>

            <span className="w-[56px] h-[56px] rounded-full bg-[#f29b58] flex items-center justify-center">
              <FiArrowRight className="text-white text-[18px] group-hover:translate-x-1 transition" />
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#d8cbc0] mt-7"></div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-6 mt-8 items-start">
          
          {/* Left Cards */}
          <div className="space-y-5">
            
            {cards.map((card, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={index * 120}
                className="bg-[#ffff] rounded-[22px] border border-[#ddd4cb] shadow-md px-7 py-7"
              >
                
                <h3 className="text-[#f29b58] text-2xl font-semibold tracking-[-0.5px]">
                  {card.title}
                </h3>

                <p className="mt-5 text-[#7f7974] text-[16px] leading-[2]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Image Composition */}
          <div
            data-aos="fade-left"
            className="relative h-[320px] sm:h-[420px] xl:h-full min-h-[320px] rounded-2xl overflow-hidden"
          >

            <img src="/optimed/optimed-know.png" alt="optimed" className="h-full w-full object-cover" />
            {/* Soft Overlay Gradient */}
            {/* <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent rounded-[28px] pointer-events-none"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}