"use client";

import { ArrowUpRight } from "lucide-react";

export default function CommaNewsletter() {
  return (
    <section className="bg-[white] mt-[-1]">
      <div className=" xl:rounded-tl-[175px] xl:rounded-tr-[175px] bg-[#1B1212] py-14 justify-center flex flex-col">
        <div className="mx-auto max-w-[90%]! min-w-[90%]! bg-[#1B1212] justify-between flex">
          <div className="flex flex-col w-full justify-between gap-8 lg:flex-row items-center">

            <div data-aos="fade-right" className="mt-10 justify-center">
              <h2 className="text-[48px] font-semibold text-white text-center lg:text-start">Subscribe To Our Newsletter</h2>
              <p className="mt-2 max-w-[480px] text-[14px] leading-7 text-white text-center lg:text-start">
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
        <div className=" bg-white max-w-[90%]! h-[2px] left-[5%] relative mt-14"> </div>
      </div>
        


    </section>
  );
}
