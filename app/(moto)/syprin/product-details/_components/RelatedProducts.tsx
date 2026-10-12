import Link from "next/link";

const products = [
  {
    image: "/moto/syprin-productdetail/e1.webp",
    category: "Additive",
    title: "ADB CARE ANTI-SCALE ADDITIVE",
    description: "300 ml • Cleans diesel particulate filters during normal highway driving.",
    price: 19.99,
  },
  {
    image: "/moto/syprin-productdetail/e2.webp",
    category: "Additive",
    title: "Diesel All-Year Set offer",
    description: "All-season diesel care for cleaner fuel systems and reliable performance.",
    price: 30.49,
  },
  {
    image: "/moto/syprin-productdetail/e3.webp",
    category: "Cleaner",
    title: "Bicycle Chain Cleaner",
    description: "All-weather chain lubrication with rust and wear protection.",
    price: 11.99,
  },
  {
    image: "/moto/syprin-productdetail/e4.webp",
    category: "Oil",
    title: "Shaving head oil",
    description: "Smooth lubrication and protection for clippers and trimmers.",
    price: 9.9,
  },
];

const formatPrice = (value: number) =>
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(value);

export default function RelatedProducts() {
  return (
    <section className="pb-14 md:pb-20 min-[2500px]:pb-32">
      <div className="custom-container">
        {/* Heading */}
        <div className="flex items-center gap-2.5 min-[2500px]:gap-4">
          <span className="w-5 min-[2500px]:w-8 h-[3px] min-[2500px]:h-[5px] rounded-full bg-accent" />
          <span className="pd-tag text-[#F6F6F6]">Discover Syprin</span>
        </div>

        <div className="mt-4 md:mt-5 min-[2500px]:mt-8 flex flex-col desk:flex-row desk:items-end desk:justify-between gap-5 desk:gap-10">
          <div className="max-w-[640px] desk:max-w-[56%] min-[2500px]:max-w-[1100px]">
            <h2 className="text-[#F6F6F6]">Engineered Synergistic Additives</h2>
            <p className="text-[#E5E5E5] mt-2 md:mt-3 min-[2500px]:mt-5">
              Explore our range of specialized automotive care solutions, carefully developed to support engine performance, fuel-system cleanliness, and long-term vehicle reliability.
            </p>
          </div>
          <Link
            href="/syprin/products"
            className="button self-start desk:self-auto desk:mb-6 shrink-0 bg-accent hover:bg-accent-hover text-white rounded-[2px] min-[3800px]:rounded-[6px] px-4 py-2.5 md:px-5 min-[2500px]:px-8 min-[2500px]:py-4 transition-colors"
          >
            Explore All Diesel Products
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-8 md:mt-10 min-[2500px]:mt-16 grid grid-cols-1 sm:grid-cols-2 desk:grid-cols-4 gap-4 md:gap-5 xl:gap-6 min-[2500px]:gap-10">
          {products.map((product) => (
            <article
              key={product.title}
              className="group relative bg-primary rounded-[4px] min-[3800px]:rounded-[8px] border border-transparent hover:border-white/50 p-3 md:p-3.5 min-[2500px]:p-6 flex flex-col transition-colors duration-300"
            >
              <div className="relative overflow-hidden rounded-[4px] min-[3800px]:rounded-[8px] aspect-[350/260] bg-[#1d2a44]">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-1 pt-5 md:pt-6 min-[2500px]:pt-9">
                <span className="pd-card-meta text-[#A8A8A8]">{product.category}</span>
                <h3 className="text-[#F6F6F6] font-medium mt-1 min-[2500px]:mt-3">
                  {/* Stretched link: covers the whole card */}
                  <Link href="/syprin/product-details" className="after:absolute after:inset-0 after:content-['']">
                    {product.title}
                  </Link>
                </h3>
                <p className="pd-feature text-[#CACACA] mt-2 min-[2500px]:mt-4">{product.description}</p>

                <div className="mt-auto pt-3 min-[2500px]:pt-6">
                  <div className="border-t border-dashed border-white/40 pt-4 min-[2500px]:pt-6 flex items-center justify-between gap-3">
                    <span className="pd-card-price text-[#F6F6F6]">{formatPrice(product.price)}</span>
                    <button
                      type="button"
                      className="button relative z-10 bg-accent hover:bg-accent-hover text-white rounded-[2px] min-[3800px]:rounded-[6px] px-5 py-1.5 min-[2500px]:px-9 min-[2500px]:py-3 transition-colors active:scale-95"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
