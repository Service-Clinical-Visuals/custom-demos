// components/Navbar.tsx

"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HrNavbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 120) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
        setMobileOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        showNavbar
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="border-b border-[#d9d9d9] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-[68px] max-w-380 items-center justify-between px-6 md:px-8 ">
          {/* LEFT */}
          <div className="flex items-center gap-16">
            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <Image
                src="/hr-healthcare/hr-logo.png"
                alt="Logo"
                width={150}
                height={100}
                className="w-[130px] md:w-[150px] xl:w-[180px]"
              />
            </Link>

            {/* NAV — desktop */}
            <nav className="hidden items-center gap-10 lg:flex">
              <Link
                href="#"
                className="text-base font-medium text-[#20242A] transition hover:text-[#0A4BB3]"
              >
                Home
              </Link>

              <Link
                href="#"
                className="text-base font-medium text-[#20242A] transition hover:text-[#0A4BB3]"
              >
                About Us
              </Link>

              <button className="flex items-center gap-[3px] text-base font-medium text-[#20242A] transition hover:text-[#0A4BB3]">
                Healthcare Professionals
                <ChevronDown size={13} strokeWidth={2.2} />
              </button>

              <button className="flex items-center gap-[3px] text-base font-medium text-[#20242A] transition hover:text-[#0A4BB3]">
                Patient & Caregivers
                <ChevronDown size={13} strokeWidth={2.2} />
              </button>

              <Link
                href="#"
                className="text-base font-medium text-[#20242A] transition hover:text-[#0A4BB3]"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* RIGHT — desktop search + mobile hamburger */}
          <div className="flex items-center gap-3">
            {/* SEARCH — desktop */}
            <div className="hidden items-center lg:flex">
              <div className="flex h-[32px] w-[220px] items-center overflow-hidden rounded-full bg-[#F1F1F1]">
                <input
                  type="text"
                  placeholder="Search for products"
                  className="h-full w-full bg-transparent px-4 text-base font-medium text-[#333] placeholder:text-[#9CA3AF] focus:outline-none"
                />
                <button className="cursor-pointer mr-[3px] flex h-[26px] w-[32px] items-center justify-center rounded-full bg-[#071C36] transition hover:scale-105">
                  <Search size={14} color="white" strokeWidth={2.4} />
                </button>
              </div>
            </div>

            {/* HAMBURGER — mobile & tablet */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-md text-[#20242A] transition hover:bg-[#F1F1F1] lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col border-t border-[#e5e7eb] px-6 py-4 gap-1">
            <Link
              href="#"
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-3 py-3 text-base font-medium text-[#20242A] transition hover:bg-[#F1F1F1] hover:text-[#0A4BB3]"
            >
              Home
            </Link>

            <Link
              href="#"
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-3 py-3 text-base font-medium text-[#20242A] transition hover:bg-[#F1F1F1] hover:text-[#0A4BB3]"
            >
              About Us
            </Link>

            <button className="flex items-center justify-between rounded-md px-3 py-3 text-base font-medium text-[#20242A] transition hover:bg-[#F1F1F1] hover:text-[#0A4BB3]">
              Healthcare Professionals
              <ChevronDown size={14} strokeWidth={2.2} />
            </button>

            <button className="flex items-center justify-between rounded-md px-3 py-3 text-base font-medium text-[#20242A] transition hover:bg-[#F1F1F1] hover:text-[#0A4BB3]">
              Patient & Caregivers
              <ChevronDown size={14} strokeWidth={2.2} />
            </button>

            <Link
              href="#"
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-3 py-3 text-base font-medium text-[#20242A] transition hover:bg-[#F1F1F1] hover:text-[#0A4BB3]"
            >
              Contact
            </Link>

            {/* SEARCH — mobile */}
            <div className="mt-3 flex h-[40px] items-center overflow-hidden rounded-full bg-[#F1F1F1]">
              <input
                type="text"
                placeholder="Search for products"
                className="h-full w-full bg-transparent px-4 text-base font-medium text-[#333] placeholder:text-[#9CA3AF] focus:outline-none"
              />
              <button className="cursor-pointer mr-[4px] flex h-[32px] w-[36px] items-center justify-center rounded-full bg-[#071C36] transition hover:scale-105">
                <Search size={14} color="white" strokeWidth={2.4} />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}