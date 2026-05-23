"use client";
import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SearchBar from "./_components/SearchBar";
import Expertise from "./_components/Expertise";
import About from "./_components/About";
import FeaturedProductOne from "./_components/FeaturedProductOne";
import HelpSection from "./_components/HelpSection";
import BrandsCatalogue from "./_components/BrandsCatalogue";
import FeaturedProductTwo from "./_components/FeaturedProductTwo";
import LatestNews from "./_components/LatestNews";
import Footer from "./_components/Footer";

export default function MoovePage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Header />
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <SearchBar />
        <Expertise />
        <About />
        <FeaturedProductOne />
        <HelpSection />
        <BrandsCatalogue />
        <FeaturedProductTwo />
        <LatestNews />
      </main>
      <Footer />
    </div>
  );
}
