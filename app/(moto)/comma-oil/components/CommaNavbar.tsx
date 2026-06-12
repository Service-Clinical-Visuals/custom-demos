"use client";

import { Search, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = ["Home", "Products", "About us", "Workshop", "News"];

export default function CommaNavbar() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setVisible(true);
      } else {
        setVisible(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      {/* ── TOP BAR ── diagonal white-left / dark-right split */}
      <div className="relative h-[52px] bg-[#181818] ">




        {/* Right-side info + LOGIN */}
        <div className="z-10 flex h-full items-center justify-between bg-[#181818] max-w-[90%]! mx-auto">
          <div className="hidden items-center gap-0 text-[20px] text-white sm:flex font1 font-normal! tracking-[0px]! leading-[100%]!">
            <img src="/comma/mail.png" /> <span className="pr-6 ml-2 ">support@gmail.com</span>
            <div className="h-4 w-px bg-white/25" />
            <img src="/comma/clock.png" /> <span className="pr-6 ml-2">Mon to Fri : 8:30 am to 5:30 pm</span>
          </div>
          <div className="flex items-center gap-1 border-l border-white/25 ">
            <div className="flex items-center gap-1 border-l border-white/25 px-6">
                <span className="text-base leading-none">
                  <img
                    width={"62px"}
                    height={"33px"}
                    src="/comma/globe.png"
                  />
                </span>
            </div>
            <button className="h-[52px] tracking-[0px]! leading-[100%]! cursor-pointer bg-[#FF4A43] px-8 text-[32px] font-normal uppercase tracking-widest text-white hover:bg-[#e53d37]">
              Login
            </button>
          </div>
        </div>

      </div>

      {/* ── NAV BAR ── */}
      <div className="h-[100px] border-b border-[#E8E8E8] bg-white">
        <div className="mx-auto flex h-full max-w-[90%]! items-center gap-6">
          {/* Logo — sits over the white panel */}
          <div className="flex h-full items-center">
            <img
              src="/comma/comma_logo.png"
              alt="COMMA"
              className="h-[50px] w-auto"
            />
          </div>

          {/* Nav links — centered flex */}
          <nav className="hidden flex-1 items-center justify-center gap-12 lg:flex tracking-[0px]! leading-[100%]! font1">
            {navLinks.map((link, i) => (
              <a
                key={link}
                href="#"
                className={`text-[28px] font1 font-normal tracking-wide transition-colors hover:text-[#FF4A43] ${
                  i === 0 ? "text-[#FF4A43]" : "text-[#333333]"
                }`}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Search */}
          <div className="hidden h-[38px] w-[320px] items-center gap-3 bg-[#F4F4F4] pl-4 lg:flex tracking-[0px]! leading-[100%]!">
            <input
              type="text"
              placeholder="Search for Products"
              className="flex-1 bg-transparent text-[24px] outline-none placeholder:text-[#333333A6] font1"
            />
            <img
              src="/comma/search.png"
              alt="search"
              className="h-[38px] w-auto"
            />
          </div>

          {/* Mobile hamburger */}
          <button
            className="ml-auto flex items-center justify-center text-[#1A1A1A] lg:hidden"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      <div
        className={`overflow-hidden bg-white border-b border-[#E8E8E8] transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-8 py-4 gap-1">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`border-b border-[#F0F0F0] py-3 text-[14px] font-bold last:border-0 ${
                i === 0 ? "text-[#FF4A43]" : "text-[#1A1A1A]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="mt-3 flex h-[40px] items-center gap-3 bg-[#F4F4F4] px-4">
            <input
              type="text"
              placeholder="Search for Products"
              className="flex-1 bg-transparent text-[13px] outline-none placeholder:text-[#AAAAAA]"
            />
            <Search size={16} className="text-[#FF4A43]" />
          </div>
        </nav>
      </div>
    </header>
  );
}
