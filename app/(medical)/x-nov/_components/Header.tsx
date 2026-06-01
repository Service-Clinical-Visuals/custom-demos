"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "Company",
    "Products",
    "Quality",
    "Patients",
  ];

  return (
    <header 
      className={`fixed top-0 left-0 z-50 w-full bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="h-[80px] flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/">
            <img
              src="/x-nov/x-nov_logo.png"
              alt="X-NOV"
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-14">
            {navItems.map((item, index) => (
              <Link
                key={item}
                href="#"
                className={`
                  text-[17px]
                  font-medium
                  transition-all
                  ${
                    index === 0
                      ? "text-[#EC4899] underline underline-offset-4 font-semibold"
                      : "text-gray-900 hover:text-[#EC4899]"
                  }
                `}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4 lg:gap-8 lg:hidden xl:flex">
            
            {/* Languages */}
            <div className="hidden lg:flex items-center gap-4 text-xl">
              🇩🇪 🇫🇷 🇬🇧
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <Button className="h-[52px]" arrowIcon="arrow">
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-[#212121] p-1 -mr-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden absolute top-[80px] left-0 w-full bg-white shadow-xl border-t border-gray-100 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-6">
          <nav className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <Link
                key={item}
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
                  text-[18px]
                  font-medium
                  pb-3
                  border-b border-gray-50
                  ${
                    index === 0
                      ? "text-[#EC4899] font-semibold"
                      : "text-gray-900 hover:text-[#EC4899]"
                  }
                `}
              >
                {item}
              </Link>
            ))}
          </nav>
          
          <div className="flex flex-col gap-4 pt-2">
            <div className="flex items-center gap-6 text-2xl">
              🇩🇪 🇫🇷 🇬🇧
            </div>
            <div className="mt-2">
              <Button fullWidth className="h-[52px] justify-center" arrowIcon="arrow">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}