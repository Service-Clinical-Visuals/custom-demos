import React from "react";

export type TypographyVariant =
  | "hero"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body"
  | "body-sm"
  | "caption";

export type TypographyWeight =
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold";

interface TypographyProps {
  variant?: TypographyVariant;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  weight?: TypographyWeight;
  color?: string;
}

const variantStyles: Record<TypographyVariant, string> = {
  hero: "text-[36px] sm:text-[46px] md:text-[54px] lg:text-[60px] leading-[1.15] tracking-tight",
  h1: "text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] leading-[1.2] tracking-tight",
  h2: "text-[24px] sm:text-[30px] md:text-[36px] lg:text-[38px] leading-[1.2]",
  h3: "text-[20px] sm:text-[22px] md:text-[24px] leading-[1.3]",
  h4: "text-[18px] sm:text-[20px] leading-[1.3]",
  h5: "text-[15px] sm:text-[16px] leading-[1.3]",
  body: "text-[16px] lg:text-[17px] 2xl:text-[20px] leading-[26px] md:leading-[28px]",
  "body-sm": "text-[14px] lg:text-[15px] leading-[22px] md:leading-[24px]",
  caption: "text-[12px] lg:text-[13px] leading-[18px] tracking-wide",
};

const weightStyles: Record<TypographyWeight, string> = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

// Default weights: heading weight 600, subheading/body weight 400
const defaultWeights: Record<TypographyVariant, TypographyWeight> = {
  hero: "semibold",
  h1: "semibold",
  h2: "semibold",
  h3: "semibold",
  h4: "semibold",
  h5: "semibold",
  body: "normal",
  "body-sm": "normal",
  caption: "normal",
};

const defaultElement: Record<TypographyVariant, React.ElementType> = {
  hero: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  body: "p",
  "body-sm": "p",
  caption: "span",
};

export const Typography: React.FC<TypographyProps> = ({
  variant = "body",
  as,
  children,
  className = "",
  weight,
  color,
}) => {
  const Component = as || defaultElement[variant];
  const activeWeight = weight || defaultWeights[variant];

  const combinedStyles = [
    "font-outfit antialiased",
    `typography-${variant}`,
    variantStyles[variant],
    weightStyles[activeWeight],
    color,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Component className={combinedStyles}>{children}</Component>;
};
