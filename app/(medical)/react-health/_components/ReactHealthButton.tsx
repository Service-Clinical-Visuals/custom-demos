import { ArrowRight } from "lucide-react";
import React from "react";

interface ReactHealthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "purple" | "white";
  size?: "default" | "sm";
  icon?: React.ReactNode;
  className?: string;
}

export default function ReactHealthButton({
  text,
  variant = "purple",
  size = "default",
  icon,
  className = "",
  ...props
}: ReactHealthButtonProps) {
  const baseClass = variant === "purple" ? "btn-react" : "btn-react-white";
  const isWhite = variant === "white";
  const isSmall = size === "sm";

  const defaultIcon = isSmall ? (
    <ArrowRight size={14} strokeWidth={3} />
  ) : (
    <ArrowRight size={18} strokeWidth={3} />
  );

  return (
    <button
      className={`group ${baseClass} justify-center shadow-lg relative ${isSmall ? "pl-8 pr-1 py-1" : ""} ${className}`}
      {...props}
    >
      <span className={`${isSmall ? "text-sm pr-10" : "text-md pr-14"} font-bold tracking-tight py-1`}>
        {text}
      </span>
      <span
        className={`btn-icon-wrapper group-hover:translate-x-1 absolute -right-0.5 ${isSmall ? "!w-8 !h-8" : ""
          } ${isWhite ? "!bg-white !border-react-purple !text-react-purple" : ""}`}
      >
        {icon || defaultIcon}
      </span>
    </button>
  );
}
