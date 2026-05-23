"use client";

import { useEffect, useState } from "react";
import { Globe, Search } from "lucide-react";

export default function SharkTopbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full bg-[#1f1a1c] transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-380 px-4 sm:px-6 mx-auto text-white h-12 flex items-center justify-between  text-[16px] tracking-wide">
      <p className="font-medium">Welcome Guest!</p>

      <div className="flex items-center gap-4">
        <Globe size={24} strokeWidth={1.7} className="cursor-pointer"/>

        <Search size={24} strokeWidth={1.7} className="cursor-pointer"/>

        <div className="h-4 w-[1px] bg-white/30" />

        <button className="font-medium cursor-pointer">Sign In</button>
      </div>
      </div>
    </div>
  );
}