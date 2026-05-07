"use client";

import { ArrowRight, ChevronDown, Earth, Globe, Menu, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", active: true },
  { label: "Company", dropdown: true },
  { label: "Products", dropdown: true },
  { label: "News", dropdown: true },
  { label: "IFU" },
  { label: "Career" },
  { label: "Service" },
  { label: "Contact" },
];

export default function InvidiaNavbar() {
  const [showNav, setShowNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowNav(true);
      } else {
        setShowNav(false);
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showNav ? "translate-y-0 bg-white shadow-md" : "-translate-y-full"
      }`}
    >
      <div className="max-w-380 mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-16 justify-between  w-full pr-20">
          {/* LOGO */}
          <Link href="/" className="relative flex items-center">
            <div className="flex flex-col leading-none">
             <Image src="/invidia/invidia-logo.svg" alt="Invidia Medical Logo" width={60} height={20} />
            </div>
          </Link>

          {/* NAVIGATION */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href="/"
                className={`group relative flex items-center gap-1 text-base font-medium transition-all duration-300 ${
                  item.active
                    ? "text-[#D3AB00]"
                    : "text-[#2B2B2B] hover:text-[#D3AB00]"
                }`}
              >
                {item.label}

                {item.dropdown && (
                  <ChevronDown
                    size={13}
                    strokeWidth={2.2}
                    className="mt-[1px]"
                  />
                )}

                <span
                  className={`absolute -bottom-[13px] left-0 h-[1.5px] bg-[#D3AB00] transition-all duration-300 ${
                    item.active
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 shrink-0">
          {/* GLOBE */}
          <button className="flex py-2.5 w-[40px] cursor-pointer items-center justify-center rounded-full bg-[#D3AB00] text-white transition-transform duration-300 hover:scale-105">
            <Globe size={18} strokeWidth={2.3} />
          </button>

          {/* ACCOUNT BUTTON */}
          <button className="flex items-center gap-4 rounded-full bg-[#D3AB00] px-7 py-2.5 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            <span>Access Account</span>
            <User size={18} strokeWidth={2.6} />
          </button>
        </div>
    </div>
    </header>
  );
}
