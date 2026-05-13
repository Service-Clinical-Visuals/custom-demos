import Hero from "./_components/Hero";
import AboutReactHealth from "./_components/About";
import SiestaHero from "./_components/SiestaHero";
import TechnicalService from "./_components/TechnicalService";
import FeaturedProducts from "./_components/FeaturedProducts";
import ProductFeatures from "./_components/ProductFeatures";
import LatestNews from "./_components/LatestNews";

export default function ReactHealthPage() {
  return (
    <main className="relative flex flex-col w-full bg-white">
      <Hero />
      <AboutReactHealth />
      <SiestaHero />
      <TechnicalService />
      <FeaturedProducts />
      <ProductFeatures />
      <LatestNews />
    </main>
  );
}



