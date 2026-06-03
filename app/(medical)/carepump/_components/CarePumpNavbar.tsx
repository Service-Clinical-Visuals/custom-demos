"use client";

import Link from "next/link";
import { Globe2, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const topLinks = ["Home", "About Us", "Products", "Part Search"];
const bottomLinks = [
  "Devices",
  "Accessories",
  "Lymphatic Drainage",
  "Testimonials",
  "Support",
  "Contact",
];

export default function CarePumpNavbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Sticky only after half the viewport height (half the banner)
      setIsScrolled(window.scrollY > window.innerHeight / 2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full flex justify-center z-50 transition-all duration-300 ${isScrolled ? "sticky top-0 pt-0 px-0" : "relative pt-4 px-[2.5%]"}`}>
      <div className={`bg-[#004f70] shadow-lg transition-all duration-300 w-full flex justify-center ${isScrolled ? "rounded-none" : "rounded-2xl"}`}>
        <div className="w-full container mx-auto px-3 md:px-6 py-2 pb-3">
          <div className="flex justify-between items-center">
            <img
              src="/carepump/images/carepumpicon.png"
              alt="logo"
              width={150} height={150}
            />

            {/* Desktop */}
            <div className="hidden lg:flex flex-col text-white ml-auto items-end">
              <div className="flex items-center justify-end gap-8 text-sm border-b border-[#1b7695] pb-2 pl-40">
                {topLinks.map((item) => (
                  <Link key={item} href="#">
                    {item}
                  </Link>
                ))}

                <button
                  className="
                  flex
                  items-center
                  gap-2
                  bg-white
                  rounded-md
                  px-3
                  py-1.5
                  hover:bg-gray-50
                  transition-all
                "
                >
                  <span className="text-sm text-gray-500">
                    Search...
                  </span>
                  <img
                    src="/carepump/images/globe.png"
                    alt="Globe"
                    className="w-4 h-4"
                  />


                </button>
              </div>

              <div className="flex gap-6 pt-2 text-sm">
                {bottomLinks.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="flex items-center gap-1 hover:text-cyan-300"
                  >
                    {item}
                    {(item === "Devices" || item === "Support") && (
                      <ChevronDown size={14} />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="lg:hidden mt-4 text-white flex flex-col gap-3">
              {[...topLinks, ...bottomLinks].map((item) => (
                <Link key={item} href="#">
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}