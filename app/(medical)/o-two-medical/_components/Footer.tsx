"use client";

import React from "react";
import Link from "next/link";
import { Youtube, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Products", href: "#products" },
    { name: "Company", href: "#company" },
    { name: "Resources", href: "#resources" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const productCol1 = [
    { name: "Automatic Ventilation", href: "#products" },
    { name: "Analgesia", href: "#products" },
    { name: "Immediate Care", href: "#products" },
    { name: "Demand Valve & Resuscitation Kits", href: "#products" },
    { name: "Pressure Regulators & O2 Administrators", href: "#products" },
  ];

  const productCol2 = [
    { name: "Immediate Care", href: "#products" },
    { name: "Mounting & Carrying Solutions", href: "#products" },
  ];

  return (
    <footer className="bg-[#0091d5] text-white pt-16 pb-8 border-t border-white/10" id="footer">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 xl:gap-14 mb-12 items-start">

          {/* Column 1: Brand Logo & Paragraph (4 Cols wide) */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <Link href="#" className="flex items-center group">
              <img
                src="/o-two/logo.png"
                alt="O-Two Medical Technologies"
                className="w-[250px] object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-[17px] text-white/80 leading-relaxed font-sans mt-2">
              As a world leader in the development of emergency respiratory care devices, O-Two Medical Technologies Inc.
              is committed to its motto of &quot;INNOVATION IN RESUSCITATION&quot;. Our industry leading approach to research
              and new product development maintains our position on the leading edge of emergency medicine.
            </p>
          </div>

          {/* Column 2: Quick Links (2 Cols wide) */}
          <div className="lg:col-span-2">
            <h4 className="text-[20px] font-bold tracking-wide mb-5 font-display text-white border-b border-white/15 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[17px] text-white/80 hover:text-white transition-all duration-300 font-sans block hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products Double-Grid List (4 Cols wide) */}
          <div className="lg:col-span-4">
            <h4 className="text-[20px] font-bold tracking-wide mb-5 font-display text-white border-b border-white/15 pb-2">
              Products
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {/* Product Subcol A */}
              <div className="space-y-3">
                {productCol1.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[17px] text-white/80 hover:text-white transition-all duration-300 font-sans block leading-normal hover:translate-x-1"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              {/* Product Subcol B */}
              <div className="space-y-3">
                {productCol2.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[17px] text-white/80 hover:text-white transition-all duration-300 font-sans block leading-normal hover:translate-x-1"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 4: Social Media Links (2 Cols wide) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h4 className="text-[20px] font-bold tracking-wide mb-5 font-display text-white border-b border-white/15 pb-2 w-full">
              Social Media Links
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0082c3] hover:bg-[#0070a8] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Youtube size={20} strokeWidth={2.5} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0082c3] hover:bg-[#0070a8] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Linkedin size={20} strokeWidth={2.5} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0082c3] hover:bg-[#0070a8] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Twitter size={20} strokeWidth={2.5} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section: Divider & Centered copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-[15px] text-white/70 font-sans font-medium">
            ©2025 O-Two Medical Technologies Inc. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
