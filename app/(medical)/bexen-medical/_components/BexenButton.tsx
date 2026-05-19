"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

interface BexenButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function BexenButton({
  children,
  variant = "primary",
  onClick,
  className = "",
  size = "md",
}: BexenButtonProps) {
  const baseClass = "btn-bexen";
  const variantClass = variant === "primary" ? "btn-bexen-primary" : "btn-bexen-secondary";
  
  let sizeClass = "text-[14px]";
  let arrowSize = 14;
  
  if (size === "sm") {
    sizeClass = "text-[13px] py-1.5 pl-5 pr-9";
    arrowSize = 12;
  } else if (size === "lg") {
    sizeClass = "text-[15px] py-2.5 pl-7 pr-12";
    arrowSize = 16;
  } else {
    // md size (default)
    sizeClass = "text-[14px] py-2 pl-6 pr-11";
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
    >
      <span>{children}</span>
      <span className="arrow-span">
        <ArrowRight size={arrowSize} className="text-white" />
      </span>
    </button>
  );
}
