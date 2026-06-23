import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  href?: string;
  className?: string;
  variant?: 'primary' | 'white';
}

export default function Button({ text, href = "#", className = "", variant = "primary" }: ButtonProps) {
  const bgClass = variant === 'primary' ? 'bg-[#fcc415] hover:bg-[#eab30d]' : 'bg-white hover:bg-gray-100';
  const textClass = variant === 'primary' ? 'text-[#1a1a1a]' : 'text-[#fcc415]';

  return (
  

    <div >
            <button className="flex items-center group cursor-pointer transition-transform hover:scale-105 duration-300">
              {/* Left Icon Circle */}
              <div className="w-[80px] h-[80px] md:w-[68px] md:h-[68px] rounded-full bg-[#111] flex items-center justify-center relative z-10 shadow-xl border border-black/20">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-white animate-slow-spin group-hover:transition-transform duration-[800ms] ease-in-out group-hover:rotate-[360deg]">
                  {/* Outer circle */}
                  <circle cx="12" cy="12" r="11" />
                  {/* Inner circle */}
                  <circle cx="12" cy="12" r="7.5" />
                  {/* Center hub */}
                  <circle cx="12" cy="12" r="2.5" />
                  {/* Spokes */}
                  <line x1="12" x2="12" y1="4.5" y2="9.5" />
                  <line x1="12" x2="12" y1="14.5" y2="19.5" />
                  <line x1="4.5" x2="9.5" y1="12" y2="12" />
                  <line x1="14.5" x2="19.5" y1="12" y2="12" />
                  <line x1="6.7" x2="10.2" y1="6.7" y2="10.2" />
                  <line x1="17.3" x2="13.8" y1="6.7" y2="10.2" />
                  <line x1="6.7" x2="10.2" y1="17.3" y2="13.8" />
                  <line x1="17.3" x2="13.8" y1="17.3" y2="13.8" />
                </svg> 
                
              </div>

              {/* Right Yellow Block */}
              <div className={`${bgClass} h-[46px] md:h-[50px] px-8 pl-12 -ml-8 flex items-center  transition-colors shadow-md ${variant === 'primary' ? 'rounded-tr-xl' : ''}`}>
                <span className={`ml-4 font-semibold ${textClass}  !font-oxanium text-[18px]`}>{text}</span>
              </div>
            </button>
          </div>
  );
}
