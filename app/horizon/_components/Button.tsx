import Link from "next/link";
import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "white" | "dark" | "outline";
  showIcon?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  variant = "primary",
  showIcon = true,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-between gap-6 pl-8 pr-2 py-2 rounded-full font-bold transition-all duration-300 text-[16px] cursor-pointer group";

  const variants = {
    primary: "bg-[#84CFFA] text-[#064163]",
    secondary: "bg-[#064163] text-white",
    white: "bg-white text-[#064163]",
    dark: "bg-[#1A1A1A] text-white",
    outline: "bg-transparent border border-white text-white",
  };

  const iconClasses = {
    primary: "bg-[#064163] text-white",
    secondary: "bg-[#84CFFA] text-[#064163]",
    white: "bg-[#064163] text-white",
    dark: "bg-white text-[#1A1A1A]",
    outline: "bg-white text-[#064163]",
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`.trim();

  const content = (
    <>
      <span className="whitespace-nowrap">{children}</span>
      {showIcon && (
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${iconClasses[variant]}`}>
          <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
        </div>
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
    <button type={type} onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
}
