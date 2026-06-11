"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "primary" | "white" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  href,
  className = "",
  variant = "primary",
  size = "md",
  showArrow = true,
  type = "button",
  disabled = false,
}: ButtonProps) {
  // Base classes for premium styling
  const baseClasses =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-full active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer group select-none";

  // Variant classes
  const variantClasses = {
    primary:
      "bg-[#9C0B38] text-white hover:bg-[#85082e] shadow-sm shadow-[#9C0B38]/10",
    white:
      "bg-[#FFFFFF] text-[#9C0B38] hover:bg-gray-100 shadow-sm shadow-black/5",
    outline:
      "border border-[#9C0B38] text-[#9C0B38] hover:bg-[#9C0B38] hover:text-[#FFFFFF]",
    ghost: "bg-transparent hover:bg-gray-100 text-[#333333]",
  };

  // Size classes
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-6 py-3.5 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedClasses = `
    ${baseClasses} 
    ${variantClasses[variant]} 
    ${sizeClasses[size]} 
    ${className}
  `.trim();

  // Premium hover arrow container
  const renderArrow = () => {
    if (!showArrow) return null;

    // Use a wrapper to slide the arrow out and in
    return (
      <span className="relative ml-2 w-4 h-4 overflow-hidden flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 11L17 6L12 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M1 17V10C1 8.93913 1.42143 7.92172 2.17157 7.17157C2.92172 6.42143 3.93913 6 5 6H17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
    );
  };

  const content = (
    <span className="flex items-center">
      <span>{children}</span>
      {renderArrow()}
    </span>
  );

  if (href) {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} className={combinedClasses} onClick={onClick}>
          {content}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
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
}
