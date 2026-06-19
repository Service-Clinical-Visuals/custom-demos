import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const leftAmbassadors = [
  { title: 'JET SKI', image: '/moto/lucas-oil/ambassador1.jpg' },
  { title: 'OPEN WHEEL', image: '/moto/lucas-oil/ambassador3.jpg' },
  { title: 'DRAG RACING', image: '/moto/lucas-oil/ambassador5.jpg' },
];

const rightAmbassadors = [
  { title: 'MONSTER TRUCKS', image: '/moto/lucas-oil/ambassador2.jpg' },
  { title: 'DRIFTING', image: '/moto/lucas-oil/ambassador4.jpg' },
  { title: 'MOTORCYCLE', image: '/moto/lucas-oil/ambassador6.jpg' },
];

export default function Ambassadors() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#081b37] min-h-[800px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/moto/lucas-oil/bg_ambassodor.png"
          alt="Ambassadors Background"
          fill
          className="object-cover "
        />
             </div>



      <div className="relative z-10 w-full">
        
        <div className="
            grid
            grid-cols-1
            xl:grid-cols-[1fr_420px_1fr]
            2xl:grid-cols-[1fr_480px_1fr]
            items-center
            gap-25
            lg:gap-35
            xl:gap-45
          ">
          {/* Left Column - Images */}
          <div className="flex flex-col space-y-6 md:space-y-8" data-aos="fade-right">
            {leftAmbassadors.map((item, idx) => (

              <div className="
              relative mt-10
              w-[95%] ml-0
              sm:w-[90%]
              md:w-[85%]
              lg:w-[90%]
              xl:w-[95%]
              2xl:w-full
              // h-[180px]
            ">
                {/* Image */}
                <div
                  className="relative w-full h-full overflow-hidden"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 92% 100%, 0 100%)",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className=" object-bottom-left"
                  />
                </div>

                {/* Banner left-64.5 */}
                <div
                  className="absolute bottom-45 right-0 translate-x-[4%] h-8 md:h-8 lg:h-10 xl:h-12 min-w-[58%] max-w-[85%] bg-[#16c8f2] flex items-center justify-center z-20"
                  style={{
                    clipPath: "polygon(5% 0, 100% 0, 96% 100%, 0 100%)",
                  }}
                >
                  <span className="text-white font-semibold tracking-wide md:text-sm lg:text-md xl:text-md 2xl:text-lg !font-[family-name:var(--font-orbitron)] !px-4">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column - Text */}
          <div className="flex flex-col items-center text-center 
    " data-aos="zoom-in">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/moto/lucas-oil/setting.png"
                alt="Setting icon"
                className="w-5 h-5 md:w-6 md:h-6 object-contain"
              />
              <h2 className="!text-white text-3xl md:text-4xl font-semibold tracking-wider">
                Ambassadors
              </h2>
            </div>

            <p className="text-white text-sm md:text-[16px] leading-[1.8] align-center ">
              Meet our ambassadors who represent the spirit of our brand with passion, dedication, and
              expertise. They are automotive enthusiasts who inspire communities, share their
              experiences, and help us build stronger connections with people who share the same
              passion.
            </p>

            <button className='rounded-tl-[10px] text-[#052c65] bg-[#ffffff] py-2 px-4 font-semibold font-(family-name:--font-orbitron) mt-6'>Start Your Journey</button>
          </div>

          {/* Right Column - Images */}
          <div className="flex flex-col space-y-6 md:space-y-8" data-aos="fade-left">
            {rightAmbassadors.map((item, idx) => (
              
              <div className="
                relative mt-10 ml-auto
                w-[95%]
                sm:w-[90%]
                md:w-[85%]
                lg:w-[90%]
                xl:w-[95%]
                2xl:w-full
                h-[180px]
              ">
                {/* Image */}
                <div
                  className="w-full h-full overflow-hidden"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 8% 100%)",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-top"
                  />
                </div>

                {/* Banner  */}
                <div
                  className="absolute bottom-45 left-0 -translate-x-[5%] h-8 md:h-8 lg:h-10 xl:h-12 min-w-[58%] max-w-[85%] bg-[#16c8f2] flex items-center justify-center z-30"
                  style={{
                    clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)",
                  }}
                >
                   <span className="text-white font-semibold tracking-wide text-sm md:text-sm lg:text-md xl:text-md 2xl:text-lg !font-[family-name:var(--font-orbitron)] !px-4">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
