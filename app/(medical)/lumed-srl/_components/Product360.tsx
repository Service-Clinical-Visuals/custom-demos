import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const features = [
    { num: "01", text: "Atrial fibrillation and flutter analysis" },
    { num: "02", text: "QT / QTc analysis and dispersion" },
    { num: "03", text: "Family analysis / template" },
    { num: "04", text: "5 or 10-wire patient cable" },
    { num: "05", text: "Recordings up to 7 days" },
    { num: "06", text: "Pacemaker detection" },
    { num: "07", text: "Graphic LCD display" },
    { num: "08", text: "Event marking button" },
];

export default function Product360() {
    return (
        <section className="lumed-root w-full py-20 md:py-24 bg-white" id="products">
            <div className="custom-container mx-auto px-6 md:px-8 space-y-10 md:space-y-12 max-w-[1440px]">

                {/* Top Section: Checkerboard & Description Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

                    {/* Left Column: 360-degree Checkerboard Placeholder (col-span 6) */}
                    <div className="lg:col-span-6" data-aos="fade-right">
                        <div
                            className="w-full aspect-video rounded-xl overflow-hidden shadow-md relative min-h-[220px] flex items-center justify-center select-none bg-gray-50"
                        >
                            <img
                                src="/medical/lumed-srl/BF1.webp"
                                alt="BF1 Product"
                                className="w-full h-full object-cover"
                            />
                            {/* <DynamicVideoPlayer
                                type="360" /> */}
                        </div>
                    </div>

                    {/* Right Column: Text Details (col-span 6) */}
                    <div className="lg:col-span-6 space-y-6 ml-2 xl:ml-5 md:space-y-8" data-aos="fade-left">
                        <div className="space-y-3">
                            <Typography
                                variant="h5"
                                color="secondary"
                                weight="bold"
                                className="tracking-wider font-space-grotesk font-bold block"
                            >
                                02 / Product
                            </Typography>
                            <Typography variant="h2" color="dark" className="leading-tight tracking-tight font-bold">
                                BOFAP, cardboard viral-bacterial filters
                            </Typography>
                        </div>

                        <div className="space-y-4">
                            <Typography variant="body" color="muted" className="leading-relaxed font-normal">
                                LUMED has invented, patented, and manufactures a device that eliminates the use of plastic in spirometry. The cardboard mouthpiece does not protect patients and operators from viral and bacterial contamination. Traditional bacterial and viral filters (BV filters) do offer this protection, but they are made from plastic.
                            </Typography>
                            <Typography variant="body" color="muted" className="leading-relaxed font-normal">
                                Our device, named BOFAP, is a bacterial and viral filter for spirometry that is both disposable and recyclable with paper, including its individual packaging. The carbon footprint accounts for about half of a product&apos;s or activity&apos;s overall ecological impact, representing its contribution to pollution.
                            </Typography>
                            <Typography variant="body" color="muted" className="leading-relaxed font-normal">
                                By using just five BOFAPs, I can reduce the equivalent of 1 kilogram of CO2 released into the atmosphere.
                            </Typography>
                        </div>
                    </div>

                </div>

                {/* Bottom Section: 8-pill feature matrix grid */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    {features.map((feat) => (
                        <div
                            key={feat.num}
                            className="
        flex items-center w-full h-[72px]
        bg-primary hover:bg-primary-hover text-white
        pl-3 pr-4 gap-4
        rounded-l-full rounded-r-md
        shadow-md hover:shadow-lg
        transition-all duration-300
      "
                        >

                            {/* Number Circle */}
                            <div className="w-10 h-10 min-w-[40px] xl:min-w-[56px] xl:w-14 xl:h-14 rounded-full bg-white flex items-center justify-center">
                                <span className="text-primary font-normal text-xl xl:text-2xl">
                                    {feat.num}
                                </span>
                            </div>

                            {/* Text */}
                            <Typography color="white" variant="h5" weight="normal" className="font-geist font-medium leading-snug">
                                {feat.text}
                            </Typography>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}