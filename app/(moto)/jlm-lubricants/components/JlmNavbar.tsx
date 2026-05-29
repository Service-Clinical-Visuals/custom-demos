"use client";

import { Mail, Phone, Search, User } from "lucide-react";
import { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";

export default function JlmNavbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Yellow Strip */}
      <div className="fixed top-0 left-0 z-50 h-[36px] w-full bg-[#F4B400]">
        <div className="mx-auto flex h-full max-w-[1600px] px-6 justify-between items-center">
          <div className="flex gap-6">
            <div className="flex gap-3 items-center border-r border-white pr-6">
              <Phone size={20} className="text-white cursor-pointer" />
              <span className="text-[16px] leading-none text-white">
                +31(0)20 2014995
              </span>
            </div>
            <div className="flex gap-3 items-center ">
              <Mail size={20} className="text-white cursor-pointer" />
              <span className="text-[16px] leading-none text-white">
                info@jlmlubricants.com
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="border-r border-white pr-2 flex items-center">
              <User size={20} className="text-white cursor-pointer" />
            </span>
            <Search size={20} className="text-white cursor-pointer" />
          </div>
        </div>
      </div>

      <header
        className={`
          fixed left-0 top-[36px]
          z-50 w-full bg-black
          transition-all duration-500
          ${
            visible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }
        `}
      >
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/jlm/jlm-icon.png"
              alt="JLM"
              className="w-[150px]"
            />
          </div>

          {/* Menu */}
          <nav className="flex items-center gap-10">
            <a className="text-base font-semibold text-[#F4B400] hover:text-white hover:cursor-pointer">Home</a>
            <a className="text-base text-white hover:cursor-pointer hover:text-white/80">Shop</a>
            <a className="text-base text-white hover:cursor-pointer hover:text-white/80">Problem Solver</a>
            <a className="text-base text-white hover:cursor-pointer hover:text-white/80">World of JLM</a>
            <a className="text-base text-white hover:cursor-pointer hover:text-white/80">Store Locator</a>
          </nav>

          {/* User */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[12px] text-gray-400">Welcome,</p>
              <p className="text-white">John Doe</p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white">
              <svg
                className="h-7 w-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth={2}
                  d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5z"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}