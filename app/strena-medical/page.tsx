import Banner from "@/app/strena-medical/_components/Banner";
import Features from "@/app/strena-medical/_components/Features";
import About from "@/app/strena-medical/_components/About";
import Values from "@/app/strena-medical/_components/Values";
import ProductShowcase from "@/app/strena-medical/_components/ProductShowcase";
import Companies from "@/app/strena-medical/_components/Companies";
import ProductGallery from "@/app/strena-medical/_components/ProductGallery";
import ProductFeatures from "@/app/strena-medical/_components/ProductFeatures";
import AdvancedTechnologies from "@/app/strena-medical/_components/AdvancedTechnologies";
import Diagnostics from "@/app/strena-medical/_components/Diagnostics";
import License from "@/app/strena-medical/_components/License";
import Footer from "@/app/strena-medical/_components/Footer";

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
