import Container from "./Container";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const features = [
  "Precision point-grinding for comfort and non-coring benefit",
  "High-quality stainless steel construction for superior strength and durability",
  "Ergonomic hub design for enhanced grip and better tactile control",
  "Available with plastic or metal stylet with integrated wings or detachable wings",
  "Compatible with standard epidural anesthesia techniques",
];

export default function Precision() {
  return (
    <section className="bg-[#F1F1F1] py-20">
      <Container>
        {/* Header row */}
        <div className="flex flex-col gap-5 md:flex-row md:gap-0 items-center justify-between mb-4">
          <h2 className="heading leading-[35px]! md:leading[28px]! text-center md:text-start" data-aos="fade-right">Precision Engineered Epidural Needles</h2>
          <a
            href="#"
            className="flex-shrink-0 bg-primary hover:bg-[#004a75] transition-colors content-white font-semibold px-6 py-2.5 rounded"
            data-aos="fade-left"
          >
            View All Products
          </a>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 mb-10" />

        {/* Main content */}
        <div className="grid grid-cols-1 2xl:grid-cols-[55fr_45fr] gap-8 items-center">
          {/* Checkerboard placeholder */}
          <div
            className="w-full aspect-[990/520] rounded-lg"
            data-aos="fade-right"
          >
            <div className="relative w-full h-full aspect-video rounded-lg overflow-hidden ">
                <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover mix-blend-normal" />
            </div>
         </div>

          {/* Details */}
          <div data-aos="fade-up" data-aos-delay="150">
            <p className="content mb-8">
              Our epidural needles are designed to deliver exceptional precision,
              safety, and comfort during regional anesthesia procedures.
              Manufactured from high-grade medical stainless steel, each needle
              features a finely crafted tip for smooth tissue penetration and
              enhanced tactile feedback. Available in multiple gauge sizes and
              lengths, these needles support a wide range of clinical
              applications while ensuring reliable performance. Color-coded hubs
              simplify size identification, helping healthcare professionals work
              efficiently in demanding medical environments.
            </p>

            <ul className="flex flex-col gap-4">
              {features.map((feature, index) => (
                <li key={feature} className="flex items-start gap-3" data-aos="fade-up" data-aos-delay={index * 100}>
                  <img
                    src="/medical/myco-medical/check.png"
                    alt=""
                    className="w-6 h-6 flex-shrink-0 mt-0.5"
                  />
                  <span className="content">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
