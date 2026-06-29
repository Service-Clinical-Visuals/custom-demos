import { ArrowUpRight } from "lucide-react";
import Container from "./Container";

const products = [
  {
    name: "RELI® Push Button Safety Blood Collection Set",
    image: "/medical/myco-medical/products/product1.png",
    href: "#",
  },
  {
    name: "RELI® Safety Blood Collection Set with EZ-Flash® Technology",
    image: "/medical/myco-medical/products/product2.png",
    href: "#",
  },
  {
    name: "RELI® Blood Transfer Devices, Male and Female",
    image: "/medical/myco-medical/products/product3.png",
    href: "#",
  },
];

export default function Products() {
  return (
    <section className="bg-white py-16">
      <Container>
        {/* Header row */}
        <div className="flex flex-col gap-5 md:flex-row md:gap-0 items-center justify-between mb-4">
          <h2 className="heading leading-[35px]! md:leading[28px]! text-center md:text-start" data-aos="fade-right">Our Products</h2>
          <a
            href="#"
            className="flex-shrink-0 bg-primary hover:bg-[#004a75] transition-colors content-white font-semibold px-6 py-2.5 rounded"
            data-aos="fade-left"
          >
            View All Products
          </a>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 mb-10" />

        {/* Product grid */}
        <div className="grid  lg:grid-cols-2 2xl:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={product.name} data-aos="fade-up" data-aos-delay={index * 120} className={index == 2 ? 'lg:col-span-2 lg:w-[calc(50%-12px)] lg:mx-auto 2xl:col-span-1 2xl:w-auto 2xl:mx-0' : ''}>
              {/* Image */}
              <div className="bg-[#f2f2f2] flex items-center justify-center aspect-[4/3] overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Name + arrow button */}
              <div className="flex items-center justify-between gap-4">
                <p className="heading2 text-[20px]!">
                  {product.name}
                </p>
                <a
                  href={product.href}
                  className="flex-shrink-0 w-18 h-18 bg-primary hover:bg-[#004a75] transition-colors flex items-center justify-center rounded"
                  aria-label={`View ${product.name}`}
                >
                  <ArrowUpRight size={22} className="text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
