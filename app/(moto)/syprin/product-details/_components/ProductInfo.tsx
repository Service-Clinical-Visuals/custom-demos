"use client";

import React, { useEffect, useState } from "react";
import { Star, CircleCheck, Minus, Plus, ShoppingBag, Zap, Check } from "lucide-react";

const RATING = 4;
const REVIEW_COUNT = 142;
const OLD_PRICE = 29.96;
const PRICE = 20.45;
const SAVE_PERCENT = 12; // as shown in the design

const features = [
  "Effectiveness of diesel system cleaners and additives proven in independent tests.",
  "Developed and manufactured in Germany, shipped directly from the manufacturer. Easy disposal.",
  "Combustion Matrix: Restores optimal spray atomization, quieter idle & reduced soot.",
  "A true care balm for diesel engines. Based on our highly developed care matrix, your diesel engine is flushed.",
];

const formatPrice = (value: number) =>
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(value);

const iconSm = "w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8";

export default function ProductInfo() {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const t = setTimeout(() => setAdded(false), 2000);
    return () => clearTimeout(t);
  }, [added]);

  return (
    <div className="flex flex-col min-w-0">
      {/* Category tag */}
      <div className="flex items-center gap-2.5 min-[2500px]:gap-4">
        <span className="w-5 min-[2500px]:w-8 h-[3px] min-[2500px]:h-[5px] rounded-full bg-cart" />
        <span className="pd-tag text-[#F6F6F6]">Additive</span>
      </div>

      <h1 className="text-[#F6F6F6] mt-3 md:mt-4 min-[2500px]:mt-6">
        ORIGINAL SYPRIN Diesel Injector and System Cleaner
      </h1>
      <p className="pd-subtitle text-[#CACACA] mt-2 min-[2500px]:mt-4">
        ORIGINAL SYPRIN Diesel System Cleaner – Prevents engine damage, optimal engine performance
      </p>

      {/* Rating */}
      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-3 min-[2500px]:mt-5">
        <div className="flex items-center gap-0.5 min-[2500px]:gap-1" aria-label={`Rated ${RATING} out of 5`}>
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className="w-4 h-4 md:w-[18px] md:h-[18px] min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 text-[#F5B700]"
              fill={i < RATING ? "currentColor" : "none"}
              strokeWidth={2}
            />
          ))}
        </div>
        <span className="pd-rating text-[#F6F6F6]">{RATING.toFixed(1)}</span>
        <span className="pd-reviews text-[#9A9A9A]">({REVIEW_COUNT} verified German &amp; EU customer reviews)</span>
      </div>

      {/* Price */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-3 md:mt-4 min-[2500px]:mt-6 min-[2500px]:gap-x-5">
        <span className="pd-price text-[#8A8A8A] line-through decoration-1">{formatPrice(OLD_PRICE)}</span>
        <span className="pd-price text-[#F6F6F6]">{formatPrice(PRICE)}</span>
        <span className="pd-pill bg-cart text-white rounded-full px-3.5 py-1.5 min-[2500px]:px-6 min-[2500px]:py-2.5">
          Save {SAVE_PERCENT}%
        </span>
      </div>

      {/* Description */}
      <p className="text-[#E5E5E5] mt-4 md:mt-5 min-[2500px]:mt-8">
        SYPRIN Diesel Injection &amp; System Cleaner is a highly effective cleaning and maintenance additive combination designed for the fast, efficient, and cost-effective removal of disruptive deposits and contaminants from the fuel system of diesel engines. It helps restore smooth fuel flow, improve injector performance, and support efficient engine operation. Specially formulated additives provide optimum corrosion protection, enhance ignition readiness, and contribute to reliable engine performance and longer component life.
      </p>

      {/* Features */}
      <ul className="flex flex-col gap-2 md:gap-2.5 min-[2500px]:gap-4 mt-5 md:mt-6 min-[2500px]:mt-10">
        {features.map((feature) => (
          <li
            key={feature}
            className="pd-feature flex items-start gap-3 min-[2500px]:gap-5 border border-primary rounded-[3px] min-[3800px]:rounded-[6px] px-3.5 py-3 md:px-4 md:py-3.5 min-[2500px]:px-7 min-[2500px]:py-6 text-[#E5E5E5]"
          >
            <CircleCheck className={`${iconSm} text-checkout shrink-0 mt-0.5`} strokeWidth={2.2} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Quantity + actions */}
      <div className="grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr_1fr] gap-3 md:gap-3.5 min-[2500px]:gap-6 mt-8 md:mt-10 min-[2500px]:mt-16">
        <div className="flex items-center border border-primary rounded-[3px] min-[3800px]:rounded-[6px] h-11 md:h-12 min-[2500px]:h-20 min-[3800px]:h-24">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            disabled={qty <= 1}
            aria-label="Decrease quantity"
            className="h-full px-3 min-[2500px]:px-5 text-[#CACACA] hover:text-white disabled:opacity-40 disabled:hover:text-[#CACACA] transition-colors"
          >
            <Minus className={iconSm} />
          </button>
          <span className="pd-qty text-[#F6F6F6] w-8 min-[2500px]:w-14 text-center" aria-live="polite">{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(99, q + 1))}
            aria-label="Increase quantity"
            className="h-full px-3 min-[2500px]:px-5 text-[#CACACA] hover:text-white transition-colors"
          >
            <Plus className={iconSm} />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setAdded(true)}
          className="button uppercase flex items-center justify-center gap-2 min-[2500px]:gap-3 h-11 md:h-12 min-[2500px]:h-20 min-[3800px]:h-24 rounded-[3px] min-[3800px]:rounded-[6px] bg-cart hover:bg-cart-hover text-white transition-colors active:scale-[0.98]"
        >
          {added ? <Check className={iconSm} strokeWidth={2.5} /> : <ShoppingBag className={iconSm} strokeWidth={2.2} />}
          {added ? "Added to cart" : "Add to cart"}
        </button>

        <button
          type="button"
          className="button uppercase col-span-2 sm:col-span-1 flex items-center justify-center gap-2 min-[2500px]:gap-3 h-11 md:h-12 min-[2500px]:h-20 min-[3800px]:h-24 rounded-[3px] min-[3800px]:rounded-[6px] bg-checkout hover:bg-checkout-hover text-white transition-colors active:scale-[0.98]"
        >
          <Zap className={iconSm} fill="currentColor" strokeWidth={0} />
          Express Checkout
        </button>
      </div>
    </div>
  );
}
