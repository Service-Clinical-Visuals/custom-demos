"use client";

import Link from "next/link";
import Button from "./Button";

export default function Education() {
  return (
    <div className="w-full  bg-cover bg-center bg-no-repeat">

      <section 
        className="relative w-full py-16 md:py-20 bg-[url('/7s-medical/course-bg.png')] overflow-hidden flex items-center justify-center shadow-inner"
        data-aos="fade-up"
      >
        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <h2 className="text-[28px] md:text-[30px] lg:text-[32px] font-bold mb-4 text-white!">
            Online Courses and Hybrid Education to <br className="hidden lg:block"/> help you elevate your skills
          </h2>

          <Button href="#contact" variant="white" className="px-8">
            Get in touch
          </Button>
        </div>
      </section>

      {/* -------------------------------------------------------------
          SECTION 2: Professional Education Program
          ------------------------------------------------------------- */}
      <section className="relative w-full py-16 lg:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-[28px] md:text-[30px] lg:text-[32px] font-bold mb-4">
              Professional Education Program
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            {/* Card 1: Hospitation */}
            <div 
              className="group relative w-full aspect-square rounded-[24px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-gray-100 bg-gray-50 flex flex-col justify-end p-8 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="/7s-medical/hospitation.png"
                alt="Hospitation in reference clinics"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Sleek Gradient Overlay for text contrast */}
              <div className="absolute inset-0 bg-black/25 pointer-events-none transition-opacity duration-300 group-hover:opacity-95" />

              {/* Card Footer Info */}
              <div className="relative z-10 flex items-end justify-between w-full">
                <div className="flex flex-col pr-4">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight" style={{ color: "#ffffff" }}>
                    Hospitation
                  </h3>
                  <p className="text-[13px] md:text-sm font-light leading-relaxed" style={{ color: "#e5e7eb" }}>
                    Our reference clinics in Europe
                  </p>
                </div>

                {/* Arrow Action Circle */}
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0 transform transition-all duration-300 group-hover:scale-110">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path
                      d="M6 18L18 6M18 6H9M18 6V15"
                      stroke="#CE112D"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 2: Surgery Support */}
            <div 
              className="group relative w-full aspect-square rounded-[24px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-gray-100 bg-gray-50 flex flex-col justify-end p-8 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="/7s-medical/surgery-support.png"
                alt="Surgery Support by product experts"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Sleek Gradient Overlay for text contrast */}
              <div className="absolute inset-0 bg-black/25 pointer-events-none transition-opacity duration-300 group-hover:opacity-95" />

              {/* Card Footer Info */}
              <div className="relative z-10 flex items-end justify-between w-full">
                <div className="flex flex-col pr-4">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight" style={{ color: "#ffffff" }}>
                    Surgery Support
                  </h3>
                  <p className="text-[13px] md:text-sm font-light leading-relaxed" style={{ color: "#e5e7eb" }}>
                    by a product expert in your hospital
                  </p>
                </div>

                {/* Arrow Action Circle */}
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0 transform transition-all duration-300 group-hover:scale-110">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path
                      d="M6 18L18 6M18 6H9M18 6V15"
                      stroke="#CE112D"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 3: In-house Training */}
            <div 
              className="group relative w-full aspect-square rounded-[24px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-gray-100 bg-gray-50 flex flex-col justify-end p-8 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img
                src="/7s-medical/inhouse-training.png"
                alt="In-house training on systems"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Sleek Gradient Overlay for text contrast */}
              <div className="absolute inset-0 bg-black/25 pointer-events-none transition-opacity duration-300 group-hover:opacity-95" />

              {/* Card Footer Info */}
              <div className="relative z-10 flex items-end justify-between w-full">
                <div className="flex flex-col pr-4">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight" style={{ color: "#ffffff" }}>
                    In-house Training
                  </h3>
                  <p className="text-[13px] md:text-sm font-light leading-relaxed" style={{ color: "#e5e7eb" }}>
                    With our systems in your hospital
                  </p>
                </div>

                {/* Arrow Action Circle */}
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0 transform transition-all duration-300 group-hover:scale-110">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path
                      d="M6 18L18 6M18 6H9M18 6V15"
                      stroke="#CE112D"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

          </div>

          {/* Learn More Button */}
          <div className="flex justify-center" data-aos="fade-up" data-aos-delay="400">
            <Button href="#about" className="px-8">
              Learn More About Us
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
}
