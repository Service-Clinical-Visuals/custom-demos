"use client";

import React from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "body" | "lead" | "small";
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
    body: "p",
    lead: "p",
    small: "span",
  };

  const Component = as || defaultTags[variant] || "p";

  // Base responsive styling classes
  const variantStyles = {
    h1: "text-[30px] sm:text-[40px] md:text-[48px] lg:text-[50px] xl:text-[54px] 2xl:text-[60px] 3xl:text-[68px] leading-[1.12] tracking-tight font-bold",
    h2: "text-[24px] sm:text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px] 3xl:text-[52px] leading-[1.2] tracking-tight font-semibold",
    h3: "text-[18px] sm:text-[20px] md:text-[22px] lg:text-[23px] xl:text-[24px] 2xl:text-[26px] 3xl:text-[30px] leading-[1.3] font-semibold",
    body: "text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px] leading-[1.7]",
    lead: "text-[16px] sm:text-[17px] md:text-[19px] lg:text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[25px] leading-[1.6]",
    small: "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[17px] leading-[1.5]",
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
