import Banner from "./_components/Banner";
import Features from "./_components/Features";
import About from "./_components/About";
import Values from "./_components/Values";
import ProductShowcase from "./_components/ProductShowcase";
import Companies from "./_components/Companies";
import ProductGallery from "./_components/ProductGallery";
import ProductFeatures from "./_components/ProductFeatures";
import AdvancedTechnologies from "./_components/AdvancedTechnologies";
import Diagnostics from "./_components/Diagnostics";
import License from "./_components/License";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main>
      <Banner />
      <Features />
      <About />
      <Values />
      <ProductShowcase />
      <Companies />
      <ProductGallery />
      <ProductFeatures />
      <AdvancedTechnologies />
      <Diagnostics />
      <License />
      <Footer />
    </main>
  );
}
