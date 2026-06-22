"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Company from "./_components/Company";
import Hybrid from "./_components/HybridExcellence1";
import HybridLight from "./_components/HybridLight";
import Choose from "./_components/Choose";
import Products from "./_components/Products";
import Approvals from "./_components/Approvals";
import Highlights from "./_components/Highlights";
import Footer from "./_components/Footer";

export default function Page() {
  return (
    <main className="relative min-h-screen text-white">
      <Header />
      <Hero />
      <Company />
      <Hybrid />
      <Choose />
      <Products />
      <HybridLight />
      <Approvals />
      <Highlights />
      <Footer />
    </main>
  );
}
