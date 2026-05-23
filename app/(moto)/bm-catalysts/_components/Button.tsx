"use client";

import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "white" | "ghost";
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
  hasArrow = false,
}) => {
  // Base classes
  const baseClasses = "inline-flex items-center justify-between font-bold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer gap-4 group font-exo2";

  // Variant classes
  const variantClasses = {
    primary: "bg-[#1B1537] hover:bg-[#261e4d] text-white shadow-sm",
    secondary: "bg-[#00e5ff] hover:bg-[#00c8e0] text-[#1B1537] shadow-sm",
    outline: "border-2 border-white text-white hover:bg-white hover:text-[#1B1537]",
    white: "bg-white text-[#1B1537] hover:bg-[#f8f9fd]",
    ghost: "bg-transparent hover:bg-white/10 text-white",
  };

  // Size classes
  const sizeClasses = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-[17px]",
    lg: "px-9 py-4 text-[18px]",
    xl: "px-11 py-5 text-xl",
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
    ${fullWidth ? "w-full" : "w-auto"} 
    ${className}
  `.trim();

  const content = (
    <>
      <span className="tracking-wide">{children}</span>
      {hasArrow && (
        <span className={`flex items-center justify-center rounded-full p-1.5 transition-transform duration-300 group-hover:translate-x-1 ${
          variant === "white" 
            ? "bg-[#1B1537] text-white" 
            : variant === "primary"
            ? "bg-white text-[#1B1537]"
            : "bg-[#1B1537]/10 text-[#1B1537]"
        }`}>
          <ArrowRight size={14} strokeWidth={3} />
        </span>
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
