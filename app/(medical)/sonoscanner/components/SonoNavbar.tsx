"use client";

import { useEffect, useState } from "react";
import { FiArrowRight, FiGlobe, FiMenu, FiX } from "react-icons/fi";

const navItems = [
  "Home",
  "Products",
  "Specialties",
  "Testimonials",
  "Latest News & Blog",
  "Ultrasound Workshops",
];

export default function SonoNavbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
        setMobileOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="w-full bg-[#f5f5f5] border-b border-[#e7e7e7]">
        <div className="max-w-[1600px] mx-auto h-[72px] px-6 lg:px-10 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center">
            <img src="/sono-scanner/sono-logo.png" alt="logo" className="h-auto max-h-[40px]" />
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden xl:flex items-center gap-10">
            {navItems.map((item, index) => (
              <a
                key={item}
                href="#"
                className={`text-[16px] font-medium transition-all duration-300 ${
                  index === 0 ? "text-[#163f86]" : "text-[#666] hover:text-[#163f86]"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex bg-[#123f88] hover:bg-[#0d326e] transition-all duration-300 text-white rounded-full h-[46px] px-6 lg:px-7 items-center gap-3 text-[13px] font-semibold shadow-sm">
              Request a Demo
              <FiArrowRight className="text-[15px]" />
            </button>

            <button className="w-[44px] h-[44px] rounded-full bg-[#123f88] text-white flex items-center justify-center">
              <FiGlobe className="text-[18px]" />
            </button>

            {/* HAMBURGER */}
            <button
              className="xl:hidden w-[44px] h-[44px] rounded-full bg-[#123f88] text-white flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <FiX className="text-[20px]" /> : <FiMenu className="text-[20px]" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`xl:hidden overflow-hidden transition-all duration-500 ${
            mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-6 pt-4 pb-6 flex flex-col gap-4 border-t border-[#e7e7e7]">
            {navItems.map((item, index) => (
              <a
                key={item}
                href="#"
                className={`text-[16px] font-medium transition-all duration-300 py-1 ${
                  index === 0 ? "text-[#163f86]" : "text-[#666] hover:text-[#163f86]"
                }`}
              >
                {item}
              </a>
            ))}
            <button className="sm:hidden mt-2 bg-[#123f88] text-white rounded-full h-[46px] px-6 flex items-center justify-center gap-3 text-[13px] font-semibold shadow-sm">
              Request a Demo
              <FiArrowRight className="text-[15px]" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}