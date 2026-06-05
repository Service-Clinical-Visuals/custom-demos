import { ArrowRight } from "lucide-react";

export default function PrimaryButton({
  text = "Discover Innovation",
  className = "",
  bgColor = "#11B5E4",
  textColor = "#FFFFFF",
}) {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}

      className={`
        inline-flex items-center gap-2
        font-semibold
        text-sm
        px-6 py-2
        rounded-full
        transition-all duration-300
        ${className}
      `}
    >
      {text}
      <ArrowRight size={18} strokeWidth={2.5} />
    </button>
  );
}