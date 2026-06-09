"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function HelpSection() {
  const [openAccordion, setOpenAccordion] = useState(1);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(index);
  };

  const CheckIcon = () => (
    <img
      src="/osteobionix/checkbox-icon.png"
      alt="check"
      className="w-4 h-4 mt-1 flex-shrink-0"
    />
  );

  return (
    <section className="w-full py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">

          {/* Left Column: Text & Accordion */}
          <div className="flex flex-col" data-aos="fade-right">
            <h2 className="text-primary font-heading font-semibold text-3xl md:text-4xl mb-4">
              How we can help you
            </h2>

            <div className="flex flex-col gap-4 [@media(min-width:2560px)]:gap-10">
              {/* Accordion Item 1 */}
              <div className="flex flex-col rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleAccordion(1)}
                  className="w-full flex items-center justify-between p-5 [@media(min-width:2560px)]:py-10 [@media(min-width:2560px)]:px-12 bg-[#2B786E] text-white transition-colors"
                >
                  <span className="font-semibold text-left text-md min-[2560px]:text-3xl">It is important to know that:</span>
                  <div className="bg-white rounded-full p-0.5 text-primary">
                    {openAccordion === 1 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>


                {openAccordion === 1 && (
                  <div className="px-3 pb-3 bg-[#177D70]">
                    <div
                      className="rounded-[14px] border border-white/70 bg-white/20 backdrop-blur-[2px] p-5"
                    >
                      <ul className="flex flex-col gap-4">
                        <li className="flex items-start gap-3 text-white/90 text-sm md:text-base leading-relaxed">
                          <img
                            src="/osteobionix/Vector.png"
                            alt="check"
                            className="w-4 h-4 mt-1 flex-shrink-0"
                          />
                          <span className="text-md min-[2560px]:text-2xl">
                            Only your surgeon can determine whether a customized implant is right for you
                          </span>
                        </li>

                        <li className="flex items-start gap-3 text-white/90 text-sm md:text-base leading-relaxed">
                          <img
                            src="/osteobionix/Vector.png"
                            alt="check"
                            className="w-3 h-3 mt-1 flex-shrink-0"
                          />
                          <span className="text-md min-[2560px]:text-2xl">
                            Osteobionix will only design and manufacture a custom implant following a surgeon's formal prescription
                          </span>
                        </li>

                        <li className="flex items-start gap-3 text-white/90 text-sm md:text-base leading-relaxed">
                          <img
                            src="/osteobionix/Vector.png"
                            alt="check"
                            className="w-4 h-4 mt-1 flex-shrink-0"
                          />
                          <span className="text-md min-[2560px]:text-2xl">
                            Only your surgeon can provide the information you need to make an informed decision about your treatment options.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion Item 2 */}
              <div className="flex flex-col rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleAccordion(2)}
                  className="w-full flex items-center justify-between p-5 [@media(min-width:2560px)]:py-10 [@media(min-width:2560px)]:px-12 bg-[#2B786E] text-white transition-colors"
                >
                  <span className="font-semibold text-left text-md min-[2560px]:text-3xl">What makes a patient-specific implant different?</span>
                  <div className="bg-white rounded-full p-0.5 text-[#103A31]">
                    {openAccordion === 2 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {openAccordion === 2 && (
                  <div className="px-3 pb-3 bg-[#177D70]">
                    <div
                      className="rounded-[14px] border border-white/70 bg-white/20 backdrop-blur-[2px] p-5"
                    >
                      <ul className="flex flex-col gap-4">
                        <li className="flex items-start gap-3 text-white/90 text-sm md:text-base leading-relaxed">
                          <img
                            src="/osteobionix/Vector.png"
                            alt="check"
                            className="w-4 h-4 mt-1 flex-shrink-0"
                          />
                          <span className="text-md min-[2560px]:text-2xl">
                            Patient-specific implants are designed based on your specific medical imaging data, such as a CT scan. That, along with an in-depth briefing on your condition, provided by your surgeon, enables us to create a solution that fits your anatomy precisely, potentially improving clinical outcomes.
                          </span>
                        </li>

                        <li className="flex items-start gap-3 text-white/90 text-sm md:text-base leading-relaxed">
                          <img
                            src="/osteobionix/Vector.png"
                            alt="check"
                            className="w-3 h-3 mt-1 flex-shrink-0"
                          />
                          <span className="text-md min-[2560px]:text-2xl">
                            Whether it is for trauma, tumor resection, revision surgery, or congenital deformity, your surgeon may consider a custom-made implant when conventional options are not ideal to treat your condition.
                          </span>
                        </li>


                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden shadow-md" data-aos="fade-left">
            <img
              src="/osteobionix/help.png"
              alt="Patient Rehabilitation"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
