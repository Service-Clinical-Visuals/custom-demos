"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import ServiceAndSupport from "./_components/ServiceAndSupport";
import WhatToSeeCatalog from "./_components/WhatToSeeCatalog";
import ProductVideo from "./_components/ProductVideo";
import ProductCategory from "./_components/ProductCategory";
import ProductDetails from "./_components/ProductDetails";
import Reviews from "./_components/Reviews";
import FeaturesNews from "./_components/FeaturesNews";
import Footer from "./_components/Footer";

export default function AbsoluteAlignment() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Header />
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <About />
        <ServiceAndSupport />
        <WhatToSeeCatalog />
        <ProductVideo />
        <ProductCategory />
        <ProductDetails />
        <Reviews />
        <FeaturesNews />
      </main>
      <Footer />
    </div>
  );
}
