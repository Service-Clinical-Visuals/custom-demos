"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#099F94] pt-16 pb-6">
      <div className="max-w-[1560px] 2xl:max-w-[80%] mx-auto px-6">

        {/* Top 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[4fr_2fr_2fr_3fr] gap-8 lg:gap-6 mb-12">

          {/* Column 1: OHST Logo & Description */}
          <div className="flex flex-col items-start">
            <Link href="#" className="flex items-center mb-6">
              <Image
                src="/medical/ohst/ohst_logo.png"
                alt="OHST Medical Technology"
                width={160}
                height={50}
                className="object-contain brightness-200 invert"
              />
            </Link>
            <p className="text-[13px] leading-relaxed text-white/70 mb-6 pr-4">
              OHST Medizintechnik AG is a leading manufacturer of orthopedic implants and surgical
              instruments based in Rathenow, Germany. Precision in every detail.
            </p>
            <h5 className="text-[15px] font-semibold text-white mb-3">Follow Us</h5>
            <div className="flex items-center gap-4 text-white/70">
              <a href="#" className="hover:text-[#099F94] transition-colors"><Facebook size={18} /></a>
              <a href="#" className="hover:text-[#099F94] transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="hover:text-[#099F94] transition-colors"><Youtube size={18} /></a>
              <a href="#" className="hover:text-[#099F94] transition-colors"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start">
            <h4 className="text-[17px] font-semibold text-white mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-[14px] text-white/70">
              {["Home", "Services", "Products", "Patients", "About OHST", "Career", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-[#099F94] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Info */}
          <div className="flex flex-col items-start">
            <h4 className="text-[17px] font-semibold text-white mb-6">Info</h4>
            <ul className="flex flex-col gap-4 text-[14px] text-white/70">
              <li>OHST Medizintechnik AG</li>
              <li>Strasse der Einheit 63</li>
              <li>14712 Rathenow, Germany</li>
              <li>Tel: +49 3385 540-0</li>
              <li>
                <a href="mailto:info@ohst.de" className="hover:text-[#099F94] transition-colors">
                  info@ohst.de
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col items-start">
            <h4 className="text-[17px] font-semibold text-white mb-6">Newsletter</h4>
            <p className="text-[13px] leading-relaxed text-white/70 mb-4">
              Subscribe to our newsletter for the latest updates, industry insights, and product innovations from OHST.
            </p>
            <div className="flex w-full gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 h-[44px] px-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-[14px] focus:outline-none focus:border-[#099F94]"
              />
              <button className="h-[44px] w-[44px] flex-shrink-0 rounded-full bg-[#099F94] flex items-center justify-center hover:bg-[#07877e] transition-all">
                <ArrowRight size={18} className="text-white" />
              </button>
            </div>
          </div>

        </div>

        <hr className="border-white/10" />

        {/* Copyright */}
        <div className="mt-5 text-center text-[13px] text-white/50">
          ©2026 ServiceClinical Visuals. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
