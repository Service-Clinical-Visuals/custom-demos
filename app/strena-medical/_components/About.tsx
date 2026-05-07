"use client";

import Button from "./Button";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* Left Content */}
          <div data-aos="fade-right">
            <h2 className="text-[#00AEEF] text-2xl lg:text-3xl font-semibold mb-4">
              About <span className="text-[#00427C]">Us</span>
            </h2>
            <h3 className="text-[#00427C] text-xl lg:text-2xl font-semibold mb-6">
              Committed to advancing Healthcare Worldwide...
            </h3>
            <div className="text-gray-500 space-y-6 text-[15px] lg:text-[16px] leading-relaxed mb-10">
              <p>
                With more than 35 years of experience, Strena Medical is a leader
                in medical device manufacturing and distribution around the
                world. Your point of contact for project development in medical
                technology.
              </p>
              <p>
                We are continually expanding our reach in Latin America, South
                East Asia, Africa and the Middle East with our technologies in
                Diagnostic Imaging, Cardiology, Gynecology, Critical Care and
                Telemedicine.
              </p>
            </div>
            <Button variant="primary" hasArrow>
              View Product
            </Button>
          </div>

          {/* Right Image Space */}
          <div className="relative" data-aos="fade-left">
            <div className="w-full bg-white rounded-3xl overflow-hidden shadow-md p-4">
                <img 
                  src="/strena/images/abt.png" 
                  className="w-full h-auto object-contain" 
                  alt="Strena Medical Innovation" 
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
