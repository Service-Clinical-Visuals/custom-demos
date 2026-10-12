"use client";

import React, { useEffect, useRef, useState } from "react";

const specs = [
  { label: "Chemical Base", value: "Hydrocarbon Solvent Complex + Synthetic Lubricity Agents" },
  { label: "Density at 20°C", value: "0.825 g/cm³" },
  { label: "Flash Point", value: "> 62 °C (DIN EN ISO 2719)" },
  { label: "Ash Content", value: "Ashless (DPF Safe)" },
];

const objectives = [
  { title: "Injector Spray Angle Restoration", value: "+98.4%", fill: 98.4, tone: "positive" },
  { title: "HFRR Lubricity Improvement (Wear Scar Reduction)", value: "-32% Scar Dia.", fill: 82, tone: "positive" },
  { title: "Particulate Soot Emission Reduction", value: "-18.6%", fill: 68, tone: "negative" },
] as const;

const toneClasses = {
  positive: { text: "text-checkout", bar: "bg-checkout" },
  negative: { text: "text-cart", bar: "bg-cart" },
};

export default function TechnicalDetails() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Fill the bars once the panel scrolls into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pb-14 md:pb-20 min-[2500px]:pb-32">
      <div className="custom-container">
        <div
          ref={ref}
          className="bg-[#222222] rounded-[4px] min-[3800px]:rounded-[8px] px-5 pt-12 pb-10 sm:px-8 md:px-10 md:pt-16 md:pb-12 desk:px-6 desk:pt-24 desk:pb-10 xl:px-7 min-[2500px]:px-14 min-[2500px]:pt-36 min-[2500px]:pb-16"
        >
          <div className="grid grid-cols-1 desk:grid-cols-2 gap-10 desk:gap-12 xl:gap-12 min-[2500px]:gap-24">
            {/* Left: Overview + specs */}
            <div className="flex flex-col min-w-0">
              <h3 className="text-[#F6F6F6]">ORIGINAL SYPRIN Diesel Injector and System Cleaner</h3>
              <p className="text-[#E5E5E5] mt-3 md:mt-4 min-[2500px]:mt-6">
                SYPRIN Diesel Engine &amp; Injector Care Additive is a laboratory-grade solution engineered specifically for high-pressure injection systems, including Common Rail and Pumpe-Düse technology. Its advanced care matrix dissolves carbon deposits, cleans precision injector needles, and provides synthetic boundary lubrication to the high-pressure fuel pump, helping maintain optimal injector performance, smooth fuel delivery, and overall engine efficiency.
              </p>

              <dl className="mt-3 md:mt-4 min-[2500px]:mt-6">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="text-small flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-6 py-2.5 md:py-3 min-[2500px]:py-5 border-b border-dashed border-white/20"
                  >
                    <dt className="text-[#9A9A9A] shrink-0">{spec.label}</dt>
                    <dd className="text-[#F6F6F6] sm:text-right">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Right: Chemical objectives */}
            <div className="flex flex-col min-w-0">
              <h3 className="text-[#F6F6F6]">Primary Chemical Objectives</h3>
              <ul className="flex flex-col gap-3 md:gap-4 min-[2500px]:gap-7 mt-3 md:mt-4 min-[2500px]:mt-6">
                {objectives.map((item, i) => {
                  const tone = toneClasses[item.tone];
                  return (
                    <li
                      key={item.title}
                      className="bg-[#111111] rounded-[3px] min-[3800px]:rounded-[6px] px-2 pt-2.5 pb-3 md:px-2.5 md:pt-3 md:pb-3.5 min-[2500px]:px-5 min-[2500px]:pt-5 min-[2500px]:pb-6"
                    >
                      <div className="flex items-start justify-between gap-4 min-[2500px]:gap-8">
                        <span className="pd-metric-title text-[#F6F6F6]">{item.title}</span>
                        <span className={`pd-metric-value ${tone.text} shrink-0 pt-0.5`}>{item.value}</span>
                      </div>
                      <div className="mt-3 md:mt-4 min-[2500px]:mt-6 h-1 min-[2500px]:h-2 min-[3800px]:h-2.5 w-full rounded-full bg-[#2B2B2B] overflow-hidden">
                        <div
                          className={`h-full rounded-full ${tone.bar} transition-[width] duration-[1400ms] ease-out`}
                          style={{ width: visible ? `${item.fill}%` : "0%", transitionDelay: `${i * 150}ms` }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
