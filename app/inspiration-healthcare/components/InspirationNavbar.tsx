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
      className={`fixed bg-[#FFFFFF]  top-0 left-0 w-full z-50 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto max-w-380 h-[64px] flex items-center justify-between px-4 py-10">
        
        {/* Left */}
        <div className="flex items-center gap-3">
          <img src="/inspiration-healthcare/assets/inspiration-logo.png" alt="Inspiration Healthcare Logo" className="h-10" />
        </div>

        {/* Center */}
        <div className="hidden md:flex gap-8 text-base text-gray-700">
          <span className="font-medium text-black">Home</span>
          <span className="cursor-pointer hover:text-gray-500">Company</span>
          <span className="cursor-pointer hover:text-gray-500">Products</span>
          <span className="cursor-pointer hover:text-gray-500">News</span>
          <span className="cursor-pointer hover:text-gray-500">Contact us</span>
          <span className="cursor-pointer hover:text-gray-500">Anesthesia Machines n2</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <span className="text-base text-black cursor-pointer hover:text-gray-500">EN</span>
          <Globe size={28} color="black" className="bg-gray-200 p-1 rounded-full cursor-pointer hover:bg-gray-300"/>
          <Phone size={28} color="black" className="bg-gray-200 p-1 rounded-full cursor-pointer hover:bg-gray-300"/>

          <div className="flex cursor-pointer items-center bg-black text-white rounded-full px-4 py-1 gap-2">
            <span className="text-base">Search</span>
            <Search size={14} />
          </div>
        </div>
      </div> 
    </div>
  )
}