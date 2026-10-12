"use client";

import React, { useState } from "react";
import { Heart } from "lucide-react";

const images = [1, 2, 3, 4, 5, 6, 7].map((n) => `/moto/syprin-productdetail/${n}.webp`);

export default function ProductGallery() {
  const [active, setActive] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex flex-col gap-4 md:gap-5 min-[2500px]:gap-8 w-full max-w-[640px] desk:max-w-none mx-auto desk:mx-0">
      {/* Main image */}
      <div className="relative w-full aspect-[677/660] overflow-hidden rounded-[4px] min-[3800px]:rounded-[8px] bg-[#0f1a2e]">
        <img
          key={images[active]}
          src={images[active]}
          alt={`ORIGINAL SYPRIN Diesel Injector and System Cleaner – image ${active + 1}`}
          className="w-full h-full object-cover animate-[pd-fade_0.35s_ease-out]"
        />

        <button
          type="button"
          onClick={() => setLiked(!liked)}
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={liked}
          className="absolute top-4 left-4 md:top-5 md:left-5 min-[2500px]:top-8 min-[2500px]:left-8 w-9 h-9 md:w-10 md:h-10 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full border-2 border-white/90 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          <Heart
            className={`w-4 h-4 md:w-[18px] md:h-[18px] min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 transition-colors ${liked ? "text-cart" : ""}`}
            fill={liked ? "currentColor" : "none"}
            strokeWidth={2.2}
          />
        </button>

        <span className="pd-pill absolute top-4 right-4 md:top-5 md:right-5 min-[2500px]:top-8 min-[2500px]:right-8 bg-[#7AB929] text-white rounded-full px-3 py-1 min-[2500px]:px-5 min-[2500px]:py-2">
          Sale
        </span>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-7 gap-2 sm:gap-3 min-[2500px]:gap-5">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show image ${i + 1}`}
            aria-current={active === i}
            className={`aspect-square overflow-hidden rounded-[3px] min-[3800px]:rounded-[6px] border-2 transition-all ${
              active === i ? "border-white" : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
