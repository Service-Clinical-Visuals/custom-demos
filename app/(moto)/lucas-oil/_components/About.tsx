import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

export default function About() {
  return (
    <section className="w-full bg-[#081b37] py-16 md:py-24">
      <div className="custom-container ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 items-stretch">
          
          {/* Left Column */}
          <div className="flex flex-col space-y-6 mt-5" data-aos="fade-right">
            <div className="flex items-center space-x-3 h-auto">
              <img 
                src="/moto/lucas-oil/setting.png" 
                alt="Setting icon" 
                className="w-6 h-6 object-contain"
              />
              <h2 className="!text-white text-3xl md:text-4xl font-semibold tracking-wide">
                About Us
              </h2>
            </div>
            
            <p className="!text-white text-sm md:text-[16px] leading-[1.8]">
              Family-Led, American-Manufactured, Customer-Focused: Lucas shines as a proud American brand that
              embodies a unique blend of family leadership, U.S.-based manufacturing, scientifically superior solutions
              and a commitment to community impact.
            </p>
            
            <div className="w-full h-full rounded-tr-[42px] rounded-bl-[42px] overflow-hidden mt-2 border border-white/10 shadow-lg">
              <img 
                src="/moto/lucas-oil/lucasAbout.png" 
                alt="Lucas Oil Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Column */}
          <div className="bg-white p-6 md:p-10 lg:p-12 shadow-xl" data-aos="fade-left">
            {/* Section 1 */}
            <div className="mb-6">
              <h3 className="text-[#1a1a1a] text-lg md:text-[22px] font-medium mb-3  !font-(family-name:--font-dm-sans)">
                Embracing the Family Legacy of Excellence:
              </h3>
              <p className="text-[#4a4a4a] text-sm md:text-[16px] leading-[1.8] ">
                CEO Morgan Lucas and President Katie Lucas are the embodiment of our family culture – 
                advancing the enduring legacy started by the founders of our company. The devoted husband 
                and wife team drives the brand into the future while championing our values, innovation and a 
                commitment to excellence that's reflected in our products and people.
              </p>
            </div>
            
            {/* Section 2 */}
            <div className="mb-6">
              <h3 className="text-[#1a1a1a] text-lg md:text-[22px] font-medium mb-3 !font-(family-name:--font-dm-sans)">
                A Culture of Giving Back:
              </h3>
              <p className="text-[#4a4a4a] text-sm md:text-[16px] leading-[1.8] ">
                Our team is dedicated to doing the right thing, the right way, for the right reason – to improve 
                the lives of our people, customers and those in our community. At Lucas Oil, our mission is to 
                create superior solutions that solve everyday problems, aiming to improve the lives of our 
                people, customers and community.
              </p>
            </div>
            
            {/* Section 3 */}
            <div className="mb-8">
              <h3 className="text-[#1a1a1a] text-lg md:text-[22px] font-medium mb-3 !font-(family-name:--font-dm-sans)">
                Commitment to the Future:
              </h3>
              <p className="text-[#4a4a4a] text-sm md:text-[16px] leading-[1.8] ">
                We remain dedicated to exceeding the expectations of our customers and communities. We 
                continue to expand our global footprint with cutting-edge research and development.
              </p>
            </div>
            
            {/* Action Button */}
            <div>
              <Button href="#" variant="ternary">
                Learn More
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
