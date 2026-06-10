"use client";

import { Dot } from "lucide-react";
import Image from "next/image";

const values = [
  {
    tag: "Knowledge to succeed",
    text: "We give you the confidence to keep your business, and your customers' vehicles, performing at their best. From digital tools to technical training, we provide you with the right knowledge at the right time.",
    image: "/moto/comma/what_we_stand1.png",
  },
  {
    tag: "Part of your world",
    text: "We're not just part of industry communities, we're right in the heart of them. We work hand-in-hand with workshops to understand your challenges and needs to let us explore how we can help you do more.",
    image: "/moto/comma/what_we_stand2.png",
  },
];

export default function CommaValues() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1550px] px-10">

        <div className="text-center justify-center flex flex-col items-center" data-aos="fade-up">
          <span className="content flex max-w-[280px] justify-center rounded-full border bg-[#FD423926] border-[#FF4A43] px-4 py-1 text-[black] uppercase tracking-wider">
            <><Dot /> Product Range</>
          </span>
          <h2 className="mt-4 text-[38px] font-bold leading-tight text-[#1A1A1A]">
            What we stand for
          </h2>
          <p className="mx-auto mt-3 max-w-[600px] text-[14px] leading-7 text-[#666]">
            Creating value through quality products, technical expertise, and customer-focused service.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {values.map((v, i) => (
            <div
              key={v.tag}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="flex overflow-hidden rounded-sm bg-[#F5F5F5]"
            >
              {/* Image left */}
              <div className="relative w-[45%] shrink-0">
                <Image
                  src={v.image}
                  alt={v.tag}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text right */}
              <div className="flex flex-col justify-center p-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FD423926] border border-[#FF4A43] px-3 py-0.5 text-[12px] font-semibold text-[#000000] w-fit">
                  <span className="h-1.5 w-1.5 text-black! rounded-full bg-[#FF4A43]" />
                  {v.tag}
                </span>
                <p className="mt-3 text-[13px] leading-7 text-[#555]">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
