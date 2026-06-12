import React from 'react';
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { CheckCircle2 } from "lucide-react";
import BexenButton from "./BexenButton";

export default function FeaturedProducts() {
  const features = [
    "Available in measurements from CH 8 to CH 24 with easy-to-identify colour coding for quick and accurate size selection in clinical environments.",
    "Designed with a dual-channel system to support efficient urine drainage and secure balloon inflation for reliable urinary management.",
    "Features a transparent 2-way design with balloon capacities of 3-5 ml, 5-10 ml, and 5-15 ml to meet different patient requirements.",
    "Individually packed in sterile condition and intended for single-use applications to maintain hygiene and reduce the risk of cross-contamination."
  ];

  return (
    <section className="py-20 text-white relative overflow-hidden bg-[url('/medical/bexen-medical/bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-[#14387F]/80 z-0"></div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-[32px] md:text-[40px] font-semibold mb-4">Our Featured Products</h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-[15px] text-blue-100 max-w-3xl mx-auto">
            The Foley urinary catheter is for draining the urine using a permanent urethral catheter, facilitating urine output in patients with retention.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div data-aos="fade-right" data-aos-delay="200" className="w-full lg:w-1/2 aspect-[4/2.6] rounded-[24px] overflow-hidden bg-white/10 relative">
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div data-aos="fade-left" data-aos-delay="300" className="w-full lg:w-1/2">
            <h3 className="text-[24px] font-semibold mb-4">2-Way Foley Catheter</h3>
            <p className="text-[14px] text-blue-100 mb-8 leading-relaxed">
              The Foley 2-way urinary catheter is 100% silicone, with radiopaque line and latex-free balloon with non-return valve, and it is colour-coded.
            </p>
            <ul className="space-y-4 mb-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="mt-0.5 shrink-0 bg-white rounded-full text-[#14387F]">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-[16px] text-blue-50 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
            <BexenButton variant="secondary">
              Request a Demo
            </BexenButton>
          </div>
        </div>
      </div>
    </section>
  );
}
