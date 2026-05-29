"use client";

import { ArrowUpRight } from "lucide-react";

interface TradeCardProps {
  title: string;
  image: string;
  delay?: number;
}

export default function JlmTradeCard({
  title,
  image,
  delay = 0,
}: TradeCardProps) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="
        group
        relative
        h-[560px]
        w-[455px]
        overflow-hidden
        transition-all
        duration-500
        hover:-translate-y-2
        rounded-lg
      "

       style={{
        clipPath:
          "polygon(18% 0%,100% 0%,100% 100%,0% 100%,0% 14%)",
      }}
    >
      <img
        src={image}
        alt=""
        className="
          cursor-pointer
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
        "
      />

      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <div
        className="
          absolute
          bottom-3
          left-3
          right-3
          flex
          h-[42px]
          items-center
          justify-between
          rounded-lg
          bg-black/20
          px-4
          backdrop-blur-md
        "
      >
        <span className="text-white font-medium">
          {title}
        </span>

        <ArrowUpRight
          size={18}
          className="text-[#F7B500]"
        />
      </div> */}
    </div>
  );
}