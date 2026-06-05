"use client";

import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary-outline" | "white-outline" | "hero" | "solid" | "dynamic";
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  textColor?: string;
  borderColor?: string;
  arrowBgColor?: string;
  arrowColor?: string;
  hoverBgColor?: string;
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
  textColor,
  borderColor,
  arrowBgColor,
  arrowColor,
  hoverBgColor
}) => {
  const getCircleSize = () => {
    switch (size) {
      case "sm": return "w-7 h-6 min-[2560px]:w-10 min-[2560px]:h-9";
      case "lg": return "w-10 h-9 min-[2560px]:w-14 min-[2560px]:h-13";
      case "xl": return "w-12 h-11 min-[2560px]:w-16 min-[2560px]:h-15";
      case "2xl": return "w-14 h-13 min-[2560px]:w-18 min-[2560px]:h-17";
      case "3xl": return "w-16 h-15 min-[2560px]:w-20 min-[2560px]:h-19";
      case "4xl": return "w-18 h-17 min-[2560px]:w-24 min-[2560px]:h-24";
      case "5xl": return "w-20 h-19 min-[2560px]:w-28 min-[2560px]:h-28";
      case "md":
      default: return "w-8 h-7 min-[2560px]:w-12 min-[2560px]:h-11";
    }
  };

  const getArrowSize = () => {
    switch (size) {
      case "sm": return "w-3.5 h-3.5 min-[2560px]:w-5 min-[2560px]:h-5";
      case "lg": return "w-5 h-5 min-[2560px]:w-7 min-[2560px]:h-7";
      case "xl": return "w-6 h-6 min-[2560px]:w-8 min-[2560px]:h-8";
      case "2xl": return "w-7 h-7 min-[2560px]:w-9 min-[2560px]:h-9";
      case "3xl": return "w-8 h-8 min-[2560px]:w-10 min-[2560px]:h-10";
      case "4xl": return "w-9 h-9 min-[2560px]:w-12 min-[2560px]:h-12";
      case "5xl": return "w-10 h-10 min-[2560px]:w-14 min-[2560px]:h-14";
      case "md":
      default: return "w-4 h-4 min-[2560px]:w-6 min-[2560px]:h-6";
    }
  };

  const getPadding = () => {
    switch (size) {
      case "sm": return "pl-5 pr-1.5 py-1.5 min-[2560px]:pl-8 min-[2560px]:pr-2 min-[2560px]:py-2";
      case "lg": return "pl-8 pr-2 py-2 min-[2560px]:pl-12 min-[2560px]:pr-3 min-[2560px]:py-3";
      case "xl": return "pl-10 pr-2.5 py-2.5 min-[2560px]:pl-14 min-[2560px]:pr-3.5 min-[2560px]:py-3.5";
      case "2xl": return "pl-12 pr-3 py-3 min-[2560px]:pl-16 min-[2560px]:pr-4 min-[2560px]:py-4";
      case "3xl": return "pl-14 pr-3.5 py-3.5 min-[2560px]:pl-18 min-[2560px]:pr-4.5 min-[2560px]:py-4.5";
      case "4xl": return "pl-16 pr-4 py-4 min-[2560px]:pl-20 min-[2560px]:pr-5 min-[2560px]:py-5";
      case "5xl": return "pl-18 pr-4.5 py-4.5 min-[2560px]:pl-24 min-[2560px]:pr-6 min-[2560px]:py-6";
      case "md":
      default: return "pl-6 pr-1.5 py-1.5 min-[2560px]:pl-10 min-[2560px]:pr-2.5 min-[2560px]:py-2.5";
    }
  };

  const getTextSize = () => {
    switch (size) {
      case "sm": return "text-[13px] min-[2560px]:text-[15px]";
      case "lg": return "text-[15px] min-[2560px]:text-[18px]";
      case "xl": return "text-[17px] min-[2560px]:text-[19px]";
      case "2xl": return "text-[18px] min-[2560px]:text-[20px]";
      case "3xl": return "text-[19px] min-[2560px]:text-[21px]";
      case "4xl": return "text-[20px] min-[2560px]:text-[24px]";
      case "5xl": return "text-[21px] min-[2560px]:text-[28px]";
      case "md":
      default: return "text-[14px] min-[2560px]:text-[17px]";
    }
  };

  if (variant === "primary-outline") {
    const content = (
      <div className={`flex items-center gap-4 lg:gap-5 bg-transparent border border-primary rounded-full hover:bg-red-50 transition-colors group shadow-sm w-fit ${getPadding()} ${className}`}>
        <span className={`font-semibold tracking-wide text-gray-800 ${getTextSize()}`}>{children}</span>
        <div className={`${getCircleSize()} rounded-full bg-primary flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
          <img className={getArrowSize()} src="/medical/entermed/buttonarrow.png" alt="button-arrow" />
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
          <img className={getArrowSize()} src="/medical/entermed/buttonarrow1.png" alt="button-arrow" />
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
          <img className={getArrowSize()} src="/medical/entermed/buttonarrow.png" alt="button-arrow" />
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

  if (variant === "dynamic") {
    const content = (
      <div
        className={`flex items-center gap-4 lg:gap-5 bg-transparent border rounded-full hover:opacity-80 transition-opacity group shadow-sm w-fit ${getPadding()} ${className}`}
        style={{ borderColor: borderColor || '#ef4444' }}
      >
        <span
          className={`font-semibold tracking-wide ${getTextSize()}`}
          style={{ color: textColor || '#4b5563' }}
        >
          {children}
        </span>
        <div
          className={`${getCircleSize()} rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm`}
          style={{ backgroundColor: arrowBgColor || '#ef4444' }}
        >
          <div
            className={getArrowSize()}
            style={{
              backgroundColor: arrowColor || '#ffffff',
              WebkitMaskImage: `url('/medical/entermed/buttonarrow.png')`,
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskImage: `url('/medical/entermed/buttonarrow.png')`,
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
            }}
          />
        </div>
      </div>
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
