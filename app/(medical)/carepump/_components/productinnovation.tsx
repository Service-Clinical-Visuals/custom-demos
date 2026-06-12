import Image from "next/image";


const gallery = [
  { src: "/medical/carepump/images/productinnovation1.jpg", span: false },
  { src: "/medical/carepump/images/productinnovation3.jpg", span: true },
  { src: "/medical/carepump/images/productinnovation4.jpg", span: false },
  { src: "/medical/carepump/images/productinnovation2.jpg", span: false },
  { src: "/medical/carepump/images/productinnovation5.jpg", span: false },
];



export default function ProductInnovation() {

  return (<>
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">

        {/* Heading */}
        <div data-aos="fade-up" className="text-center max-w-6xl mx-auto mb-14">
          <h2 className="
                text-[24px]
                sm:text-[28px]
                md:text-[30px]
                lg:text-[32px]
                font-bold
                text-[#333]
                leading-[1.2]
                mb-4 lg:mb-6
                ">
            Product innovation on an international scale
          </h2>

          <p className="
                text-[#777]
                text-[14px]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[17px]
                leading-7
                lg:leading-8
                ">
            We want to enable the use of the most modern devices for pressotherapy to our clients regardless of their place of residence, which is why we participate in the largest medical fairs: Medica Düsseldorf and Arab Health in Dubai, during which we establish contacts that allow us to build an international distribution network.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid lg:grid-cols-[1fr_1fr_0.8fr] gap-4 auto-rows-[350px]">
          {gallery.map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className={`
        overflow-hidden rounded-[24px] shadow-md
        ${item.span ? "row-span-2" : ""}
      `}
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  </>);
}