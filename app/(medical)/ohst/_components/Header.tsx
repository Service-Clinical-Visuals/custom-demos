"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const menu = [
    "Home",
    "Services",
    "Products",
    "Patients",
    "Use",
    "About OHST",
    "Career",
    "Contact",
  ];

  const [activeItem, setActiveItem] = useState("Home");

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1560px] 2xl:max-w-[80%] mx-auto px-6">
        <div className="h-[76px] flex items-center justify-between">
          
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2">
            <Image 
              src="/medical/ohst/ohst_logo.png" 
              alt="OHST Logo" 
              width={150} 
              height={45} 
              className="object-contain" 
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {menu.map((item) => (
              <Link
                key={item}
                href="#"
                onClick={() => setActiveItem(item)}
                className={`font-semibold text-[15px] transition-colors py-2 relative
                ${
                  activeItem === item
                    ? "text-[#099F94] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#099F94]"
                    : "text-[#333333] hover:text-[#099F94]"
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
                h-[44px]
                px-6
                rounded-full
                bg-[#099F94]
                text-white
                flex items-center gap-2
                font-semibold
                text-[15px]
                hover:bg-[#07877e]
                transition-all duration-300
                shadow-md hover:shadow-lg
              "
            >
              Get Support
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}