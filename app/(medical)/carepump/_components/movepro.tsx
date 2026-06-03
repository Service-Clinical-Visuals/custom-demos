"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import PrimaryButton from "./Button";

export default function MoveProFeatures() {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{
        backgroundImage:
          "url('/carepump/images/moveprobg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 lg:px-10 relative z-10">

        {/* Top Section */}
       <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div data-aos="fade-right">
            <h2 className="text-white text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] font-bold leading-[1.2]">
              Move8PRO - a perfect combination of advanced functionalities with a compact design
            </h2>

            <p className="mt-6 text-white/90 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-7 lg:leading-8">
              CarePump Move8PRO, due to its advanced functionalities and 15 therapeutic programs developed by the Polish Lymphological Society, is dedicated to professional use in medicine, rehabilitation and biological regeneration. The intelligent gradient function, interval, hold, individual pressure for each chamber in the cuff and the ability to program your own treatment algorithms allow you to precisely adjust the massage parameters to the needs of each patient.
            </p>

            <p className="mt-5 text-white/90 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-7 lg:leading-8">
              A detailed list of indications for pressotherapy and the benefits of this procedure can be found on the lymphatic drainage page. This method is recommended for numerous diseases involving the circulatory and lymphatic systems, post-traumatic therapy, for athletes to accelerate regeneration and prevent injuries, as well as for aesthetic reasons, e.g. for firming and reducing cellulite.
            </p>

            <PrimaryButton
                text="Request Information"
                bgColor="#FFFFFF"
                textColor="#11B5E4"
                className="mt-4"
                />
           
          </div>

          {/* Right Video/Image */}
          <div data-aos="fade-left" className="flex flex-col gap-6">
                     <div className="relative overflow-hidden rounded-3xl shadow-lg">
                       <div className="aspect-16/9 relative">
                         <DynamicVideoPlayer
                           type="short-2"
                           className="absolute inset-0 h-full w-full object-cover"
                         />
                       </div>
                     </div>
                   </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/30 my-12" />

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          <div data-aos="fade-up" data-aos-delay="0" className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-[#555] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-7 lg:leading-8">
              CarePump Move8PRO is an advanced pressotherapy system with 15 therapeutic programs designed for professional rehabilitation, recovery, and lymphatic drainage therapy.

            </p>

            <button className="mt-4 text-[#00AEEF] font-semibold hover:underline">
              Learn More &gt;&gt;
            </button>
          </div>

          <div data-aos="fade-up" data-aos-delay="100" className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-[#555] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-7 lg:leading-8">
             CarePump Move8PRO features intelligent pressure control and customizable therapy settings for precise, comfortable, and highly effective patient-specific rehabilitation treatments.
            </p>

            <button className="mt-4 text-[#00AEEF] font-semibold hover:underline">
              Learn More &gt;&gt;
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}