"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Globe, Search, Instagram } from "lucide-react";

const legalLinks = [
  "legal notice",
  "Shipping Methods",
  "Privacy Policy",
  "Payment Method",
  "Terms & Conditions",
  "Cancel the Contract",
  "Cancellation Policy",
];

const categoryLinks = ["Oil", "Gasoline", "Bike Line", "Lead Substitute", "Diesel", "Cleaner", "Shaving head Care"];

const socialIconClass = "w-[22px] h-[22px] min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12";
const contactIconClass = "w-[18px] h-[18px] min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 text-[#F6F6F6] shrink-0";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={socialIconClass} aria-hidden="true">
    <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.5v-6.9h2.3l.35-2.7H14.5V9.7c0-.78.22-1.31 1.34-1.31h1.43V5.98a19 19 0 0 0-2.09-.11c-2.07 0-3.49 1.26-3.49 3.58v2h-2.34v2.7h2.34V21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={socialIconClass} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" className={socialIconClass} aria-hidden="true">
    <circle cx="12" cy="12" r="10.5" fill="currentColor" />
    <path d="M10.6 7.2h2.1a2.9 2.9 0 0 1 0 5.8h-2.1M11.2 8.6 9.4 18.6" fill="none" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const socials = [
  { label: "Facebook", href: "#", icon: <FacebookIcon /> },
  { label: "X", href: "#", icon: <XIcon /> },
  { label: "Instagram", href: "#", icon: <Instagram className={socialIconClass} strokeWidth={2} /> },
  { label: "Pinterest", href: "#", icon: <PinterestIcon /> },
];

