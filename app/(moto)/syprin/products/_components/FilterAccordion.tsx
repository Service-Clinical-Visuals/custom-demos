"use client";

import React, { useState } from "react";
import { ChevronDown, type LucideIcon } from "lucide-react";

interface FilterAccordionProps {
  label: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export default function FilterAccordion({ label, icon: Icon, children }: FilterAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-primary rounded-[4px] min-[3800px]:rounded-[8px] border-r-[3px] min-[2500px]:border-r-[5px] border-accent overflow-hidden self-start w-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 px-3 py-2.5 md:py-3 min-[2500px]:px-5 min-[2500px]:py-5 min-[3800px]:py-7 text-[#F6F6F6] hover:bg-primary-hover transition-colors"
      >
        <span className="flex items-center gap-3 min-[2500px]:gap-5">
          <Icon className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10" strokeWidth={2} />
          <span className="filter-label">{label}</span>
        </span>
        <ChevronDown
          className={`w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="currentColor"
        />
      </button>

      <div className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="px-3 pb-4 pt-1 min-[2500px]:px-5 min-[2500px]:pb-7">{children}</div>
        </div>
      </div>
    </div>
  );
}

interface FilterOptionListProps {
  options: readonly string[];
  selected: string[];
  onToggle: (option: string) => void;
  bold?: boolean;
}

// Underlined text rows, as in the design; click to toggle (multi-select)
export function FilterOptionList({ options, selected, onToggle, bold = false }: FilterOptionListProps) {
  return (
    <ul className="flex flex-col pr-3 min-[2500px]:pr-6">
      {options.map((option) => {
        const isSelected = selected.includes(option);
        return (
          <li key={option}>
            <button
              type="button"
              onClick={() => onToggle(option)}
              aria-pressed={isSelected}
              className={`text-small w-full text-left flex items-center justify-between gap-2 py-2 min-[2500px]:py-3.5 border-b border-white/40 transition-colors ${
                bold ? "font-semibold" : ""
              } ${isSelected ? "text-white" : "text-[#E5E5E5] hover:text-white"}`}
            >
              <span className={isSelected ? "font-semibold" : ""}>{option}</span>
              <span
                className={`w-2 h-2 min-[2500px]:w-3 min-[2500px]:h-3 rounded-full shrink-0 transition-colors ${isSelected ? "bg-accent" : "bg-transparent"}`}
                aria-hidden="true"
              />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

interface PriceRangeFilterProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  format: (value: number) => string;
}

// Two-thumb slider built from two overlapping range inputs (thumb styles live in globals.css)
export function PriceRangeFilter({ min, max, value, onChange, format }: PriceRangeFilterProps) {
  const [low, high] = value;
  const pct = (v: number) => ((v - min) / (max - min)) * 100;

  return (
    <div className="pt-2 min-[2500px]:pt-4">
      <div className="text-small flex items-center justify-between gap-2 text-[#9A9A9A]">
        <span>Price :</span>
        <span>
          {format(low)} — {format(high)}
        </span>
      </div>
      <div className="relative h-5 min-[2500px]:h-8 mt-2 min-[2500px]:mt-4">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1 min-[2500px]:h-2 rounded-full bg-white/25" />
        <div
          className="absolute top-1/2 -translate-y-1/2 h-1 min-[2500px]:h-2 rounded-full bg-white"
          style={{ left: `${pct(low)}%`, right: `${100 - pct(high)}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={1}
          value={low}
          onChange={(e) => onChange([Math.min(Number(e.target.value), high), high])}
          aria-label="Minimum price"
          className="price-range absolute inset-0 w-full"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={1}
          value={high}
          onChange={(e) => onChange([low, Math.max(Number(e.target.value), low)])}
          aria-label="Maximum price"
          className="price-range absolute inset-0 w-full"
        />
      </div>
    </div>
  );
}
