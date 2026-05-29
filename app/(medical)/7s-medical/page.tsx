"use client";

import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Education from "./_components/Education";
import ProductSection from "./_components/ProductSection";
import ProductCategory from "./_components/ProductCategory";
import HybridMeeting from "./_components/HybridMeeting";
import PrecisionDesign from "./_components/PrecisionDesign";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <Hero />
      <About />
      <Education />
      <ProductSection />
      <ProductCategory />
      <HybridMeeting />
      <PrecisionDesign />
      <Footer />
    </main>
  );
}



