"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  Search,
  ChevronRight,
  ChevronDown,
  Grid2x2Plus,
  FlaskConical,
  Tag,
  SquareCheck,
  LayoutGrid,
  Grid3x3,
  LayoutList,
} from "lucide-react";
import FilterAccordion, { FilterOptionList, PriceRangeFilter } from "./FilterAccordion";
import ProductCard from "./ProductCard";
import {
  products,
  categoryOptions,
  volumeOptions,
  statusOptions,
  PRICE_MIN,
  PRICE_MAX,
  formatPrice,
  volumeMatches,
  type Product,
} from "./products";

type ViewMode = "grid" | "grid-dense" | "list";
type SortKey = "default" | "popularity" | "rating" | "latest" | "price-asc" | "price-desc";

const sortOptions: { key: SortKey; label: string }[] = [
  { key: "default", label: "Default Sorting" },
  { key: "popularity", label: "Popularity" },
  { key: "rating", label: "Average Rating" },
  { key: "latest", label: "Latest" },
  { key: "price-asc", label: "Price : Ascending" },
  { key: "price-desc", label: "Price : Descending" },
];

const sorters: Record<Exclude<SortKey, "default">, (a: Product, b: Product) => number> = {
  popularity: (a, b) => b.popularity - a.popularity,
  rating: (a, b) => b.rating - a.rating,
  latest: (a, b) => b.id - a.id,
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
};

const viewModes: { key: ViewMode; label: string; icon: typeof LayoutGrid }[] = [
  { key: "grid", label: "Grid view", icon: LayoutGrid },
  { key: "grid-dense", label: "Compact grid view", icon: Grid3x3 },
  { key: "list", label: "List view", icon: LayoutList },
];

const gridClasses: Record<ViewMode, string> = {
  grid: "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3",
  "grid-dense": "grid-cols-2 md:grid-cols-3 xl:grid-cols-4",
  list: "grid-cols-1",
};

const toggle = (list: string[], value: string) =>
  list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

