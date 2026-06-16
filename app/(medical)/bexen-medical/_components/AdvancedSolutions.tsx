import React from 'react';
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { CheckCircle2 } from "lucide-react";

export default function AdvancedSolutions() {
  const features = [
    { title: "100% Silicone Construction -", desc: "Made from premium silicone material with a latex-free balloon for enhanced safety and flexibility." },
    { title: "Enhanced Patient Comfort -", desc: "Soft and flexible construction helps minimize irritation and improves comfort during prolonged use." },
    { title: "Sterile & Single-Use -", desc: "Individually sterile packed and intended for single-use to maintain maximum hygiene standards." },
    { title: "Secure Balloon With Non-Return Valve -", desc: "Equipped with a durable latex-free balloon and non-return valve to ensure secure retention and reliable performance during use." }
  ];

  return (
    <section className="medas-root bg-white py-20 relative">
      <div className="custom-container px-4">
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <h2 className="text-[24px] font-semibold text-[#14387F] mb-4">Advanced 2-Way Catheter Solutions</h2>
            <p className="text-[14px] text-gray-500 mb-8 leading-relaxed">
              Our 2-way Foley catheters are designed to provide safe, reliable, and comfortable urinary drainage for clinical and hospital use. Manufactured from high-quality materials with a user-friendly design, they ensure smooth performance, patient comfort, and efficient catheter management.
            </p>
            <ul className="space-y-6">
              {features.map((feature, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="mt-0.5 shrink-0 bg-[#14387F] rounded-full text-white">
                    <CheckCircle2 size={18} className="p-0.5" />
                  </div>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    <strong className="text-[#14387F] font-semibold">{feature.title}</strong> {feature.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/2 aspect-video rounded-[24px] overflow-hidden bg-gray-100 relative" data-aos="fade-left" data-aos-delay="200">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover aspect-video" />
          </div>
        </div>
      </div>
    </section>
  );
}
