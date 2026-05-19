import React from "react";
import Button from "./Button";

export default function OurIdentity() {
  return (
    <section className="w-full py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start" data-aos="fade-right">
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#111111] mb-4 leading-tight">
              Our Identity
            </h2>
            
            <div className="space-y-6 text-[#484848] md:leading-relaxed mb-8">
              <p>
                Otopront has been trusted and appreciated by ENT specialists for more than 70 years now. The closer the links between markets and people on a global scale, the greater the demand from customers all over the world.
              </p>
              <p>
                Otopront has evolved from a company with a primarily German customer base to a globally operating enterprise. In more than 150 countries across the globe Otopront is represented with a reliable sales and service network. We are constantly growing and expanding our product range to meet the needs of our customers. Our mission is to improve people's quality of life worldwide through cutting-edge medical technology.
              </p>
              <p>
                Every single member of the Otopront team shares responsibility for providing satisfaction to our customers. Taking on responsibility means commitment to an ideal and doing everything possible to achieve set goals. That's what we mean by trustworthiness. As a family-run company with a long-standing tradition, we place great value on teamwork, trust, and responsibility. Our extensive experience, combined with our drive for innovation, has positioned us as a global market leader.
              </p>
            </div>
            
            <Button href="#" variant="red" arrowType="circle">
              Discover More
            </Button>
          </div>

          {/* Right Column: Image Mosaic */}
          <div className="w-full mt-12 lg:mt-0" data-aos="fade-left">
            <div className="relative w-full aspect-square lg:h-[580px] overflow-hidden rounded-[22px]">
              <img src="/otopront/images/our-identity.jpg" alt="otopront-our-identity" className="w-full h-full object-cover" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
