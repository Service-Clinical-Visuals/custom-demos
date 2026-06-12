"use client";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SocialInitiatives from "./_components/SocialInitiatives";
import FeaturedProducts from "./_components/FeaturedProducts";
import ProcessManagement from "./_components/ProcessManagement";
import Divisions from "./_components/Divisions";
import AdvancedSolutions from "./_components/AdvancedSolutions";
import CollaborativeProjects from "./_components/CollaborativeProjects";
import OurCategory from "./_components/OurCategory";
import Footer from "./_components/Footer";

export default function BexenMedical() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Header />
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <SocialInitiatives />
        <FeaturedProducts />
        <ProcessManagement />
        <Divisions />
        <AdvancedSolutions />
        <CollaborativeProjects />
        <OurCategory />
      </main>
      <Footer />
    </div>
  );
}
