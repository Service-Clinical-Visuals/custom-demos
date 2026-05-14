"use client";

import Link from "next/link";
import React from "react";
import { ChevronRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "white" | "ghost" | "teal";
  size?: "sm" | "md" | "lg" | "xl";
  rounded?: "sm" | "md" | "lg" | "full" | "none";
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  hasArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  rounded = "full",
  fullWidth = false,
  type = "button",
  disabled = false,
  hasArrow = true,
}) => {
  // Base classes
  const baseClasses = "inline-flex items-center transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer group overflow-hidden font-bold";

  // Variant classes
  const variantClasses = {
    primary: "bg-white text-gray-900 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]",
    secondary: "bg-gray-900 text-white hover:bg-gray-800",
    teal: "bg-[#00AFAF] text-white hover:bg-[#009a9a]",
    outline: "border-2 border-[#00AFAF] text-[#00AFAF] hover:bg-[#00AFAF] hover:text-white",
    white: "bg-white text-[#00AFAF] hover:bg-gray-50",
    ghost: "bg-transparent hover:bg-black/5 text-current",
  };

  // Size classes
  const sizeClasses = {
    sm: "h-[38px] text-[14px]",
    md: "h-[44px] text-[15px]",
    lg: "h-[46px] text-[16px]",
    xl: "h-[50px] text-[17px]",
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

  const content = (
    <>
      <span className={`flex-1 ${variant === "primary" ? "px-8 text-center" : "px-10"}`}>{children}</span>
      {hasArrow && variant === "primary" && (
        <div className="bg-[#00AFAF] h-full aspect-square flex items-center justify-center text-white transition-transform group-hover:bg-[#009a9a]">
           <ChevronRight size={size === "sm" ? 18 : 24} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
        </div>
      )}
      {hasArrow && variant !== "primary" && (
        <ChevronRight size={size === "sm" ? 16 : 20} strokeWidth={3} className="mr-3 group-hover:translate-x-1 transition-transform" />
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
