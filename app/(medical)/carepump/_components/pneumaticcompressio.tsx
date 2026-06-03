"use client";

import PrimaryButton from "./Button";

export default function TherapyGuideSection() {
  return (
    <section className="">
      {/* Hero Image */}
      <div className="relative">
        <img
          src="/carepump/images/therapybg.png"
          alt="Therapy Guide"
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-[40%_60%] gap-8 -mt-20 relative z-10">

          {/* Left Content */}
          <div data-aos="fade-right" className="pt-24 lg:pt-28">
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
              Guide to pneumatic compression therapy
            </h2>

            <PrimaryButton
              text="Explore Therapy Guide"
              className="mt-8"
            />
          </div>

          {/* Right Floating Card */}
          <div data-aos="fade-up" className="bg-white rounded-4xl shadow-lg p-8 lg:p-10 lg:-mt-20 mt-3 self-start relative z-20">
            <p className="
                text-[#777]
                text-[14px]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[17px]
                leading-7
                lg:leading-8
                pb-4
                ">
              Move8PRO has 15 therapeutic programs dedicated to various indications for the use of intermittent pneumatic compression. To make it easier for the therapist to select a program for a specific indication, we have prepared - together with an expert from the Polish Lymphological Society - an extensive description of treatment programs explaining why a specific method of ventricular pumping is recommended for a given disease and recommended parameters such as therapy duration, hold, interval and gradient.
            </p>

            <p className="
                text-[#777]
                text-[14px]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[17px]
                leading-7
                lg:leading-8
                ">
              From the guide, you will learn, among others: which program is dedicated to therapeutically neglected lymphedema with high tissue cohesion (fibrotic, hard), and which will be best for people who have a lower tolerance for compression along the entire length of the limb. This is an extensive knowledge base enabling effective therapy using Move8PRO.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}