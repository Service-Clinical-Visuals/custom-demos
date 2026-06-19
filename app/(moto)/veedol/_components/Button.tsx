"use client";

import React from "react";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "search";
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
  const baseStyles = "relative inline-flex items-center justify-center font-bigshoulder font-semibold uppercase tracking-wider transition-all duration-300 active:scale-95 select-none cursor-pointer";

  let variantStyles = "";
  let innerSkewClass = "";

  if (variant === "primary") {
    // Red slanted button
    variantStyles = "text-white py-2 px-6 md:py-2.5 md:px-8 text-[15px] md:text-[17px]";
    innerSkewClass = "bg-primary group-hover:bg-primary-hover transform -skew-x-[15deg]";
  } else if (variant === "outline") {
    // Slanted outline button
    variantStyles = "text-white py-2 px-6 md:py-2.5 md:px-8 text-[15px] md:text-[17px] hover:text-primary";
    innerSkewClass = "border border-white hover:bg-white transform -skew-x-[15deg]";
  } else if (variant === "search") {
    // Search action button (straight red block with arrow)
    variantStyles = "text-white w-10 h-10 md:w-12 md:h-12 text-[15px] rounded-none";
    innerSkewClass = "bg-primary group-hover:bg-primary-hover transform-none";
  }

  const content = (
    <>
      {/* Background shape with skew transform */}
      <span className={`absolute inset-0 transition-all duration-300 ${innerSkewClass}`} />
      
      {/* Label and optional Icon - unskewed inside the container to prevent distortion */}
      <span className="relative z-10 flex items-center justify-center gap-2 transform skew-x-0">
        {variant !== "search" && <span>{text}</span>}
        {variant === "search" && <ArrowRight size={18} strokeWidth={2.5} />}
        {showIcon && variant !== "search" && (
          <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
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
