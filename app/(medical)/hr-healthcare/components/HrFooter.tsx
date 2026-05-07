// components/FooterSection.tsx

"use client";

import { useEffect } from "react";
import AOS from "aos";

import {
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Phone,
  Printer,
  Mail,
} from "lucide-react";

import "aos/dist/aos.css";
import Image from "next/image";

const quickLinks = [
  "About HR HealthCare",
  "News & Events",
  "Careers",
  "Sitemap",
  "Media Center",
];

const companyLinks = [
  "Instructions for Use | Safety Data Sheets",
  "Symbols Glossary",
  "Trademarks",
  "Healthcare Professional Disclaimer",
  "HCPCS Disclaimer",
];

export default function HrFooter() {


  return (
    <footer className="overflow-hidden bg-[#0D1D2E]">
      {/* MAIN FOOTER */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-380 px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-[360px_1px_1fr]">
            {/* LEFT SIDE */}
            <div data-aos="fade-right">
              {/* LOGO */}
              <div className="flex items-center">
              <div className="flex items-center gap-[2px]">
                <Image
                    src="/hr-healthcare/hr-footer-logo.png"
                    alt="Logo"
                    width={200}
                    height={100}
                />
                </div>
              </div>

              {/* SUBSCRIBE */}
              <div
                data-aos="fade-up"
                data-aos-delay="120"
                className="mt-8"
              >
                <div className="flex h-[48px] w-full  overflow-hidden rounded-full border border-white/20 bg-white">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="h-full flex-1 bg-transparent px-5 text-base text-[#111111] placeholder:text-[#9B9B9B] focus:outline-none"
                  />

                  <button className="flex p-3 cursor-pointer items-center justify-center rounded-full bg-[#041A34] text-base font-medium text-white transition-all duration-300 hover:bg-[#062448]">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* SOCIAL */}
              <div
                data-aos="fade-up"
                data-aos-delay="180"
                className="mt-8"
              >
                <h3 className="text-lg font-semibold tracking-[-0.8px] text-white">
                  Social Links
                </h3>

                <div className="mt-5 flex items-center gap-4">
                  {[
                    <Instagram size={18} />,
                    <Linkedin size={18} />,
                    <Youtube size={18} />,
                    <Twitter size={18} />,
                  ].map((icon, index) => (
                    <button
                      key={index}
                      className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full bg-white hover:bg-gray-200 text-[#041A34] shadow-[0_4px_10px_rgba(0,0,0,0.18)] transition-all duration-300 hover:translate-y-[-2px]"
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="hidden bg-white/10 lg:block" />

            {/* RIGHT LINKS */}
            <div
              data-aos="fade-left"
              className="grid gap-10 md:grid-cols-3"
            >
              {/* QUICK LINKS */}
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.8px] text-white">
                  Quick Links
                </h3>

                <ul className="mt-6 space-y-5">
                  {quickLinks.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-base text-white/75 transition-colors duration-300 hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* COMPANY */}
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.8px] text-white">
                  Company
                </h3>

                <ul className="mt-6 space-y-5">
                  {companyLinks.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-base text-white/75 transition-colors duration-300 hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CONTACT */}
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.8px] text-white">
                  Contact Info
                </h3>

                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-4">
                    <Phone
                      size={18}
                      strokeWidth={1.8}
                      className="text-white"
                    />

                    <span className="text-base text-white/75">
                      877.302.1110
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <Printer
                      size={18}
                      strokeWidth={1.8}
                      className="text-white"
                    />

                    <span className="text-base text-white/75">
                      717.252.1110
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail
                      size={18}
                      strokeWidth={1.8}
                      className="text-white"
                    />

                    <span className="text-base text-white/75 break-all">
                      customercare@hrhealthcare.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/5 bg-[#F4F4F4]">
          <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-6 py-5 md:flex-row xl:px-[92px]">
            {/* COPYRIGHT */}
            <p className="text-base text-[#4F4F4F]">
              © 2025 HR HealthCare. All rights reserved.
            </p>

            {/* LINKS */}
            <div className="flex items-center gap-8">
              <a
                href="#"
                className="text-base text-[#4F4F4F] transition-colors duration-300 hover:text-black"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-base text-[#4F4F4F] transition-colors duration-300 hover:text-black"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}