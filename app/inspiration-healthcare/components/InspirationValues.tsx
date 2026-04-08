"use client";

import "aos/dist/aos.css";
import { useState } from "react";

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/utah/landing_page/UTAH-1.webm",
  "https://cdn.clinicalvisuals.com/medical/utah/landing_page/UTAH-2.webm",
  "https://cdn.clinicalvisuals.com/medical/utah/landing_page/UTAH-3.webm",
  "https://cdn.clinicalvisuals.com/medical/utah/landing_page/UTAH-4.webm",
  "https://cdn.clinicalvisuals.com/medical/utah/landing_page/UTAH-5.webm",
];


export default function InspirationValues() {

      const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % bannerVideos.length);
  };


  return (
    <section className="bg-[#7f8b91] py-24 px-6 lg:px-20">
      <div className="max-w-380 mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* LEFT VIDEO */}
        <div data-aos="fade-right">
          <div className="rounded-2xl overflow-hidden bg-gray-300 h-64 md:h-full lg:h-[460px] min-h-[300px]">
            {/* Replace with video */}
            <video
                key={currentVideoIndex}
                onEnded={handleVideoEnd}
              src={bannerVideos[currentVideoIndex]} 
              className="w-full h-full object-cover" 
              autoPlay muted playsInline />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white" data-aos="fade-left">
          <p className="text-sm opacity-80 mb-3">Our Values</p>

          <h2 className="text-3xl lg:text-4xl font-semibold leading-snug mb-4">
            Guided by Values That Drive Impact
          </h2>

          <p className="text-sm opacity-80 leading-relaxed mb-6 max-w-xl">
            Our core values shape everything we do—driving innovation, advancing
            research, and keeping patients at the heart of every solution. We
            are committed to delivering outcome-focused, pioneering healthcare
            that makes a meaningful difference.
          </p>

          {/* VALUE LIST */}
          <div className="space-y-4 mb-6">
            {values.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sm">
                  <img src={item.icon} alt={item.title} className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-xs opacity-80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="cursor-pointer bg-white text-gray-700 text-sm px-5 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition">
            Discover Our Values
            <span>→</span>
          </button>
        </div>
      </div>

      {/* RIGHT FLOATING IMAGE */}
      <div className="hidden lg:flex max-w-380 mx-auto lg:-mt-65 justify-end lg:px-0">
        <div
          className="w-[280px] h-[250px] max-w-full rounded-2xl overflow-hidden bg-gray-300 shadow-lg"
          data-aos="zoom-in"
        >
          <img
            src="/inspiration-healthcare/assets/inspiration-value.jpg"
            alt="Floating Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

const values = [
  {
    icon: "/inspiration-healthcare/assets/inspiration-value1.png",
    title: "Outcome Changing",
    desc: "Focused on delivering measurable impact in patient care",
  },
  {
    icon: "/inspiration-healthcare/assets/inspiration-value2.png",
    title: "Research Driven",
    desc: "Built on continuous learning and scientific advancement",
  },
  {
    icon: "/inspiration-healthcare/assets/inspiration-value3.png",
    title: "Patient Focused",
    desc: "Centered on improving patient experience and outcomes",
  },
  {
    icon: "/inspiration-healthcare/assets/inspiration-value4.png",
    title: "Pioneering",
    desc: "Committed to innovation and forward-thinking solutions",
  },
];
