import React from "react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "footer-heading"
  | "footer-body";

type Color = "primary" | "secondary" | "dark" | "white" | "muted" | "gray" | "none";
type Weight = "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";

interface TypographyProps {
  variant?: Variant;
  color?: Color;
  weight?: Weight;
  className?: string;
  children: React.ReactNode;
}

export default function Typography({
  variant = "p",
  color = "muted",
  weight,
  className = "",
  children,
  ...props
}: TypographyProps & React.HTMLAttributes<HTMLElement>) {
  let Component: any = variant;
  let fontClass = "";

  if (variant === "footer-heading") {
    Component = "h3";
    fontClass = "footer-heading";
  } else if (variant === "footer-body") {
    Component = "p";
    fontClass = "footer-body";
  }

  const colorClasses = {
    primary: "text-[var(--color-primary)]",
    secondary: "text-[#353535]",
    dark: "text-[#0D0D0D]",
    white: "text-white",
    muted: "text-[#CACACA]",
    gray: "text-[#4B5563]",
    none: "",
  };

  const weightClasses = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  const finalClassName = `${fontClass} ${colorClasses[color]} ${
    weight ? weightClasses[weight] : ""
  } ${className}`.trim();

  return React.createElement(Component, { className: finalClassName, ...props }, children);
}
