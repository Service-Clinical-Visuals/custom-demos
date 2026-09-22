"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Power from "./_components/Power";
import Everything from "./_components/Everything";
import Designed from "./_components/Designed";
import Portfolio from "./_components/Portfolio";
import Blog from "./_components/Blog";
import Footer from "./_components/Footer";

export default function VesselPAge() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Deg360 />
        <Portfolio />
        <Power />
        <Everything />
        <Designed />

        <Blog />
      </main>

      <Footer />

    </div>
  );
}
