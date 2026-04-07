"use client"

import { Check, ArrowRight } from "lucide-react"

export default function InspirationAbout() {

  return (
    <section className="bg-[#f3f3f3] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div data-aos="fade-right" className="relative w-full max-w-[520px] pl-10 pb-10">
          {/* Grey chamfered frame — absolute, peeks out bottom-left */}
          <div
            className="absolute inset-0 bg-[#8a9099]"
            style={{
              clipPath: 'polygon(60px 0, 100% 0, 100% calc(100% - 60px), calc(100% - 60px) 100%, 0 100%, 0 60px)',
            }}
          />
          {/* Image — sits on top, offset to top-right by the padding */}
          <img
            src="/inspiration-healthcare/assets/inspiration-about2.png"
            alt="about"
            className="relative w-full h-[380px] object-cover block z-10"
          />
        </div>
        {/* RIGHT CONTENT */}
        <div data-aos="fade-left">

          <p className="text-sm text-gray-500 mb-3">About Us</p>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 leading-snug">
            Specialists in neonatal and critical care innovation
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Inspiration Healthcare Group designs, manufactures, and markets advanced
            medical technology focused on improving patient care and clinical outcomes.
            With a commitment to innovation and quality, we develop solutions that support
            healthcare professionals in delivering safe, effective, and efficient treatment.
          </p>

          {/* FEATURES */}
          <div className="space-y-5">

            {[
              {
                title: "Innovation-Driven Solutions",
                desc: "We create cutting-edge medical technologies that solve real clinical challenges, ensuring practical and effective solutions for better patient care.",
              },
              {
                title: "Neonatal & Critical Care Expertise",
                desc: "We provide specialized neonatal and intensive care equipment, supporting clinicians in delivering life-saving treatment.",
              },
              {
                title: "Precision Manufacturing",
                desc: "Our products are manufactured with the highest quality standards, using advanced materials and precision engineering.",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className="flex gap-4"
              >
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-800 text-white">
                  <Check size={14} />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button className="mt-8 flex items-center gap-2 bg-gray-300 hover:bg-gray-400 transition px-5 py-2 rounded-full text-sm text-gray-800">
            Know More About Us
            <ArrowRight size={16} />
          </button>

        </div>
      </div>
    </section>
  )
}