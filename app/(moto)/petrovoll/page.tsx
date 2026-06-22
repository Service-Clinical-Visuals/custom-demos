"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import WhoWeAre from "./_components/WhoWeAre";
import GasolineEngineOil from "./_components/GasolineEngineOil";
import OurFacility from "./_components/OurFacility";
import OurProducts from "./_components/OurProducts";
import TrustedSolutions from "./_components/TrustedSolutions";
import OurNews from "./_components/OurNews";
import Footer from "./_components/Footer";

export default function PetrovollHome() {
  return (
    <main className="relative min-h-screen overflow-x-hidden overflow-y-hidden bg-white">
      <Header />
      <Banner />
      <WhoWeAre />
      <GasolineEngineOil />
      <OurFacility />
      <OurProducts />
      <TrustedSolutions />
      <OurNews />
      <Footer />
    </main>
  );
}
