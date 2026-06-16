"use client";

import React from "react";
import Link from "next/link";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "link";

export type ButtonSize = "sm" | "md" | "lg";

const ArrowTopRight = ({
  className = "w-[15px] h-[15px]",
}: {
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 18V10C9 9.4 9.4 9 10 9H18" />
    <path d="M14 5H19V10" />
  </svg>
);

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  href?: string;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  weight?: "normal" | "medium" | "semibold" | "bold";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#0FA39A] text-white hover:bg-[#0c8f87] border border-transparent",

  secondary:
    "bg-white text-[#0FA39A] hover:bg-gray-50 border border-transparent",

  outline:
    "border border-[#0FA39A] text-[#0FA39A] bg-transparent hover:bg-[#0FA39A] hover:text-white",

  ghost:
    "bg-transparent text-[#333333] hover:bg-gray-100 hover:text-[#0FA39A]",

  link:
    "bg-transparent text-[#0FA39A] hover:underline p-0 h-auto rounded-none",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-[38px] px-5 text-[14px]",
  md: "h-[42px] px-8 text-[15px]",
  lg: "h-[48px] px-10 text-[16px]",
};

const weightStyles = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
  iconPosition = "right",
  showArrow = true,
  type = "button",
  weight = "medium",
}) => {
  const isLink = !!href;
  const isDisabled = disabled || loading;

  const baseStyles = [
    "font-outfit",
    "inline-flex items-center justify-center",
    "gap-2",
    "rounded-[24px]",
    "transition-all duration-300",
    "focus:outline-none",
    "active:scale-95",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantStyles[variant],
    variant !== "link" ? sizeStyles[size] : "",
    weightStyles[weight],
    fullWidth ? "w-full" : "w-fit",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const arrowElement =
    showArrow && (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 11L17 6L12 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1 17V10C1 8.93913 1.42143 7.92172 2.17157 7.17157C2.92172 6.42143 3.93913 6 5 6H17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>


    );

  const content = (
    <>
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}

      {!loading && icon && iconPosition === "left" && icon}

      {children}

      {!loading && icon && iconPosition === "right" && icon}

      {!loading && !icon && arrowElement}
    </>
  );

  if (isLink) {
    return (
      <Link
        href={href}
        className={`${baseStyles} group`}
        onClick={onClick as any}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`${baseStyles} group`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {content}
    </button>
  );
};

export default Button;