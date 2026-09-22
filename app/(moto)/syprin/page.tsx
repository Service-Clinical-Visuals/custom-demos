import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Heritage from "./_components/Heritage";
import PrecisionLubrication from "./_components/PrecisionLubrication";
import ProductCategories from "./_components/ProductCategories";
import EngineCare from "./_components/EngineCare";
import ExpertSolutions from "./_components/ExpertSolutions";
import BicycleChainOil from "./_components/BicycleChainOil";
import LatestNews from "./_components/LatestNews";
import Footer from "./_components/Footer";

export default function SyprinPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#CACACA]">
      <Header />
      <Hero />
      <Heritage />
      <PrecisionLubrication />
      <ProductCategories />
      <EngineCare />
      <ExpertSolutions />
      <BicycleChainOil />
      <LatestNews />
      <Footer />
    </main>
  );
}

