import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhoWeAre from "./components/WhoWeAre";
import Therapies from "./components/Therapies";
import ParenteralNutrition from "./components/ParenteralNutrition";
import ProductShowcase from "./components/ProductShowcase";
import MicrelCare from "./components/MicrelCare";
import AmbulatoryInfusion from "./components/AmbulatoryInfusion";
import PartnersSection from "./components/PartnersSection";
import NewsInsights from "./components/NewsInsights";
import Footer from "./components/Footer";

export default function MicrelPage() {
  return (
    <>
      {/* Dynamic Scroll-Revealed Navbar */}
      <Navbar />

      <main className="flex-1 w-full flex flex-col">
        {/* Full-Screen Video Banner */}
        <HeroSection />

        {/* Asymmetrical Who We Are & Our Mission Section */}
        <WhoWeAre />

        {/* Rythmic Serena Green & 360 Video Section */}
        <ProductShowcase />

        {/* How Can We Help (Therapies Masonry Grid) */}
        <Therapies />

        {/* Parenteral Nutrition Solution (Dark Blue Video Section) */}
        <ParenteralNutrition />

        {/* MicrelCare Patient Monitoring (Pill Tabs Section) */}
        <MicrelCare />

        {/* Ambulatory Infusion Product Grid (Blue-bordered Box) */}
        <AmbulatoryInfusion />

        {/* Therapies & We Partner With (Wide Banner Card & Overlapping Cards) */}
        <PartnersSection />

        {/* News, Blog & Insights (Responsive Grid) */}
        <NewsInsights />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </>
  );
}
