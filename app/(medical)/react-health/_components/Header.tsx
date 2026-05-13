// components/Header.tsx

import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white">

      <div className="container mx-auto px-14 pt-4">

        {/* TOP ROW */}
        <div className="flex items-start justify-between">

          {/* Logo */}
          <div className="w-[220px]">
            <img
              src="/medical/react-health/logo.jpg"
              alt="React Health"
              className="w-full object-contain"
            />
          </div>

          {/* Right Section */}
          <div className="flex flex-col flex-1 ml-60">

            {/* Top Pills */}
            <div className="flex justify-end gap-6">

              {[
                "Our Products",
                "Service Portal",
                "React Health Connect",
              ].map((item, i) => (
                <button
                  key={i}
                  className="border border-purple-500 text-gray-700 rounded-full px-8 py-2 text-sm font-medium hover:bg-purple-600 hover:text-white transition"
                >
                  {item}
                </button>
              ))}

            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mt-5 py-4">

              <div className="flex items-center justify-between">

                {/* Nav Links */}
                <nav className="flex items-center gap-10 ">

                  {[
                    "Home",
                    "About",
                    "Sleep",
                    "Oxygen",
                    "Ventilation",
                    "Resources",
                  ].map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className={`text-[15px] transition  ${
                        i === 0
                          ? "font-semibold underline"
                          : "text-gray-700 hover:text-purple-600"
                      }`}
                    >
                      {item}
                    </a>
                  ))}

                </nav>

                {/* CTA */}
               {/* CTA */}
                {/* CTA */}
               <button className="group flex items-center bg-[#7030A0] hover:bg-[#5a2682] rounded-full pl-8 pr-1 py-1 transition-all">
                  {/* Text Label */}
                  <span className="text-white text-md font-medium tracking-tight pr-4">
                    Service Portal
                  </span>

                  {/* Search Icon Container with 'cutout' border effect */}
                  <span className="relative flex items-center justify-center w-10 h-10 bg-[#7030A0] rounded-full border-[2px] border-white text-white ">
                    <Search size={18} strokeWidth={3} />
                    
                    {/* This absolute div creates the white crescent gap seen in the image */}
                    <div className="absolute -left-2 top-0 bottom-0 w-2 bg-transparent  border-white rounded-full"></div>
                  </span>
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}