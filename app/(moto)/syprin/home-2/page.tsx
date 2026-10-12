import Hero from "./_components/Hero";
import Heritage from "./_components/Heritage";
import DieselSystemCare from "./_components/DieselSystemCare";
import ProductCategories from "./_components/ProductCategories";
import DieselProtection from "./_components/DieselProtection";
import Gallery from "./_components/Gallery";
import DieselFuelSystem from "./_components/DieselFuelSystem";
import LatestNews from "./_components/LatestNews";

export default function SyprinHome2Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Heritage />
      <DieselSystemCare />
      <ProductCategories />
      <DieselProtection />
      <Gallery />
      <DieselFuelSystem />
      <LatestNews />
    </main>
  );
}
