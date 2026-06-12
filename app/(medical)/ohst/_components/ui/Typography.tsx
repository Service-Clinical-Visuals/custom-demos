import React from "react";

export type TypographyVariant =
  | "hero"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "h7"
  | "body"
  | "body-sm"
  | "caption"
  | "lead"
  | "small";

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
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  color?: string;
}

const variantStyles: Record<TypographyVariant, string> = {
  hero: "text-[30px] sm:text-[20px] md:text-[38px] lg:text-[38px] xl:text-[40px]  leading-[1.15] tracking-tight",
  h1: "text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[38px] 2xl:text-[38px] leading-[1.15] tracking-tight",
  h2: "text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] leading-[1.5] tracking-[0.005em]",
  h3: "text-[18px] sm:text-[21px] md:text-[25px] lg:text-[29px] xl:text-[29px] 2xl:text-[29px] leading-[1.3]",
  h4: "text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[1.4]",
  h5: "text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[1.4]",
  h6: "text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] leading-[1.5]",
  h7: "text-[11px] sm:text-[12px] md:text-[12px] lg:text-[13px] xl:text-[13px] 2xl:text-[13px] leading-[1.5]",
  body: "text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] leading-[1.7]",
  "body-sm": "text-[14px] lg:text-[15px] leading-[22px] md:leading-[24px]",
  caption: "text-[12px] lg:text-[13px] leading-[18px] tracking-wide",
  lead: "text-[16px] sm:text-[17px] md:text-[19px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[1.6]",
  small: "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[13px] xl:text-[13px] 2xl:text-[13px] leading-[1.5]",
};

const weightStyles = {
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
  h1: "bold",
  h2: "semibold",
  h3: "semibold",
  h4: "semibold",
  h5: "medium",
  h6: "normal",
  h7: "normal",
  body: "normal",
  "body-sm": "normal",
  caption: "normal",
  lead: "normal",
  small: "normal",
};

const defaultElement: Record<TypographyVariant, React.ElementType> = {
  hero: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  h7: "p",
  body: "p",
  "body-sm": "p",
  caption: "span",
  lead: "p",
  small: "small",
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
