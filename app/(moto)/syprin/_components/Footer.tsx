"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Globe, Search } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert("Thank you for subscribing!");
      setEmail("");
    }
  };

  const legalLinks = [
    { label: "legal notice", href: "#" },
    { label: "Shipping Methods", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Payment Method", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Cancel the Contract", href: "#" },
    { label: "Cancellation Policy", href: "#" },
  ];

  const categoryLinks = [
    { label: "Oil", href: "#categories" },
    { label: "Gasoline", href: "#categories" },
    { label: "Bike Line", href: "#categories" },
    { label: "Lead Substitute", href: "#categories" },
    { label: "Diesel", href: "#categories" },
    { label: "Cleaner", href: "#categories" },
    { label: "Shaving head Care", href: "#categories" },
  ];

  return (
    <footer id="footer" className="w-full bg-[#353535] text-[#CACACA] border-t border-white/10 overflow-hidden">
      {/* Main Footer Content */}
      <div className="py-16 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44">
        <div className="custom-container">
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 xl:gap-8 min-[2500px]:gap-14 min-[3800px]:gap-20 items-start">
            {/* Column 1: Brand Logo */}
            <div className="col-span-2 lg:col-span-3 flex items-start">
              <Link href="/syprin" className="inline-block">
                <img
                  src="/moto/syprin/logo.png"
                  alt="Original Syprin"
                  className="w-[170px] sm:w-[200px] xl:w-[250px] min-[2500px]:w-[360px] min-[3800px]:w-[480px] h-auto object-contain"
                />
              </Link>
            </div>

            {/* Column 2: Legal Information */}
            <div className="col-span-1 lg:col-span-2 flex flex-col gap-3 sm:gap-4 min-[3800px]:gap-6">
              <h3 className="footer-heading text-[#F6F6F6]">
                Legal Information
              </h3>
              <ul className="space-y-2.5 min-[3800px]:space-y-4">
                {legalLinks.map((link) => (
                  <li key={link.label} className="footer-body text-[#CACACA]">
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Categories */}
            <div className="col-span-1 lg:col-span-2 flex flex-col gap-3 sm:gap-4 min-[3800px]:gap-6">
              <h3 className="footer-heading text-[#F6F6F6]">
                Categories
              </h3>
              <ul className="space-y-2.5 min-[3800px]:space-y-4">
                {categoryLinks.map((link) => (
                  <li key={link.label} className="footer-body text-[#CACACA]">
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Information */}
            <div className="col-span-2 sm:col-span-1 lg:col-span-2 flex flex-col gap-3 sm:gap-4 min-[3800px]:gap-6">
              <h3 className="footer-heading text-[#F6F6F6]">
                Contact
              </h3>
              <ul className="space-y-3.5 sm:space-y-4 min-[3800px]:space-y-6 footer-body text-[#CACACA]">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 text-[#F6F6F6] mt-0.5 shrink-0" />
                  <span className="leading-relaxed">
                    OS Motorsystem GmbH &amp; Co. KG Blumenweg 20 a, 09224 Chemnitz
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 text-[#F6F6F6] shrink-0" />
                  <a
                    href="tel:+490371337158"
                    className="hover:text-white transition-colors"
                  >
                    +49 [0] 371 337158
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 text-[#F6F6F6] shrink-0" />
                  <a
                    href="mailto:info@syprin.de"
                    className="hover:text-white transition-colors"
                  >
                    info@syprin.de
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 text-[#F6F6F6] shrink-0" />
                  <a
                    href="https://www.syprin.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    www.syprin.de
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5: Newsletter Subscription */}
            <div className="col-span-2 sm:col-span-2 lg:col-span-3 flex flex-col gap-3 sm:gap-4 min-[3800px]:gap-6">
              <h3 className="footer-heading text-[#F6F6F6]">
                Subscribe for more Information
              </h3>
              <p className="footer-body text-[#CACACA] leading-relaxed">
                Get the latest SYPRIN news, updates, and automotive insights.
              </p>

              <form onSubmit={handleSubscribe} className="w-full max-w-full sm:max-w-[360px] min-[2500px]:max-w-[500px] min-[3800px]:max-w-[650px] mt-1">
                <div className="flex items-center bg-white rounded-[6px] min-[3800px]:rounded-[12px] overflow-hidden p-1 shadow-sm">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address..."
                    required
                    className="w-full bg-transparent px-3 py-2 sm:py-2.5 min-[2500px]:py-4 min-[3800px]:py-5 footer-body text-[#4B5563] placeholder:text-[#4B5563]/50 outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] min-[2500px]:w-[65px] min-[2500px]:h-[65px] min-[3800px]:w-[85px] min-[3800px]:h-[85px] bg-[#A12624] hover:bg-[#881e1c] rounded-[4px] min-[3800px]:rounded-[8px] flex items-center justify-center text-white shrink-0 transition-colors cursor-pointer"
                  >
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10" strokeWidth={2.2} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Divider Line like Figma */}
      <div className="custom-container">
        <div className="w-full border-t border-[#C3C3C3]" />
      </div>

      {/* Sub-Footer Copyright Bar */}
      <div className="w-full bg-[#353535] py-6 min-[2500px]:py-8 min-[3800px]:py-10">
        <div className="custom-container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 footer-body text-[#CACACA]">
            <p>© Original Syprin 2026 - All rights reserved!</p>
            <p>
              Designed &amp; Developed by{" "}
              <a
                href="https://delta4.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white transition-colors"
              >
                Delta 4 Software Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
