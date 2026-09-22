import React from "react";

interface SectionBadgeProps {
  text: string;
  className?: string;
  center?: boolean;
}

export default function SectionBadge({
  text,
  className = "",
  center = false,
}: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 min-[3800px]:gap-4 ${
        center ? "justify-center" : ""
      } ${className}`}
    >
      <div className="w-5 sm:w-6 min-[2500px]:w-10 min-[3800px]:w-14 h-[2.5px] sm:h-[3px] min-[2500px]:h-[4px] min-[3800px]:h-[6px] bg-[#A12624] rounded-full shrink-0" />
      <h4 className="text-[#F6F6F6] font-semibold tracking-wide whitespace-nowrap">
        {text}
      </h4>
    </div>
  );
}
