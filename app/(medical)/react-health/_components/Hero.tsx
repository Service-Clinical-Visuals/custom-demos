// components/Banner.tsx

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
     <section className="site-container px-2 lg:px-12 relative overflow-hidden">
            <div className="relative w-full h-screen rounded-[2rem] overflow-hidden flex items-center shadow-lg">
               <DynamicVideoPlayer
                         type="banner"
                         className="absolute inset-0 w-full h-full object-cover"
                       />

                {/* Overlay gradient for text readability */}

                {/* <div className="relative z-10 max-w-3xl px-6 lg:px-24 text-white" data-aos="fade-up">
                    <h1 className="text-2xl lg:text-4xl xl:text-4xl font-semibold leading-[1.2] mb-6 tracking-tight">
                        Discover your best self with <br />yourself
                    </h1>
                    <p className="text-base lg:text-lg text-emerald-50/90 mb-10 max-w-xl leading-relaxed">
                        Advanced biocompatible solutions engineered to support tissue integration, strength, and long-term clinical performance across surgical applications.
                    </p>
                    <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 text-sm rounded-full font-medium flex items-center gap-3 transition-colors w-fit">
                        Explore Products
                        <div className="bg-white rounded-full p-1 text-primary">
                            <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                        </div>
                    </button>
                </div> */}
            </div>
        </section>
  );
}