

import { Check } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
}

export default function SergFeatures({
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="relative bg-[#fbfbfb] rounded-[24px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[#ececec] min-h-[130px] px-10 py-8 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1">
      <div className="min-w-[22px] h-[22px] rounded-full bg-[#252f8d] flex items-center justify-center mt-[2px]">
        <Check size={13} className="text-white stroke-[3]" />
      </div>

      <div>
        <h3 className="text-[#252f8d] text-[24px] font-bold leading-tight">
          {title}
        </h3>

        <p className="mt-3 text-[#7b7b7b] text-[15px] leading-[1.8] max-w-[360px]">
          {description}
        </p>
      </div>
    </div>
  );
}