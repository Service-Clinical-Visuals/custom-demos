"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menu = [
    "Home",
    "Applications",
    "Products",
    "Support",
    "Resources",
    "News & Events",
    "About Us",
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        <div className="max-w-[80%] mx-auto px-6">
          <div className="h-[72px] flex items-center justify-between">

            {/* Logo */}
            <Link href="/">
              <img
                src="/accu-scope/accuscope-logo.png"
                alt="ACCU-SCOPE"
                className="h-[33px] w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-8">
              {menu.map((item, index) => (
                <Link
                  key={item}
                  href="#"
                  className={`font-bold text-[16px] transition-colors headerlinks
                    ${index === 0
                      ? "text-[#00A99D] underline decoration-[#00A99D]"
                      : "text-[#3d3d3d] hover:text-[#00A99D] hover:underline hover:decoration-[#00A99D]"
                    }`}
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                className="
                  w-12 h-12
                  rounded-full
                  bg-[#005FA3]
                  flex items-center justify-center
                  text-white
                  hover:scale-105
                  transition-all
                "
              >
                <Search size={20} />
              </button>

              <button
                className="
                  hidden sm:flex
                  h-12
                  px-8
                  rounded-full
                  bg-[#005FA3]
                  text-white
                  items-center gap-3
                  font-semibold
                  hover:scale-105
                  transition-all
                "
              >
                Contact Us
                <ArrowRight size={18} />
              </button>

              {/* Hamburger — mobile/tablet only */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="
                  xl:hidden
                  w-12 h-12
                  rounded-full
                  flex items-center justify-center
                  text-[#005FA3]
                  border-2 border-[#005FA3]
                  hover:bg-[#005FA3] hover:text-white
                  transition-all
                "
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`
          fixed inset-0 z-40 xl:hidden
          transition-opacity duration-300
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={`
            absolute top-0 right-0 h-full w-72 bg-white shadow-xl
            flex flex-col pt-[88px] pb-8 px-6
            transition-transform duration-300
            ${mobileOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <nav className="flex flex-col gap-1">
            {menu.map((item, index) => (
              <Link
                key={item}
                href="#"
                onClick={() => setMobileOpen(false)}
                className={`
                  font-bold text-[16px] py-3 px-4 rounded-lg transition-colors
                  ${index === 0
                    ? "text-[#00A99D] bg-[#00A99D]/10"
                    : "text-[#3d3d3d] hover:text-[#00A99D] hover:bg-[#00A99D]/10"
                  }
                `}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Contact Us — visible in drawer on mobile */}
          <div className="mt-auto sm:hidden">
            <button
              className="
                w-full h-12
                rounded-full
                bg-[#005FA3]
                text-white
                flex items-center justify-center gap-3
                font-semibold
                hover:scale-105
                transition-all
              "
            >
              Contact Us
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
