"use client";

import { Search, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import ReactHealthButton from "./ReactHealthButton";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "Home",
    "About",
    "Sleep",
    "Oxygen",
    "Ventilation",
    "Resources",
  ];

  return (
    <header className={`w-full bg-white border-b border-gray-100 fixed top-0 z-50 transition-all duration-500 ease-in-out ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/react-health/logo.jpg"
              alt="React Health"
              className="object-contain w-[100px] md:w-[120px]"
            />
          </div>

          {/* Nav Links - Centered Absolutely on Desktop */}
          <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((item, i) => (
              <a
                key={i}
                href="#"
                className={`text-[15px] transition ${i === 0
                    ? "font-semibold underline text-react-purple"
                    : "text-gray-700 hover:text-react-purple"
                  }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <ReactHealthButton
                text="Service Portal"
                size="sm"
                icon={<Search size={16} strokeWidth={3} />}
              />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-react-text-dark hover:text-react-purple transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 top-20 bg-white z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col p-6 gap-6 h-[calc(100vh-80px)] overflow-y-auto">
            {navLinks.map((item, i) => (
              <a
                key={i}
                href="#"
                className="text-xl font-medium text-react-text-dark border-b border-gray-50 pb-4 hover:text-react-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-4">
              <p className="text-sm text-react-text-gray font-medium uppercase tracking-wider">Quick Access</p>
              <ReactHealthButton
                text="Service Portal"
                className="w-full"
                icon={<Search size={18} strokeWidth={3} />}
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}