import React from "react";
import { Check } from "lucide-react";
import Button from "./Button";
import Typography from "./Typography";

export default function ScalableSolutions() {
    return (
        <section
            className="lumed-root w-full py-16 md:py-24 bg-[#F0FAFD]"
            id="solutions"
        >
            <div className="custom-container mx-auto px-6 md:px-8 space-y-10 md:space-y-12 max-w-[1440px]">

                {/* TOP ROW: Text Description and Filter Image */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

                    {/* Left Side: Plastic viral-bacterial filters Description (col-span 6) */}
                    <div className="lg:col-span-6 space-y-6" data-aos="fade-right">
                        <div className="space-y-3">
                            <Typography
                                variant="h5"
                                color="secondary"
                                weight="bold"
                                className="tracking-wider block font-space-grotesk font-bold"
                            >
                                05 / Types
                            </Typography>
                            <Typography variant="h2" color="dark" className="leading-tight tracking-tight font-bold">
                                Plastic viral-bacterial filters
                            </Typography>
                        </div>

                        {/* Description paragraphs */}
                        <div className="space-y-4">
                            <Typography variant="body" color="muted" className="leading-relaxed font-heading text-sm md:text-[15px]">
                                EUROSPIRO bacterial and viral filters for spirometry are cost-effective ways to filter viruses and bacteria and comply with ATS/ERS standards for spirometry.
                            </Typography>

                            <Typography variant="body" color="muted" className="leading-relaxed font-heading text-sm md:text-[15px]">
                                Laboratory tests have verified that this filter is highly effective, with the ability to stop more than 99.999% of bacteria and 99.99% of viruses, thus surpassing published ATS recommendations for flow resistance in pulmonary function instrumentation, which suggest resistance should be below 1.5 cm H2O/L/sec at flow rates of 14 L/sec.
                            </Typography>
                        </div>

                        {/* View Product Button */}
                        <div className="pt-2">
                            <Button
                                text="View Product"
                                variant="composite-blue"
                                href="#products"
                                className="rounded-none"
                            />
                        </div>
                    </div>

                    {/* Right Side: Upright Filter Image (col-span 6) */}
                    <div className="lg:col-span-6" data-aos="fade-left" data-aos-delay="100">
                        <div className="w-full aspect-[16/10] sm:aspect-[791/450] bg-white overflow-hidden rounded-2xl shadow-sm border border-gray-100">
                            <img
                                src="/medical/lumed-srl/t1.webp"
                                alt="Plastic viral-bacterial filter"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>

                {/* BOTTOM ROW: Packaging Image and Blue Advantage Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">

                    {/* Left Column: Image (col-span 6) */}
                    <div className="lg:col-span-6 flex items-center" data-aos="fade-right" data-aos-delay="200">
                        <div className="w-full h-full min-h-[260px] sm:min-h-[320px] aspect-[16/10] sm:aspect-[791/380] overflow-hidden rounded-2xl shadow-sm border border-gray-100 bg-white">
                            <img
                                src="/medical/lumed-srl/t2.webp"
                                alt="LUMED Plastic viral-bacterial filters packaging"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                    </div>

                    {/* Right Column: 2 Blue Info Cards (col-span 6) */}
                    <div className="lg:col-span-6 flex flex-col justify-center" data-aos="fade-left" data-aos-delay="300">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">

                            {/* Blue Info Card 1 */}
                            <div className="bg-primary text-white p-7 md:p-8 rounded-2xl shadow-md border border-white/10 flex flex-col items-center text-center space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 justify-center">
                                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                                    <Check size={20} strokeWidth={3} />
                                </div>
                                <div className="space-y-3">
                                    <Typography variant="h4" color="white" weight="bold" className="leading-snug font-heading">
                                        Filtration efficiency
                                    </Typography>
                                    <Typography variant="body" color="white" className="text-white/85 text-xs sm:text-[13px] md:text-sm leading-relaxed font-heading">
                                        Laboratory tests have verified that this filter is highly effective, with the ability to stop more than 99.999% of bacteria and 99.99% of viruses.
                                    </Typography>
                                </div>
                            </div>

                            {/* Blue Info Card 2 */}
                            <div className="bg-primary text-white p-7 md:p-8 rounded-2xl shadow-md border border-white/10 flex flex-col items-center text-center space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 justify-center">
                                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                                    <Check size={20} strokeWidth={3} />
                                </div>
                                <div className="space-y-3">
                                    <Typography variant="h4" color="white" weight="bold" className="leading-snug font-heading">
                                        High degree of protection
                                    </Typography>
                                    <Typography variant="body" color="white" className="text-white/85 text-xs sm:text-[13px] md:text-sm leading-relaxed font-heading">
                                        They are designed for running reliable tests without ignoring patient safety as, to this end, they are individually packed in polypropylene films.
                                    </Typography>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}