"use client";

import React from "react";
import Link from "next/link";
import { Phone, Linkedin } from "lucide-react";

export default function Footer() {
  const services = [
    "Computer Aided Design Service",
    "ISO Standard Performance Testing Services",
    "Project Management and Delivery Services",
    "Prototyping and Testing Services",
    "See More..."
  ];

  const manufacturing = [
    "Contract Assembly",
    "Contract Packaging",
    "Injection Moulding",
    "Label Printing"
  ];

  const company = [
    "Privacy Statement",
    "Cookie Policy"
  ];

  const footerNav = [
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "News", href: "#news" },
    { name: "Contact Us", href: "#contact" }
  ];

  return (
    <footer className="w-full bg-[#004A87] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-6">

        {/* Top Layer: 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-12 text-left">

          {/* Column 1: About Company (Spans 4 columns) */}
          <div className="lg:col-span-4 space-y-5">
            <h3 className="text-[20px] font-semibold tracking-wide border-b-2 border-[#00A0E0] pb-2 w-fit text-white!">
              About Company
            </h3>
            <p className="text-white! text-[16px] leading-relaxed">
              The Vascular Flow team are specialists in cardiovascular device development. Our team has taken multiple medical device products from design to full commercialisation.
            </p>
            <div className="flex items-center gap-3 text-[16px] font-bold text-white/95">
              <Phone className="w-4.5 h-4.5 text-[#00A0E0]" />
              <span>+44 (0) 1382 598 532</span>
            </div>
          </div>

          {/* Column 2: Our Services (Spans 3 columns) */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-[20px] font-semibold tracking-wide border-b-2 border-[#00A0E0] pb-2 w-fit text-white!">
              Our Services
            </h3>
            <ul className="space-y-3 text-[16px] text-white">
              {services.map((item, index) => (
                <li key={index}>
                  <Link href="#services" className="hover:text-[#00A0E0] transition-colors duration-200 block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contract Manufacturing (Spans 3 columns) */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-[20px] font-semibold tracking-wide border-b-2 border-[#00A0E0] pb-2 w-fit text-white!">
              Contract Manufacturing
            </h3>
            <ul className="space-y-3 text-[16px] text-white">
              {manufacturing.map((item, index) => (
                <li key={index}>
                  <Link href="#services" className="hover:text-[#00A0E0] transition-colors duration-200 block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company (Spans 2 columns) */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className="text-[20px] font-semibold tracking-wide border-b-2 border-[#00A0E0] pb-2 w-fit text-white!">
              Company
            </h3>
            <ul className="space-y-3 text-[16px] text-white">
              {company.map((item, index) => (
                <li key={index}>
                  <Link href="#company" className="hover:text-[#00A0E0] transition-colors duration-200 block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-2.5 pt-2">
              <span className="block text-[16px] font-bold tracking-wider text-wide!">
                Socials
              </span>
              <a
                href="#linkedin"
                className="inline-flex items-center justify-center bg-white text-[#004A87] hover:bg-[#00A0E0] hover:text-white p-2.5 rounded-sm transition-all duration-300 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Layer: Nested Rounded Light Card */}
        <div className="w-full bg-[#f1f5f9] rounded-2xl p-6 md:p-8 lg:pb-5 mt-6 shadow-xl border border-white/5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">

            {/* Logo on the left */}
            <div className="flex-shrink-0 self-start md:self-auto">
              <Link href="#" className="inline-block select-none">
                <img src="/vascular-flow/vascular-logo.png" alt="" className="h-8 lg:h-12" />
              </Link>
            </div>

            {/* Horizontal Nav Links on the right */}
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 self-start md:self-auto">
              {footerNav.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[15px] md:text-[16px] font-bold transition-colors duration-200 ${link.active ? "text-[#004A87]" : "text-slate-600 hover:text-[#004A87]"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

          </div>

          {/* Separator line */}
          <div className="w-full h-px bg-slate-300/70 my-5"></div>

          {/* Copyrights block centered at bottom */}
          <p className="text-center text-slate-600 text-[14px]! font-bold tracking-wide">
            Copyrights@2026 Vascular Flow. All Rights Reserved
          </p>

        </div>

      </div>
    </footer>
  );
}
