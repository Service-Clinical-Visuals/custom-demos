"use client";

import Link from "next/link";
import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "white" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  rounded?: "sm" | "md" | "lg" | "xl" | "full" | "none";
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  hasArrow?: boolean;
  arrowIcon?: "chevron" | "arrow";
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  size = "lg",
  rounded = "full",
  fullWidth = false,
  type = "button",
  disabled = false,
  hasArrow = true,
  arrowIcon = "chevron",
}) => {
  // Base classes
  const baseClasses = "group inline-flex items-center justify-center font-semibold transition-all duration-300 ease-in-out cursor-pointer select-none focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap";

  // Variant classes
  const variantClasses = {
    primary: "bg-[#EC4899] hover:bg-[#DB2777] text-white shadow-lg shadow-[#EC4899]/20 hover:shadow-xl hover:shadow-[#EC4899]/30 hover:scale-[1.02]",
    secondary: "bg-gray-900 text-white hover:bg-gray-800",
    outline: "border border-white text-white hover:bg-white hover:text-black",
    white: "bg-white text-[#EC4899] hover:bg-gray-50",
    ghost: "bg-transparent hover:bg-black/5 text-current",
  };

  // Size classes
  const sizeClasses = {
    sm: "py-2 px-5 text-[14px]",
    md: "py-3 px-6 text-[14px]",
    lg: "py-3.5 px-8 text-[16px]", // standard size used in AboutUs, ProductRange
    xl: "h-[58px] px-8 text-[17px]", // for HeroVideo
  };

  // Rounded classes
  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
    none: "rounded-none",
  };

  const combinedClasses = `
    ${baseClasses} 
    ${variantClasses[variant]} 
    ${sizeClasses[size]} 
    ${roundedClasses[rounded]} 
    ${fullWidth ? "w-full" : "w-fit"} 
    ${className}
  `.trim();

  const renderArrow = () => {
    if (!hasArrow) return null;
    
    if (arrowIcon === "arrow") {
      return <ArrowRight size={18} className="ml-3 transform group-hover:translate-x-1 transition-transform duration-300" />;
    }

    // Default to chevron
    return (
      <svg 
        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    );
  };

  const content = (
    <>
      <span className="tracking-wide">{children}</span>
      {renderArrow()}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
