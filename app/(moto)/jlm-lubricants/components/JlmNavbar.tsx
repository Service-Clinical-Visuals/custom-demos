"use client";

import { useEffect, useState } from "react";

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
      <div className="fixed top-0 left-0 z-50 h-[26px] w-full bg-[#F4B400]" />

      <header
        className={`
          fixed left-0 top-[26px]
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
            <div className="h-10 w-10 rounded-full border-4 border-white" />

            <div>
              <h3 className="text-4xl font-black text-white">JLM</h3>
              <p className="-mt-1 text-[9px] tracking-[2px] text-[#F4B400]">
                LIQUID TOOLS
              </p>
            </div>
          </div>

          {/* Menu */}
          <nav className="flex items-center gap-10">
            <a className="text-sm font-semibold text-[#F4B400]">Home</a>
            <a className="text-sm text-white">Shop</a>
            <a className="text-sm text-white">Problem Solver</a>
            <a className="text-sm text-white">World of JLM</a>
            <a className="text-sm text-white">Store Locator</a>
          </nav>

          {/* User */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[11px] text-gray-400">Welcome,</p>
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