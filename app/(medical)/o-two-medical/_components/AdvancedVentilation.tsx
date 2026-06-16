"use client";

import { ArrowRight, Check } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function AdvancedVentilation() {
  const cards = [
    {
      title: "Suitable for Adults, Children, and Infants",
      description: "Versatile ventilation support for infants, children, and adult critical care patients.",
    },
    {
      title: "Fast Battery Replacement and Charging Options",
      description: "Flexible charging and quick battery replacement for uninterrupted operation.",
    },
    {
      title: "Easy-to-Use Standardized Controls",
      description: "Intuitive controls enable quick and efficient ventilator operation.",
    },
    {
      title: "Quick Start-Up with Preset Ventilation Modes",
      description: "Pre-set ventilation modes enable rapid and simplified patient setup during emergencies.",
    },
  ];

  return (
    <section className="o-two-medical-root py-12 md:py-20 lg:py-24 text-white relative overflow-hidden bg-[url('/o-two/home/bg.jpg')] bg-cover bg-center" id="ventilation">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0091d5]/80 " />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-10 md:mb-16">
          <div
            className="lg:col-span-6 h-[240px] sm:h-[340px] md:h-[400px] lg:h-[450px] rounded-[1.5rem] md:rounded-[2.5rem] bg-black/20 overflow-hidden relative shadow-inner border border-white/10"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          </div>

          <div className="lg:col-span-6 flex flex-col items-start" data-aos="fade-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 md:mb-6 font-display">
              Advanced Ventilation Solutions
            </h2>
            <p className="text-[14px] md:text-[15px] lg:text-[17px] text-white/90 leading-relaxed mb-6 md:mb-8">
              Advanced and lightweight ventilation solutions designed for rapid deployment, simplified operation, and reliable respiratory
              support across emergency and critical care environments.
            </p>

            <div className="flex gap-3 md:gap-4 mb-5 md:mb-6 items-start w-full">
              <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center text-[#0091d5] shadow-sm mt-1">
                <Check size={12} strokeWidth={3} />
              </div>
              <div>
                <h4 className="text-[15px] md:text-[17px] lg:text-[18px] font-bold text-white mb-1 font-display">Long-lasting 18–24 Hour Replaceable Battery</h4>
                <p className="text-[13px] md:text-[15px] lg:text-[17px] text-white/80 leading-relaxed">
                  Equipped with a durable and easily replaceable battery system that provides extended operating time for uninterrupted
                  patient care during transport and emergency situations.
                </p>
              </div>
            </div>

            <div className="flex gap-3 md:gap-4 mb-6 md:mb-8 items-start w-full">
              <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center text-[#0091d5] shadow-sm">
                <Check size={12} strokeWidth={3} />
              </div>
              <div>
                <h4 className="text-[15px] md:text-[17px] lg:text-[18px] font-bold text-white mb-1 font-display">Lightweight and Compact Design</h4>
                <p className="text-[13px] md:text-[15px] lg:text-[17px] text-white/80 leading-relaxed">
                  Designed with portability in mind, the ventilators feature a compact and lightweight structure for easy handling and mobility
                  across healthcare environments.
                </p>
              </div>
            </div>

            <div className="inline-block">
              <a
                href="#products"
                className="group inline-flex items-center bg-white text-[#0091d5] font-bold rounded-full py-2.5 pl-6 pr-10 transition-all duration-300 hover:bg-white/95  active:scale-100 relative"
              >
                <span className="text-[15px] tracking-wide mr-4">View Medical Solutions</span>
                <span className="absolute right-0.5 flex items-center justify-center rounded-r-full w-10 h-[calc(100%-4px)] bg-[#0091d5] text-white transition-transform duration-300">
                  <ArrowRight size={18} strokeWidth={2.5} />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="bg-[#0084c2] hover:bg-[#007cbd] border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-6 lg:p-8 flex gap-3 md:gap-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-md group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center text-[#0091d5] mt-1 shadow-sm">
                <Check size={12} strokeWidth={3} />
              </div>
              <div>
                <h4 className="text-[15px] md:text-[17px] lg:text-[22px] font-bold text-white mb-1 md:mb-2 leading-snug font-display">
                  {card.title}
                </h4>
                <p className="text-[13px] md:text-[15px] lg:text-[17px] text-white/80 leading-relaxed font-sans">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
