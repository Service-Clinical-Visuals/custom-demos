"use client";

import Header from "./_components/Header";
import VideoHero from "./_components/VideoHero";
import Banner from "./_components/Banner";
import About from "./_components/About";
import Endoscopes from "./_components/Endoscopes";
import CoreValues from "./_components/CoreValues";
import Products from "./_components/Products";
import VisualizationFeatures from "./_components/VisualizationFeatures";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <VideoHero />
      <Header />
      <About />
      <Endoscopes />
      <CoreValues />
      <Products />
      <VisualizationFeatures />
      <News />
      <Footer />
    </main>
  );
}
