"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";

export default function MedacureNavbar() {
  const [show, setShow] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 100) {
        setShow(true);
      } else {
        setShow(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        show ? "translate-y-0 bg-white shadow-md" : "-translate-y-full"
      }`}
    >
      <div className="max-w-380 mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="">
          <img src="/medacure/assets/medacure-logo2.png" alt="Medacure Logo" className="" />
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex gap-8 text-gray-700 font-medium">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Furniture</a>
          <a href="#">Contact</a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 cursor-pointer text-black" />
          <button className="bg-[#2E2662] cursor-pointer text-white px-5 py-2 rounded-full">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}