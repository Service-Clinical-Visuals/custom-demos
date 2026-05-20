"use client";

import { useEffect, useState } from "react";
import { FiArrowRight, FiGlobe } from "react-icons/fi";

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        showNavbar
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="w-full bg-[#f5f5f5] border-b border-[#e7e7e7]">
        <div className="max-w-[1600px] mx-auto h-[72px] px-10 flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-14">
            {/* LOGO */}
            <div className="flex items-center gap-3">
                <img src="/sono-scanner/sono-logo.png" alt="logo" className="h-auto" />
              </div>
            </div>

            {/* MENU */}
            <nav className="hidden xl:flex items-center gap-10">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className={`text-[16px] font-medium transition-all duration-300 ${
                    index === 0
                      ? "text-[#163f86]"
                      : "text-[#666] hover:text-[#163f86]"
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>
                      {/* RIGHT */}
          <div className="flex items-center gap-5">
            <button className="bg-[#123f88] hover:bg-[#0d326e] transition-all duration-300 text-white rounded-full h-[44px] px-7 flex items-center gap-3 text-[13px] font-semibold shadow-sm">
              Request a Demo
              <FiArrowRight className="text-[15px]" />
            </button>

            <button className="w-[44px] h-[44px] rounded-full bg-[#123f88] text-white flex items-center justify-center">
              <FiGlobe className="text-[18px]" />
            </button>
          </div>
          </div>


        </div>
    </header>
  );
}