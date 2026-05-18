"use client";


import "aos/dist/aos.css";

import {
  FiClock,
  FiUsers,
  FiGlobe,
} from "react-icons/fi";

import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

export default function OptimedAbout() {


  return (
    <section className="w-full bg-[#f3f3f3] overflow-hidden">
      
      {/* Top Content */}
      <div className="max-w-[1600px] mx-auto px-6 pt-16 pb-10 text-center">
        
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-semibold text-black tracking-[-1px]"
        >
          About Us
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="mt-5 max-w-full mx-auto text-[#8f8f8f] text-[16px] leading-[2]"
        >
          Optimed based in Ettlingen, Germany, has been dedicated to the research,
          development, manufacturing, and global distribution of high-quality
          medical products for minimal invasive therapy since 1996. With over
          200 employees across our headquarter, production sites, and
          international sales network, we ensure seamless operations and
          exceptional service worldwide.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-[520px] md:h-[640px] lg:h-[760px] overflow-hidden">
        
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/optimed/optimed-about.png"
            alt="about"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Numbers Content */}
        <div className="relative z-20 h-full flex items-center justify-center">
          
          <div className="text-center">
            
            <h3
              data-aos="fade-up"
              className="text-white text-3xl md:text-4xl lg:text-[56px] font-black tracking-[-1px]"
            >
              By The Numbers
            </h3>

            {/* Stats */}
            <div className="mt-8 md:mt-14 flex flex-wrap items-center justify-center gap-8 md:gap-14 lg:gap-20 px-6">
              
              {/* Card */}
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="flex items-center gap-4"
              >
                <FiClock className="text-white text-[36px] md:text-[46px] lg:text-[54px]" />

                <div className="text-left">
                  <h4 className="text-[#CC8552] text-[28px] md:text-[36px] lg:text-[42px] font-black leading-none">
                    30
                  </h4>

                  <p className="text-white text-[16px] md:text-[20px] lg:text-[24px] font-medium mt-2">
                    Years of Experience
                  </p>
                </div>
              </div>

              {/* Card */}
              <div
                data-aos="fade-up"
                data-aos-delay="250"
                className="flex items-center gap-4"
              >
                <FiUsers className="text-white text-[36px] md:text-[46px] lg:text-[54px]" />

                <div className="text-left">
                  <h4 className="text-[#CC8552] text-[28px] md:text-[36px] lg:text-[42px] font-black leading-none">
                    200
                  </h4>

                  <p className="text-white text-[16px] md:text-[20px] lg:text-[24px] font-medium mt-2">
                    Employees
                  </p>
                </div>
              </div>

              {/* Card */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="flex items-center gap-4"
              >
                <FiGlobe className="text-white text-[36px] md:text-[46px] lg:text-[54px]" />

                <div className="text-left">
                  <h4 className="text-[#CC8552] text-[28px] md:text-[36px] lg:text-[42px] font-black leading-none">
                    71
                  </h4>

                  <p className="text-white text-[16px] md:text-[20px] lg:text-[24px] font-medium mt-2">
                    Countries
                  </p>
                </div>
              </div>

              {/* Card */}
              <div
                data-aos="fade-up"
                data-aos-delay="550"
                className="flex items-center gap-4"
              >
                <HiOutlineBuildingOffice2 className="text-white text-[36px] md:text-[46px] lg:text-[54px]" />

                <div className="text-left">
                  <h4 className="text-[#CC8552] text-[28px] md:text-[36px] lg:text-[42px] font-black leading-none">
                    4
                  </h4>

                  <p className="text-white text-[16px] md:text-[20px] lg:text-[24px] font-medium mt-2">
                    Branches
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}