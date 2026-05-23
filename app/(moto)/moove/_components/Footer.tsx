"use client";
import React from "react";
import Link from "next/link";
import { Linkedin } from "lucide-react";

const footerLogos = [
  { src: "/moove/home/footer-1.png", alt: "IAAF" },
  { src: "/moove/home/footer-2.png", alt: "VLS" },
  { src: "/moove/home/footer-3.png", alt: "UKLA" },
  { src: "/moove/home/footer-4.png", alt: "Accredited" },
  { src: "/moove/home/footer-5.png", alt: "ISO" },
  { src: "/moove/home/footer-6.png", alt: "Certification" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#102A43] text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">

        {/* Top Section: Logo & Newsletter */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Logo */}
          <Link href="/moove" className="flex items-center">
            <img
              src="/moove/logo-white.png"
              alt="Moove"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Newsletter Form */}
          <form className="w-full max-w-md flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 text-sm text-gray-800 bg-[#EBF4FA] placeholder-gray-500 focus:outline-none rounded-none"
            />
            <button
              type="submit"
              className="bg-white text-[var(--moove-text-dark)] font-bold px-8 py-3 hover:bg-gray-100 transition-colors rounded-none sm:shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Middle Section: 4 Columns Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">

          {/* Col 1 */}
          <div>
            <h4 className="text-[22px]! font-bold uppercase tracking-wider text-gray-300 pb-3 border-b border-white/10 mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 text-xs md:text-[16px] text-gray-300">
              {["Home", "Our Services", "Brands", "Sectors", "News and Events"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-[22px]! font-bold uppercase tracking-wider text-gray-300 pb-3 border-b border-white/10 mb-4">
              Product Information
            </h4>
            <ul className="flex flex-col gap-3 text-xs md:text-[16px] text-gray-300">
              {[
                "Mobil Product Data Sheets",
                "Comma Technical Data Sheets",
                "Safety Data Sheets - Mobil",
                "Safety Data Sheets - Comma"
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-[22px]! font-bold uppercase tracking-wider text-gray-300 pb-3 border-b border-white/10 mb-4">
              Policies & Legislation
            </h4>
            <ul className="flex flex-col gap-3 text-xs md:text-[16px] text-gray-300">
              {[
                "Website Terms & Conditions",
                "Privacy policy",
                "Cookie policy",
                "Anti-Slavery Policy",
                "Tax Strategy"
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-[22px]! font-bold uppercase tracking-wider text-gray-300 pb-3 border-b border-white/10 mb-4">
              Social Media
            </h4>
            <div className="flex gap-2">
              <Link
                href="#"
                className="bg-white text-[#102A43] p-2 hover:bg-gray-100 transition-colors inline-block rounded-sm"
              >
                <Linkedin className="w-5 h-5 fill-current" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Section: Brands, Copyright & Accreditation Logos */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-8 border-t border-white/10 text-center lg:text-left">

          {/* Left: Our Brands */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Our brands
            </span>
            <div className="flex items-center gap-4">
              {footerLogos.slice(0, 2).map((logo, idx) => (
                <div key={idx} className="h-8 w-auto">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Center: Copyright */}
          <div className="text-xs text-gray-400 font-medium">
            &copy; 2025 Moove Lubricants Limited
          </div>

          {/* Right: Accreditation Logos */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {footerLogos.slice(2).map((logo, idx) => (
              <div key={idx} className="relative h-8 w-auto">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}
