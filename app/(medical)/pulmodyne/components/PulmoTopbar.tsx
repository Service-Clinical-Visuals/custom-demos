"use client";

import { useEffect } from "react";
import {
  Mail,
  Phone,
  Search,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PulmoTopbar() {


  return (
    <section className="relative hidden lg:block overflow-hidden bg-[#0068A8]">
      {/* ================================================= */}
      {/* SUBTLE DEPTH */}
      {/* ================================================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%)]" />

      {/* ================================================= */}
      {/* CONTAINER */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto flex h-[52px] max-w-[1600px] items-center justify-between px-8 lg:px-16">
        {/* ================================================= */}
        {/* LEFT INFO */}
        {/* ================================================= */}

        <div
          data-aos="fade-right"
          className="flex items-center"
        >
          {/* EMAIL */}
          <div className="cursor-pointer flex h-[52px] items-center gap-3 border-r border-white/20 pr-8">
            {/* ICON */}
            <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white/10 text-white">
              <Mail size={14} strokeWidth={2.3} />
            </div>

            {/* TEXT */}
            <p className="text-[16px] font-medium tracking-[0.1px] text-white">
              info@pulmodyne.com
            </p>
          </div>

          {/* PHONE */}
          <div className="cursor-pointer flex h-[52px] items-center gap-3 pl-8">
            {/* ICON */}
            <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white/10 text-white">
              <Phone size={14} strokeWidth={2.3} />
            </div>

            {/* TEXT */}
            <p className="text-[16px] font-medium tracking-[0.1px] text-white">
              (317) 900–4093
            </p>
          </div>
        </div>

        {/* ================================================= */}
        {/* RIGHT NAV */}
        {/* ================================================= */}

        <div
          data-aos="fade-left"
          className="flex items-center"
        >
          {/* LINKS */}
          <div className="flex items-center">
            {/* LINK */}
            <button className="cursor-pointer flex h-[52px] items-center border-r border-white/20 px-7 text-[16px] font-medium text-white transition-all duration-300 hover:bg-white/10">
              Intersurgical
            </button>

            {/* LINK */}
            <button className="cursor-pointer flex h-[52px] items-center border-r border-white/20 px-7 text-[16px] font-medium text-white transition-all duration-300 hover:bg-white/10">
              Emsairway.com
            </button>
          </div>

          {/* SEARCH */}
          <button className="cursor-pointer ml-5 flex h-[38px] w-[38px] items-center justify-center rounded-[4px] bg-white text-[#0068A8] shadow-[0_6px_14px_rgba(255,255,255,0.12)] transition-all duration-300 hover:scale-[1.04] hover:bg-[#F3F3F3]">
            <Search size={18} strokeWidth={2.3} />
          </button>
        </div>
      </div>
    </section>
  );
}