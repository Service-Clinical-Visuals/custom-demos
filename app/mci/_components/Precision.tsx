import React from "react";
import { ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Button from "./Button";

const Precision = () => {
    return (
        <section className="relative py-28 bg-[url('/mci/images/precision.png')] bg-cover bg-center overflow-hidden">

            <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16 items-center relative z-10">
                {/* Left: Image/Video Card */}
                <div className="relative order-1 lg:col-span-7">
                    <div className="aspect-[16/9] rounded-2xl p-2 bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl relative z-10 flex items-center justify-center">
                        <div className="w-full h-full rounded-2xl overflow-hidden bg-white/5 flex items-center justify-center relative">
                            <video src="https://cdn.clinicalvisuals.com/medical/tsi/landingpage/tsi_01.webm" autoPlay loop muted className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Right: Content Area */}
                <div className="space-y-10 order-2 lg:col-span-5" data-aos="fade-left">
                    <div className="space-y-6">
                        <SectionHeader
                            light
                            subtitle="Precision in every detail"
                            title="Advanced Materials. Superior Performance."
                        />

                        <div className="space-y-6 text-sm md:text-[16px] leading-relaxed font-medium text-justify">
                            <p className="!text-white/90">
                                Our products are crafted from premium biocompatible materials, ensuring safety, reliability, and compatibility with medical applications. By integrating advanced engineering techniques and cutting-edge technology, we achieve exceptional precision in every component.
                            </p>
                            <p className="!text-white/90">
                                Manufactured using state-of-the-art machinery under strict quality control standards, each product delivers consistent performance, superior finish, and long-lasting durability. From design to production, our focus remains on meeting global medical standards while supporting better surgical outcomes and patient care.
                            </p>
                            {/* <p className="!text-white/90">
                                From initial design and material selection to final production and inspection, every stage is carefully monitored to maintain excellence. This commitment allows us to provide high-performance solutions that support surgical accuracy, enhance efficiency, and contribute to improved patient outcomes.
                            </p> */}
                        </div>
                    </div>

                    <div className="pt-4">
                        <Button text="See More" variant="white" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Precision;
