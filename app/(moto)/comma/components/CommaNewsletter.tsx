"use client";

import { ArrowUpRight } from "lucide-react";

export default function CommaNewsletter() {
  return (
    <section className="bg-[white]">
      <div className=" rounded-tl-[175px] rounded-tr-[175px] bg-[#1B1212] py-16">
      <div className="mx-auto max-w-[1550px] px-10 bg-[#1B1212] ">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div data-aos="fade-right">
            <h2 className="text-[28px] font-bold text-white">Subscribe To Our Newsletter</h2>
            <p className="mt-2 max-w-[480px] text-[14px] leading-7 text-white">
              Stay updated with the latest product innovations, industry insights, and exclusive offers.
            </p>
          </div>

          <div data-aos="fade-left" className="flex w-full max-w-[420px] gap-1">
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-[48px] flex-1 bg-white px-4 text-[14px] text-white placeholder:text-black outline-none border border-white/20 border-r-0"
            />
            <button className="flex h-[48px] w-[48px] shrink-0 cursor-pointer items-center justify-center bg-[#FF4A43]">
              <ArrowUpRight size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
      
      </div>
        <div className="h-px bg-white max-w-[1550px]" />


    </section>
  );
}
