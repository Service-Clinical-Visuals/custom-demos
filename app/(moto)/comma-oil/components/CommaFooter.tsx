"use client";

import { Phone, Mail } from "lucide-react";

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const quickLinks = ["Home", "Products", "About Us", "Workshops", "News"];
const legalLinks = ["Website Terms and Conditions", "Privacy Policy", "Environmental Statement", "MyComma Terms"];
const policyLinks = ["Safety Data Sheets", "Quality Policy", "Anti-Slavery Policy"];

export default function CommaFooter() {
  return (
    <footer className="relative bg-[#1B1212] overflow-hidden"> 
      <div className="relative z-10 mx-auto max-w-[90%]! mt-0 pb-6">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1.4fr_1.2fr_1.2fr]">

          {/* Brand */}
          <div data-aos="fade-up">
            {/* Logo placeholder */}
            <div className="flex items-center gap-2">

            <img
              className="max-w-[280px]"
              src="/comma/comma_logo2.png"
            />
            </div>

            <p className="mt-5 text-[16px] leading-7 text-white">
              When your products is at the heart of what you do, you rely on them to be up to the task. All our products adhere to 100 core tests so are as carefully engineered to ensure quality and safety.
            </p>


          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="80">
            <h4 className="text-[32px]! font-normal tracking-wider text-white">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-[16px] text-white transition hover:text-[#FF4A43]">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div data-aos="fade-up" data-aos-delay="160">
            <h4 className="text-[32px]! font-normal tracking-wider text-white">Contact</h4>
            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-2">
                <Phone size={14} className="mt-0.5 shrink-0 text-[white]" />
                <span className="text-[16px] text-white">+44 (0) 1474 564 311</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={14} className="mt-0.5 shrink-0 text-[transparent]" />
                <span className="text-[16px] text-white">+44 (0) 1474 564 322</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={14} className="mt-0.5 shrink-0 text-[white]" />
                <span className="text-[16px] text-white">Millers Lubricants Limited,<br />Dening Way, Gravesend, Kent<br />DA12 2QZ, UK</span>
              </div>
            </div>
          </div>

          {/* Legal & Privacy */}
          <div data-aos="fade-up" data-aos-delay="240">
            <h4 className="text-[32px]! font-normal tracking-wider text-white">Legal &amp; Privacy</h4>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-[16px] text-white transition hover:text-[#FF4A43]">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Standards */}
          <div data-aos="fade-up" data-aos-delay="320">
            <h4 className="text-[32px]! font-normal tracking-wider text-white">Policies &amp; Standards</h4>
            <ul className="mt-5 space-y-3">
              {policyLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-[16px] text-white transition hover:text-[#FF4A43]">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>


      </div>

      {/* Watermark */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex justify-center overflow-hidden z-19 mb-4">
        <span
          className="select-none whitespace-nowrap text-[160px] font-black leading-none tracking-[0.15em] text-white/50 "
          style={{ letterSpacing: "0.2em" }}
        >
          COMMA
        </span>
      </div>

      {/* Bottom bar */}
      <div className="relative max-w-[100%]! mt-24 z-20 border-t border-[#FFFFFF] bg-[#1B1212] w-full h-20 items-center flex justify-between">
        <div className="w-[90%] left-[5%] relative flex justify-between">
          <>
            <span className="text-[20px] font1 font-bold text-white">
              Copyright © 2026 Comma Oil.
            </span>
          </>
          <div className="flex items-center gap-5">
            {/* {socialLinks.map(({ label, href, icon }) => (
              <a key={label} href={href} aria-label={label} className="text-white hover:text-white transition-colors">
                {icon}
              </a>
            ))} */}
            <img 
              src="/comma/socialmedia.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
