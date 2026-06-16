import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
  className?: string;
}

export default function Button({ 
  href = "#", 
  variant = "primary", 
  children = "Discover More", 
  className = "" 
}: ButtonProps) {
  
  const baseClasses = "inline-flex items-center justify-center gap-2 px-7 py-3 rounded-tl-2xl rounded-br-2xl font-bold font-[family-name:var(--font-exo-2)] transition-colors text-sm shadow-sm w-fit";
  
  const variantClasses = {
    primary: "bg-[#001f5c]  text-white",
    secondary: "bg-[#ffc107]  text-[#001f5c]",
  };

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
      <ArrowRight size={18} />
    </Link>
  );
}
