// components/Navbar.tsx
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-200 fixed top-0 z-50">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 py-1">
        
        {/* Logo */}
        <div className="">
        <img src="/vectracor/VectraCor.png" className="w-60 h-20 object-contain" />
        </div>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-md font-medium text-gray-700">
          {[
            "Home",
            "About Us",
            "Products",
            "Veterinary Products",
            "Software",
            "Customer Care",
            "Contact Us",
            "Clinical Research",
            "OEM",
            "Connect to a Technician",
          ].map((item, i) => (
            <a
              key={i}
              href="#"
              className="hover:text-blue-600 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Search */}
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25477F] text-white hover:bg-[#102b57] transition shadow-[0px_4px_12px_rgba(0,0,0,0.40)] border-2 border-[#B5D2FF] hover:border-[#102b57]">
          <Search size={16} />
        </button>
      </div>
    </header>
  );
}