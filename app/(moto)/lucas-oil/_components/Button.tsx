import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ternary' | 'white';
}

export default function Button({ children, href, onClick, className = '', variant = 'ternary' }: ButtonProps) {


  const clipPathStyle = {
  clipPath:
    "polygon(14px 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0 calc(100% - 14px), 0 14px)",
};

  const variants = {
    primary: 'bg-[#1d4174] text-white hover:bg-[#285799]',
    secondary: 'bg-[#00d2ff] text-[#050a1f] hover:bg-[#00b8e6]',
    ternary: 'bg-[#00c0e8] text-white hover:bg-[#00a8cc]',
    white: 'bg-white text-[#050a1f] hover:bg-gray-200'
  };

  const baseClasses = `inline-flex items-center justify-center px-4 py-2.5 font-semibold tracking-wide transition-transform hover:scale-105 shadow-md ${variants[variant]} ${className} !font-(family-name:--font-orbitron)`;

  if (href) {
    return (
      <Link href={href} className={baseClasses} style={clipPathStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses} style={clipPathStyle}>
      {children}
    </button>
  );
}
