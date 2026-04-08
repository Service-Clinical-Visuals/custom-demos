"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function InspirationCares() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="bg-[#7f8b91] py-24 px-6 lg:px-20">
      <div className="max-w-380 mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div data-aos="fade-right" className="text-white">
          <p className="text-sm opacity-80 mb-4">Inosys</p>

          <h1 className="text-3xl lg:text-4xl font-semibold leading-snug mb-6">
            Precision Nitric Oxide Delivery for
            <br />
            Neonatal Respiratory Care
          </h1>

          <p className="text-sm opacity-80 leading-relaxed mb-4 max-w-lg">
            The Inosys Nitric Oxide (NO) delivery and monitoring system is
            specifically designed for use with constant flow type (infant)
            ventilators.
          </p>

          <p className="text-sm opacity-80 leading-relaxed mb-4 max-w-lg">
            Used in conjunction with ventilation to treat infant respiratory
            diseases such as Persistent Pulmonary Hypertension (PPHN), The
            Inosys maintains a set constant flow into the patient ventilator
            circuit, to ensure a constant therapeutic dose of Nitric Oxide.
          </p>

          <p className="text-sm opacity-80 leading-relaxed mb-6 max-w-lg">
            Built in safety monitoring systems ensure the prescribed dose is
            constantly monitored and maintained.
          </p>

          <div className="border-t border-white/30 my-6 w-3/4"></div>

          <p className="text-xs opacity-70 mb-6 max-w-md">
            Please note the SLE Inosys is not available in all countries. Please
            check with your local SLE Distributor to find out if this product is
            available for purchase in your country.
          </p>

          <button className="bg-white text-gray-700 text-sm px-5 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition">
            Learn More Inosys
            <span>→</span>
          </button>
        </div>

        {/* RIGHT VIDEO CONTAINER */}
        <div data-aos="fade-left" className="relative">
          <div className="rounded-2xl overflow-hidden bg-gray-300 h-[420px] lg:h-[460px]">
            {/* Replace with video */}
            {/* <video className="w-full h-full object-cover" autoPlay muted loop /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
