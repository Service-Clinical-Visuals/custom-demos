"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { headerContent } from "../data/content";
import { HeaderData } from "../types";

interface NavbarProps {
  data?: HeaderData;
}

export default function Navbar({ data = headerContent }: NavbarProps) {
  const [showHeader, setShowHeader] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-500 ease-in-out ${showHeader
        ? "translate-y-0 opacity-100"
        : "-translate-y-full opacity-0 pointer-events-none"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="#home"
              className="relative block h-10 w-32 md:h-12 md:w-36"
            >
              <Image
                src={data.logoUrl}
                alt={data.logoAlt}
                fill
                priority
                className="object-contain object-left"
                unoptimized
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1 xl:space-x-4">
            {data.links.map((link) => {
              const isActive = link.label === "Home";

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 text-sm xl:text-base font-bold transition-colors duration-200 ${isActive
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              href={data.buttonHref}
              className="btn-primary"
            >
              <span className="btn-primary-text">
                {data.buttonText}
              </span>
              <span className="btn-primary-icon">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-primary hover:bg-gray-50 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
              style={{ minWidth: "44px", minHeight: "44px" }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white border-t border-gray-100 ${isMobileMenuOpen
          ? "max-h-[500px] border-b"
          : "max-h-0 pointer-events-none"
          }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
          {data.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              style={{ minHeight: "44px" }}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-4 px-3">
            <Link
              href={data.buttonHref}
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary w-full justify-between"
            >
              <span className="btn-primary-text flex-1 text-center justify-center">
                {data.buttonText}
              </span>
              <span className="btn-primary-icon flex-shrink-0">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header >
  );
}