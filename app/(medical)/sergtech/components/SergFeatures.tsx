

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
   <div className="relative bg-[#fbfbfb] rounded-[20px] md:rounded-[24px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[#ececec]  w-full px-5 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-14 lg:py-14 flex items-start gap-3 md:gap-4 transition-all duration-300 hover:-translate-y-1">
      <div className="min-w-[22px] h-[22px] rounded-full bg-[#252f8d] flex items-center justify-center mt-[2px]">
        <Check size={13} className="text-white stroke-[3]" />
      </div>

      <div>
        <h3 className="text-[#252f8d] text-xl font-bold leading-tight">
          {title}
        </h3>

        <p className="mt-3 text-[#7b7b7b] text-[16px] leading-[1.8] max-w-[360px]">
          {description}
        </p>
      </div>
    </div>
  );
}