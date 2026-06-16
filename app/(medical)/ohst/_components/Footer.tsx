"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";
import { Typography } from "./ui/Typography";

export default function Footer() {
  return (
    <footer className="bg-[#099F94] pt-16 pb-4 font-outfit text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">

        {/* Top 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[4fr_2fr_2fr_3.5fr] gap-8 lg:gap-10 xl:gap-10 mb-12">

          {/* Column 1: OHST Logo & Description */}
          <div className="flex flex-col items-start">
            <Link href="#" className="flex items-center mb-3">
              <Image
                src="/medical/ohst/footer-logo.png"
                alt="OHST Medical Technology"
                width={300}
                height={51}
                className="object-contain"
              />
            </Link>
            <Typography variant="h5" weight="normal" color="text-white" className="mb-6 mt-5 pr-4 leading-relaxed text-[14px]">
              Discover our CE-certified hip and knee implant solutions designed for precision, compatibility, and reliable performance.
            </Typography>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-8 h-8 xl:w-12 xl:h-12 rounded-[8px] bg-white text-[#099F94] hover:bg-white/90 transition-all flex items-center justify-center shadow-sm"
                aria-label="Linkedin"
              >
                <Linkedin size={16} fill="currentColor" stroke="none" />
              </a>
              <a
                href="#"
                className="w-8 h-8 xl:w-12 xl:h-12  rounded-[8px] bg-white text-[#099F94] hover:bg-white/90 transition-all flex items-center justify-center shadow-sm"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-8 h-8 xl:w-12 xl:h-12  rounded-[8px] bg-white text-[#099F94] hover:bg-white/90 transition-all flex items-center justify-center shadow-sm"
                aria-label="Facebook"
              >
                <Facebook size={18} fill="currentColor" stroke="none" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start lg:items-center">
            <Typography variant="h3" color="text-white" weight="semibold" className="mb-6 text-[17px]">
              Quick Links
            </Typography>
            <Typography variant="h6" className=" xl:mr-10">
              <ul className="flex flex-col gap-2">
                {["Home", "Services", "Products", "Patients", "User", "About OHST", "Career", "Contact"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-white hover:text-white transition-colors text-[18px] leading-relaxed">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul></Typography>
          </div>

          {/* Column 3: Info */}
          <div className="flex flex-col items-start">
            <Typography variant="h3" color="text-white" weight="semibold" className="mb-6 text-[17px]">
              Info
            </Typography>
            <Typography variant="h5" weight="normal">
              <ul className="flex flex-col gap-4 text-white  leading-relaxed">
                <li>OHST Medizintechnik AG Grünauer Fenn 3</li>
                <li>D-14712 Rathenow</li>
                <li className="mt-2">Phone + 49 (0)3385 5420-0</li>
                <li>Fax + 49 (0)3385 542099</li>
                <li className="mt-2">
                  <a href="mailto:info@ohst.de" className="hover:underline text-white transition-colors">
                    Email info@ohst.de
                  </a>
                </li>
              </ul></Typography>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col items-start">
            <Typography variant="h3" color="text-white" weight="semibold" className="mb-6 text-[17px]">
              Newsletter
            </Typography>
            <Typography variant="h5" weight="normal" color="text-white" className="mb-6 leading-relaxed text-[14px]">
              Subscribe to our newsletter for the latest updates, industry news, and advanced orthopedic solutions.
            </Typography>
            <div className="flex w-full max-w-[370px] bg-white rounded-[15px] p-1 items-center justify-between border border-transparent shadow-sm">
              <input
                type="email"
                placeholder="Email Address...."
                className="flex-1 bg-transparent text-gray-800 placeholder:text-gray-400 pl-4 pr-2 focus:outline-none text-[14px]"
              />
              <button className="h-[44px] w-[44px] flex-shrink-0 rounded-[12px] bg-[#099F94] flex items-center justify-center hover:bg-[#07877e] text-white transition-all border-2 border-white shadow-sm">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>

        <hr className="border-white/60 mt-6 mb-3" />

        {/* Copyright */}
        <div className="text-center text-white text-[16px]">
          © 2026 <a href="#" className="underline hover:text-white transition-colors">OHST Orthopedic Solutions</a>. All rights reserved worldwide.
        </div>

      </div>
    </footer>
  );
}
