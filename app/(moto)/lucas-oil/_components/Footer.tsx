import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#031128] pt-12 pb-0 border-t border-white/5">
      <div className="custom-container  ">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between mb-12" data-aos="fade-up">
          
          {/* Left Column - Logo & Text */}
          <div className="w-full lg:w-[30%] mb-12 lg:mb-0 lg:pr-12">
            <div className="mb-6">
              <img 
                src="/moto/lucas-oil/lucaslogo.png" 
                alt="Lucas Oil" 
                className="h-12 object-contain"
               
              />
             
            </div>
            {/* <p className="!text-white text-[16px] font-(family-name:--font-dm-sans)"> */}
            <p className="text-[#ffffff] text-sm md:text-[16px] leading-[1.8] font-(family-name:--font-dm-sans) ">
              Our cutting-edge lubricants, additives, and engine oils outperform competitors, delivering long-lasting protection and efficiency.
            </p>
          </div>

          {/* Right Columns Container */}
          <div className="w-full lg:w-auto flex-1 flex flex-col sm:flex-row sm:justify-center md:justify-end xl:gap-2">
            
            {/* Quick Links */}
            <div className="w-full sm:w-auto mb-10 sm:mb-0">
              <h3 className="!text-white text-xl font-semibold mb-6  tracking-wide !font-[family-name:var(--font-orbitron)]">Quick Links</h3>
              <ul className="space-y-4">
                <li><p className="text-[#ffffff] text-sm md:text-[16px] leading-[1.8] font-(family-name:--font-dm-sans) ">Home</p></li>
                <li><p className="text-[#ffffff] text-sm md:text-[16px] leading-[1.8] font-(family-name:--font-dm-sans) ">About Us</p></li>
                <li><p className="text-[#ffffff] text-sm md:text-[16px] leading-[1.8] font-(family-name:--font-dm-sans) ">Products</p></li>
                <li><p className="text-[#ffffff] text-sm md:text-[16px] leading-[1.8] font-(family-name:--font-dm-sans) ">Testimonials</p></li>
              </ul>
            </div>
            
            {/* Vertical Divider */}
            <div className="hidden sm:block w-px bg-[#dddddd] mx-6 lg:mx-10 h-auto self-stretch"></div>

            {/* Ambassador */}
            <div className="w-full sm:w-auto mb-10 sm:mb-0">
              <h3 className="!text-white text-xl font-semibold mb-6 !font-[family-name:var(--font-orbitron)] tracking-wide">Ambassador</h3>
              <ul className="space-y-4">
                <li><p className="text-[#ffffff] text-sm md:text-[16px] leading-[1.8] font-(family-name:--font-dm-sans) ">Jet Ski</p></li>
                <li><p className="text-[#ffffff] text-sm md:text-[16px] leading-[1.8] font-(family-name:--font-dm-sans) ">Open Wheel</p></li>
                <li><p className="text-[#ffffff] text-sm md:text-[16px] leading-[1.8] font-(family-name:--font-dm-sans) ">Drag racing</p></li>
                <li><p className="text-[#ffffff] text-sm md:text-[16px] leading-[1.8] font-(family-name:--font-dm-sans) ">Monster Trucks</p></li>
                <li><p className="text-transparent [-webkit-text-stroke:1px_white] text-[15px] !font-(family-name:--font-dm-sans) font-semibold leading-relaxed">See All ...</p></li>
              </ul>
            </div>
            
            {/* Vertical Divider */}
            <div className="hidden sm:block w-px bg-[#dddddd] mx-6 lg:mx-10 h-auto self-stretch"></div>

            {/* Quick Contact */}
            <div className="w-full sm:w-auto min-w-[250px]">
              <h3 className="!text-white text-xl font-semibold mb-6 !font-[family-name:var(--font-orbitron)] tracking-wide">Quick Contact</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mr-3  mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white text-sm md:text-[16px] leading-[1.8] font-(family-name:--font-dm-sans) ">Unit 4 Cunliffe Drive Llangefni<br/>Industrial Estate Llangefni<br/>Anglesey LL77 7JA</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-white mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-white text-sm md:text-[16px] leading-[1.8] font-(family-name:--font-dm-sans) ">+44 (0) 1248-723-666</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>

        {/* Socials & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center  border-t border-white/5 mb-3" data-aos="fade-up">
          
          <div className="mb-8 lg:mb-0">
            <h3 className="!text-white text-xl font-semibold mb-4 font-heading tracking-wide !font-[family-name:var(--font-orbitron)]">Socials</h3>
            <div className="flex space-x-5">
              {/* TikTok */}
              <Link href="#" className="text-white transition-colors">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.95v7.4c-.01 2.98-1.73 5.67-4.46 6.81-2.73 1.14-5.91.73-8.22-.98-2.31-1.71-3.48-4.63-2.92-7.46.56-2.83 2.87-5.05 5.68-5.46.85-.12 1.71-.12 2.56.03v4.06c-.84-.16-1.71-.05-2.48.33-.77.38-1.41 1.01-1.75 1.78-.34.77-.32 1.64.05 2.4.37.76 1.01 1.38 1.78 1.7.77.32 1.64.31 2.4-.07.76-.38 1.37-1.02 1.68-1.79.31-.77.31-1.63 0-2.4-.04-.09-.08-.18-.13-.27V.02h-4.32z"/>
                </svg>
              </Link>
              {/* Facebook */}
              <Link href="#" className="text-white  transition-colors">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                </svg>
              </Link>
              {/* LinkedIn */}
              <Link href="#" className="text-white transition-colors">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              {/* X / Twitter */}
              <Link href="#" className="text-white transition-colors">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </Link>
              {/* Instagram */}
              <Link href="#" className="text-white transition-colors">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </Link>
              {/* YouTube */}
              <Link href="#" className="text-white transition-colors">
                <svg className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center w-full lg:w-auto">
            {/* <span className="text-white text-xl font-bold mr-6 mb-3 sm:mb-0 whitespace-nowrap !font-[family-name:var(--font-orbitron)] tracking-wider"> */}
            <h3 className="!text-white text-xl font-semibold  font-heading tracking-wide !font-[family-name:var(--font-orbitron)] mr-6 mb-2 sm:mb-0">
                           Subscribe to Newsletter :
            </h3>
            <div className="flex w-full sm:w-[320px] border-2 border-white">
              <input
                type="email"
                placeholder="Enter Your E-Mail id"
                className="w-full px-4 py-2.5 bg-white text-gray-800 focus:outline-none font-(family-name:--font-dm-sans) text-sm placeholder:font-(family-name:--font-dm-sans)"
              />
              <button className="bg-[#1d4174] text-white px-5 py-2.5 font-medium hover:bg-[#285799] transition-colors whitespace-nowrap text-sm !font-[family-name:var(--font-orbitron)]">
                Subscribe
              </button>
            </div>
          </div>
          
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#081b37] py-4" data-aos="fade-up">
        <div className="custom-container  flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm md:text-[16px] leading-[1.8] font-(family-name:--font-dm-sans) ">
            Copyrights@2026 LUCAS OIL.All rights reserved
          </p>
          <div className="flex space-x-6">
            <p className="text-white text-sm md:text-[16px] leading-[1.8] font-(family-name:--font-dm-sans) ">Terms and Conditions</p>
            <p className="text-white text-sm md:text-[16px] leading-[1.8] font-(family-name:--font-dm-sans) ">Privacy Policy</p>
            <p className="text-white text-sm md:text-[16px] leading-[1.8] font-(family-name:--font-dm-sans) ">Cookies Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
