"use client";

import { Mail, Menu, Phone, Search, User, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function JlmNavbar() {
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

  const navLinks = [
    { label: "Home", active: true },
    { label: "Shop" },
    { label: "Problem Solver" },
    { label: "World of JLM" },
    { label: "Store Locator" },
  ];

  return (
    <>
      {/* Yellow Strip */}
      <div className="fixed top-0 left-0 z-50 h-[36px] w-full bg-[#F4B400]">
        <div className="mx-auto flex h-full max-w-[1600px] px-6 justify-between items-center">
          <div className="flex gap-6">
            <div className="hidden sm:flex gap-3 items-center border-r border-white pr-6">
              <Phone size={18} className="text-white cursor-pointer" />
              <span className="text-[14px] leading-none text-white">
                +31(0)20 2014995
              </span>
            </div>
            <div className="hidden sm:flex gap-3 items-center">
              <Mail size={18} className="text-white cursor-pointer" />
              <span className="text-[14px] leading-none text-white">
                info@jlmlubricants.com
              </span>
            </div>
            {/* Mobile: show just icons */}
            <div className="flex sm:hidden gap-3 items-center">
              <Phone size={18} className="text-white cursor-pointer" />
              <Mail size={18} className="text-white cursor-pointer" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="border-r border-white pr-2 flex items-center">
              <User size={18} className="text-white cursor-pointer" />
            </span>
            <Search size={18} className="text-white cursor-pointer" />
          </div>
        </div>
      </div>

      <header
        className={`
          fixed left-0 top-[36px]
          z-50 w-full bg-black
          transition-all duration-500
          ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/jlm/jlm-icon.png" alt="JLM" className="w-[130px]" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className={`text-base cursor-pointer ${
                  link.active
                    ? "font-semibold text-[#F4B400]"
                    : "text-white hover:text-white/80"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop User */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="text-right">
              <p className="text-[12px] text-gray-400">Welcome,</p>
              <p className="text-white">John Doe</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white">
              <svg
                className="h-7 w-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth={2}
                  d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5z"
                />
              </svg>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center text-white p-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden bg-black border-t border-white/10 overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className={`py-3 text-base border-b border-white/10 last:border-0 cursor-pointer ${
                  link.active
                    ? "font-semibold text-[#F4B400]"
                    : "text-white hover:text-white/80"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth={2}
                    d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[12px] text-gray-400">Welcome,</p>
                <p className="text-white text-sm">John Doe</p>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}