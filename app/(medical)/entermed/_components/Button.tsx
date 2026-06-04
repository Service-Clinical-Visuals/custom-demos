"use client";

import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary-outline" | "white-outline" | "hero" | "solid";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  className = "",
  variant = "primary-outline",
  size = "md",
  type = "button",
  disabled = false,
}) => {
  const getCircleSize = () => {
    switch (size) {
      case "sm": return "w-7 h-7";
      case "lg": return "w-10 h-10";
      case "md":
      default: return "w-8 h-8";
    }
  };

  const getArrowSize = () => {
    switch (size) {
      case "sm": return "w-3.5 h-3.5";
      case "lg": return "w-5 h-5";
      case "md":
      default: return "w-4 h-4";
    }
  };

  const getPadding = () => {
    switch (size) {
      case "sm": return "pl-5 pr-1.5 py-1.5";
      case "lg": return "pl-8 pr-2 py-2";
      case "md":
      default: return "pl-6 pr-1.5 py-1.5";
    }
  };

  const getTextSize = () => {
    switch (size) {
      case "sm": return "text-[13px]";
      case "lg": return "text-[15px]";
      case "md":
      default: return "text-[14px]";
    }
  };

  if (variant === "primary-outline") {
    const content = (
      <div className={`flex items-center gap-4 lg:gap-5 bg-white border border-primary rounded-full hover:bg-red-50 transition-colors group shadow-sm w-fit ${getPadding()} ${className}`}>
        <span className={`font-semibold tracking-wide text-gray-800 ${getTextSize()}`}>{children}</span>
        <div className={`${getCircleSize()} rounded-full bg-primary flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
          <ArrowRight className={`${getArrowSize()} text-white transform -rotate-45`} strokeWidth={2.5} />
        </div>
      </div>
    );

    return href ? (
      <Link href={href} onClick={onClick} className="inline-block focus:outline-none">{content}</Link>
    ) : (
      <button type={type} onClick={onClick} disabled={disabled} className="inline-block focus:outline-none bg-transparent p-0 border-none">{content}</button>
    );
  }

  if (variant === "white-outline") {
    const content = (
      <div className={`flex items-center gap-4 lg:gap-5 bg-transparent border border-white rounded-full hover:bg-white/10 transition-colors group w-fit ${getPadding()} ${className}`}>
        <span className={`font-semibold tracking-wide text-white ${getTextSize()}`}>{children}</span>
        <div className={`${getCircleSize()} rounded-full bg-white flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
          <ArrowRight className={`${getArrowSize()} text-primary transform -rotate-45`} strokeWidth={2.5} />
        </div>
      </div>
    );

    return href ? (
      <Link href={href} onClick={onClick} className="inline-block focus:outline-none">{content}</Link>
    ) : (
      <button type={type} onClick={onClick} disabled={disabled} className="inline-block focus:outline-none bg-transparent p-0 border-none">{content}</button>
    );
  }

  if (variant === "hero") {
    const content = (
      <div className={`flex items-center gap-4 lg:gap-5 bg-white/10 backdrop-blur-sm border border-white/50 rounded-full hover:bg-white/20 transition-all group shadow-lg w-fit ${getPadding()} ${className}`}>
        <span className={`font-semibold tracking-wide text-white ${getTextSize()}`}>{children}</span>
        <div className={`${getCircleSize()} rounded-full bg-primary flex items-center justify-center group-hover:scale-105 group-hover:bg-primary-hover transition-all duration-300 shadow-sm`}>
          <ArrowRight className={`${getArrowSize()} text-white transform -rotate-45`} strokeWidth={2.5} />
        </div>
      </div>
    );

    return href ? (
      <Link href={href} onClick={onClick} className="inline-block focus:outline-none">{content}</Link>
    ) : (
      <button type={type} onClick={onClick} disabled={disabled} className="inline-block focus:outline-none bg-transparent p-0 border-none">{content}</button>
    );
  }

  if (variant === "solid") {
    const content = (
      <span className={`bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-[6px] text-[14px] font-medium transition-colors shadow-sm whitespace-nowrap flex items-center justify-center ${className}`}>
        {children}
      </span>
    );

    return href ? (
      <Link href={href} onClick={onClick} className="inline-block focus:outline-none">{content}</Link>
    ) : (
      <button type={type} onClick={onClick} disabled={disabled} className="inline-block focus:outline-none bg-transparent p-0 border-none">{content}</button>
    );
  }

  return null;
};

export default Button;
