"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "white-slanted" | "primary-slanted" | "outline";
  className?: string;
  showArrow?: boolean;
}

export default function Button({
  text,
  href,
  onClick,
  variant = "primary",
  className = "",
  showArrow = false,
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-semibold transition-all duration-300 active:scale-98 select-none cursor-pointer tracking-wider";

  let variantStyles = "";

  if (variant === "white-slanted") {
    // White background, red text, slanted right side, zoom out on hover, no color change
    variantStyles =
      "bg-white text-[#cc0b10] px-4 sm:px-10 py-2 sm:py-3.5 text-xs sm:text-sm md:text-base !font-heading font-semibold btn-slanted-right border-none shadow-md min-w-[120px] sm:min-w-[180px] hover:scale-95 transition-transform duration-300";
  } else if (variant === "primary-slanted") {
    // Yellow background, dark text, slanted right side, zoom out on hover, no color change
    variantStyles =
      "bg-[#fde509] text-[#1a1a1a] px-4 sm:px-10 py-2 sm:py-3.5 text-xs sm:text-sm md:text-base !font-heading font-semibold btn-slanted-right border-none shadow-md min-w-[120px] sm:min-w-[180px] hover:scale-95 transition-transform duration-300";
  } else if (variant === "primary") {
    // Yellow background, black/dark text
    variantStyles =
      "bg-primary text-dark hover:bg-dark hover:text-primary px-6 py-2.5 rounded text-sm md:text-base !font-heading font-semibold border border-primary hover:border-dark";
  } else if (variant === "secondary") {
    // Red background, white text
    variantStyles =
      "bg-secondary text-white hover:bg-white hover:text-secondary px-6 py-2.5 rounded text-sm md:text-base !font-heading font-semibold border border-secondary hover:border-secondary";
  } else {
    // Outline button
    variantStyles =
      "border border-white text-white  !font-heading hover:bg-white hover:text-dark px-6 py-2.5 rounded text-sm md:text-base font-semibold";
  }

  const content = (
    <span className="flex items-center gap-2">
      <span>{text}</span>
      {showArrow && (
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      )}
    </span>
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
    <button onClick={onClick} className={finalStyles} type="button">
      {content}
    </button>
  );
}
