"use client";

import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
  disabled = false,
}) => {
  const baseClasses = "flex items-center p-[6px] transition-transform group w-fit cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-white",
    secondary: "bg-[#317d71]",
  };

  const textClasses = {
    primary: "text-[#1a1a1a]",
    secondary: "text-white",
  };

  const textBaseClasses = "pl-6 pr-5 font-semibold text-[16px] tracking-wider whitespace-nowrap";

  const iconContainerClasses = {
    primary: "bg-[#317d71] text-white group-hover:bg-[#256359]",
    secondary: "bg-white text-[#317d71] group-hover:bg-gray-100",
  };

  const content = (
    <>
      <span className={`${textBaseClasses} ${textClasses[variant]}`}>
        {children}
      </span>
      <span className={`p-3 flex items-center justify-center transition-colors ${iconContainerClasses[variant]}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
    </>
  );

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

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
