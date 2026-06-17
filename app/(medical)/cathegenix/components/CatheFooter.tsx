"use client";

import { useEffect } from "react";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Music2,
  Twitter,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const quickLinks = [
  "Home",
  "About us",
  "Primo",
  "Products",
  "News events",
  "Contact us",
];

const newsLinks = [
  "News & Events",
  "Medical Professionals",
  "Patient Health",
];

export default function CatheFooter() {

  return (
    <footer className="overflow-hidden bg-[#eff4fc] py-10 cathegenix-root">
      <div className="custom-container px-8 xl:px-14">
        {/* ================================================= */}
        {/* MAIN GRID */}
        {/* ================================================= */}

        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-[1.5fr_0.55fr_0.75fr_0.9fr] xl:gap-16">
          {/* ================================================= */}
          {/* BRAND */}
          {/* ================================================= */}

          <div data-aos="fade-up" className="max-w-[520px]">
            {/* LOGO */}
            <div className="flex items-center gap-4">
                <img src="/cathegenix/cathe-logo.png" alt="logo" className="h-10 w-auto"/>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-10  text-[16px] leading-[2] text-[#666666]">
              Catheter Precision, Inc., a global medical device company, is
              dedicated to empowering healthcare providers to achieve optimal
              patient outcomes through the delivery of impactful and innovative
              technologies.
            </p>
          </div>

          {/* ================================================= */}
          {/* QUICK LINKS */}
          {/* ================================================= */}

          <div data-aos="fade-up" data-aos-delay="100">
            {/* TITLE */}
            <h3 className="text-[24px] font-semibold tracking-[-0.5px] text-[#2B2B2B]">
              Quick Links
            </h3>

            {/* LINKS */}
            <ul className="mt-8 space-y-5">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-base text-[#555555] transition-all duration-300 hover:text-[#0047A6]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================================================= */}
          {/* NEWS CENTER */}
          {/* ================================================= */}

          <div data-aos="fade-up" data-aos-delay="200">
            {/* TITLE */}
            <h3 className="text-[24px] font-semibold tracking-[-0.5px] text-[#2B2B2B]">
              News Center
            </h3>

            {/* LINKS */}
            <ul className="mt-8 space-y-5">
              {newsLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-base text-[#555555] transition-all duration-300 hover:text-[#0047A6]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================================================= */}
          {/* COMPANY / NEWSLETTER */}
          {/* ================================================= */}

          <div data-aos="fade-up" data-aos-delay="300">
            {/* TITLE */}
            <h3 className="text-[24px] font-semibold tracking-[-0.5px] text-[#2B2B2B]">
              Company
            </h3>

            {/* SOCIAL */}
            <div className="mt-4 flex items-center gap-4">
              {[
                Instagram,
                Linkedin,
                Facebook,
                Music2,
                Twitter,
              ].map((Icon, index) => (
                <button
                  key={index}
                  className="flex cursor-pointer h-[42px] w-[42px] items-center justify-center rounded-full bg-[#0047A6] text-white shadow-[0_8px_18px_rgba(0,71,166,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#003C92]"
                >
                  <Icon size={18} strokeWidth={2.2} />
                </button>
              ))}
            </div>

            {/* NEWSLETTER */}
            <div className="mt-6">
              <h4 className="text-[24px] font-semibold tracking-[-0.5px] text-[#2B2B2B]">
                Newsletter
              </h4>

    

              {/* INPUT */}
              <div className="mt-5">
                <div className="flex h-[56px] w-full max-w-[320px] items-center overflow-hidden rounded-[12px] border border-[#CFCFCF] bg-white shadow-[0_6px_14px_rgba(0,0,0,0.04)]">
                  <input
                    type="email"
                    placeholder="Enter Your E-Mail"
                    className="h-full flex-1 bg-transparent px-5 text-[14px] text-[#1f1f1f] outline-none placeholder:text-[#888888]"
                  />

                  {/* BUTTON */}
                  <button className="cursor-pointer mr-[6px] flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#0047A6] text-white transition-all duration-300 hover:scale-105">
                    <ArrowRight size={17} strokeWidth={2.8} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* DIVIDER */}
        {/* ================================================= */}


        <div
          className="flex justify-center mt-8 border-t border-[#DDDDDD] pt-6"
        >
          <p className="text-center text-base text-[#777777]">
            Copyright © 2026 CatheGenix Pte. Ltd., Singapore [SiteMap]
          </p>
        </div>
      </div>
    </footer>
  );
}