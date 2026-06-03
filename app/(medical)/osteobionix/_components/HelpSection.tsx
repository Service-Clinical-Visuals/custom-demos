"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function HelpSection() {
  const [openAccordion, setOpenAccordion] = useState<number>(1);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  const BulletIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="white" className="mt-1 flex-shrink-0 opacity-90" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 3L19 12L5 21V3Z" />
    </svg>
  );

  return (
    <section className="w-full py-16 lg:py-20 bg-[#fafafa]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text & Accordion */}
          <div className="flex flex-col" data-aos="fade-right">
            <h2 className="text-[#237B64] font-heading font-bold text-3xl md:text-4xl mb-2">
              How we can help you
            </h2>
            <h3 className="font-heading italic text-lg md:text-xl text-gray-800 mb-8 font-medium">
              "One Patient. One Condition. One Implant."
            </h3>

            <div className="flex flex-col gap-4">
              {/* Accordion Item 1 */}
              <div className="flex flex-col rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleAccordion(1)}
                  className="w-full flex items-center justify-between p-5 bg-[#103A31] text-white hover:bg-[#112d27] transition-colors"
                >
                  <span className="font-bold text-left">It is important to know that:</span>
                  <div className="bg-white rounded-full p-0.5 text-[#103A31]">
                    {openAccordion === 1 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>
                
                {openAccordion === 1 && (
                  <div className="p-6 bg-[#34534D] border-t border-[#46655f]">
                    <ul className="flex flex-col gap-4">
                      <li className="flex items-start gap-3 text-white/90 text-sm md:text-base leading-relaxed">
                        <BulletIcon />
                        <span>Only your surgeon can determine whether a customized implant is right for you</span>
                      </li>
                      <li className="flex items-start gap-3 text-white/90 text-sm md:text-base leading-relaxed">
                        <BulletIcon />
                        <span>Osteobionix will only design and manufacture a custom implant following a surgeon's formal prescription</span>
                      </li>
                      <li className="flex items-start gap-3 text-white/90 text-sm md:text-base leading-relaxed">
                        <BulletIcon />
                        <span>Only your surgeon can provide the information you need to make an informed decision about your treatment options.</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Accordion Item 2 */}
              <div className="flex flex-col rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleAccordion(2)}
                  className="w-full flex items-center justify-between p-5 bg-[#103A31] text-white hover:bg-[#112d27] transition-colors"
                >
                  <span className="font-bold text-left">What makes a patient-specific implant different?</span>
                  <div className="bg-white rounded-full p-0.5 text-[#103A31]">
                    {openAccordion === 2 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>
                
                {openAccordion === 2 && (
                  <div className="p-6 bg-[#34534D] border-t border-[#46655f]">
                    <p className="text-white/90 text-sm md:text-base leading-relaxed">
                      Unlike standard off-the-shelf implants, patient-specific implants are designed and manufactured based on the unique anatomical data of each individual patient, resulting in a perfect fit and optimal biomechanical function.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden shadow-md" data-aos="fade-left">
            <img
              src="/osteobionix/rehab.png"
              alt="Patient Rehabilitation"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
