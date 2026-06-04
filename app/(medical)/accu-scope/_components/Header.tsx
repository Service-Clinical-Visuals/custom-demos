"use client";

import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";

export default function Header() {
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
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="h-[72px] flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/">
            <img
              src="/logo.svg"
              alt="ACCU-SCOPE"
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden xl:flex items-center gap-10">
            {menu.map((item, index) => (
              <Link
                key={item}
                href="#"
                className={`font-medium text-[15px] transition-colors
                ${
                  index === 0
                    ? "text-[#00A99D]"
                    : "text-[#3d3d3d] hover:text-[#00A99D]"
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
                h-12
                px-8
                rounded-full
                bg-[#005FA3]
                text-white
                flex items-center gap-3
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
    </header>
  );
}