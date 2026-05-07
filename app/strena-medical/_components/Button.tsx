"use client";

import Link from "next/link";
import React from "react";
import { ArrowRight, MoveRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "outline-primary" | "white" | "ghost";
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
  rounded = "lg",
  fullWidth = false,
  type = "button",
  disabled = false,
  hasArrow = false,
}) => {
  const content = (
    <span className="flex items-center justify-center gap-2">
      {children}
      {hasArrow && (
        <ArrowRight size={size === "sm" ? 16 : size === "lg" ? 22 : 18} className="transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </span>
  );

  // Base classes
  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer group";

  // Variant classes
  const variantClasses = {
    primary: "bg-[#00427C] hover:bg-[#00305a] text-white shadow-md",
    secondary: "bg-[#C5EEFF] hover:bg-[#a0dfff] text-[#00427C] shadow-sm",
    outline: "border border-white text-white hover:bg-white hover:text-[#00427C]",
    "outline-primary": "border border-[#00427C] text-[#00427C] hover:bg-[#00427C] hover:text-white",
    white: "bg-white text-[#00427C] hover:bg-gray-100 shadow-sm",
    ghost: "bg-transparent hover:bg-black/5 text-current",
  };

  // Size classes
  const sizeClasses = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-[15px]",
    lg: "px-8 py-3.5 text-[16px]",
    xl: "px-10 py-5 text-xl",
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
