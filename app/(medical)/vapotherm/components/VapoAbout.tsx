"use client";

import { useEffect } from "react";
import AOS from "aos";
import { Check } from "lucide-react";

export default function VapoAbout() {

  return (
    <section className="bg-gray-100 py-12 md:py-20 overflow-hidden">
      <div className="custom-container">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* LEFT IMAGE */}
          <div
            data-aos="fade-right"
            className=" relative w-full h-full md:h-[450px] rounded-2xl max-w-full min-h-full md:min-h-full"
          >

            {/* Image */}
            <img
              src="/vapotherm/assets/vapotherm-about2.jpg"
              alt="about"
              className="rounded-2xl w-full h-full object-cover shadow-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left" >


            <h2 className="text-2xl lg:text-3xl  2xl:text-3xl  font-semibold text-gray-800 mb-4">
              We Do Work That Matters
            </h2>

            <p className="text-gray-600 mb-4 text-md lg:text-xl 2xl:text-xl  ">
              Vapotherm high velocity therapy is more than oxygen therapy.
              It is a fast and safe way to provide treatment for undifferentiated
              respiratory distress with one single tool.
            </p>

            <p className="text-gray-600 mb-6 text-md lg:text-xl 2xl:text-xl  ">
              Together, we still have a lot of work to do. We see patients every
              day who would benefit from our life-changing technology and strive
              to make it available to everyone.
            </p>

            {/* Checklist */}
            <div className="space-y-5">
              
              <div className="flex gap-3 ">
                <div className="bg-[#0C66AF] text-white p-2 rounded-full h-fit">
                  <Check size={14} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-md lg:text-lg 2xl:text-lg  ">
                    We Have Clear, Direct, and Respectful Communication With Everyone
                  </p>
                  <p className="text-gray-600 text-md lg:text-lg 2xl:text-lg  ">
                    With over 100 people on our field team, and 24/7 tech support – Vapotherm is always available to help.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 ">
                <div className="bg-[#0C66AF] text-white p-2 rounded-full h-fit">
                  <Check size={14} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-md lg:text-lg 2xl:text-lg  ">
                    We Make and Keep Commitments
                  </p>
                  <p className="text-gray-600 text-md lg:text-lg 2xl:text-lg  ">
                    With the best people in the medical device industry employed by us, we are the fastest growing medical device company in the world.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-300 my-16" />

        {/* BOTTOM SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          
          {/* LEFT TEXT */}
          <div data-aos="fade-up" className="max-w-xl">
            <h2 className="text-2xl lg:text-3xl  2xl:text-3xl  font-semibold text-gray-800 mb-3">
              Trusted Around the World
            </h2>
            <p className="text-gray-600 text-md lg:text-lg 2xl:text-lg  ">
              Vapotherm high velocity therapy is a fast and safe approach
              for patient populations from premature neonates to hypercapnic
              COPD patients.
            </p>
          </div>

          {/* RIGHT STATS */}
          <div
            data-aos="fade-up"
            className="flex gap-4 md:gap-6 w-full md:w-auto"
          >
            <div className="bg-[#0C66AF] text-white p-4 rounded-md text-center flex flex-col justify-center items-center flex-1 aspect-square md:flex-none md:w-[180px] lg:w-[200px]">
              <p className="text-2xl lg:text-3xl font-bold">2400+</p>
              <p className="text-sm mt-1">Trusted by Hospitals</p>
            </div>

            <div className="bg-[#0C66AF] text-white p-4 rounded-md text-center flex flex-col justify-center items-center flex-1 aspect-square md:flex-none md:w-[180px] lg:w-[200px]">
              <p className="text-2xl lg:text-3xl font-bold">4.1 million</p>
              <p className="text-sm mt-1">Treated Patients</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}