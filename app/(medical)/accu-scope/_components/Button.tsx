"use client";

import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline" | "white" | "white-outline";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
}) => {
  // Base classes for the outer container
  const outerBase = "group inline-flex items-center rounded-full transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none overflow-hidden p-[3px] w-fit";
  
  // Outer container variants (defines the border color and the solid color on the right side)
  const outerVariants = {
    primary: "bg-[#004B87] hover:bg-[#003561] pr-4",
    outline: "bg-[#004B87] hover:bg-[#003561] pr-4",
    white: "bg-white hover:bg-gray-100 pr-4",
    "white-outline": "bg-white hover:bg-gray-200 pr-4",
  };

  // Base classes for the inner container (the pill shape inside)
  const innerBase = "rounded-full flex items-center justify-center font-semibold transition-colors duration-300 tracking-wide whitespace-nowrap";
  
  // Inner container variants (defines the background behind the text and text color)
  const innerVariants = {
    primary: "bg-[#004B87] text-white group-hover:bg-[#003561]",
    outline: "bg-white text-[#004B87]",
    white: "bg-white text-[#004B87] group-hover:bg-gray-100",
    "white-outline": "bg-transparent text-white", // In white-outline, the background is transparent so the parent's blue background shows through, or we can force it to be the exact blue. Wait, if outer is white, the parent bg is blue. We should explicitly set it to blue for safety.
  };
  
  // Wait, let's fix white-outline: Outer is white. Inner should be blue.
  innerVariants["white-outline"] = "bg-[#004B87] text-white";

  // Size styles for the inner container (padding and height)
  const innerSizeStyles = {
    sm: "h-[40px] px-6 text-[15px]",
    md: "h-[50px] px-8 text-[16px]",
    lg: "h-[58px] px-10 text-[17px]",
  };

  // Arrow colors
  const arrowColors = {
    primary: "text-white",
    outline: "text-white",
    white: "text-[#004B87]",
    "white-outline": "text-[#004B87]",
  };

  const arrowSizes = {
    sm: 20,
    md: 22,
    lg: 24,
  };

  const combinedOuter = `${outerBase} ${outerVariants[variant]} ${className}`.trim();
  const combinedInner = `${innerBase} ${innerVariants[variant]} ${innerSizeStyles[size]}`.trim();

  const innerContent = (
    <>
      <div className={combinedInner}>
        {children}
      </div>
      <div className="flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 pl-3 pr-1">
        <ArrowRight 
          size={arrowSizes[size]} 
          strokeWidth={1.5} 
          className={arrowColors[variant]}
        />
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedOuter} onClick={onClick}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedOuter}
      onClick={onClick}
      disabled={disabled}
    >
      {innerContent}
    </button>
  );
};

export default Button;
