"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
    text: string;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "composite-white" | "composite-blue" | "outline" | "search";
    className?: string;
    showIcon?: boolean;
}

const Button = ({
    text,
    href,
    onClick,
    variant = "primary",
    className = "",
    showIcon = true,
}: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-between font-sans font-semibold transition-all duration-300 group active:scale-95 shadow-sm overflow-hidden text-sm md:text-base  select-none cursor-pointer";

    const variants = {
        primary: "bg-primary hover:bg-primary-hover text-white px-7 py-2.5 justify-center",
        "composite-white": "bg-white hover:bg-gray-50 text-primary p-[5px] pl-6 justify-between gap-4",
        "composite-blue": "bg-primary hover:bg-primary-hover text-white border border-primary p-[5px] pl-6 justify-between gap-4",
        outline: "border border-white text-white hover:bg-white hover:text-primary px-7 py-2.5 justify-center",
        search: "bg-primary text-white px-6 py-2 justify-center min-w-[100px]"
    };

    const isComposite = variant === "composite-white" || variant === "composite-blue";

    const content = (
        <>
            <span className={variant === "search" ? "mx-auto" : isComposite ? "tracking-wide" : ""}>
                {text}
            </span>
            {showIcon && isComposite && (
                <div
                    className={`
                        w-9 h-9 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0
                        ${variant === "composite-white" ? "bg-primary text-white" : "bg-white text-primary"}
                    `}
                >
                    <ArrowRight size={18} strokeWidth={2.5} />
                </div>
            )}
            {variant === "search" && (
                <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            )}
        </>
    );

    const finalStyles = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={finalStyles}>
                {content}
            </Link>
        );
    }

    return (
        <button type="button" onClick={onClick} className={finalStyles}>
            {content}
        </button>
    );
};

export default Button;
