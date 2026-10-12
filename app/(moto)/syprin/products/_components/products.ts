export const categoryOptions = ["Oil", "Gasoline", "Bike Line", "Lead Substitute", "Diesel", "Cleaner", "Shaving Head Care"] as const;
export const volumeOptions = ["30ml", "100ml", "125ml", "130ml", "250ml", "300ml", "500ml", "550ml", "625ml", "750ml", "1,05ml"] as const;
export const statusOptions = ["On Sale", "Featured", "In Stock", "On Backorders"] as const;

export type FilterCategory = (typeof categoryOptions)[number];
export type ProductStatus = (typeof statusOptions)[number];

export interface Product {
  id: number; // higher = newer (used by "Latest")
  image: string;
  category: "Additive" | "Cleaner" | "Lead Substitute"; // label shown on the card
  filterCategories: FilterCategory[]; // which "Categories" filter entries match this product
  title: string;
  volume?: number; // ml; bundles and sets have none
  description: string;
  price: number; // EUR
  status: ProductStatus[];
  popularity: number; // units sold, used by "Popularity"
  rating: number; // 0-5, used by "Average Rating"
}

const img = (n: number) => `/moto/syprin-allproducts/${n}.webp`;

export const products: Product[] = [
  { id: 1, image: img(1), category: "Additive", filterCategories: ["Diesel"], title: "AdB Care Anti-Scale Additive", volume: 300, description: "Helps minimize crystallization and maintain a cleaner AdBlue® system.", price: 150, status: ["In Stock", "Featured"], popularity: 940, rating: 4.8 },
  { id: 2, image: img(2), category: "Additive", filterCategories: ["Diesel"], title: "ORIGINAL SYPRIN Diesel Additive", volume: 300, description: "Designed to clean the fuel system and optimize diesel engine performance.", price: 75.52, status: ["In Stock", "Featured"], popularity: 1210, rating: 4.7 },
  { id: 3, image: img(3), category: "Lead Substitute", filterCategories: ["Lead Substitute", "Gasoline"], title: "Lead Replacement", volume: 250, description: "Helps protect valves and maintain reliable performance in classic engines.", price: 150, status: ["In Stock"], popularity: 380, rating: 4.5 },
  { id: 4, image: img(4), category: "Cleaner", filterCategories: ["Diesel", "Cleaner"], title: "ORIGINAL SYPRIN DPF Cleaner", volume: 300, description: "Cleans diesel particulate filters during normal highway driving.", price: 75.52, status: ["In Stock", "On Sale"], popularity: 870, rating: 4.6 },
  { id: 5, image: img(5), category: "Additive", filterCategories: ["Diesel"], title: "AdB Care Anti-Scale Additive", volume: 250, description: "Helps minimize crystallization and maintain a cleaner AdBlue® system.", price: 18, status: ["In Stock", "On Sale"], popularity: 520, rating: 4.4 },
  { id: 6, image: img(6), category: "Cleaner", filterCategories: ["Bike Line", "Oil"], title: "Bicycle Chain Oil", volume: 100, description: "High-performance chain lubricant for smoother and more efficient cycling.", price: 18, status: ["In Stock", "Featured"], popularity: 660, rating: 4.9 },
  { id: 7, image: img(7), category: "Cleaner", filterCategories: ["Diesel"], title: "Diesel Frost Stop", volume: 250, description: "Helps prevent diesel fuel gelling and supports dependable winter operation.", price: 12.56, status: ["On Backorders"], popularity: 450, rating: 4.3 },
  { id: 8, image: img(8), category: "Additive", filterCategories: ["Diesel"], title: "Diesel All-Year Set", description: "The all-season solution for cleaner fuel systems, smoother diesel engine operation.", price: 12.56, status: ["In Stock", "On Sale"], popularity: 730, rating: 4.6 },
  { id: 9, image: img(9), category: "Additive", filterCategories: ["Gasoline"], title: "Gasoline Rescue", volume: 300, description: "Helps reduce deposits & maintain a clean, efficient petrol fuel system.", price: 18, status: ["In Stock"], popularity: 410, rating: 4.2 },
  { id: 10, image: img(10), category: "Cleaner", filterCategories: ["Diesel", "Cleaner"], title: "ORIGINAL SYPRIN DPF Cleaner", volume: 300, description: "Cleans diesel particulate filters during normal highway driving.", price: 150, status: ["In Stock"], popularity: 300, rating: 4.5 },
  { id: 11, image: img(11), category: "Cleaner", filterCategories: ["Gasoline", "Cleaner"], title: "Carburetor & engine flush bundle", description: "Essential engine care bundle for cleaner components and smoother performance.", price: 75.52, status: ["In Stock", "On Sale"], popularity: 280, rating: 4.4 },
  { id: 12, image: img(12), category: "Additive", filterCategories: ["Gasoline"], title: "Gasoline Additive", volume: 300, description: "Helps remove fuel system deposits, support cleaner engine operation.", price: 150, status: ["In Stock", "Featured"], popularity: 590, rating: 4.7 },
];

export const PRICE_MIN = 10;
export const PRICE_MAX = Math.ceil(Math.max(...products.map((p) => p.price)) / 10) * 10; // 150

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(value);

// "300ml" / "1,05ml" -> matches a product's volume in ml
export const volumeMatches = (option: string, volume?: number) =>
  volume !== undefined && option === `${volume}ml`;
