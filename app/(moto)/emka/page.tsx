import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Specialists from "./_components/Specialists";
import InnovativeSolutions from "./_components/InnovativeSolutions";
import DrivenByInnovation from "./_components/DrivenByInnovation";
import Products from "./_components/Products";
import PromiseSection from "./_components/Promise";
import News from "./_components/News";
import Footer from "./_components/Footer";

export const metadata = {
  title: "EMKA | The Professional's Choice",
  description: "Explore our high-performance engine oils and lubricants.",
};

export default function Page() {
  return (
    <main className="relative min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Specialists />
      <InnovativeSolutions />
      <DrivenByInnovation />
      <Products />
      <PromiseSection />
      <News />
      <Footer />
    </main>
  );
}
