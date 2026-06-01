"use client";

import "aos/dist/aos.css";
import { ArrowRight, Send } from "lucide-react";

const quickLinks = [
  "Home",
  "About",
  "Support",
  "Products",
];

const socials = [
  "Instagram",
  "X / Twitter",
  "LinkedIn",
];

export default function DeltaFooter() {

  return (
    <footer className="relative overflow-hidden w-full bg-[#d6ebe8] pt-8">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 items-start">
          {/* Left Text */}
          <div
            data-aos="fade-right"
            className="max-w-[720px]"
          >
            <p className="text-[#666666] text-[16px] leading-[1.85]  ">
              Stay informed on respiratory innovation. Subscribe for technical
              updates, clinical insights, and DeltaSleep product launches
              delivered directly to your inbox. Join our network of healthcare
              professionals and sleep therapy specialists.
            </p>
          </div>

          {/* Newsletter */}
          <div
            data-aos="fade-left"
            className="flex items-center h-[58px] rounded-[8px] overflow-hidden border-2 border-[#00695f]"
          >
            <input
              type="email"
              placeholder="Please enter your email"
              className="flex-1 h-full bg-[#00695f] px-5 text-white placeholder:text-white/80 text-[14px] outline-none"
            />

            <button className="cursor-pointer w-[72px] h-full bg-[#f2f5f4] flex items-center justify-center transition-all duration-300 hover:bg-white">
              <Send
                size={20}
                className="text-[#00695f] rotate-[-18deg]"
              />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#8ea8a3] mt-8" />

        {/* Main Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_180px_140px] gap-12 pt-10 items-start">
          {/* Contact */}
          <div data-aos="fade-up">
            <h3 className="text-[#00695f] text-3xl font-semibold  ">
              Stay Connected.
            </h3>

            <div className="mt-6">
              <p className="flex items-center gap-3 text-[#444444] font-bold text-3xl leading-[1.05] underline underline-offset-8 decoration-[#00695f]">
                info@deltasleep.ca <ArrowRight className="w-6 h-6 font-bold -rotate-45 text-[#00695f]" />
              </p>

              <p className="mt-3 text-[#444444] text-xl font-bold">
                (514) 974-7142
              </p>
            </div>
          </div>

          {/* Logo */}
          <div
            data-aos="zoom-in"
            className="flex items-center justify-center lg:justify-center pt-3"
          >
            <div className="flex items-center gap-5">

              <img src="/delta/delta-logo.png" alt="logo" className="w-80 h-auto" />
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up">
            <h4 className="text-[#00695f] text-[28px] font-semibold  ">
              Quick Links
            </h4>

            <div className="mt-6 flex flex-col gap-5">
              {quickLinks.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-[#666666] text-[16px] font-bold hover:text-[#00695f] transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div data-aos="fade-up">
            <h4 className="text-[#00695f] text-[28px] font-semibold  ">
              Socials
            </h4>

            <div className="mt-6 flex flex-col gap-5">
              {socials.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-[#666666] text-[16px] font-bold hover:text-[#00695f] transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}

      </div>
      <div className="bg-[#edfaf7] mt-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-3">
          <div
            className=" text-center"
          >
            <p className="text-[#3b3b3b] text-[16px]  ">
              © Copyright 2026 –{" "}
              <span className="text-[#00695f] underline underline-offset-4">
                Delta Sleep.
              </span>{" "}
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}