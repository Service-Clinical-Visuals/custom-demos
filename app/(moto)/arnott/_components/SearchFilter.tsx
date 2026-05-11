"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import Button from "./Button";

export default function SearchFilter() {
    return (
        <section className="py-16 bg-[url('/arnott/images/dark-bg.png')] text-white">
            <div className="container mx-auto px-4 md:px-12">
                <div className="text-center mb-12">
                    <div>
                        <span className="text-primary font-semibold text-base tracking-wider mb-1 block">Search Model</span>
                        <h2 className="text-[28px] md:text-[32px] font-bold text-white! mb-3">#1 in Replacement Air & Adaptive Suspension</h2>
                    </div>
                </div>

                {/* Filter Grid */}
                <div className=" mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {["Manufacturer", "Models", "Model Year", "Type"].map((filter) => (
                            <div key={filter} className="relative group">
                                <select className="w-full bg-[#f4f4f4] text-[#484848] font-bold px-6 py-5 rounded-sm appearance-none outline-none focus:ring-2 focus:ring-primary transition-all">
                                    <option>{filter}</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                </select>
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:rotate-180 transition-transform duration-300">
                                    <ChevronDown size={20} className="text-[#484848]" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <Button variant="primary" size="lg" className="font-bold px-12 py-5 text-lg">
                            Search Air Struts & Shocks
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
