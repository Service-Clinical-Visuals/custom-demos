import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Hero() {
  return (
       <section className="w-full pt-4 pb-8" data-aos="fade-up">
         <div className="custom-container">
           <div className="relative overflow-hidden rounded-[24px] w-full aspect-[4/3] md:aspect-video" data-aos="zoom-in" data-aos-delay="100">
             <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />
           </div>
         </div>
       </section>
  );
}
