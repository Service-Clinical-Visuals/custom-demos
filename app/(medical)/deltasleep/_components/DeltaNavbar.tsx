"use client";

export default function DeltaNavbar() {
  return (
    <header className="relative w-full z-50 bg-[#dfe7e3]">
      <div className="px-12 pt-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/delta/delta-logo.png"
            alt="DeltaSleep Logo"
            className="w-[180px] h-auto object-contain"
          />
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[15px]">
          <a
            href="#"
            className="font-semibold text-[#00695f] hover:text-[#00544c] transition-colors"
          >
            Home
          </a>

          <a
            href="#"
            className="text-[#4a4a4a] hover:text-black font-semibold transition-colors"
          >
            Our Company
          </a>

          <a
            href="#"
            className="text-[#4a4a4a] hover:text-black font-semibold transition-colors"
          >
            Products
          </a>

          <button className="bg-[#00695f] cursor-pointer text-white px-6 py-3 rounded-[8px] font-semibold hover:bg-[#00544c] hover:scale-[1.03] transition-all duration-300">
            Let’s Talk
          </button>
        </nav>
      </div>
    </header>
  );
}