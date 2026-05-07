"use client";

import Link from "next/link";
import { MoveRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Button from "./Button";

const navLinks = [
  { name: "Home", href: "/strena-medical" },
  { name: "Company", href: "#" },
  { name: "About us", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling down 100px (or enough to pass hero)
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white shadow-sm transition-all duration-500 z-50 ${
        show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 lg:h-20 px-4 lg:px-8">
        {/* Logo */}
        <Link href="/strena-medical" className="flex items-center gap-2">
           <img
            src="/strena/images/strena-logo.png"
            alt="Strena Medical Logo"
            className="h-10 lg:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-[#333333] text-[16px] font-medium">
          {navLinks.map((link) => {
            const isActive = link.name === "Home";
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-5 py-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[#00427C] text-white"
                    : "hover:text-[#00427C]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side Button (Desktop) */}
        <div className="hidden lg:block">
          <Button variant="outline-primary" size="md" hasArrow rounded="lg">
            Get in Touch
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="lg:hidden p-2 text-[#00427C]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${
        isOpen ? "max-h-[500px] opacity-100 shadow-xl" : "max-h-0 opacity-0"
      }`}>
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#333333] text-[18px] font-medium hover:text-[#00427C] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100">
            <Button variant="primary" fullWidth hasArrow size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
