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
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-full active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer group select-none";

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
    lg: "px-8 py-4.5 text-lg",
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
        <ArrowUpRight
          size={16}
          className="transition-all duration-300 transform group-hover:translate-x-4 group-hover:-translate-y-4"
        />
        <ArrowUpRight
          size={16}
          className="absolute transition-all duration-300 transform -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0"
        />
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
