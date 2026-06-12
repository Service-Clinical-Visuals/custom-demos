"use client";

import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Innovation from "./_components/Innovation";
import Support from "./_components/Support";
import Integration from "./_components/Integration";
import Features from "./_components/Features";
import Mission from "./_components/Mission";
import Footer from "./_components/Footer";

export default function VeroBiotech() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Header />
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <About />
        <Innovation />
        <Support />
        <Integration />
        <Features />
        <Mission />
      </main>
      <Footer />
    </div>
  );
}
