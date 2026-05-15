"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdEmail } from "react-icons/md";
import { Phone } from "lucide-react";
import PulmoTopbar from "./PulmoTopbar";

const navLinks = ["Home", "Products", "About Us", "Contact Us"];

export default function PulmoNavbar() {
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
    <main className="">
      {/* ================================================= */}
      {/* FLOATING SCROLL NAVBAR */}
      {/* ================================================= */}

      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          showNavbar
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        {/* TOP BLUE BAR */}
        {/* <div className="h-[14px] w-full bg-[#0068A8]" /> */}

        {/* NAVBAR */}
        <div className="border-b border-black/5 bg-white/95 backdrop-blur-md">
        <PulmoTopbar/>
          <div className="mx-auto flex h-[86px] max-w-[1600px] items-center justify-between px-8 lg:px-16">
            {/* ================================================= */}
            {/* LOGO */}
            {/* ================================================= */}

            <div className="flex items-center gap-4">
                <img src="/pulmo/pulmo-logo.png" alt="logo"  className="w-52 h-auto"/>
            </div>

            {/* ================================================= */}
            {/* NAVIGATION */}
            {/* ================================================= */}

            <nav className="hidden items-center gap-12 lg:flex">
              {navLinks.map((item, index) => (
                <Link
                  key={item}
                  href="#"
                  className={`relative text-[16px] font-medium transition-all duration-300 ${
                    index === 0
                      ? "text-[#1f1f1f]"
                      : "text-[#555555] hover:text-[#0068A8]"
                  }`}
                >
                  {item}

                  {index === 0 && (
                    <span className="absolute -bottom-[10px] left-0 h-[2px] w-full bg-[#1f1f1f]" />
                  )}
                </Link>
              ))}
            </nav>

            {/* ================================================= */}
            {/* CTA */}
            {/* ================================================= */}

            <button className="cursor-pointer flex h-[48px] items-center justify-center rounded-[4px] bg-[#0068A8] px-8 text-[16px] font-semibold text-white shadow-[0_8px_20px_rgba(0,104,168,0.16)] transition-all duration-300 hover:bg-[#005A92]">
              Training Resources
            </button>
          </div>
        </div>
      </header>


    </main>
  );
}