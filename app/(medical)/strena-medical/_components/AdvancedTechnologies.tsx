"use client";

import { CheckCircle2 } from "lucide-react";
import Button from "./Button";

const technologies = [
  {
    title: "SNRT (Speckle Noise Reduction Technology)",
    description: "Enhances image clarity by reducing noise, delivering sharper and more detailed visuals.",
  },
  {
    title: "Slow Flow Doppler",
    description: "Enables accurate detection of low-velocity blood flow, improving diagnostic confidence in subtle cases.",
  },
  {
    title: "Bright Flow-like Color Doppler",
    description: "Provides enhanced visualization of blood flow with improved brightness and definition.",
  },
  {
    title: "Contrast Media Imaging",
    description: "Improves lesion detection and characterization using contrast-enhanced imaging techniques.",
  },
  {
    title: "Color Contrast Media Perfusion Time",
    description: "Allows real-time assessment of tissue perfusion for better clinical evaluation.",
  },
];

export default function AdvancedTechnologies() {
  return (
    <section className="pb-16 lg:pb-20 bg-white overflow-hidden strena-medical-root">
      <div className="custom-container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-16">
          {/* Left Content */}
          <div data-aos="fade-right" className="flex flex-col justify-center">
            <h2 className="text-[#00AEEF] text-2xl lg:text-3xl font-semibold mb-4">
              Advanced <span className="text-[#00427C]">Technologies</span>
            </h2>
            <h3 className="text-[#00427C] text-xl lg:text-2xl font-semibold mb-6 leading-relaxed">
              Excellent Image quality and colour sensitivity with advanced technologies
            </h3>

            <ul className="space-y-6 mb-8">
              {technologies.map((tech, index) => (
                <li key={index} className="flex items-start gap-4">
                  <img src="/strena/images/check-b.png" alt="check-blue" className="w-5 h-5" />
                  <p className="text-[15px] lg:text-[16px] leading-relaxed">
                    <span className="text-[#00427C] font-semibold text-[15px] lg:text-[16px]">
                      {tech.title}:
                    </span>{" "}
                    <span className="text-[#333333]">
                      {tech.description}
                    </span>
                  </p>
                </li>
              ))}
            </ul>

            <div className="">
              <Button variant="primary" hasArrow>
                View Product
              </Button>
            </div>
          </div>

          {/* Right Image Space */}
          <div data-aos="fade-left" className="relative">
            <div className="inset-0 overflow-hidden rounded-2xl">
                <img 
                  src="/strena/images/technologies.png" 
                  alt="Strena Technologies" 
                  className="w-full object-cover rounded-2xl" 
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
