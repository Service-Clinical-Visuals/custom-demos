"use client";

import { useState } from "react";

import "aos/dist/aos.css";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Will my existing mask work with the Notte Series?",
    answer:
      "Yes. The Notte 2 uses a standard medical tubing connection. You can use our NM-1 or FM-1 masks, or any standard CPAP mask you already own. We don't force you to buy proprietary accessories just to make the machine work.",
  },
  {
    question: "What happens if the humidifier runs out of water at night?",
    answer:
      "The device handles it. The intelligent humidification system automatically monitors water levels. If the tank runs dry, the system detects it and prevents dry burning to protect both the heating plate and your safety",
  },
  {
    question: "Do I need a subscription to see my sleep data?",
    answer: "No. Your data belongs to you. You can view your sleep report instantly by scanning the QR code on the device screen, or export a full PDF report via the SD card."
  },
  {
    question: "Is the device travel-friendly?",
    answer:"Yes. The entire system (including the integrated humidifier) weighs just 3.6 lbs (1.65 kg). Its compact footprint ($10.7 \times 5.4 \times 4.3$) fits easily on a hotel nightstand , and the heated tube support ensures comfort even in varying room temperatures."  },
  {
    question: "Where is the device manufactured?",
    answer:
    "We are a Canadian manufacturer. Every Notte device is assembled, tested for quality, and packaged right here in Woodbridge, Ontario. This means local support and faster shipping, without waiting."
 },
];

export default function DeltaFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#dfe7e3] py-24 lg:py-28">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[630px_1fr] gap-10 lg:gap-12 items-start">
          {/* LEFT SIDE */}
          <div
            className="relative"
            data-aos="fade-right"
          >
            {/* Label */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-[8px] h-[8px] rounded-full bg-[#00695f]" />

              <p className="text-[18px] font-medium text-[#8f8f8f] tracking-[-0.3px]">
                FAQ
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-[#1f1f1f] text-4xl font-semibold tracking-[-2px] leading-[1.04]">
              Frequently asked questions.
            </h2>

            {/* Description */}
            <p className="mt-4 text-[#4b4b4b] text-[15px] lg:text-[16px] leading-[1.9] max-w-[380px]">
              Every project has its own distinct characteristics, and we
              understand that you may have several questions before diving in.
            </p>

            {/* Image */}
            <div className="relative mt-5 rounded-[20px] overflow-hidden h-[360px]">
              <img
                src="/delta/delta-faq.png"
                alt="FAQ"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Soft Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="flex flex-col gap-5"
            data-aos="fade-left"
          >
            {faqData.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className="rounded-[20px] overflow-hidden bg-[#006f67] transition-all duration-500"
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-8 flex items-center justify-between text-left"
                  >
                    <span className="text-white text-[18px] font-medium tracking-[-0.4px]">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`text-white transition-transform duration-500 ${
                        isActive ? "rotate-180" : ""
                      }`}
                      size={28}
                    />
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-8 pb-8">
                        <div className="w-full h-[1px] bg-white/15 mb-6" />

                        <p className="text-white/90 text-[15px] leading-[1.9] max-w-[90%]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}