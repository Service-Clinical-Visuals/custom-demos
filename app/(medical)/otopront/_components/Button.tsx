"use client";

import Link from "next/link";
import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "white" | "red" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  rounded?: "sm" | "md" | "lg" | "full" | "none";
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  hasArrow?: boolean;
  arrowType?: "circle" | "plain";
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  className = "",
  variant = "red",
  size = "md",
  rounded = "md",
  fullWidth = false,
  type = "button",
  disabled = false,
  hasArrow = false,
  arrowType = "plain",
}) => {
  // Base classes
  const baseClasses = "inline-flex items-center transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer group overflow-hidden font-semibold justify-center";

  // Variant classes
  const variantClasses = {
    red: "bg-[#BD0A27] text-white hover:bg-[#A30C21]",
    white: "bg-white text-[#111111] hover:bg-gray-100",
    primary: "bg-[#BD0A27] text-white hover:bg-[#A30C21]",
    secondary: "bg-gray-900 text-white hover:bg-gray-800",
    ghost: "bg-transparent hover:bg-black/5 text-current",
  };

  // Size classes
  const sizeClasses = {
    sm: "h-[38px] text-[14px]",
    md: "h-[44px] text-[15px]",
    lg: "h-[48px] text-[16px]",
    xl: "h-[54px] text-[17px]",
  };

  // Rounded classes
  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
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

  if (arrowType === "circle") {
    const isWhite = variant === "white";
    
    // Default white version (Explore Otopront style)
    let diamondContent = (
      <div className={`inline-flex rounded-full bg-white border border-[#BD0A27] items-center h-[50px] pl-8 pr-12 relative cursor-pointer hover:shadow-lg hover:bg-gray-50/50 transition-all group ${className}`}>
        <span className="text-[#111111] font-bold text-[15px] tracking-wide whitespace-nowrap">{children}</span>
        <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] bg-[#BD0A27] rotate-45 group-hover:rotate-[405deg] rounded-[12px] border-2 border-white flex items-center justify-center shadow-md flex-shrink-0 transition-transform duration-700 ease-in-out overflow-hidden">
          <div className="-rotate-45 group-hover:-rotate-[405deg] flex items-center justify-center text-white transition-transform duration-700 ease-in-out">
            <ArrowRight size={18} strokeWidth={2.5} className="animate-arrow-slide" />
          </div>
        </div>
      </div>
    );

    // Red version (Discover More style)
    if (variant === "red" || variant === "primary") {
      diamondContent = (
        <div className={`inline-flex rounded-full bg-[#BD0A27] border border-white items-center h-[50px] pl-8 pr-12 relative cursor-pointer hover:shadow-lg hover:bg-[#A30C21] transition-all group ${className}`}>
          <span className="text-white font-bold text-[15px] tracking-wide whitespace-nowrap">{children}</span>
          <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] bg-white rotate-45 group-hover:rotate-[405deg] rounded-[12px] border-2 border-[#BD0A27] flex items-center justify-center shadow-md flex-shrink-0 transition-transform duration-700 ease-in-out overflow-hidden">
            <div className="-rotate-45 group-hover:-rotate-[405deg] flex items-center justify-center text-[#BD0A27] transition-transform duration-700 ease-in-out">
              <ArrowRight size={18} strokeWidth={2.5} className="animate-arrow-slide" />
            </div>
          </div>
        </div>
      );
    }

    if (href) {
      return (
        <Link href={href} className="inline-block relative z-10" onClick={onClick}>
          {diamondContent}
        </Link>
      );
    }

    return (
      <button type={type} onClick={onClick} disabled={disabled} className="inline-block bg-transparent border-none p-0 focus:outline-none relative z-10">
        {diamondContent}
      </button>
    );
  }

  const content = (
    <>
      <span className="px-6 whitespace-nowrap">{children}</span>
      {hasArrow && (
        <ArrowRight size={size === "sm" ? 16 : 20} strokeWidth={2.5} className="mr-6 -ml-3 group-hover:translate-x-1 transition-transform" />
      )}
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
