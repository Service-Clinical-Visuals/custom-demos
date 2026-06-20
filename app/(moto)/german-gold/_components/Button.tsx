"use client";

import React from "react";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "search" | "secondary";
  className?: string;
  showIcon?: boolean;
}

const Button = ({
  text,
  href,
  onClick,
  variant = "primary",
  className = "",
  showIcon = false,
}: ButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center font-teko uppercase tracking-wider transition-all duration-300 active:scale-95 select-none cursor-pointer";

  let variantStyles = "";
  let innerSkewClass = "";

  if (variant === "primary") {
    // Primary button
    variantStyles = "text-white py-2 px-6 md:py-2.5 md:px-8 text-[16px] md:text-[18px]";
    innerSkewClass = "bg-primary group-hover:bg-[#E4C012]"; // Optional hover state change
  } else if (variant === "outline") {
    // Outline button
    variantStyles = "text-white py-2 px-6 md:py-2.5 md:px-8 text-[16px] md:text-[18px] hover:text-primary";
    innerSkewClass = "border border-white hover:bg-white";
  } else if (variant === "search") {
    // Search action button
    variantStyles = "text-white w-10 h-10 md:w-12 md:h-12 text-[16px] md:text-[18px] rounded-none";
    innerSkewClass = "bg-primary group-hover:bg-[#E4C012]";
  } else if (variant === "secondary") {
    // Secondary button (Reverse: white bg, primary text)
    variantStyles = "text-primary py-2 px-6 md:py-2.5 md:px-8 text-[16px] md:text-[18px]";
    innerSkewClass = "bg-white group-hover:bg-gray-100";
  }

  const content = (
    <>
      {/* Background shape with clip-path for slanting only the right side */}
      <span 
        className={`absolute inset-0 transition-all duration-300 ${innerSkewClass}`} 
        style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 20px) 100%, 0 100%)' }}
      />

      {/* Label and optional Icon */}
      <span className="relative z-10 flex items-center justify-center gap-2 pr-[10px]">
        {variant !== "search" && <span className="pt-0.5">{text}</span>}
        {variant === "search" && <ArrowRight size={18} strokeWidth={2.5} className="mt-[-2px]" />}
        {showIcon && variant !== "search" && (
          <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1 mt-[-2px]" />
        )}
      </span>
    </>
  );

  const finalStyles = `group ${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={finalStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={finalStyles}>
      {content}
    </button>
  );
};

export default Button;
