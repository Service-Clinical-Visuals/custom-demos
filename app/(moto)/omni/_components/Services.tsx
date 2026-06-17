import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function Services() {
  const servicesData = [
    {
      title: "PACKAGING",
      image: "/moto/omni/service3.jpg",
      text: "Omni Specialty Packaging, LLC houses a state-of-the-art production facility. Operating out of the port of Bossier/Shreveport located on the Red River, We remain...",
    },
    {
      title: "DISTRIBUTION",
      image: "/moto/omni/service2.png",
      text: "We serve as a supplier and distributor of automotive and industrial chemicals and fluids to mass merchandisers, retailers, wholesale distributors. Omni Freight Systems...",
    },
    {
      title: "BLENDING",
      image: "/moto/omni/service1.jpg",
      text: "Omni Specialty Packaging, LLC, has the storage capability and capacity to purchase raw materials in bulk, thus allowing them to maximize their production...",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="custom-container">
        
        {/* Main Wrapper with blue border */}
        <div className="  bg-white  flex flex-col items-center" data-aos="fade-up">
          
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-6 max-w-6xl text-center">
            <div className="flex items-center gap-3 mb-6 relative">
              <img src="/moto/omni/bulletdot.png" className="w-3.5 h-3.5 "/>
            
              <h2 className="text-2xl md:text-[26px] xl:text-[30px] !font-normal text-[#333333] uppercase tracking-tight leading-none font-heading">
                OUR SERVICES
              </h2>
            </div>
            
            {/* Divider Line */}
            <div className="w-[80%]  h-px bg-gray-200 mb-6"></div>

            {/* Description */}
           
            <p className="text-[#333] text-sm lg:text-[14px] xl:text-[15px] leading-[1.8] px-6 ">
              Omni provides comprehensive manufacturing and supply chain solutions backed by advanced technology, extensive storage capabilities, and a 
              nationwide logistics network. Our commitment to quality, innovation, and operational excellence ensures consistent performance, reliable 
              service, and customized solutions that meet the evolving needs of customers across the automotive and industrial sectors.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-8 mb-12">
            {servicesData.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-tl-[3rem] rounded-tr-[3rem] rounded-br-[3rem] rounded-bl-none border border-gray-100 shadow-xl shadow-gray-200/50 p-5 flex flex-col h-full hover:shadow-2xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Image Container */}
                <div className="w-full aspect-[4/3] rounded-tl-[2.5rem] rounded-tr-[2.5rem] rounded-br-[2.5rem] rounded-bl-[2.5rem] overflow-hidden mb-6">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover object-center "
                  />
                </div>

                {/* Content Container */}
                <div className="flex flex-col flex-grow px-2">
                
                  <h3 className="text-[#333] text-lg md:text-[22px] !font-normal uppercase mb-4 tracking-wide">
                    {service.title}
                  </h3>
                  
              
                  <p className="text-[#333] text-sm lg:text-[14px] xl:text-[15px] leading-[1.8]">
                                        {service.text}
                  </p>

                 
                  <Link
                    href="#"
                    className="
                      text-[#001f5c]
                      font-[family-name:var(--font-exo-2)]
                      font-bold
                      read-more-text
                      transition-colors
                      underline
                      decoration-2
                      underline-offset-4
                      mt-2
                      inline-block
                    "
                  >
                    Read More &gt;&gt;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Button */}
          <div className="mt-4">
            <Button href="#" variant="primary">Discover More</Button>
          </div>

        </div>

      </div>
    </section>
  );
}
