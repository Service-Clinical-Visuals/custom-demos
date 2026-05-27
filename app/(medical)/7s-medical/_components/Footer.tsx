"use client";

import Link from "next/link";

const productLinks = [
  { name: "Osteosynthesis Systems", href: "#osteosynthesis" },
  { name: "Arthroplasty", href: "#arthroplasty" },
  { name: "Surgical Instruments", href: "#instruments" },
  { name: "Custom Solutions", href: "#custom" },
];

const companyLinks = [
  { name: "About Us", href: "#about" },
  { name: "Our Team", href: "#team" },
  { name: "Careers", href: "#careers" },
  { name: "Global Partners", href: "#partners" },
];

const supportLinks = [
  { name: "Education & Events", href: "#education" },
  { name: "Contact Support", href: "#contact" },
  { name: "Resource Center", href: "#resources" },
  { name: "Quality Standards", href: "#quality" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-gray-400 border-t border-white/5">
      {/* Tailwind standard container - no max-width hardcoded */}
      <div className="container mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Logo & About Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="#top" className="flex items-center gap-3">
              <div className="flex flex-col items-start leading-none">
                <div className="flex items-center gap-1.5">
                  <span className="text-[25px] font-semibold tracking-tight text-white">
                    7s<span className="font-light text-gray-400">medical</span>
                  </span>
                  {/* Clean SVG Logo matching the branding */}
                  <div className="flex items-center ml-0.5">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 8H35L22 36H15L25 14H10V8Z" fill="#C10230" />
                      <path d="M32 14L28 22.5C31.5 24 33.5 27 33.5 31C33.5 37 28.5 40 21 40C15 40 11.5 37 9.5 34.5L14 30.5C15.5 32 18 34.5 21 34.5C25.5 34.5 27.5 32.5 27.5 31C27.5 29 25 27.5 21.5 26L23 23C27 21 28 17.5 28 15.5C28 14.5 27.8 13.5 27.5 12.5L32 14Z" fill="#9CA3AF" />
                    </svg>
                  </div>
                </div>
                <span className="text-[8.5px] uppercase tracking-[0.18em] text-gray-500 font-semibold mt-1">
                  Swiss Experts in Orthopedics
                </span>
              </div>
            </Link>
            
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm mt-2">
              7S Medical International AG is a premier Swiss medtech company based in Oberkirch. We distribute highly engineered surgical instruments and implants globally.
            </p>
            
            {/* Swiss Quality badge */}
            <div className="flex items-center gap-2 mt-2">
              <div className="w-5 h-5 bg-[#C10230] rounded-sm flex items-center justify-center text-[10px] font-bold text-white leading-none">
                +
              </div>
              <span className="text-xs uppercase font-bold text-white tracking-widest">
                Swiss Quality Engineered
              </span>
            </div>
          </div>

          {/* Products Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest border-b border-white/5 pb-2">
              Products
            </h4>
            <ul className="flex flex-col gap-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-gray-400 hover:text-[#C10230] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest border-b border-white/5 pb-2">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-gray-400 hover:text-[#C10230] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support/Resources Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest border-b border-white/5 pb-2">
              Resources
            </h4>
            <ul className="flex flex-col gap-2.5">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-gray-400 hover:text-[#C10230] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest border-b border-white/5 pb-2">
              Newsletter
            </h4>
            <p className="text-[13px] leading-relaxed text-gray-400">
              Receive the latest orthopedic innovation updates.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#1A1A1A] text-white text-xs px-3.5 h-[40px] rounded-[3px] border border-white/5 focus:border-[#C10230] outline-none transition-colors placeholder-gray-600"
              />
              <button className="w-full bg-[#C10230] hover:bg-[#9B0124] text-white text-xs font-semibold uppercase tracking-wider h-[40px] rounded-[3px] transition-colors">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Terms */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} 7S Medical International AG. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <Link href="#privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="#cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
