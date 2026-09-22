"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  text?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function Button({
  text,
  href,
  onClick,
  className = "",
  children,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center bg-[#A12624] hover:bg-[#881e1c] text-white rounded-[8px] min-[3800px]:rounded-[16px] px-6 py-2.5 sm:px-7 sm:py-3 min-[2500px]:px-10 min-[2500px]:py-4 min-[3800px]:px-14 min-[3800px]:py-6 transition-all duration-200 cursor-pointer select-none text-center shadow-md active:scale-95";

  const content = (
    <span className="button whitespace-nowrap">
      {children || text}
    </span>
  );

  const finalClassName = `${baseStyles} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={finalClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={finalClassName}>
      {content}
    </button>
  );
}

