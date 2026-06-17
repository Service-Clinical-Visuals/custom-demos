import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Partners from "./_components/Partners";
import ProductShowcase from "./_components/ProductShowcase";
import History from "./_components/History";
import ProductDetail from "./_components/ProductDetail";
import News from "./_components/News";
import Footer from "./_components/Footer";

export const metadata = {
  title: "Veedol | The Professional's Choice for Over a Century",
  description: "Endorsed by leading automotive manufacturers worldwide. Explore our high-performance engine oils and lubricants.",
};

export default function Page() {
  return (
    <main className="relative min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Partners />
      <ProductShowcase />
      <History />
      <ProductDetail />
      <News />
      <Footer />
    </main>
  );
}
