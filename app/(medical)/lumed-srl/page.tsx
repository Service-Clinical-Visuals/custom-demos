import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Product360 from "./_components/Product360";
import DeviceOverview from "./_components/DeviceOverview";
import ProductsGrid from "./_components/ProductsGrid";
import ScalableSolutions from "./_components/ScalableSolutions";
import NewsSection from "./_components/NewsSection";
import Footer from "./_components/Footer";

export const metadata = {
  title: "LUMED | Cardiopulmonary Diagnostics",
  description: "Innovation, quality, and safety in cardiopulmonary diagnostics. Explore our Resting ECG, Spirometry, Holter and Stress Testing solutions.",
};

export default function Page() {
  return (
    <main className="relative min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Product360 />
      <DeviceOverview />
      <ProductsGrid />
      <ScalableSolutions />
      <NewsSection />
      <Footer />
    </main>
  );
}
