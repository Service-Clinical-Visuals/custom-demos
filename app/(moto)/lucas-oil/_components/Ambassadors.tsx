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
    <section className="relative w-full py-16 md:py-24 bg-[#04196e] min-h-[800px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/moto/lucas-oil/ambassadorbg.png"
          alt="Ambassadors Background"
          fill
          className="object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1d4174]/70 via-[#1d4174]/50 to-[#021126]/30"></div>      </div>



      <div className="relative z-10 w-full">
        {/* <div className="grid lg:grid-cols-[1fr_500px_1fr] items-center gap-30"> */}
        {/* <div className="
          grid
          lg:grid-cols-[1fr_420px_1fr]
          xl:grid-cols-[1fr_480px_1fr]
          2xl:grid-cols-[1fr_520px_1fr]
          items-center
          gap-15
          lg:gap-25
          xl:gap-35
        "> */}
        <div className="
  grid
  grid-cols-1
  xl:grid-cols-[1fr_420px_1fr]
  2xl:grid-cols-[1fr_480px_1fr]
  items-center
  gap-15
  lg:gap-25
  xl:gap-35
">
          {/* Left Column - Images */}
          <div className="flex flex-col space-y-6 md:space-y-8" data-aos="fade-right">
            {leftAmbassadors.map((item, idx) => (

              // <div key={idx} className="relative w-full h-[180px] mt-10">
              <div className="
              relative mt-10
              w-[95%] ml-0
              sm:w-[90%]
              md:w-[85%]
              lg:w-[90%]
              xl:w-[95%]
              2xl:w-full
              h-[180px]
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
                    className="object-cover"
                  />
                </div>

                {/* Banner left-64.5 */}
                <div
                  className="absolute bottom-45 right-0 translate-x-[4%] h-10 md:h-12 min-w-[58%] max-w-[85%] bg-[#16c8f2] flex items-center justify-center z-20"
                  style={{
                    clipPath: "polygon(5% 0, 100% 0, 96% 100%, 0 100%)",
                  }}
                >
                  <span className="text-white font-semibold tracking-wide text-sm md:text-base !font-[family-name:var(--font-orbitron)]">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column - Text */}
          <div className="flex flex-col items-center text-center max-w-[420px]
    mx-auto px-2 sm:px-6 my-12 xl:my-0" data-aos="zoom-in">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/moto/lucas-oil/setting.png"
                alt="Setting icon"
                className="w-7 h-7 md:w-8 md:h-8 object-contain"
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
              //     <div
              //   key={idx}
              //   className="relative w-full h-[160px] sm:h-[200px] lg:h-[160px] xl:h-[180px] mt-10"
              // >
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
                    className="object-cover"
                  />
                </div>

                {/* Banner right-65 */}
                <div
                  className="absolute bottom-45 left-0 -translate-x-[5%] h-10 md:h-12 min-w-[58%] max-w-[85%] bg-[#16c8f2] flex items-center justify-center z-30"
                  style={{
                    clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)",
                  }}
                >
                  <span className="text-white font-semibold tracking-wide text-sm md:text-base !font-[family-name:var(--font-orbitron)]">
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
