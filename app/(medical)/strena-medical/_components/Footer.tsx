"use client";

import Link from "next/link";
import { Linkedin, Phone, MapPin, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#C5EEFF] pt-20 pb-10 strena-medical-root">
      <div className="custom-container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-[3fr_1fr_3fr_2fr_3fr] gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="">
            <div className="flex items-center gap-2 mb-6">
                 <img src="/strena/images/strena-logo.png" alt="strena-logo" className="h-12" />
            </div>
            <p className="text-[15px] lg:text-[16px] leading-relaxed mb-8">
              Strena Medical, with 35+ years of experience, delivers medical devices 
              across Diagnostic Imaging, Gynecology, and Critical Care worldwide.
            </p>
          </div>

          {/* Our Brand */}
          <div className="">
            <h4 className="text-[#333333] font-semibold mb-6 text-[18px] lg:text-[20px]">Our Brand</h4>
            <ul className="space-y-4 text-[15px] lg:text-[16px] ">
              <li><Link href="#" className="hover:text-[#00427C]">Medisono</Link></li>
              <li><Link href="#" className="hover:text-[#00427C]">mediblu</Link></li>
              <li><Link href="#" className="hover:text-[#00427C]">D.Heart</Link></li>
              <li><Link href="#" className="hover:text-[#00427C]">Medimar</Link></li>
            </ul>
          </div>

          {/* Address */}
          <div className="">
            <h4 className="text-[#333333] font-semibold mb-6 text-[18px] lg:text-[20px]">Address</h4>
            <div className="space-y-6 text-[15px] lg:text-[16px]">
              <div className="flex gap-2">
                <MapPin className="text-[#00427C] shrink-0" size={18} />
                <p><span className="font-semibold">Europe Office:</span> Via Antonio Cantore 8H/38 16149 Genoa Italy</p>
              </div>
              <div className="flex gap-2">
                <MapPin className="text-[#00427C] shrink-0" size={18} />
                <p><span className="font-semibold">United States Office:</span> 3016 NW 82nd Ave Doral, Florida, USA 33122</p>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="">
            <h4 className="text-[#333333] font-semibold mb-6 text-[18px] lg:text-[20px]">Contact Us</h4>
            <div className="space-y-6 text-[15px] lg:text-[16px]">
              <div className="flex gap-2 items-center">
                <Phone className="text-[#00427C] shrink-0" size={18} />
                <p>+1 305 4063931</p>
              </div>
              <div className="flex gap-2 items-center ml-7">
                <p>+39 010 3017000</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="">
            <h4 className="text-[#333333] font-semibold mb-6 text-[18px] lg:text-[20px]">Newsletter</h4>
            <p className="text-[15px] lg:text-[16px] mb-6">Stay Update with our Latest Innovations and News</p>
            <div className="relative mb-8">
              <input 
                type="email" 
                placeholder="Enter Your E-Mail"
                className="w-full bg-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#00427C]"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#00427C] rounded-md flex items-center justify-center text-white hover:bg-[#00305a] transition-all">
                <Send size={14} />
              </button>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#00427C] hover:bg-[#00427C] hover:text-white transition-all shadow-sm">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#00427C] hover:bg-[#00427C] hover:text-white transition-all shadow-sm">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.8.983 3.834 1.503 5.903 1.503h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#00427C]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[15px] lg:text-[16px]">@2026StrenaMedical. All Rights Reserved</p>
          <div className="flex gap-6 text-[15px] lg:text-[16px] ">
            <Link href="#" className="hover:text-[#00427C]">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#00427C]">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