// Shared footer for the Syprin shop pages (/syprin/products, /syprin/product-details)
export default function ShopFooter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert("Thank you for subscribing!");
      setEmail("");
    }
  };

  return (
    <footer
      id="footer"
      className="relative w-full bg-[#262626] bg-[url('/moto/syprin-allproducts/footerbg.webp')] bg-cover bg-bottom bg-no-repeat text-[#CACACA] overflow-hidden"
    >
      {/* Main Footer Content */}
      <div className="pt-12 pb-12 md:pt-16 md:pb-14 xl:pt-[72px] xl:pb-16 min-[2500px]:py-28 min-[3800px]:py-40">
        <div className="custom-container">
          <div className="grid grid-cols-2 md:grid-cols-6 desk:grid-cols-[1.35fr_1fr_0.85fr_1.25fr_1.35fr] gap-x-6 gap-y-10 desk:gap-x-8 xl:gap-x-10 min-[2500px]:gap-x-16 min-[3800px]:gap-x-24">
            {/* Column 1: Logo + Social */}
            <div className="col-span-2 md:col-span-6 desk:col-span-1 flex flex-col gap-6 desk:gap-8 min-[2500px]:gap-12">
              <Link href="/syprin" className="inline-block w-fit">
                <img
                  src="/moto/syprin-allproducts/logo.webp"
                  alt="Original Syprin"
                  className="w-[150px] sm:w-[170px] xl:w-[190px] min-[2500px]:w-[300px] min-[3800px]:w-[400px] h-auto object-contain"
                />
              </Link>
              <div className="flex flex-col gap-4 min-[2500px]:gap-6">
                <h3 className="footer-heading text-[#F6F6F6]">Follow Us :</h3>
                <ul className="flex items-center gap-4 min-[2500px]:gap-7">
                  {socials.map((social) => (
                    <li key={social.label} className="flex">
                      <a href={social.href} aria-label={social.label} className="text-[#F6F6F6] hover:text-accent transition-colors">
                        {social.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 2: Legal Information */}
            <div className="col-span-1 md:col-span-2 desk:col-span-1 flex flex-col gap-4 min-[2500px]:gap-6">
              <h3 className="footer-heading text-[#F6F6F6]">legal Information</h3>
              <ul className="flex flex-col gap-1.5 min-[2500px]:gap-3">
                {legalLinks.map((label) => (
                  <li key={label} className="footer-body">
                    <Link href="#" className="hover:text-white transition-colors duration-150">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Categories */}
            <div className="col-span-1 md:col-span-2 desk:col-span-1 flex flex-col gap-4 min-[2500px]:gap-6">
              <h3 className="footer-heading text-[#F6F6F6]">Categories</h3>
              <ul className="flex flex-col gap-1.5 min-[2500px]:gap-3">
                {categoryLinks.map((label) => (
                  <li key={label} className="footer-body">
                    <Link href="/syprin/products" className="hover:text-white transition-colors duration-150">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="col-span-2 md:col-span-2 desk:col-span-1 flex flex-col gap-4 min-[2500px]:gap-6">
              <h3 className="footer-heading text-[#F6F6F6]">Contact</h3>
              <ul className="flex flex-col gap-3.5 min-[2500px]:gap-6">
                <li className="footer-body flex items-start gap-3 min-[2500px]:gap-5">
                  <MapPin className={`${contactIconClass} mt-0.5`} fill="currentColor" stroke="#262626" strokeWidth={2.5} />
                  <span className="footer-body">OS Motorsystem GmbH &amp; Co. KG Blumenweg 20 a, 09224 Chemnitz</span>
                </li>
                <li className="footer-body flex items-center gap-3 min-[2500px]:gap-5">
                  <Phone className={contactIconClass} fill="currentColor" strokeWidth={0} />
                  <a href="tel:+49371337158" className="hover:text-white transition-colors">+49 (0) 371 337158</a>
                </li>
                <li className="footer-body flex items-center gap-3 min-[2500px]:gap-5">
                  <Mail className={contactIconClass} fill="currentColor" stroke="#262626" strokeWidth={1.5} />
                  <a href="mailto:info@syprin.de" className="hover:text-white transition-colors">info@syprin.de</a>
                </li>
                <li className="footer-body flex items-center gap-3 min-[2500px]:gap-5">
                  <Globe className={contactIconClass} strokeWidth={2} />
                  <a href="https://www.syprin.de" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.syprin.de</a>
                </li>
              </ul>
            </div>

            {/* Column 5: Newsletter */}
            <div className="col-span-2 md:col-span-6 desk:col-span-1 flex flex-col gap-4 min-[2500px]:gap-6">
              <h3 className="footer-heading text-[#F6F6F6]">Subscribe for more Information</h3>
              <p className="footer-body text-[#CACACA]">Get the latest SYPRIN news, updates, and automotive insights.</p>
              <form onSubmit={handleSubscribe} className="w-full max-w-[320px] min-[2500px]:max-w-[500px] min-[3800px]:max-w-[650px] mt-2">
                <div className="flex items-center bg-white rounded-[6px] min-[3800px]:rounded-[12px] overflow-hidden p-1 min-[2500px]:p-2">
                  <label htmlFor="footer-email" className="sr-only">Email address</label>
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address..."
                    required
                    className="footer-body w-full min-w-0 bg-transparent px-2.5 py-1 min-[2500px]:px-4 min-[2500px]:py-3 text-[#1F1F1F] placeholder:text-[#6B6B6B] outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="w-[30px] h-[30px] min-[2500px]:w-[54px] min-[2500px]:h-[54px] min-[3800px]:w-[72px] min-[3800px]:h-[72px] bg-accent hover:bg-accent-hover rounded-[4px] min-[3800px]:rounded-[8px] flex items-center justify-center text-white shrink-0 transition-colors cursor-pointer"
                  >
                    <Search className="w-4 h-4 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9" strokeWidth={2.5} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="relative w-full bg-[#0F0F0F] py-3.5 md:py-4 min-[2500px]:py-7 min-[3800px]:py-10">
        <div className="custom-container">
          <div className="footer-body flex flex-col sm:flex-row items-center justify-between gap-2 text-[#E5E5E5] text-center sm:text-left">
            <p className="footer-body">© Original Syprin 2026 - All rights reserved!</p>
            <p className="footer-body">
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
