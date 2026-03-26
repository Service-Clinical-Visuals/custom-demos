"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

const products = [
    {
        id: "OP-59",
        image: "/optomic/product-1.jpg",
        name: "OP-59",
        description: "OP-59 unit combines the best features, designed for video angioscopy.",
    },
    {
        id: "OP-C1",
        image: "/optomic/product-2.jpg",
        name: "OP-C1",
        description: "OP-C1 is a high-end colposcope with a step magnification and precise focus.",
    },
    {
        id: "OP-GYN",
        image: "/optomic/product-3.jpg",
        name: "OP-GYN gynecology chair",
        description: "OP-GYN is a gynecological chair that meets all ISO 2/19 examination needs.",
    },
];

export default function Products() {
    return (
        <section className="w-full bg-[url('/optomic/bg-products.png')] bg-cover bg-center py-20" data-aos="fade-up">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Left Content */}
                    <div className="lg:col-span-4 py-16 lg:pr-10 flex flex-col justify-center">
                        <span className="text-white text-xs font-semibold uppercase tracking-widest mb-3">
                            Products
                        </span>
                        <h2 className="text-white! text-2xl md:text-3xl font-bold mb-5 leading-tight">
                            Innovative ENT solutions built for accuracy and performance.
                        </h2>
                        <p className="text-white/70! text-[15px] leading-relaxed mb-8">
                            We offer a comprehensive range of advanced ENT and medical equipment designed for precision,
                            performance, and reliability. Our portfolio includes microscopes, examination chairs, cameras,
                            endoscope systems, imaging systems, and supporting accessories to meet modern clinical needs.
                        </p>
                        <Button variant="optomic" href="/optomic/products">
                            View All Our Products
                        </Button>
                    </div>

                    {/* Right — Product Cards */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 gap-10">
                        {products.map((product) => (
                            <div key={product.id} className="flex flex-col h-full">
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>


                                {/* Product Info */}
                                <div className="bg-[#1b2a60] p-6 border-t border-white/10 flex-1 flex flex-col">
                                    <h4 className="text-white! font-semibold text-[15px] mb-2">
                                        {product.name}
                                    </h4>
                                    <p className="text-white/60! text-[13px] leading-relaxed mb-6">
                                        {product.description}
                                    </p>
                                    <div className="mt-auto">
                                        <a
                                            href={`/optomic/products/${product.id.toLowerCase()}`}
                                            className="inline-flex items-center gap-1 text-[#8B9ED9] text-[13px] font-semibold hover:gap-2 transition-all"
                                        >
                                            Read More <ArrowRight size={12} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
