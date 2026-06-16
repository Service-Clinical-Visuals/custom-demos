"use client";

import React from "react";
import Typography from "./Typography";

const productsList = [
    {
        id: "ecg-1",
        title: "3-channel electrocardiograph",
        description: "EUROECG 301 professional 3-lead ECG machine that strikes a balance between budget and functionality.",
        image: "/medical/lumed-srl/products/product1.png"
    },
    {
        id: "ecg-2",
        title: "6-channel electrocardiograph",
        description: "EUROECG 601 professional 6-lead ECG machine is the best compromise between performance and size.",
        image: "/medical/lumed-srl/products/product2.png"
    },
    {
        id: "ecg-3",
        title: "12-channel electrocardiograph",
        description: "EUROECG 1201A is a professional 12-lead A4/Letter ECG machine, designed for the needs of the Department or the Practice.",
        image: "/medical/lumed-srl/products/product3.png"
    },
    {
        id: "wireless-holter",
        title: "Bluetooth and USB PC-ECG system",
        description: "EUROECG BT12 efficient and easy-to-use wireless PC-ECG system. It stands out for its wide connectivity.",
        image: "/medical/lumed-srl/products/product4.png"
    },
    {
        id: "selector-module",
        title: "ECG simulator",
        description: "Phantom 320 provides multiple pathological or normal signals, with different heart rate values.",
        image: "/medical/lumed-srl/products/product5.png"
    },
    {
        id: "spirometer",
        title: "Stress test",
        description: "EUROERGO BT guarantees agile but uncompromising operations. The software offers all the functions.",
        image: "/medical/lumed-srl/products/product6.png"
    },
];

export default function ProductsGrid() {
    return (
        <section className="w-full py-16 md:py-24 bg-white z-30" id="all-products">
            <div className="custom-container mx-auto px-6 md:px-8 space-y-12 max-w-[1440px]">

                {/* Header Grid: Split Title & Description */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end pb-8 ">
                    <div className="space-y-3" data-aos="fade-right">
                        <Typography
                            variant="h5"
                            color="secondary"
                            weight="bold"
                            className="tracking-wider font-space-grotesk font-bold block"
                        >
                            04 / Products
                        </Typography>
                        <Typography variant="h2" color="dark" className="leading-tight tracking-tight font-bold">
                            Innovation in Every Product
                        </Typography>
                    </div>
                    <div
                        className="lg:text-right max-w-2xl lg:ml-auto"
                        data-aos="fade-left"
                        data-aos-delay="100"
                    >
                        <Typography variant="body" color="muted" className="leading-relaxed">
                            A complete range of cardiopulmonary diagnostic equipment designed to meet the needs of healthcare professionals.
                        </Typography>
                    </div>
                </div>

                {/* 6-Card Product Grid (3 cols on desktop, 2 on tablet, 1 on mobile) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productsList.map((prod, index) => {
                        return (
                            <div
                                key={prod.id}
                                className="group bg-white overflow-hidden shadow-sm relative"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                {/* Card Image Container */}
                                <div className="w-full h-full aspect-[4/3] relative overflow-hidden bg-gray-50">
                                    <img
                                        src={prod.image}
                                        alt={prod.title}
                                        className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Dark Overlay (Always visible on mobile, Hover on Desktop) */}
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent h-full w-full p-5 md:p-6 flex flex-col justify-end opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                                        <Typography
                                            variant="h4"
                                            color="white"
                                            weight="bold"
                                            className="mb-1.5 leading-snug block shadow-sm"
                                        >
                                            {prod.title}
                                        </Typography>
                                        <Typography
                                            variant="body"
                                            color="white"
                                            className="leading-relaxed opacity-100 lg:opacity-90 block drop-shadow-md"
                                        >
                                            {prod.description}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
