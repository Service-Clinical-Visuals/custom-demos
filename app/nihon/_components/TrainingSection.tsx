"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const trainingEvents = [
  {
    title: "Basic Service Medical IT Training",
    date: "04.05.2026",
    image: "/nihon/images/innovative-1.png",
    description: "This foundational course is designed to equip service personnel with the ess...",
    location: "Rosbach vor der Höhe, Germany"
  },
  {
    title: "IVD Service Practical Training: MEK-6550K Series",
    date: "15.06.2026",
    image: "/nihon/images/innovative-2.png",
    description: "This practical training is designed for service professionals supporting the...",
    location: "Rosbach vor der Höhe, Germany"
  },
  {
    title: "Service Practical Training: NKV-330, NKV-440 and NKV-550",
    date: "15.06.2026",
    image: "/nihon/images/innovative-3.png",
    description: "This intensive, hands-on course is specifically designed for service tec...",
    location: "Rosbach vor der Höhe, Germany"
  }
];

const TrainingSection = () => {
  return (
    <section className="py-24 bg-[#E8F4FF]">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2.5 h-2.5 bg-[#0068B3]"></div>
            <h2 className="text-[#0068B3] font-semibold text-[16px]">
              Innovative Technologies
            </h2>
          </div>

          <h3 className="text-[24px] md:text-[28px] font-bold text-[#353A3D] mb-6">
            Leading progress in medical care
          </h3>
          <p className=" text-sm md:text-[17px] leading-relaxed">
            Nihon Kohden has developed innovative and unique technologies that contribute to progress in medical care.
            We boldly take on new challenges, maintaining a keen eye for detail as we keep in mind the spirit of the founder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingEvents.map((event, index) => (
            <div
              key={event.title}
              className="bg-transparent flex flex-col group"
            >
              <div className="rounded-2xl overflow-hidden shadow-sm aspect-[4/2.5] mb-6 relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <h3 className="text-[16px] md:text-[18px] font-semibold text-[#133167] mb-3 transition-colors leading-tight min-h-[40px]">
                {event.title}
              </h3>

              <div className="flex items-center gap-2 text-xs md:text-[15px] font-medium text-[#333333] mb-4">
                <Calendar size={15} className="text-[#333333]" />
                {event.date}
              </div>

              <div className="w-full h-[1px] bg-[#000000]/10 mb-4"></div>

              <p className="text-[#333333] text-[17px] mb-6 leading-relaxed">
                {event.description}
              </p>

              <div className="flex items-center gap-2 text-xs md:text-[15px] font-medium text-[#333333] mt-auto">
                <MapPin size={15} className="text-[#333333]" />
                {event.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
