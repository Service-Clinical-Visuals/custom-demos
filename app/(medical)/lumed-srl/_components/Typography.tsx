"use client";

import React from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "body" | "lead" | "small";
  as?: React.ElementType;
  className?: string;
  color?: "primary" | "dark" | "body" | "white" | "muted" | "secondary" | "none";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  align?: "left" | "center" | "right" | "justify";
  href?: string;
}

export default function Typography({
  children,
  variant = "body",
  as,
  className = "",
  color = "body",
  weight,
  align,
  ...rest
}: TypographyProps) {
  // Determine which HTML tag to render
  const defaultTags: Record<string, React.ElementType> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    h7: "span",
    body: "p",
    lead: "p",
    small: "span",
  };

  const Component = as || defaultTags[variant] || "p";

  // Base responsive styling classes without hardcoded font weights
  const variantStyles = {
    h1: "text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[38px] 2xl:text-[38px] leading-[1.15] tracking-tight",
    h2: "text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] xl:text-[34px] 2xl:text-[34px] leading-[1.2] tracking-tight",
    h3: "text-[18px] sm:text-[21px] md:text-[25px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px] leading-[1.3]",
    h4: "text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[1.4]",
    h5: "text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[1.4]",
    h6: "text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] leading-[1.5]",
    h7: "text-[11px] sm:text-[12px] md:text-[12px] lg:text-[13px] xl:text-[13px] 2xl:text-[13px] leading-[1.5]",
    body: "text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] leading-[1.7]",
    lead: "text-[16px] sm:text-[17px] md:text-[19px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[1.6]",
    small: "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[13px] xl:text-[13px] 2xl:text-[13px] leading-[1.5]",
  };

  // Color classes using Lumed brand system with overrides
  const colorStyles = {
    primary: "text-primary!",
    dark: "text-[#1a1a1a]!",
    body: "text-[#333333]!",
    white: "text-[#FFFFFF]!",
    muted: "text-gray-500!",
    secondary: "text-primary!", // Maps to Lumed primary blue with override
    none: "",
  };

  // Weight classes
  const weightStyles = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  // Alignment classes
  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  const isHeading = ["h1", "h2", "h3", "h4", "h5", "h6", "h7"].includes(variant);
  const fontClass = isHeading ? "font-heading" : "font-sans";

  // Dynamic default weights
  const defaultWeights: Record<string, "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold"> = {
    h1: "bold",
    h2: "semibold",
    h3: "semibold",
    h4: "semibold",
    h5: "medium",
    h6: "normal",
    h7: "normal",
    body: "normal",
    lead: "normal",
    small: "normal",
  };

  const activeWeight = weight || defaultWeights[variant] || "normal";

  const combinedClasses = `
    ${fontClass}
    ${variantStyles[variant]}
    ${colorStyles[color]}
    ${weightStyles[activeWeight]}
    ${align ? alignStyles[align] : ""}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <Component className={combinedClasses} {...rest}>
      {children}
    </Component>
  );
}
