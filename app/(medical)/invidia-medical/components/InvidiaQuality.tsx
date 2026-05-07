"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function InvidiaQuality() {
  return (
    <section className="overflow-hidden bg-[#F4F4F4] py-[64px]">
      <div className="mx-auto grid max-w-380 grid-cols-1 items-stretch gap-[44px] px-8 lg:grid-cols-[1.02fr_0.98fr]">
        {/* ======================================
            LEFT IMAGE
        ======================================= */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="relative h-full"
        >
          {/* IMAGE CONTAINER */}
          <div className="relative h-full overflow-hidden rounded-[18px] bg-[#D7DDE2] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            {/* IMAGE PLACEHOLDER */}
            {/* Replace later with actual image */}

            <div className="absolute inset-0 bg-gradient-to-br from-[#C9D3DA] via-[#DCE3E8] to-[#BAC6CE]" />

            {/* TECHNICAL OVERLAY EFFECT */}
            <div className="absolute inset-0 opacity-[0.14]">
              <div className="absolute left-[12%] top-[18%] h-[120px] w-[120px] rounded-full border border-[#3B4B5A]" />

              <div className="absolute left-[20%] top-[28%] h-[200px] w-[200px] rounded-full border border-[#3B4B5A]" />

              <div className="absolute right-[14%] top-[20%] h-[90px] w-[90px] rounded-[18px] border border-[#3B4B5A]" />

              <div className="absolute bottom-[18%] left-[28%] h-[2px] w-[220px] bg-[#3B4B5A]" />
            </div>

            {/* OPTIONAL IMAGE */}
            
              <Image
                src="/invidia/invidia-quality.png"
                alt="Service"
                fill
                className="object-cover"
              />
           

            {/* SOFT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/[0.04] to-transparent" />
          </div>
        </div>

        {/* ======================================
            RIGHT CONTENT
        ======================================= */}
        <div>
          {/* TITLE */}
          <div
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-1.8px] text-[#363636]">
              Focus on quality and service
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div
            data-aos="fade-left"
            data-aos-delay="120"
            className="mt-7 space-y-6"
          >
            <p className="text-base leading-[1.95] text-[#666666]">
              Our medical products are known for their{" "}
              <span className="font-semibold text-[#D3AB00]">
                outstanding quality and precision.
              </span>{" "}
              By utilising the latest technologies, we
              offer practical solutions that are
              individually tailored to the needs of our
              customers. With our global network, we
              supply hospitals and medical practices
              worldwide.
            </p>

            <p className="text-base leading-[1.95] text-[#666666]">
              Find out more about our medical devices and
              how we can support your surgical practice
              with leading technologies. Our team is at
              your disposal for detailed information and a
              personalised service. Discover our{" "}
              <span className="font-semibold text-[#D3AB00]">
                wide range of surgical instruments
              </span>{" "}
              that ensure efficiency, safety and precision
              in modern surgery.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="mt-7 h-px w-full bg-[#D8D8D8]" />

          {/* FOOTER TITLE */}
          <div
            data-aos="fade-up"
            data-aos-delay="220"
            className="mt-7"
          >
            <h3 className="text-lg font-semibold tracking-[-0.4px] text-[#363636]">
              Focus on quality and service
            </h3>
          </div>

          {/* CTA */}
          <div
            data-aos="fade-up"
            data-aos-delay="320"
            className="mt-6"
          >
            <Link
              href="/"
              className="group inline-flex h-[42px] items-center overflow-hidden rounded-[4px] bg-[#D3AB00] pl-5 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-[2px]"
            >
              <span>Learn More</span>

              <span className="ml-4 flex h-full w-[34px] items-center justify-center bg-white text-[#D3AB00] transition-all duration-300 group-hover:w-[42px]">
                <ArrowRight
                  size={15}
                  strokeWidth={2.5}
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}