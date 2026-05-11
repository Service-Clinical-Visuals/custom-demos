import React from "react";
import Link from "next/link";

type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'white' | 'outline' | 'outline-gray';
    size?: 'default' | 'sm' | 'xs' | 'lg';
    radius?: 'none' | 'sm' | 'default' | 'md' | 'lg' | 'full';
    className?: string;
    href?: string;
    onClick?: () => void;
    target?: string;
};

export default function Button({
    children,
    variant = 'primary',
    size = 'default',
    radius = 'none',
    className = '',
    href,
    onClick,
    target
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center gap-2 font-bold transition-all tracking-tight";

    const variants = {
        primary: "bg-[#00B341] text-white hover:bg-[#009636] shadow-sm",
        white: "bg-white text-[#00B341] hover:bg-gray-50 shadow-md",
        outline: "bg-transparent border border-white text-white hover:bg-white hover:text-[#00B341]",
        "outline-gray": "border-2 border-gray-200 text-gray-600 hover:bg-gray-100",
    };

    const sizes = {
        xs: "px-3 py-1 text-[10px]",
        sm: "px-6 py-2 text-sm",
        default: "px-8 py-3.5 text-[15px] lg:text-base",
        lg: "px-10 py-4 text-[15px] lg:text-base",
    };

    const radiuses = {
        none: "rounded-none",
        sm: "rounded-sm",
        default: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${radiuses[radius]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName} target={target}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={combinedClassName}>
            {children}
        </button>
    );
}
