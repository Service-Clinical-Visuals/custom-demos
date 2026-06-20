"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Products from "./_components/Products";
import Services from "./_components/Services";
import AdvancedProtection from "./_components/AdvancedProtection";
import Mission from "./_components/Mission";
import Philosophy from "./_components/Philosophy";
import Footer from "./_components/Footer";

export default function OmniHome() {
    return (
        <main className="relative min-h-screen overflow-y-hidden  overflow-x-hidden bg-white ">
            <Header />
            <div className="flex flex-col">
                <Hero />
                <About />
                <Products />
                <Services />
                <AdvancedProtection />
                <Mission />
                <Philosophy />
                <Footer />
            </div>
        </main>
    );
}
