"use client";

import { useEffect } from "react";
import { Check } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const highlights = [
  "Pulmodyne and Alcove Manufacturing and Distribution announce partnership to innovate in drug atomization delivery.",
  "Launch of Pulmodyne DART and Reach; two high performance atomizing drug delivery devices.",
  "EMS acquires the distribution for Care2 Innovation products. The portfolio includes technology in stabilization and nebulization.",
];

export default function PulmoAbout() {

  return (
    <section className="overflow-hidden bg-[#F5F5F5] py-28">
      <div className="mx-auto max-w-[1600px] px-8 lg:px-16">
        {/* ================================================= */}
        {/* MAIN GRID */}
        {/* ================================================= */}

        <div className="grid items-stretch gap-14 lg:grid-cols-[1fr_1.05fr]">
          {/* ================================================= */}
          {/* IMAGE SIDE */}
          {/* ================================================= */}

          <div
            data-aos="fade-right"
            className="relative overflow-hidden rounded-[24px] shadow-[0_14px_30px_rgba(0,0,0,0.08)]"
          >
            {/* IMAGE */}
            <div className="h-full w-full">
              <img
                src="/innovation/pulmodyne-campus.jpg"
                alt="Pulmodyne Headquarters"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />

              {/* FUTURE IMAGE */}
              
              <Image
                src="/pulmo/pulmo-about.png"
                alt="Pulmodyne Headquarters"
                fill
                className="object-cover"
              />
             
            </div>

            {/* SOFT OVERLAY */}
            <div className="absolute inset-0 bg-black/[0.02]" />

            {/* LIGHT DEPTH */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_35%)]" />
          </div>

          {/* ================================================= */}
          {/* CONTENT SIDE */}
          {/* ================================================= */}

          <div className="max-w-[760px]">
            {/* TITLE */}
            <div data-aos="fade-up">
              <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-2px] text-[#0068A8]">
                Innovation And High Quality Products
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div data-aos="fade-up" data-aos-delay="120">
              <p className="mt-4 text-[16px] leading-[2] text-[#666666]">
                Pulmodyne strives to manufacture high quality products for
                healthcare providers, patients, and distributors. We specialize
                in making disposable emergency airway products that are sold
                through our global distribution channels. Our portfolio of
                products holds intuitive designs, enabling a rapid
                administration to the providers hands.
              </p>
            </div>

            {/* EMPHASIS */}
            <div data-aos="fade-up" data-aos-delay="220">
              <p className="mt-4 text-[16px] font-semibold italic leading-[1.9] text-[#008D70]">
                Pulmodyne’s Indianapolis Headquarters expands with an additional
                35,000 sq. ft. for manufacturing space.
              </p>
            </div>

            {/* ================================================= */}
            {/* LIST */}
            {/* ================================================= */}

            <div
              data-aos="fade-up"
              data-aos-delay="320"
              className="mt-5 space-y-5"
            >
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* ICON */}
                  <div className="mt-[2px] flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border border-[#00A887]">
                    <Check
                      size={15}
                      strokeWidth={3}
                      className="text-[#00A887]"
                    />
                  </div>

                  {/* TEXT */}
                  <p className="text-[16px] leading-[1.9] text-[#555555]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* ================================================= */}
            {/* CTA */}
            {/* ================================================= */}

            <div data-aos="fade-up" data-aos-delay="120" className="mt-6">
              <button className="cursor-pointer flex h-[54px] items-center justify-center rounded-[4px] bg-[#0068A8] px-8 text-[16px] font-semibold text-white shadow-[0_10px_22px_rgba(0,104,168,0.14)] transition-all duration-300 hover:bg-[#005A91] hover:shadow-[0_16px_30px_rgba(0,104,168,0.2)]">
                Know More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}