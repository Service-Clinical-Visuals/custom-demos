"use client";

import React from "react";
import Header from "./_components/Header";
import AosInit from "./_components/AosInit";
import Banner from "./_components/Banner";
import About from "./_components/About";
import Experience from "./_components/Experience";
import Products from "./_components/Products";
import Precision from "./_components/Precision";
import Partners from "./_components/Partners";
import Footer from "./_components/Footer";
export default function PetrovollHome() {
  return (
    <main className="relative min-h-screen overflow-x-hidden overflow-y-hidden bg-white">
      <AosInit />
      <Header />
      <Banner />
      <About />
      <Experience />
      <Products />
      <Precision />
      <Partners />
      <Footer />
    </main>
  );
}
