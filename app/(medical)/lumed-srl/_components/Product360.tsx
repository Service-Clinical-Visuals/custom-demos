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
        <section className="w-full py-20 md:py-24 bg-white" id="products">
            <div className="custom-container mx-auto px-6 md:px-8 space-y-10 md:space-y-12 max-w-[1440px]">

                {/* Top Section: Checkerboard & Description Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

                    {/* Left Column: 360-degree Checkerboard Placeholder (col-span 6) */}
                    <div className="lg:col-span-6" data-aos="fade-right">
                        <div
                            className="w-full aspect-video rounded-xl overflow-hidden shadow-md  relative min-h-[220px] flex items-center justify-center select-none"
                        >
                            <DynamicVideoPlayer
                                type="360" />

                        </div>
                    </div>

                    {/* Right Column: Text Details (col-span 6) */}
                    <div className="lg:col-span-6 space-y-6 md:space-y-8" data-aos="fade-left">
                        <div className="space-y-3">
                            <Typography
                                variant="body"
                                color="secondary"
                                weight="normal"
                                className="tracking-wider font-space-grotesk font-bold block text-sm md:text-base"
                            >
                                02 / Product
                            </Typography>
                            <Typography variant="h2" color="dark" className="text-[28px] md:text-[38px] leading-tight tracking-tight font-bold">
                                3/12-channel holter ECG systems
                            </Typography>
                        </div>

                        <div className="space-y-4">
                            <Typography variant="body" color="muted" className="text-[15px] md:text-[16px] leading-relaxed font-normal">
                                EUROHOLTER complete solution for recording and analyzing Holter exams. Lightweight and compact recorders combined with EUROHOLTER SW3/12 software for reporting and EUORHOLTER HOOKUP software for programming and downloading the recorders. It is one of the main devices for cardiopulmonary diagnostics.
                            </Typography>
                            <Typography variant="body" color="muted" className="text-[15px] md:text-[16px] leading-relaxed font-normal">
                                The EUROHOLTER SW3/12 software has all the recording analysis and validation functions, from Compact to atrial fibrillation and pacemaker analysis. A package of additional advanced algorithms is also available. A package of additional advanced algorithms is also available. The commands are given via mouse or keyboard, so that reporting is extremely rapid.
                            </Typography>
                            <Typography variant="body" color="muted" className="text-[15px] md:text-[16px] leading-relaxed font-normal">
                                A package of additional advanced algorithms is also available. The commands are given via mouse or keyboard, so that reporting is extremely rapid. Verification of the positioning of Holter electrodes. EUROHOLTER recorders use standard disposable ECG electrodes.
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
                            <Typography color="white" variant="h5" weight="normal" className="text-[13px] sm:text-[14px] md:text-[15px] font-geist font-medium leading-snug">
                                {feat.text}
                            </Typography>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}