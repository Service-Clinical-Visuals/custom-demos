import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Products from "./_components/Products";
import Features from "./_components/Features";
import SearchFilter from "./_components/SearchFilter";
import Technology from "./_components/Technology";
import Advantage from "./_components/Advantage";
import Benefits from "./_components/Benefits";
import Course from "./_components/Course";
import Partners from "./_components/Partners";
import Footer from "./_components/Footer";

export default function ArnottPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <Hero />
            <About />
            <Products />
            <Features />
            <SearchFilter />
            <Technology />
            <Advantage />
            <Benefits />
            <Course />
            <Partners />
            <Footer />
        </main>
    );
}
