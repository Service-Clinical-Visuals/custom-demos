"use client";

import Image from "next/image";
import ReactHealthButton from "./ReactHealthButton";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function ProductFeatures() {
  const cards = [
    {
      title: "Modern Patient Comfort Features",
      description: "Designed for comfort and flexibility, the mask features an adaptive seal for easy movement during sleep, a low-profile frame for improved visibility, and padded support arms for added cheek comfort. Its shared headgear design also helps simplify usability and inventory management.",
    },
    {
      title: "Easy Identification",
      description: "The Siesta 2 Nasal Mask is labeled on the back of the headgear on the mask. This allows for ease of identification for troubleshooting and resupply.",
    },
    {
      title: "Replacement Supplies Part Numbers",
      description: "Replacement accessories are available for continued comfort and performance, including SNM3001 (Small Nasal Cushion), SNM3002 (Medium Nasal Cushion), SNM3003 (Large Nasal Cushion), and S22001 (Replacement Headgear), all designed to ensure a secure and comfortable therapy experience.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="react-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left: Image */}
          <div className="aspect-[4/2.6] flex items-center justify-center relative overflow-hidden shadow-inner" data-aos="fade-right">
            <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover rounded-[2.5rem]" />
          </div>



          {/* Right: Content */}
          <div className="flex flex-col gap-6" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold text-react-text-dark">
              Features of The Siesta 2 Nasal Mask
            </h2>
            <div className="space-y-4 text-react-text-gray">
              <p>
                The nasal mask is designed to provide comfortable and effective sleep therapy with minimal facial contact for a secure and lightweight fit. Intended for adult patients using CPAP or bi-level therapy, it supports non-invasive airflow delivery in home care environments. Built without natural rubber latex, the mask prioritizes patient comfort and safety during treatment.
              </p>
              <p>
                The product includes important safety features and usage guidelines to ensure reliable therapy performance. Proper airflow, device compatibility, and correct operation are essential for effective treatment and user safety.
              </p>
              <p>
                The mask is designed for single-patient reuse and complies with recognized international quality standards, offering dependable respiratory support for everyday sleep therapy needs.
              </p>
            </div>
            <ReactHealthButton text="Get Product Info" className="mt-4" />


          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="font-bold text-xl text-react-text-dark leading-snug">
                {card.title}
              </h3>
              <p className="text-react-text-gray text-[16px] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
