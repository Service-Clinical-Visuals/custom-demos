"use client";

import React from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "body" | "lead" | "small";
  as?: React.ElementType;
  className?: string;
  color?: "primary" | "dark" | "body" | "white" | "muted" | "none";
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

  // Base responsive styling classes
  const variantStyles = {
    h1: "text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[38px] 2xl:text-[38px] leading-[1.15] tracking-tight font-bold",
    h2: "text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] xl:text-[34px] 2xl:text-[34px] leading-[1.2] tracking-tight font-semibold",
    h3: "text-[18px] sm:text-[21px] md:text-[25px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px] leading-[1.3] font-semibold",
    h4: "text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[1.4] font-semibold",
    h5: "text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[1.4] font-medium",
    h6: "text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] leading-[1.5] font-normal",
    h7: "text-[11px] sm:text-[12px] md:text-[12px] lg:text-[13px] xl:text-[13px] 2xl:text-[13px] leading-[1.5] font-normal",
    body: "text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] leading-[1.7]",
    lead: "text-[16px] sm:text-[17px] md:text-[19px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[1.6]",
    small: "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[13px] xl:text-[13px] 2xl:text-[13px] leading-[1.5]",
  };

  // Color classes
  const colorStyles = {
    primary: "text-[#9C0B38]",
    dark: "text-[#212121]",
    body: "text-[#333333]",
    white: "text-[#FFFFFF]",
    muted: "text-[#666666]",
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

  const combinedClasses = `
    font-outfit
    ${variantStyles[variant]}
    ${colorStyles[color]}
    ${weight ? weightStyles[weight] : ""}
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
