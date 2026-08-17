import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export default function Authenticity() {
  return (
    <section className="w-full bg-authenticity-gradient py-10 lg:py-15">
      <div className="custom-container px-4 xl:px-0">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center">
          
          {/* Left Side: Image */}
          <div className="order-2 lg:order-1" data-aos="fade-right">
             <div className="relative w-full aspect-[4/3]  overflow-hidden shadow-lg">
               <Image 
                 src="/medical/tunning-element/landingpage/Image 3.webp" 
                 alt="Tuning Element Customers" 
                 fill
                 className="object-cover"
               />
             </div>
          </div>
          
          {/* Right Side: Content */}
          <div data-aos="fade-left" className="order-1 lg:order-2">
          <h2 className="section-title text-[#121f38] font-heading font-semibold mb-6">
              Authenticity That Defines <span className="text-secondary">Tuning Element</span>
            </h2>
          <p className="section-text text-[#546476] manrope leading-relaxed mb-6 ">
              Tuning Element products and customer results are unparalleled. Our scientific breakthroughs in bionanoscience gave birth to the first Tuning Element bracelet. There are no substitutes with the same level of craftsmanship, design, efficiency & safety. Tuning Element is the first to introduce the concept of guaranteed embedded frequencies in wearable and lifestyle products – although you'll find some other approaches on the market – ours is the only one to ensure long-lasting, worry-free usability with peer-reviewed studies published in medical and scientific journals.
            </p>
          <p className="section-text text-[#546476] manrope leading-relaxed mb-6 ">
              Today, Tuning Element products are sold and shipped worldwide, both online and via selected authorized resellers. Tuning Element products will always feature our logo as our mark of product and technology excellence. Tuning Element was created to support the human body with beneficial frequency blends that optimize cell function. We regularly introduce new products, blends, and accessories, ensuring that Tuning Element customers and their families are always sure to find the Tuning Element product that will fit perfectly into their daily lives.
            </p>
          <p className="section-text text-[#546476] manrope leading-relaxed mb-6 ">
              Dr. Brasovan, now the director of research and development for TE technology, began using the 5 Minute Patch on his patients and found that patients were able to reduce their need for medication when using the patch after surgery and recover faster.
            </p>
            <Button href="#">Read More About Us</Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
