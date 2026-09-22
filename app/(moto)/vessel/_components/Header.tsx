"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

interface NavLink {
  name: string;
  id: string;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Products", id: "products" },
  { name: "News", id: "news" },
  { name: "Contact", id: "contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("about");

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveLink(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (id === "home" || id === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 flex flex-col ${isScrolled ? "shadow-md" : "shadow-sm"}`}
      >


        <div className="h-[60px] sm:h-[70px] lg:h-[76px] min-[2500px]:h-[130px] min-[3800px]:h-[180px] flex items-center relative z-10 border-b border-gray-100">
          <div className="custom-container flex items-center justify-between gap-4 xl:gap-6 min-[2500px]:gap-12 min-[3800px]:gap-16 w-full px-4 sm:px-6 lg:px-8 min-[2500px]:px-14 min-[3800px]:px-20">
            {/* Left: Logo Section */}
            <Link
              href="#about"
              onClick={(e) => handleScrollTo(e, "about")}
              className="flex items-center shrink-0"
              aria-label="Vessel Home"
            >
              <img
                src="/moto/vessel/logo.png"
                alt="Vessel Logo"
                className="h-7 sm:h-8 md:h-9 lg:h-10 min-[2500px]:h-16 min-[3800px]:h-22 w-auto object-contain"
              />
            </Link>

            {/* Middle: Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8 min-[2500px]:space-x-12 min-[3800px]:space-x-16 shrink-0">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`relative !navbar cursor-pointer py-2 transition-colors  ${isActive
                      ? "text-[#111827] font-bold"
                      : "text-[#374151] hover:text-[#B71C1C] font-medium"
                      }`}
                  >
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right: Actions */}
            <div className="hidden lg:flex items-center shrink-0 gap-3 xl:gap-4 min-[2500px]:gap-8 min-[3800px]:gap-12">
              <Button
                href="#bits-selector"
                text="BITS Selector"
                className="font-medium min-[2500px]:px-10 min-[2500px]:py-4 min-[3800px]:px-14 min-[3800px]:py-6 text-sm xl:text-[14px] min-[2500px]:text-2xl min-[3800px]:text-3xl"
              />
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className="xl:hidden text-[#111827] p-2 transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7 sm:w-8 sm:h-8 text-[#111827]" />
              ) : (
                <Menu className="w-7 h-7 sm:w-8 sm:h-8 text-[#111827]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-100px)] overflow-y-auto border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <div key={link.name} className="relative border-b border-gray-100 last:border-0 pb-3">
                  <a
                    href={`#${link.id}`}
                    className={`block py-2 text-base sm:text-lg transition-colors ${isActive
                      ? "text-[var(--color-primary)] font-bold"
                      : "text-gray-700 hover:text-[var(--color-primary)] font-medium"
                      }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    {link.name}
                  </a>
                </div>
              );
            })}

            {/* Mobile Actions */}
            <div className="pt-4 flex flex-col gap-3">
              <Button
                href="#bits-selector"
                onClick={() => setMobileMenuOpen(false)}
                text="BITS Selector"
                className="w-full font-medium py-3 text-base"
              />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
