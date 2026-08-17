import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'white';
  fullWidth?: boolean;
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  className = '', 
  variant = 'primary',
  fullWidth = false
}: ButtonProps) {
  
  const isWhite = variant === 'white';
  const bgClass = isWhite ? "bg-white text-[#9a5631] hover:bg-gray-100" : "bg-[#9a5631] text-white hover:bg-opacity-90";
  
  const baseClass = `${bgClass} px-6 py-2.5 flex items-center ${fullWidth ? 'justify-center w-full' : 'w-max'} space-x-2 transition-all ${className}`;

  const buttonContent = (
    <button onClick={onClick} className={baseClass}>
      <span className="ibm-plex-sans btn-text font-semibold">{children}</span>
      <img 
        src="/medical/tunning-element/arrow-right.png" 
        alt="rightarrow" 
        className={`w-5 h-5 ${isWhite ? 'brightness-0' : ''}`} // if we need a dark arrow for white bg later
      />
    </button>
  );

  if (href) {
    return (
      <Link href={href} className={fullWidth ? 'w-full block' : ''}>
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
}
