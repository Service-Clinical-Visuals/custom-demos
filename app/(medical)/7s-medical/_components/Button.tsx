import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  size?: 'md' | 'lg';
  variant?: 'primary' | 'white';
  fullWidth?: boolean;
}

export default function Button({
  href,
  size = 'md',
  variant = 'primary',
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const commonStyles = "inline-flex items-center justify-center font-bold tracking-wider rounded-[3px] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0";
  
  const variantStyles = variant === 'white'
    ? "bg-white hover:bg-gray-100 text-[#CE112D] hover:text-[#A70F25] shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
    : "bg-[#CE112D] hover:bg-[#A70F25] text-white shadow-[0_4px_15px_rgba(193,2,48,0.2)] hover:shadow-[0_6px_20px_rgba(193,2,48,0.3)]";

  const sizeStyles = size === 'lg'
    ? "px-8 h-[48px] text-[16px]"
    : "px-6 h-[44px] text-[15px]";
    
  const widthStyles = fullWidth ? "w-full" : "";

  const combinedStyles = `${commonStyles} ${variantStyles} ${sizeStyles} ${widthStyles} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedStyles} {...(props as any)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
