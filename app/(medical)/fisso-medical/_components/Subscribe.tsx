"use client";

import React, { useState } from "react";
import { Mail } from "lucide-react";
import Typography from "./Typography";

export default function Subscribe() {
    const [email, setEmail] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            alert(`Subscribed successfully with email: ${email}`);
            setEmail("");
        }
    }
    return (
        <section className=" w-full mt-6 bg-gray-50  " >
            <div className=" xl:px-10 px-5 py-8  w-full  flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">

                {/* LEFT */}
                <div className="flex items-center gap-5 flex-1">

                    {/* Icon */}
                    <div className="w-12 h-12 xl:w-15 xl:h-15 flex items-center justify-center">
                        <Mail size={22} className="text-gray-800 xl:h-10 xl:w-19" />
                    </div>

                    {/* Divider */}
                    <div className="w-px h-12 bg-gray-300" />

                    {/* Text */}
                    <div className="flex flex-col">
                        <Typography
                            variant="h4"
                            weight="semibold"
                            className="text-gray-800 leading-tight"
                        >
                            Stay Updated with FISSO Innovations
                        </Typography>

                        <Typography
                            variant="body"
                            color="muted"
                            className="text-[13px] mt-1 leading-relaxed"
                        >
                            Subscribe to receive the latest news, product updates, and
                            industry insights from FISSO.
                        </Typography>
                    </div>

                </div>

                {/* RIGHT */}
                <form onSubmit={handleSubmit} className="w-full lg:w-auto">
                    <div className="flex items-center w-full lg:w-[420px] bg-white border border-[#9C0B38] rounded-md overflow-hidden">

                        {/* Input + icon */}
                        <div className="flex items-center flex-grow px-3">
                            <Mail size={20} className="text-gray-400 mr-2" />
                            <input
                                type="email"
                                required
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full py-2 text-sm text-gray-700 bg-transparent outline-none"
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="bg-[#9C0B38] text-white px-6 py-2.5 text-sm font-semibold hover:bg-[#85082e] transition"
                        >
                            Subscribe
                        </button>

                    </div>
                </form>
            </div>
        </section>);
}