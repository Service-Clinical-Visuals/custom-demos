"use client";

import Link from "next/link";
import { ChevronDown, Send, MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white relative">
      
      {/* 1. Top Call-to-Action Banner */}
      <div className="bg-[url('/7s-medical/learning-journey.png')] bg-cover bg-center bg-no-repeat relative overflow-hidden py-16 md:py-20">
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-[28px] md:text-[30px] lg:text-[32px] font-bold mb-4 text-white!">
            Start Your Professional Learning Journey with <br className="hidden lg:block" /> Expert-Led Educational Programs
          </h2>
          <Link 
            href="#contact" 
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#CE112D] font-semibold text-[14px] px-10 py-3 rounded-[3px] transition-all shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] transform hover:-translate-y-0.5"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {/* 2. Main Footer Grid */}
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Logo & Newsletter */}
          <div className="lg:col-span-5 flex flex-col gap-8 pr-0 lg:pr-12">
            
            {/* Logo Group */}
            <Link href="#top" className="flex items-center gap-3">
              <div className="flex flex-col items-start leading-none">
                <img src="/7s-medical/7s-medical.png" alt="7s Medical Logo" className="h-16" />
              </div>
            </Link>

            {/* Newsletter Subscription */}
            <div className="flex flex-col gap-4 mt-2">
              <h4 className="font-bold text-[18px] text-black">Subscribe to Newsletter</h4>
              <form className="flex w-full max-w-[320px] rounded-[2px] overflow-hidden border border-transparent focus-within:border-gray-200 transition-colors">
                <input 
                  type="email" 
                  placeholder="Please enter email" 
                  className="bg-[#F4F5F6] text-[15px] text-gray-700 px-4 py-3.5 w-full focus:outline-none placeholder-gray-400"
                  required 
                />
                <button 
                  type="submit" 
                  className="bg-[#CE112D] hover:bg-[#A70F25] text-white px-5 py-3.5 flex items-center justify-center transition-colors flex-shrink-0"
                  aria-label="Subscribe"
                >
                  <Send className="w-[20px] h-[20px]" strokeWidth={2} />
                </button>
              </form>
            </div>

          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col pt-2">
            <h4 className="font-bold text-[18px] lg:text-[20px] text-[#212121] mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3.5 text-[16px] text-[#646667]">
              <li>
                <Link href="#" className="text-[#CE112D] font-semibold hover:underline">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1.5 group cursor-pointer w-max">
                <Link href="#" className="group-hover:text-[#CE112D] transition-colors">Products</Link> 
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#CE112D] transition-colors mt-0.5"/>
              </li>
              <li>
                <Link href="#" className="hover:text-[#CE112D] transition-colors">
                  Education
                </Link>
              </li>
              <li className="flex items-center gap-1.5 group cursor-pointer w-max">
                <Link href="#" className="group-hover:text-[#CE112D] transition-colors">Company</Link> 
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#CE112D] transition-colors mt-0.5"/>
              </li>
              <li>
                <Link href="#" className="hover:text-[#CE112D] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-3 flex flex-col pt-2">
            <h4 className="font-bold text-[18px] lg:text-[20px] text-[#212121] mb-6">Contact</h4>
            <ul className="flex flex-col gap-6 text-[16px] text-[#646667]">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#CE112D] shrink-0" strokeWidth={1.5} />
                <span className="leading-relaxed -mt-0.5">
                  7S Medical International AG,<br/>Länggasse 4, CH-6208 Oberkirch
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#CE112D] shrink-0" strokeWidth={1.5} />
                <span>+41 41 925 66 70</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#CE112D] shrink-0" strokeWidth={1.5} />
                <a href="mailto:info@7sinternational.com" className="hover:text-[#CE112D] transition-colors">
                  info@7sinternational.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="lg:col-span-2 flex flex-col pt-2">
            <h4 className="font-bold text-[18px] lg:text-[20px] text-[#212121] mb-6">Social</h4>
            <div className="flex gap-2.5">
              <a href="#" aria-label="Instagram" className="w-[40px] h-[40px] rounded-full bg-[#CE112D] hover:bg-[#A70F25] flex items-center justify-center transition-colors shadow-sm">
                <Instagram className="w-4 h-4 text-white" strokeWidth={2}/>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-[40px] h-[40px] rounded-full bg-[#CE112D] hover:bg-[#A70F25] flex items-center justify-center transition-colors shadow-sm">
                <Linkedin className="w-4 h-4 text-white" fill="currentColor" strokeWidth={0}/>
              </a>
              <a href="#" aria-label="Facebook" className="w-[40px] h-[40px] rounded-full bg-[#CE112D] hover:bg-[#A70F25] flex items-center justify-center transition-colors shadow-sm">
                <Facebook className="w-[18px] h-[18px] text-white" fill="currentColor" strokeWidth={0}/>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Copyright Bar */}
      <div className="border-t border-gray-100 bg-white">
        <div className="container mx-auto px-6 py-6 text-center">
          <p className="font-light tracking-wide text-[16px]!">
            Copyright by 7S Medical International AG
          </p>
        </div>
      </div>

    </footer>
  );
}
