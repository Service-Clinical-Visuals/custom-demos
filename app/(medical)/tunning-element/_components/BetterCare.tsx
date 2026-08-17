import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import DynamicVideoPlayer from '@/app/_components/DynamicVideoPlayer';

export default function BetterCare() {
  const features = [
    {
      title: "Advanced Smart Technology",
      description: "Intelligent features designed to support efficient and connected healthcare applications."
    },
    {
      title: "Patient-Centered Comfort",
      description: "Lightweight, flexible construction designed for comfortable use and smooth application."
    },
    {
      title: "Precision & Reliability",
      description: "Carefully engineered components deliver consistent performance and dependable functionality."
    }
  ];

  const cards = [
    {
      number: "01",
      title: "Precision & Reliability",
      description: "Advanced sensing technology enables efficient monitoring and supports reliable data collection for smarter healthcare applications."
    },
    {
      number: "02",
      title: "Flexible Comfort",
      description: "Lightweight and flexible construction is designed to provide comfortable application while adapting naturally to the body."
    },
    {
      number: "03",
      title: "Precision Care",
      description: "Engineered for accuracy and dependable performance, supporting healthcare professionals with a more precise and connected solution."
    }
  ];

  return (
    <section className="w-full bg-[#FCF3EF] py-10 lg:py-15">
      <div className="custom-container px-4 xl:px-0">
        
        {/* Top Half */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center mb-12">
          
          <div data-aos="fade-right">
            <h2 className="section-title text-[#121f38] font-heading font-semibold mb-6">
              Smart Technology, <span className="text-secondary">Designed for Better Care</span>
            </h2>
            <p className="section-text text-[#546476] manrope mb-8 leading-relaxed">
              Experience natural relief and improved cellular health with Tuning Element's innovative bio-frequency wellness products. From frequency patches to smart jewelry, our wearable technology provides non-invasive support for holistic pain management and optimal cell function.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <img 
                    src="/medical/tunning-element/chk.png" 
                    alt="check"
                    className="object-contain w-6 h-6 shrink-0 mt-1"
                  />
                  <div>
                    <h3 className="feature-title font-heading font-semibold text-[#121f38] mb-1">
                      {feature.title}
                    </h3>
                    <p className="section-text text-[#546476] manrope  leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div data-aos="fade-left">
            {/* VIDEO CLIP 1 Placeholder */}
            <div className="w-full aspect-video bg-black flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 z-0 ">
                      <DynamicVideoPlayer type="short-1" />
                   </div>
            </div>
          </div>

        </div>

        {/* Bottom Half: Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-10">
          {cards.map((card, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-[#546476] p-3 relative h-full"
            >
              {/* Inner Border Box */}
              <div className="border border-white w-full h-full p-6 flex flex-col items-center text-center">
                
                {/* Number Circle */}
                <div className="w-14 h-14 bg-white rounded-full flex shrink-0 items-center justify-center text-[#546476] font-heading font-semibold feature-title mb-4">
                  {card.number}
                </div>
                
                <h3 className="feature-title ibm-plex-sans font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="section-text text-white manrope leading-relaxed">
                  {card.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
