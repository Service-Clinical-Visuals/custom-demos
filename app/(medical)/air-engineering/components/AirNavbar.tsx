// app/page.tsx

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ChevronDown,
  Search,
  Menu,
  X,
} from "lucide-react";

export default function AirNavbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 120) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="w-full overflow-hidden bg-black text-white">
      {/* =========================================
          TOP NAVBAR
      ========================================== */}

      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          showNavbar
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        {/* BLACK TOP BAR */}
        <div className="w-full bg-black py-1.5">
          <div className="mx-auto flex h-[30px] max-w-[1600px] items-center justify-end px-6 xl:px-12">
            <nav className="hidden items-center gap-9 text-[16px] font-medium tracking-wide text-white lg:flex font-dm-sans">
              <button className="flex items-center gap-1 transition hover:text-neutral-300">
                Divisions
                <ChevronDown size={16} className="cursor-pointer" />
              </button>

              <button className="transition hover:text-neutral-300">
                Industry Solutions
              </button>

              <button className="transition hover:text-neutral-300">
                Store
              </button>

              <button className="transition hover:text-neutral-300">
                About
              </button>

              <button className="transition hover:text-neutral-300">
                Responsibility
              </button>

              <button className="transition hover:text-neutral-300">
                Contact Us
              </button>
            </nav>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="block lg:hidden"
            >
              {mobileMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* WHITE BAR */}
        <div className="border-b border-neutral-200 bg-white py-1.5">
          <div className="mx-auto flex h-[62px] max-w-[1600px] items-center justify-between px-6 xl:px-12">
            {/* LOGO */}
            <div className="flex items-center gap-5">
              <div className="relative h-[44px] w-[225px]">
                <Image
                  src="/ae/ae-logo.png"
                  alt="AEG Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* SEARCH */}
            <div className="hidden items-center md:flex">
              <div className="flex h-[40px] overflow-hidden">
                <input
                  type="text"
                  placeholder="Search for everything"
                  className="w-[310px] px-4 text-[16px] text-black outline-none bg-[#F1F1F1]"
                />

                <button className="cursor-pointer flex w-[92px] items-center justify-center bg-[#00A3D9] text-[16px] font-semibold text-white transition hover:bg-[#0090c0]">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="bg-black px-6 py-6 lg:hidden">
            <div className="flex flex-col gap-5 text-sm">
              <button>Divisions</button>
              <button>Industry Solutions</button>
              <button>Store</button>
              <button>About</button>
              <button>Responsibility</button>
              <button>Contact Us</button>
            </div>
          </div>
        )}
      </header>


    </main>
  );
}