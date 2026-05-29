"use client";

import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "split" | "white-split" | "outline" | "white" | "cyan";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  className = "",
  variant = "split",
  type = "button",
  disabled = false,
}) => {
  // Deep Blue & Sky Blue Overlapping Split Variant
  if (variant === "split") {
    const content = (
      <div className={`inline-flex items-center group cursor-pointer select-none relative mr-5 ${className}`}>
        {/* Left deep blue fully rounded pill block */}
        <span className="bg-[#004A87] hover:bg-[#003b6b] text-white pl-8 pr-12 py-3.5 text-[14px] sm:text-[15px] md:text-[16px] font-semibold rounded-full transition-colors duration-300 flex items-center h-[46px] shadow-lg z-10 border border-[#003b6b]/10">
          {children}
        </span>
        {/* Right vibrant sky blue overlapping square block */}
        <span className="bg-[#00A0E0] hover:bg-[#008ec4] text-white rounded-md absolute -right-2 flex items-center justify-center h-[30px] w-[30px] shadow-lg z-20 transition-transform duration-300 group-hover:translate-x-1.5 border border-[#00A0E0]/10">
          <ArrowRight className="w-5 h-5" />
        </span>
      </div>
    );

    if (href) {
      return (
        <Link href={href} className="inline-block focus:outline-none" onClick={onClick}>
          {content}
        </Link>
      );
    }

    return (
      <button type={type} onClick={onClick} disabled={disabled} className="inline-block focus:outline-none p-0 border-none bg-transparent">
        {content}
      </button>
    );
  }

  // White & Sky Blue Overlapping Split Variant (Get Quote style)
  if (variant === "white-split") {
    const content = (
      <div className={`inline-flex items-center group cursor-pointer select-none relative mr-5 ${className}`}>
        {/* Left white fully rounded pill block */}
        <span className="bg-white hover:bg-slate-50 text-[#004A87] pl-8 pr-14 py-3.5 text-[14px] sm:text-[15px] md:text-[16px] font-extrabold rounded-full transition-colors duration-300 flex items-center h-[46px] shadow-lg z-10">
          {children}
        </span>
        {/* Right vibrant sky blue overlapping square block */}
        <span className="bg-[#00A0E0] hover:bg-[#008ec4] text-white rounded-sm absolute -right-2 flex items-center justify-center h-[30px] w-[30px] shadow-lg z-20 transition-transform duration-300 group-hover:translate-x-1.5 border border-[#00A0E0]/10">
          <ArrowRight className="w-5 h-5" />
        </span>
      </div>
    );

    if (href) {
      return (
        <Link href={href} className="inline-block focus:outline-none" onClick={onClick}>
          {content}
        </Link>
      );
    }

    return (
      <button type={type} onClick={onClick} disabled={disabled} className="inline-block focus:outline-none p-0 border-none bg-transparent">
        {content}
      </button>
    );
  }

  // Outline variant (transparent backdrop, thin white border, elegant text and arrow right)
  if (variant === "outline") {
    const content = (
      <div className={`inline-flex items-center gap-2.5 px-6 py-2.5 border border-white/50 hover:border-white text-white font-medium rounded-md transition-all duration-300 backdrop-blur-xs select-none group cursor-pointer ${className}`}>
        <span className="text-[14px] font-semibold tracking-wide">{children}</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    );

    if (href) {
      return (
        <Link href={href} className="inline-block focus:outline-none" onClick={onClick}>
          {content}
        </Link>
      );
    }

    return (
      <button type={type} onClick={onClick} disabled={disabled} className="inline-block focus:outline-none p-0 border-none bg-transparent">
        {content}
      </button>
    );
  }

  // Solid Cyan button (Join With Us style)
  if (variant === "cyan") {
    const content = (
      <span className="px-6 py-3 bg-[#00A0E0] text-white hover:bg-[#008ec4] font-bold rounded-md transition-colors duration-300 flex items-center justify-center gap-2 shadow-sm select-none">
        {children}
      </span>
    );

    if (href) {
      return (
        <Link href={href} className={`inline-block focus:outline-none ${className}`} onClick={onClick}>
          {content}
        </Link>
      );
    }

    return (
      <button type={type} onClick={onClick} disabled={disabled} className={`inline-block focus:outline-none p-0 border-none bg-transparent ${className}`}>
        {content}
      </button>
    );
  }

  // Fallback white button
  const content = (
    <span className="px-6 py-3 bg-white text-[#004A87] font-bold rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 shadow-sm">
      {children}
      <ArrowRight className="w-5 h-5 text-[#00A0E0]" />
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={`inline-block focus:outline-none ${className}`} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`inline-block focus:outline-none p-0 border-none bg-transparent ${className}`}>
      {content}
    </button>
  );
};

export default Button;
