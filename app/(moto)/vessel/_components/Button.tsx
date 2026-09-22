"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  variant?: "primary" | "secondary";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  variant = "primary",
}: ButtonProps) => {

  const variantStyles =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary-hover"
      : "bg-white text-primary border border-primary hover:bg-primary/5";

  const content = (
    <div className={`flex items-center justify-center px-5 py-2.5 rounded-sm  shadow-sm transition-colors ${variantStyles} ${className}`}>
      <div className="button whitespace-nowrap ">{text}</div>

    </div>
  );

  const wrapperStyles = `inline-block cursor-pointer outline-none active:scale-95 transition-transform duration-200 select-none group ${className.includes("w-full") ? "w-full" : ""}`;

  if (href) {
    return (
      <Link href={href} className={wrapperStyles} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={wrapperStyles}>
      {content}
    </button>
  );
};

export default Button;
