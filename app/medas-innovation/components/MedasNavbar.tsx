"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function MedasNavbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500  bg-white ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex items-center justify-between max-w-380 mx-auto py-4 ">
        {/* Logo */}
      <img src="/medas-innovation/assets/medas-logo.png" alt="logo" className="w-30 h-12"/>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-gray-700">
          <a href="#" className="font-semibold">Home</a>
          <a href="#" className="hover:text-gray-900">Products</a>
          <a href="#" className="hover:text-gray-900">Company</a>
          <a href="#" className="hover:text-gray-900">Services</a>
          <a href="#" className="hover:text-gray-900">News</a>
          <a href="#" className="hover:text-gray-900">Download</a>
        </div>

        {/* CTA */}
        <button className="bg-[#0287C3] text-white font-semibold px-6 py-2 rounded-md flex items-center gap-2 hover:bg-[#006AB1] transition">
          Contact <span><ArrowRight/></span>
        </button>
      </div>
    </div>
  );
}