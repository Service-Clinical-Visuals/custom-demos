"use client";

import React from "react";

interface SectionHeaderProps {
    subtitle: string;
    title: string;
    light?: boolean;
    mobileLight?: boolean;
    center?: boolean;
    subtitleClassName?: string;
    titleClassName?: string;
}

const SectionHeader = ({
    subtitle,
    title,
    light = false,
    mobileLight = false,
    center = false,
    subtitleClassName = "",
    titleClassName = ""
}: SectionHeaderProps) => {

    const colorClass = light ? "!text-white" : (mobileLight ? "!text-white lg:!text-[#103672]" : "text-[#103672]");
    const titleColorClass = light ? "!text-white" : (mobileLight ? "!text-white lg:!text-[#000000]" : "text-[#0e2a5e]");
    const bgClass = light ? "!bg-white" : (mobileLight ? "!bg-white lg:!bg-[#103672]" : "bg-[#103672]");
    const borderClass = light ? "!border-white" : (mobileLight ? "!border-white lg:!border-[#103672]" : "border-[#103672]");

    return (
        <div className={`mci-root  space-y-4 ${center ? "flex flex-col items-center text-center" : ""}`}>
            <div
                className={`flex items-center gap-2 font-semibold text-[16px] sub-head tracking-wide ${colorClass} ${subtitleClassName}`}
            >
                <span className="flex items-center">
                    <div className={`w-6 h-[2px]  ${bgClass}`} />
                    <div className={`w-[10px] h-[10px] border-2 mx-[-1px] ${borderClass}`} />
                </span>
                {subtitle}
            </div>

            <h2 className={`text-xl md:text-3xl font-semibold leading-tight ${titleColorClass} ${titleClassName}`}>
                {title}
            </h2>
        </div>
    );
};

export default SectionHeader;
