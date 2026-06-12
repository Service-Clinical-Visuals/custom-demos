"use client";

import Link from "next/link";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function CmfSolutions() {


  const CheckboxIcon = ({ className = "" }) => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 12L10 15L17 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section className="w-full py-16 lg:py-20 bg-[#f9f9f9]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">

          {/* Left Column: Video & Text */}
          <div className="flex flex-col gap-8" data-aos="fade-right">
            <div className="w-full aspect-video relative rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100">
              <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            <div className="flex flex-col items-center text-center gap-6 px-2 lg:px-4">
              <p className="text-[#237B64] font-semibold text-2xl md:text-3xl leading-relaxed text-center">
                <span className="text-[#237B64] font-semibold text-xl md:text-2xl">Thanks to 3D printing in titanium and biopolymers,</span>
                <br />
                <span className="text-[#237B64] font-semibold text-xl md:text-2xl">we create highly personalized solutions...</span>
              </p>

              <Button variant="secondary" href="#">
                Read More
              </Button>
            </div>
          </div>

          {/* Right Column: Text and Cards */}
          <div className="flex flex-col gap-6" data-aos="fade-left">
            <h2 className="text-primary font-heading font-semibold text-3xl md:text-4xl ">
              Our CMF Solutions
            </h2>

            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-100 p-6 flex flex-col gap-1 min-[2560px]:gap-3">
              {/* <h4 className="text-[#237B64] font-semibold text-lg font-heading"> */}
              <h3 className="text-[#317d71] font-semibold  font-heading text-[24px] min-[2560px]:text-4xl min-[2560px]:gap-3">
                Temporo-mandibular joint (TMJ) reconstruction
              </h3>
              <ul className="flex flex-col gap-1 min-[2560px]:gap-2">
                <li className="flex items-start gap-3 text-gray-600 text-sm md:text-base leading-relaxed">
                  <CheckboxIcon className="text-[#555555] flex-shrink-0 mt-1 min-[2560px]:w-[24px]
    min-[2560px]:h-[24px] " />
                  <span className="text-md min-[2560px]:text-2xl">Customized TMJ implant designed for individual patient anatomy .</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600 text-sm md:text-base leading-relaxed">
                  <CheckboxIcon className="text-[#555555] flex-shrink-0 mt-1 min-[2560px]:w-[24px]
    min-[2560px]:h-[24px]" />
                  <span className="text-md min-[2560px]:text-2xl">Available in a patented minimally invasive design to reduce surgical trauma and recovery time.</span>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-100 p-6 flex flex-col gap-1">
              <h3 className="text-[#317d71] font-semibold  font-heading text-[24px] min-[2560px]:text-4xl min-[2560px]:gap-3">
                Trauma reconstructive surgery
              </h3>
              <ul className="flex flex-col gap-1 min-[2560px]:gap-2">
                <li className="flex items-start gap-3 text-gray-600 text-sm md:text-base leading-relaxed">
                  <CheckboxIcon className="text-[#555555] flex-shrink-0 mt-1 min-[2560px]:w-[24px]
    min-[2560px]:h-[24px]" />
                  <span className="text-md min-[2560px]:text-2xl">Custom solutions for fracture stabilization, bone loss reconstruction and facial symmetry restoration.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600 text-sm md:text-base leading-relaxed">
                  <CheckboxIcon className="text-[#555555] flex-shrink-0 mt-1 min-[2560px]:w-[24px]
    min-[2560px]:h-[24px]" />
                  <span className="text-md min-[2560px]:text-2xl">3D-printed titanium implants and surgical jigs for enhanced procedural accuracy.</span>
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-100 p-6 flex flex-col gap-1">
              <h3 className="text-[#317d71] font-semibold  font-heading text-[24px] min-[2560px]:text-4xl min-[2560px]:gap-3">
                Oncologic reconstructive surgery
              </h3>
              <ul className="flex flex-col gap-1 min-[2560px]:gap-2">
                <li className="flex items-start gap-3 text-gray-600 text-sm md:text-base leading-relaxed">
                  <CheckboxIcon className="text-[#555555] flex-shrink-0 mt-1 min-[2560px]:w-[24px]
    min-[2560px]:h-[24px]" />
                  <span className="text-md min-[2560px]:text-2xl">Patient-specific implants including 3D-printed titanium scaffolds to restore bone structures affected by tumors.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600 text-sm md:text-base leading-relaxed">
                  <CheckboxIcon className="text-[#555555] flex-shrink-0 mt-1 min-[2560px]:w-[24px]
    min-[2560px]:h-[24px]" />
                  <span className="text-md min-[2560px]:text-2xl">Cutting and positioning guides to enhance precision and streamline complex resections and reconstructions.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
