"use client"

import { useEffect, useState } from "react"
import { Search, Globe, Phone } from "lucide-react"

export default function InspirationNavbar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bg-[#f2f2f2] mx-auto max-w-380 top-0 left-0 w-full z-50 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className=" h-[64px] flex items-center justify-between px-10">
        
        {/* Left */}
        <div className="flex items-center gap-3">
          <img src="/inspiration-healthcare/assets/inspiration-logo.png" alt="Inspiration Healthcare Logo" className="h-8" />
        </div>

        {/* Center */}
        <div className="hidden md:flex gap-8 text-sm text-gray-700">
          <span className="font-medium text-black">Home</span>
          <span>Company</span>
          <span>Products</span>
          <span>News</span>
          <span>Contact us</span>
          <span>Anesthesia Machines n2</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <span className="text-sm">EN</span>
          <Globe size={18} />
          <Phone size={18} />

          <div className="flex items-center bg-black text-white rounded-full px-4 py-1 gap-2">
            <span className="text-sm">Search</span>
            <Search size={14} />
          </div>
        </div>
      </div> 
    </div>
  )
}