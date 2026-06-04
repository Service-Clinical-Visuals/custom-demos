import { Check } from "lucide-react";

interface BulletPointProps {
  text: string;
}

export default function SergBullet({ text }: BulletPointProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="min-w-[20px] h-[20px] rounded-full bg-[#2d3693] flex items-center justify-center mt-[2px]">
        <Check size={12} className="text-white stroke-[3]" />
      </div>

      <p className="text-[16px] leading-[1.9] text-[#6b6b6b] font-medium">
        {text}
      </p>
    </div>
  );
}