export default function AllProducts() {
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [volumes, setVolumes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([PRICE_MIN, PRICE_MAX]);
  const [statuses, setStatuses] = useState<string[]>([]);
  const [sort, setSort] = useState<SortKey>("default");
  const [sortOpen, setSortOpen] = useState(false);
  const [view, setView] = useState<ViewMode>("grid");
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sortOpen) return;
    const close = (e: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) setSortOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [sortOpen]);

  const visibleProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    const [minPrice, maxPrice] = priceRange;

    const filtered = products.filter((p: Product) => {
      if (q && !`${p.title} ${p.category} ${p.description}`.toLowerCase().includes(q)) return false;
      if (categories.length && !p.filterCategories.some((c) => categories.includes(c))) return false;
      if (volumes.length && !volumes.some((v) => volumeMatches(v, p.volume))) return false;
      if (p.price < minPrice || p.price > maxPrice) return false;
      if (statuses.length && !p.status.some((s) => statuses.includes(s))) return false;
      return true;
    });

    return sort === "default" ? filtered : [...filtered].sort(sorters[sort]);
  }, [query, categories, volumes, priceRange, statuses, sort]);

  const priceFiltered = priceRange[0] !== PRICE_MIN || priceRange[1] !== PRICE_MAX;
  const hasFilters = query || categories.length || volumes.length || priceFiltered || statuses.length;
  const clearAll = () => {
    setQuery("");
    setCategories([]);
    setVolumes([]);
    setPriceRange([PRICE_MIN, PRICE_MAX]);
    setStatuses([]);
  };

  return (
    <section className="pt-8 pb-16 md:pt-10 md:pb-20 desk:pb-24 min-[2500px]:pt-16 min-[2500px]:pb-36">
      <div className="custom-container">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-small flex items-center gap-2 min-[2500px]:gap-3 text-[#CACACA]">
          <Link href="/syprin" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 min-[2500px]:w-6 min-[2500px]:h-6" />
          <span className="text-[#F6F6F6]">Product</span>
        </nav>

        {/* Title + Search */}
        <div className="mt-6 md:mt-8 min-[2500px]:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-10">
          <div className="max-w-[560px] min-[2500px]:max-w-[900px] min-[3800px]:max-w-[1200px]">
            <h1 className="text-[#F6F6F6]">All Products</h1>
            <p className="text-[#CACACA] mt-2 md:mt-3 min-[2500px]:mt-5">
              Explore our range of automotive care products designed for reliable performance, protection, and lasting engine efficiency.
            </p>
          </div>

          <label className="relative w-full md:w-[300px] desk:w-[340px] min-[2500px]:w-[520px] min-[3800px]:w-[700px] md:mb-3 flex-shrink-0">
            <span className="sr-only">Search products</span>
            <Search className="absolute left-3.5 min-[2500px]:left-5 top-1/2 -translate-y-1/2 w-4 h-4 min-[2500px]:w-7 min-[2500px]:h-7 text-[#6B6B6B] pointer-events-none" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Products"
              className="text-small w-full bg-white text-[#1F1F1F] placeholder:text-[#8A8A8A] rounded-[4px] min-[3800px]:rounded-[8px] pl-10 pr-4 py-2.5 min-[2500px]:pl-16 min-[2500px]:py-5 outline-none focus:ring-2 focus:ring-accent"
            />
          </label>
        </div>

        {/* Sidebar + Products */}
        <div className="mt-8 md:mt-12 min-[2500px]:mt-20 grid grid-cols-1 desk:grid-cols-[240px_1fr] xl:grid-cols-[250px_1fr] min-[2500px]:grid-cols-[420px_1fr] min-[3800px]:grid-cols-[560px_1fr] gap-6 desk:gap-7 min-[2500px]:gap-14">
          {/* Filters */}
          <aside className="grid grid-cols-1 sm:grid-cols-2 desk:grid-cols-1 gap-3 md:gap-3.5 min-[2500px]:gap-6 content-start desk:sticky desk:top-[96px]">
            <FilterAccordion label="Categories" icon={Grid2x2Plus}>
              <FilterOptionList options={categoryOptions} selected={categories} onToggle={(o) => setCategories(toggle(categories, o))} />
            </FilterAccordion>
            <FilterAccordion label="Volume" icon={FlaskConical}>
              <FilterOptionList options={volumeOptions} selected={volumes} onToggle={(o) => setVolumes(toggle(volumes, o))} />
            </FilterAccordion>
            <FilterAccordion label="Price" icon={Tag}>
              <PriceRangeFilter min={PRICE_MIN} max={PRICE_MAX} value={priceRange} onChange={setPriceRange} format={(v) => formatPrice(v).replace(",00", "")} />
            </FilterAccordion>
            <FilterAccordion label="Status" icon={SquareCheck}>
              <FilterOptionList options={statusOptions} selected={statuses} onToggle={(o) => setStatuses(toggle(statuses, o))} bold />
            </FilterAccordion>
          </aside>

          <div className="min-w-0">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 md:gap-4">
              <span className="text-small text-[#CACACA]">{visibleProducts.length} (Results)</span>

              <div className="flex items-center gap-3 md:gap-4 min-[2500px]:gap-6">
                {/* Sort */}
                <div ref={sortRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setSortOpen(!sortOpen)}
                    aria-haspopup="listbox"
                    aria-expanded={sortOpen}
                    className={`flex items-center justify-between gap-2 md:gap-3 min-w-[190px] sm:min-w-[230px] min-[2500px]:min-w-[380px] min-[3800px]:min-w-[500px] bg-primary hover:bg-primary-hover border-r-[3px] min-[2500px]:border-r-[5px] border-accent px-3 py-2 md:py-2.5 min-[2500px]:px-5 min-[2500px]:py-4 transition-colors ${
                      sortOpen ? "rounded-t-[4px] min-[3800px]:rounded-t-[8px]" : "rounded-[4px] min-[3800px]:rounded-[8px]"
                    }`}
                  >
                    <span className="text-small text-[#CACACA] hidden sm:inline">Sort by :</span>
                    <span className="flex items-center gap-1.5 min-[2500px]:gap-3">
                      <span className="button text-[#F6F6F6]">{sortOptions.find((o) => o.key === sort)?.label}</span>
                      <ChevronDown className={`w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 text-[#F6F6F6] transition-transform ${sortOpen ? "rotate-180" : ""}`} fill="currentColor" />
                    </span>
                  </button>
                  {sortOpen && (
                    <ul
                      role="listbox"
                      className="absolute left-0 right-0 top-full z-20 bg-primary border-r-[3px] min-[2500px]:border-r-[5px] border-accent rounded-b-[4px] min-[3800px]:rounded-b-[8px] shadow-2xl px-2 pb-3 pt-1 min-[2500px]:px-4 min-[2500px]:pb-5"
                    >
                      {sortOptions.map((option) => (
                        <li key={option.key} role="option" aria-selected={sort === option.key}>
                          <button
                            type="button"
                            onClick={() => {
                              setSort(option.key);
                              setSortOpen(false);
                            }}
                            className={`text-small w-full text-left py-2 min-[2500px]:py-3.5 border-b border-white/40 transition-colors ${
                              sort === option.key ? "text-white font-semibold" : "text-[#E5E5E5] hover:text-white"
                            }`}
                          >
                            {option.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* View mode */}
                <div className="flex items-center gap-2 md:gap-2.5 min-[2500px]:gap-4">
                  {viewModes.map(({ key, label, icon: Icon }) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setView(key)}
                      aria-label={label}
                      aria-pressed={view === key}
                      className={`flex w-9 h-9 md:w-10 md:h-10 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-20 min-[3800px]:h-20 items-center justify-center rounded-full bg-primary hover:bg-primary-hover transition-colors ${
                        view === key ? "text-white ring-1 ring-white/40" : "text-[#9A9A9A]"
                      }`}
                    >
                      <Icon className="w-[18px] h-[18px] min-[2500px]:w-8 min-[2500px]:h-8" fill={key === "grid" ? "currentColor" : "none"} strokeWidth={key === "grid" ? 2 : 2.5} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {visibleProducts.length > 0 ? (
              <div className={`mt-5 md:mt-6 min-[2500px]:mt-10 grid ${gridClasses[view]} gap-4 md:gap-5 xl:gap-6 min-[2500px]:gap-10`}>
                {visibleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} layout={view === "list" ? "list" : "grid"} />
                ))}
              </div>
            ) : (
              <div className="mt-6 bg-primary rounded-[4px] px-6 py-14 min-[2500px]:py-24 flex flex-col items-center text-center gap-4">
                <p className="text-[#CACACA]">No products match your search or filters.</p>
                {hasFilters ? (
                  <button
                    type="button"
                    onClick={clearAll}
                    className="button bg-accent hover:bg-accent-hover text-white rounded-[3px] px-5 py-2 min-[2500px]:px-8 min-[2500px]:py-3 transition-colors"
                  >
                    Clear filters
                  </button>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
